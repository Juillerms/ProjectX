// app/courses/page.tsx
import CourseGrid from '@/components/CourseGrid';
import { coursesData } from '../api/data/coursesData';

export default function CoursesPage() {
  return (
    <main className="flex-1 flex items-center justify-center min-h-[calc(100vh-140px)]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-4xl text-center"> 
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Available Courses
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our interactive learning programs.
              </p>
            </div>

            {/* Componente de grid de cursos importado */}
            <CourseGrid courses={coursesData} />
          </div>
        </div>
      </section>
    </main>
  )
}