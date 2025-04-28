"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Clock } from "lucide-react"
import { Container } from "@/components/container"

export default function StudentDashboard() {
  // Mock data for enrolled classes and available materials
  const [enrolledClasses, setEnrolledClasses] = useState([
    {
      id: 1,
      title: "Introduction to Mathematics",
      description: "Basic concepts of algebra and geometry",
      teacher: "Dr. Smith",
    },
    { id: 2, title: "Advanced Physics", description: "Quantum mechanics and relativity", teacher: "Prof. Johnson" },
  ])

  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: "Algebra Basics",
      description: "Introduction to algebraic expressions",
      classId: 1,
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "Geometry Fundamentals",
      description: "Understanding shapes and spaces",
      classId: 1,
      date: "2023-05-20",
    },
    {
      id: 3,
      title: "Quantum Theory",
      description: "Introduction to quantum mechanics",
      classId: 2,
      date: "2023-06-01",
    },
  ])

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: "material_view", title: "Viewed: Algebra Basics", date: "2023-06-10" },
    { id: 2, type: "class_joined", title: "Joined: Advanced Physics", date: "2023-06-05" },
    { id: 3, type: "material_download", title: "Downloaded: Quantum Theory", date: "2023-06-02" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 border-b bg-background">
          <div className="flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="font-bold text-lg md:text-2xl"> {/* Fonte maior */}
                EduNext
              </Link>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/profile">
                <Button variant="ghost" size="sm">
                  Profile
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  Logout
                </Button>
              </Link>
            </nav>
          </div>
        </header>
      <Container>
        <main className="flex-1 container py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Student Dashboard</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Enrolled Classes</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{enrolledClasses.length}</div>
                <p className="text-xs text-muted-foreground">Classes you are currently taking</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Materials</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{materials.length}</div>
                <p className="text-xs text-muted-foreground">Available learning resources</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recentActivity.length}</div>
                <p className="text-xs text-muted-foreground">Actions in the last 30 days</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="classes">
            <TabsList className="mb-4">
              <TabsTrigger value="classes">
                <BookOpen className="h-4 w-4 mr-2" />
                My Classes
              </TabsTrigger>
              <TabsTrigger value="materials">
                <FileText className="h-4 w-4 mr-2" />
                Study Materials
              </TabsTrigger>
              <TabsTrigger value="activity">
                <Clock className="h-4 w-4 mr-2" />
                Recent Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="classes" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enrolledClasses.map((classItem) => (
                  <Card key={classItem.id}>
                    <CardHeader>
                      <CardTitle>{classItem.title}</CardTitle>
                      <CardDescription>{classItem.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Teacher: {classItem.teacher}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        View Class
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="materials" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {materials.map((material) => (
                  <Card key={material.id}>
                    <CardHeader>
                      <CardTitle>{material.title}</CardTitle>
                      <CardDescription>{material.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Class: {enrolledClasses.find((c) => c.id === material.classId)?.title}
                      </p>
                      <p className="text-sm text-muted-foreground">Added: {material.date}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        View Material
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent actions and interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center">
                        <div className="mr-4">
                          {activity.type === "material_view" && <FileText className="h-5 w-5 text-muted-foreground" />}
                          {activity.type === "class_joined" && <BookOpen className="h-5 w-5 text-muted-foreground" />}
                          {activity.type === "material_download" && (
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </Container>
      <footer className="border-t py-4">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
              © 2024 EduNext. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/help" className="text-xs md:text-sm text-muted-foreground hover:underline">
                Help Center
              </Link>
              <Link href="/contact" className="text-xs md:text-sm text-muted-foreground hover:underline">
                Contact Support
              </Link>
            </div>
          </div>
        </Container>
      </footer>

    </div>
  )
}
