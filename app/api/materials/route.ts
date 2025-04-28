import { NextResponse } from "next/server"
import type { Material } from "@/lib/types"

// GET all materials
export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const classId = url.searchParams.get("classId")

    // In a real app, you would fetch from your database
    // For demo purposes, we'll return mock data
    let materials: Material[] = [
      {
        id: "material_1",
        title: "Algebra Basics",
        description: "Introduction to algebraic expressions",
        content: "This is the content for Algebra Basics...",
        classId: "class_1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "material_2",
        title: "Geometry Fundamentals",
        description: "Understanding shapes and spaces",
        content: "This is the content for Geometry Fundamentals...",
        classId: "class_1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "material_3",
        title: "Quantum Theory",
        description: "Introduction to quantum mechanics",
        content: "This is the content for Quantum Theory...",
        classId: "class_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    // Filter by classId if provided
    if (classId) {
      materials = materials.filter((material) => material.classId === classId)
    }

    return NextResponse.json(materials)
  } catch (error) {
    console.error("Error fetching materials:", error)
    return NextResponse.json({ error: "Failed to fetch materials" }, { status: 500 })
  }
}

// POST create a new material
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, content, classId } = body

    // Validate input
    if (!title || !description || !classId) {
      return NextResponse.json({ error: "Title, description, and classId are required" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Verify the user is a teacher
    // 2. Verify the class exists and belongs to the teacher
    // 3. Create the material in your database

    // For demo purposes, we'll just return a success response
    const newMaterial: Material = {
      id: "material_" + Math.random().toString(36).substr(2, 9),
      title,
      description,
      content: content || "",
      classId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    return NextResponse.json(newMaterial, { status: 201 })
  } catch (error) {
    console.error("Error creating material:", error)
    return NextResponse.json({ error: "Failed to create material" }, { status: 500 })
  }
}
