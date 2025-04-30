// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.curso.createMany({
    data: [
      { tempo: 40, descricao: 'Curso completo de React para iniciantes' },
      { tempo: 25, descricao: 'Next.js com foco em SEO e SSR' },
      { tempo: 30, descricao: 'Curso de Node.js com Express' },
      { tempo: 20, descricao: 'Fundamentos de Banco de Dados MySQL' },
      { tempo: 50, descricao: 'Desenvolvimento Web Fullstack do Zero' },
    ],
    skipDuplicates: true,
  });
  console.log('Seed concluído!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
