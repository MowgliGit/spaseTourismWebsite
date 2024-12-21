import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import "./App.css";
import "./queries.css";

function App() {
  return (
    <Router basename="/spaseTourismWebsite">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
