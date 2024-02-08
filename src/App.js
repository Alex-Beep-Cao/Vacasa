import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Repositories from "./pages/Repositories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
