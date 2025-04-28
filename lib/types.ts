// User types
export interface User {
  id: string
  name: string
  email: string
  role: "student" | "teacher"
  createdAt: Date
}

// Class types
export interface Class {
  id: string
  title: string
  description: string
  teacherId: string
  createdAt: Date
  updatedAt: Date
}

// Material types
export interface Material {
  id: string
  title: string
  description: string
  content: string
  classId: string
  createdAt: Date
  updatedAt: Date
}

// Enrollment types
export interface Enrollment {
  id: string
  studentId: string
  classId: string
  enrolledAt: Date
}
