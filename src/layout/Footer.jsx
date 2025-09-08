function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Call to Action Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              Start learning with 671k students around the world.
            </h2>
            <div className="flex space-x-6">
              <p>6.3k <span className="text-gray-400">Online courses</span></p>
              <p>26k <span className="text-gray-400">Certified instructors</span></p>
              <p>99.9% <span className="text-gray-400">Success Rate</span></p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition">Join the Party</button>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition">Browse All Courses</button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 border-t border-gray-700">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold mb-2">E-tutor</h3>
            <p className="text-sm text-gray-400 mb-4">An excellent learning platform for your future growth. Join us and start learning now!</p>
            <div className="flex gap-3">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-3">Top Categories</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li><a href="#">Development</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Business</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li><a href="#">About</a></li>
              <li><a href="#">Become Instructor</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* App Downloads */}
          <div>
            <h4 className="font-semibold mb-3">Download our app</h4>
            <div className="flex flex-col gap-3">
              <img src="/img/appstore.png" alt="App Store" className="w-32" />
              <img src="/img/playstore.png" alt="Google Play" className="w-32" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-6 border-t border-gray-700 text-gray-500 text-sm">
        © 2025 - E-tutor. Designed by <a className="underline" href="#">TemplatesCoder</a>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;