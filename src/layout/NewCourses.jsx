function NewCourses() {
  const courses = [
    {
      id: 1,
      title: "Node.js Crash Course",
      description: "Learn backend development with Node.js and Express.",
      image: "/img/node-course.jpg",
      instructor: "Rami Haddad",
      price: "$45",
    },
    {
      id: 2,
      title: "UI Design Fundamentals",
      description: "Master the basics of UI/UX design with Figma.",
      image: "/img/ui-course.jpg",
      instructor: "Leila Bouchama",
      price: "$39",
    },
    {
      id: 3,
      title: "Python for Data Analysis",
      description: "Analyze data efficiently using Python libraries.",
      image: "/img/python-course.jpg",
      instructor: "Ahmed Farouk",
      price: "$55",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Recently Added Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default NewCourses;