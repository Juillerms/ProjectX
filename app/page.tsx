import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/container"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">EduNext</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/courses">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/login">
            Login
          </Link>
        </nav>
      </header>
      <Container>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Learn Directly From Your Teacher
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Access course materials, attend classes, and engage with your teacher in one platform.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link href="/register">
                    <Button>
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline">Login</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white dark:bg-gray-950">
                  <div className="p-2 bg-gray-100 rounded-full dark:bg-gray-800">
                    <svg
                      className="h-6 w-6 text-gray-600 dark:text-gray-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Easy Registration</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    Simple sign-up process for students to join classes.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white dark:bg-gray-950">
                  <div className="p-2 bg-gray-100 rounded-full dark:bg-gray-800">
                    <svg
                      className="h-6 w-6 text-gray-600 dark:text-gray-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Course Materials</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    Access all your study materials in one place.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white dark:bg-gray-950">
                  <div className="p-2 bg-gray-100 rounded-full dark:bg-gray-800">
                    <svg
                      className="h-6 w-6 text-gray-600 dark:text-gray-400"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Teacher Interaction</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    Direct communication with your teacher.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Container>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 EduNext. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
