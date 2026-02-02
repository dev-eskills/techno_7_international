import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./components/Contact";
import { Home } from "./components/Home";
import ScrollToHash from "./utils/ScrollToNavigation";

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

            {/* Contact Page Route */}
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
