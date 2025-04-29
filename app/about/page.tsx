export default function AboutPage() {
  return (
    <main className="flex-1 flex items-center justify-center min-h-[calc(100vh-140px)]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-3xl text-center"> 
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About EduNext
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mission is to revolutionize education through technology.
              </p>
            </div>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  Democratizing access to quality education.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Our Team</h3>
                <p className="text-sm text-muted-foreground">
                  Experts in education and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}