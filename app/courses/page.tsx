import { getCombinedCourses } from "../api/data/coursesData";
import Link from 'next/link';

export default async function CoursesPage() {
  const cursos = await getCombinedCourses();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Courses</h1>
      <p className="text-center mb-10">Explore our interactive learning programs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.length > 0 ? (
          cursos.map((curso) => (
            <div key={curso.id} className="border rounded-lg p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-2">{curso.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{curso.description}</p>
              <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                Enroll Now
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p>No courses available at the moment. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}