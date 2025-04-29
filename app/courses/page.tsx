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
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our interactive learning programs.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div key={item} className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <h3 className="text-xl font-semibold">Course {item}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive learning program with hands-on projects.
                  </p>
                  <button className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}