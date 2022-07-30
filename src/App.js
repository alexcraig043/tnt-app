import "./App.css";
import "./style/global.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Donate from "./pages/donate/Donate";
import Research from "./pages/research/Resarch";
import Team from "./pages/team/Team";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/research" element={<Research />} />
            <Route path="/team" element={<Team />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
