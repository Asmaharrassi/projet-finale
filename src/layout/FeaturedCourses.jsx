function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React in this beginner-friendly course.",
      image: "/img/react-course.jpg",
      instructor: "Jane Doe",
      price: "$49",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into JS concepts and best practices.",
      image: "/img/js-course.jpg",
      instructor: "John Smith",
      price: "$59",
    },
    // تنجم تزيد كورسات آخرين حسب الحاجة
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-50 rounded-xl shadow hover:shadow-md transition overflow-hidden"
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{course.instructor}</span>
                  <span className="font-bold text-orange-500">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;