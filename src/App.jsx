import { Routes, Route } from "react-router-dom";

// Components & Page
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="bg-white dark:bg-dark">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
