import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";
import Home from "./pages/home";
import SearchStatus from "./pages/search";
import Centers from "./pages/centers";
import RegisterPage from "./pages/registration";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchStatus />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
