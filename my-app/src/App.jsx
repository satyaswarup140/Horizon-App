import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVshows";
import Sports from "./pages/Sports";
import Live from "./pages/Live";

const App = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "English";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  return (
    <Router>
      <div>
        <Navbar onLanguageChange={setLanguage} language={language} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/movies" element={<Movies language={language} />} />
          <Route path="/tv-shows" element={<TVShows language={language} />} />
          <Route path="/sports" element={<Sports language={language} />} />
          <Route path="/live" element={<Live language={language} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
