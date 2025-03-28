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
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = "https://embed.tawk.to/67e66e8460e82019123287a8/1ine1ve5q";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      if (s1 && s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
    };
  }, []);

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
        <Route path="/g20" element={<G20 />} />
        <Route path="/ggp" element={<GGP />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
