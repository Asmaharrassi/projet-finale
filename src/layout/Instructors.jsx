function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "UI/UX Designer",
      image: "/img/instructor1.jpg",
    },
    {
      id: 2,
      name: "Omar Khaled",
      role: "React Developer",
      image: "/img/instructor2.jpg",
    },
    {
      id: 3,
      name: "Yasmine Ben Ali",
      role: "Backend Engineer",
      image: "/img/instructor3.jpg",
    },
    {
      id: 4,
      name: "Ali Mansour",
      role: "Data Scientist",
      image: "/img/instructor4.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Top Instructors of the Month
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {instructors.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-2xl shadow text-center p-6 hover:shadow-md transition"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{inst.name}</h3>
              <p className="text-sm text-gray-500">{inst.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructors;