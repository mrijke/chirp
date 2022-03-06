FROM node:14-alpine as frontend-builder

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

COPY src/ ./src
COPY prisma/ ./prisma
COPY utils ./utils
COPY tsconfig.json ./
COPY --from=frontend-builder /frontend/build ./frontend/build
RUN yarn generate:db

CMD yarn prisma migrate deploy && yarn start