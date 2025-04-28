import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Verify credentials against database
    // 2. Create a session or token

    // For demo purposes, we'll simulate a successful login
    // and determine the role based on the email
    const isTeacher = email.includes("teacher")

    return NextResponse.json({
      success: true,
      user: {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name: isTeacher ? "Teacher User" : "Student User",
        email,
        role: isTeacher ? "teacher" : "student",
      },
      token: "demo_token_" + Math.random().toString(36).substr(2, 9),
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
