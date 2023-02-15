// import "./App.css";

import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/link" element={<MemeAudio />} />  */}
      </Routes>
    </div>
  );
}

export default App;
