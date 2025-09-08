function JoinUs() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Side */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">
            Start teaching today
          </h2>
          <p className="text-gray-600 mb-6">
            Share your knowledge with millions of students around the world and earn income on your schedule.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">
            Become an Instructor
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/img/join-us.png"
            alt="Join Us"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default JoinUs;