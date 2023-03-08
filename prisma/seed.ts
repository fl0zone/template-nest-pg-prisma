import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main () {
  await prisma.todo.deleteMany({})
  await prisma.todo.createMany({
    data: [
      { title: 'Debug Prisma CLI' },
      { title: 'Debug VSCode extension' },
    ],
    skipDuplicates: true,
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