import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./components/Contact";
import { Home } from "./components/Home";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import AboutPage from "./pages/AboutPage";
import ScrollToHash from "./utils/ScrollToNavigation";
import Features from "./components/Features";

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-white text-black antialiased">
        <Header />
        <main>
          <Routes>
            {/* Landing Page Route */}
            <Route path="/" element={<Home />} />

            {/* Courses Routes */}
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailsPage />} />

            {/* Features Route */}
            <Route path="/features" element={<Features />} />

            {/* About Page Route */}
            <Route path="/about" element={<AboutPage />} />

            {/* Contact Page Route */}
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
