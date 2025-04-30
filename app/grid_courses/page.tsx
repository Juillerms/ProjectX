import CourseGrid from "@/components/CourseGrid"
import { getCombinedCourses } from "../api/data/coursesData";

export default async function GridCoursesPage() {
  const allCourses = await getCombinedCourses();
  const featuredCourses = allCourses.slice(0, 6);

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-4xl"> 
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter">
                Featured Courses
              </h1>
              <p className="text-gray-500 md:text-lg dark:text-gray-400">
                Our most popular learning programs.
              </p>
            </div>

            <CourseGrid courses={featuredCourses} />
            
            <div className="mt-8 text-center">
              <a 
                href="/courses" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
              >
                View All Courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}