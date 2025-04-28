import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password, role } = body

    // Validate input
    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if role is valid
    if (role !== "student" && role !== "teacher") {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 })
    }

    // Check if teacher already exists (only one teacher allowed)
    if (role === "teacher") {
      // In a real app, you would check your database here
      // For demo purposes, we'll just simulate this check
      const teacherExists = false // Replace with actual check

      if (teacherExists) {
        return NextResponse.json({ error: "A teacher account already exists" }, { status: 400 })
      }
    }

    // In a real app, you would:
    // 1. Hash the password
    // 2. Store user in database
    // 3. Create a session or token

    // For demo purposes, we'll just return a success response
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: {
          id: "user_" + Math.random().toString(36).substr(2, 9),
          name,
          email,
          role,
          createdAt: new Date(),
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
