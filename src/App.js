import Home from "./Components/pages/Home/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
