import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Defina a interface para os cursos que corresponde ao que retornamos em getCursos
interface CourseProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  duration: number;
  createdAt: Date;
}

interface CourseGridProps {
  courses: CourseProps[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {courses.map((course) => (
        <div key={course.id} className="border rounded-lg overflow-hidden flex flex-col">
          {course.imageUrl && (
            <div className="relative w-full h-48">
              <Image 
                src={course.imageUrl} 
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-bold text-lg mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-2 flex-grow">{course.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-500">{course.duration} horas</span>
              <Link 
                href={`/courses/${course.id}`}
                className="text-primary hover:underline"
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}