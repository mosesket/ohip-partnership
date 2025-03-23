import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Programmes";
import G20 from "./pages/G20";
import GGP from "./pages/GGP";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register";
import { Toaster } from "sonner";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster
        position="top-center"
        expand={true}
        richColors
        offset="80px"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/partnership/g20" element={<G20 />} />
        <Route path="/partnership/ggp" element={<GGP />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
