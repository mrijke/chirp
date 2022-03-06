FROM node:14-alpine as frontend-build

WORKDIR /frontend

COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install

COPY frontend/ ./
RUN yarn build

FROM node:14-alpine as prod

WORKDIR /app
ENV NODE_ENV production

COPY package.json yarn.lock ./
RUN yarn install --production && yarn cache clean

COPY tsconfig.json ./
COPY prisma/ ./prisma
COPY __generated__ ./__generated__
COPY utils ./utils
RUN yarn generate:db:prod

COPY src/ ./src
COPY --from=frontend-build /frontend/build ./frontend/build

CMD yarn prisma migrate deploy && $(yarn bin)/ts-node src/index.ts