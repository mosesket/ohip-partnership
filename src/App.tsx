import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Programmes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        {/*  <Route path="/partnership" element={<Partnership />} />
        <Route path="/become-a-partner" element={<BecomePartner />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
