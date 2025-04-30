import { PrismaClient } from '@prisma/client';

// Singleton pattern para o PrismaClient
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export interface CourseData {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  duration: number;
  createdAt: Date;
}

// Função para buscar cursos do banco de dados e convertê-los para o formato esperado
export async function getCombinedCourses(): Promise<CourseData[]> {
  try {
    const dbCursos = await prisma.curso.findMany();
    
    return dbCursos.map(curso => ({
      id: curso.id,
      title: `Curso de ${curso.tempo} horas`,
      description: curso.descricao,
      imageUrl: "/images/placeholder.jpg", // Imagem padrão
      duration: curso.tempo,
      createdAt: curso.createdAt
    }));
  } catch (error) {
    console.error("Error fetching courses from database:", error);
    return [];
  }
}