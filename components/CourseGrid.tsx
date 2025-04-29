// app/components/CourseGrid.tsx
import React from 'react';

// Definindo a interface para um curso
export interface Course {
  id: number;
  title: string;
  description: string;
}

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div 
          key={course.id} 
          className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
        >
          <h3 className="text-xl font-semibold">{course.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {course.description}
          </p>
          <button className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Enroll Now
          </button>
        </div>
      ))}
    </div>
  );
}