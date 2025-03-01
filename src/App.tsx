import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Programmes";
import G20 from "./pages/G20";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/partnership/g20" element={<G20 />} />
        {/*  <Route path="/become-a-partner" element={<BecomePartner />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
