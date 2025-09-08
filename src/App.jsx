import TopNavbar from "./layout/TopNavbar";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import TopCategories from "./layout/TopCategories";
import BestCourses from "./layout/BestCourses";
import FeaturedCourses from "./layout/FeaturedCourses";
import NewCourses from "./layout/NewCourses";
import JoinUs from "./layout/JoinUs";
import Instructors from "./layout/Instructors";
import Footer from "./layout/Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <TopNavbar />
    </BrowserRouter>

      <Navbar />
      <Header />
      <TopCategories />
      <BestCourses />
      <FeaturedCourses />
      <NewCourses />
      <JoinUs />
      <Instructors />
      <Footer />
    </div>
  );
}

export default App;