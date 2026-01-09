import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Conceitos from "./pages/Conceitos";
import Contato from "./pages/Contato";
import Jogos from "./pages/Jogos";
import QuizLibras from "./pages/Quiz"; // 👉 IMPORTANTE
import Arrasta from "./pages/Arrasta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conceitos" element={<Conceitos />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/quiz-libras" element={<QuizLibras />} />
        <Route path="/arrasta-solta" element={<Arrasta />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
