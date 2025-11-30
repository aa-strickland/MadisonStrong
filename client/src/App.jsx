// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import RequestAssistance from "./pages/RequestAssistance.jsx";
import Donate from "./pages/Donate.jsx";
import Volunteer from "./pages/Volunteer.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-assistance" element={<RequestAssistance />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
