// app/data/coursesData.ts
import { prisma } from "@/lib/prisma";
import { Course } from "@/components/CourseGrid";

// Dados estáticos
export const staticCourses: Course[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn HTML, CSS, and JavaScript fundamentals for modern web development.",
  },
  {
    id: 2,
    title: "React Fundamentals",
    description: "Master React.js concepts and build interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development with Node.js",
    description: "Create robust server applications using Node.js and Express.",
  },
  {
    id: 4,
    title: "Database Design & SQL",
    description: "Design efficient databases and write complex SQL queries.",
  },
  {
    id: 5,
    title: "Full-Stack Development",
    description: "Combine frontend and backend skills to build complete applications.",
  }
];

// Busca do banco
export async function getCoursesFromDatabase() {
  return await prisma.curso.findMany({ orderBy: { id: "asc" } });
}

// Combinação
export async function getCombinedCourses() {
  const databaseCourses = await getCoursesFromDatabase();
  return [...staticCourses, ...databaseCourses];
}
