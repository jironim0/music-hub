import { Prisma } from "@prisma/client";
import { prisma } from "./db";
import { author, categories, genre, media } from "./constants";

interface CustomMediaCreateManyInput extends Prisma.MediaCreateManyInput {
  genre: Prisma.MediaCreateOrConnectWithoutGenreInput;
  author: Prisma.MediaCreateOrConnectWithoutAuthorInput;
}

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Jir0nimo",
        email: "jir0nimo@me.com",
        password: "123456",
      },
      {
        fullName: "Nikolay",
        email: "nikolay@me.com",
        password: "234567",
      },
    ],
  });
  await prisma.favorite.createMany({
    data: [
      {
        userId: 1,
      },
      {
        userId: 2,
      },
    ],
  });
  await prisma.category.createMany({
    data: categories,
  });

  await prisma.genre.createMany({
    data: genre,
  });
  await prisma.author.createMany({
    data: author,
  });

  await prisma.media.createMany({
    data: [...media],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Favorite" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Genre" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Author" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Media" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
