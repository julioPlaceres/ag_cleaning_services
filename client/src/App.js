import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navbar/Navbar";
import TopNagivation from "./components/Top-Navbar/TopNavBar";
import ContactFooter from "./components/Contact-Section/Contact-Section";

function App() {
  return (
    <Router>
      <section>
        <header>
          <TopNagivation />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
        <footer>
          <ContactFooter />
        </footer>
      </section>
    </Router>
  );
}

export default App;
