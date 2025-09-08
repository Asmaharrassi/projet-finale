function TopCategories() {
  const categories = [
    { id: 1, name: "Web Development", image: "/img/web-dev.png" },
    { id: 2, name: "Design", image: "/img/design.png" },
    { id: 3, name: "Marketing", image: "/img/marketing.png" },
    { id: 4, name: "Data Science", image: "/img/data-science.png" },
    { id: 5, name: "Business", image: "/img/business.png" },
    { id: 6, name: "Photography", image: "/img/photo.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 mb-3 object-contain"
              />
              <span className="font-semibold text-center text-sm">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCategories;
