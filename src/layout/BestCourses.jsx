import { useEffect, useState } from "react";

function BestCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // API (mock data)
    const fakeData = [
      {
        title: "React for Beginners",
        price: "$29.99",
        image: "https://img.freepik.com/free-photo/hands-typing-laptop_23-2147731656.jpg"
      },
      {
        title: "UI/UX Design Masterclass",
        price: "$39.99",
        image: "https://img.freepik.com/free-photo/ui-ux-design_1098-18155.jpg"
      },
      {
        title: "Fullstack Web Development",
        price: "$49.99",
        image: "https://img.freepik.com/free-photo/programming-concept_23-2148726710.jpg"
      }
    ];

    // API call
    setTimeout(() => {
      setCourses(fakeData);
    }, 1000);
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Best-Selling Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-orange-500 font-bold">{course.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestCourses;