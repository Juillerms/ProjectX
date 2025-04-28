import { NextResponse } from "next/server"
import type { Class } from "@/lib/types"

// GET all classes
export async function GET() {
  try {
    // In a real app, you would fetch from your database
    // For demo purposes, we'll return mock data
    const classes: Class[] = [
      {
        id: "class_1",
        title: "Introduction to Mathematics",
        description: "Basic concepts of algebra and geometry",
        teacherId: "teacher_1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "class_2",
        title: "Advanced Physics",
        description: "Quantum mechanics and relativity",
        teacherId: "teacher_1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    return NextResponse.json(classes)
  } catch (error) {
    console.error("Error fetching classes:", error)
    return NextResponse.json({ error: "Failed to fetch classes" }, { status: 500 })
  }
}

// POST create a new class
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description } = body

    // Validate input
    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Verify the user is a teacher
    // 2. Create the class in your database

    // For demo purposes, we'll just return a success response
    const newClass: Class = {
      id: "class_" + Math.random().toString(36).substr(2, 9),
      title,
      description,
      teacherId: "teacher_1", // In a real app, this would be the authenticated teacher's ID
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    return NextResponse.json(newClass, { status: 201 })
  } catch (error) {
    console.error("Error creating class:", error)
    return NextResponse.json({ error: "Failed to create class" }, { status: 500 })
  }
}
