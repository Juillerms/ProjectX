"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { PlusCircle, FileText, Users, BookOpen } from "lucide-react"

export default function TeacherDashboard() {
  const [newClass, setNewClass] = useState({
    title: "",
    description: "",
  })

  const [newMaterial, setNewMaterial] = useState({
    title: "",
    description: "",
    content: "",
  })

  // Mock data for classes and materials
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: "Introduction to Mathematics",
      description: "Basic concepts of algebra and geometry",
      students: 12,
    },
    { id: 2, title: "Advanced Physics", description: "Quantum mechanics and relativity", students: 8 },
  ])

  const [materials, setMaterials] = useState([
    { id: 1, title: "Algebra Basics", description: "Introduction to algebraic expressions", classId: 1 },
    { id: 2, title: "Geometry Fundamentals", description: "Understanding shapes and spaces", classId: 1 },
    { id: 3, title: "Quantum Theory", description: "Introduction to quantum mechanics", classId: 2 },
  ])

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewClass((prev) => ({ ...prev, [name]: value }))
  }

  const handleMaterialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewMaterial((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddClass = (e: React.FormEvent) => {
    e.preventDefault()

    const newClassItem = {
      id: classes.length + 1,
      title: newClass.title,
      description: newClass.description,
      students: 0,
    }

    setClasses([...classes, newClassItem])
    setNewClass({ title: "", description: "" })

    toast({
      title: "Class created!",
      description: "Your new class has been created successfully.",
    })
  }

  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault()

    const newMaterialItem = {
      id: materials.length + 1,
      title: newMaterial.title,
      description: newMaterial.description,
      classId: 1, // Default to first class for demo
    }

    setMaterials([...materials, newMaterialItem])
    setNewMaterial({ title: "", description: "", content: "" })

    toast({
      title: "Material added!",
      description: "Your new study material has been added successfully.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold">
              EduNext
            </Link>
            <span className="text-sm text-muted-foreground">Teacher Dashboard</span>
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
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        </div>

        <Tabs defaultValue="classes">
          <TabsList className="mb-4">
            <TabsTrigger value="classes">
              <BookOpen className="h-4 w-4 mr-2" />
              Classes
            </TabsTrigger>
            <TabsTrigger value="materials">
              <FileText className="h-4 w-4 mr-2" />
              Study Materials
            </TabsTrigger>
            <TabsTrigger value="students">
              <Users className="h-4 w-4 mr-2" />
              Students
            </TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {classes.map((classItem) => (
                <Card key={classItem.id}>
                  <CardHeader>
                    <CardTitle>{classItem.title}</CardTitle>
                    <CardDescription>{classItem.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{classItem.students} students enrolled</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              <Card>
                <CardHeader>
                  <CardTitle>Create New Class</CardTitle>
                  <CardDescription>Add a new class for your students</CardDescription>
                </CardHeader>
                <form onSubmit={handleAddClass}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Class Title</Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="e.g., Introduction to Biology"
                        required
                        value={newClass.title}
                        onChange={handleClassChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Brief description of the class"
                        required
                        value={newClass.description}
                        onChange={handleClassChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Create Class
                    </Button>
                  </CardFooter>
                </form>
              </Card>
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
                      Class: {classes.find((c) => c.id === material.classId)?.title}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View Material
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              <Card>
                <CardHeader>
                  <CardTitle>Add Study Material</CardTitle>
                  <CardDescription>Upload new study material for your classes</CardDescription>
                </CardHeader>
                <form onSubmit={handleAddMaterial}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="material-title">Title</Label>
                      <Input
                        id="material-title"
                        name="title"
                        placeholder="e.g., Chapter 1 Notes"
                        required
                        value={newMaterial.title}
                        onChange={handleMaterialChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="material-description">Description</Label>
                      <Input
                        id="material-description"
                        name="description"
                        placeholder="Brief description"
                        required
                        value={newMaterial.description}
                        onChange={handleMaterialChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        name="content"
                        placeholder="Material content or paste a link to your document"
                        className="min-h-[100px]"
                        value={newMaterial.content}
                        onChange={handleMaterialChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Material
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>View and manage students enrolled in your classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Classes</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 align-middle">Alice Johnson</td>
                        <td className="p-4 align-middle">alice@example.com</td>
                        <td className="p-4 align-middle">2</td>
                        <td className="p-4 align-middle">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 align-middle">Bob Smith</td>
                        <td className="p-4 align-middle">bob@example.com</td>
                        <td className="p-4 align-middle">1</td>
                        <td className="p-4 align-middle">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="transition-colors hover:bg-muted/50">
                        <td className="p-4 align-middle">Carol Davis</td>
                        <td className="p-4 align-middle">carol@example.com</td>
                        <td className="p-4 align-middle">2</td>
                        <td className="p-4 align-middle">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
