import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@chirp.io" },
    update: {},
    create: {
      email: "admin@chirp.io",
      name: "Admin",
      chirps: {
        create: {
          title: "First Chirp",
          content: "The big bird says chirp!",
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
