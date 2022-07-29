import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import Navigation from './components/Navbar/Navbar';
import ContactFooter from './components/Contact-Section/Contact-Section';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <section>
        <header>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
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
