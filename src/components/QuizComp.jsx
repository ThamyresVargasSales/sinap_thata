import React, { useState } from "react";
import "../pages/QuizCSS.css";

export default function QuizComp() {
  // Lista de perguntas
  const perguntas = [
    {
      id: 1,
      video: "/videos/mouse.mp4",
      pergunta: "Qual conceito este sinal representa?",
      alternativas: ["Teclado", "Monitor", "Mouse", "Impressora"],
      correta: "Mouse",
    },
    {
      id: 2,
      video: "/videos/teclado.mp4",
      pergunta: "Qual conceito este sinal representa?",
      alternativas: ["Teclado", "Monitor", "Mouse", "Impressora"],
      correta: "Teclado",
    },
    // Adicione mais perguntas aqui
  ];

  const [atual, setAtual] = useState(0);
  const [resposta, setResposta] = useState("");
  const [feedback, setFeedback] = useState("");
  const [respondido, setRespondido] = useState(false);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const perguntaAtual = perguntas[atual];

  function escolherOpcao(opcao) {
    if (respondido) return;

    setResposta(opcao);
    setRespondido(true);

    if (opcao === perguntaAtual.correta) {
      setFeedback("🎉 Você acertou!");
    } else {
      setFeedback("❌ Você errou! Tente novamente.");
    }
  }

  function proximaPergunta() {
    if (atual < perguntas.length - 1) {
      setAtual(atual + 1);
      setResposta("");
      setFeedback("");
      setRespondido(false);
    } else {
      // Fim do quiz
      setQuizFinalizado(true);
    }
  }

  if (quizFinalizado) {
    return (
      <div className="quiz-wrapper">
        <h2>🎉 Parabéns! Você completou o quiz!</h2>
      </div>
    );
  }

  return (
    <div className="quiz-wrapper">
      <h2>Pergunta {atual + 1} de {perguntas.length}</h2>

      <h3>{perguntaAtual.pergunta}</h3>

      {/* Vídeo em Libras */}
      <video
        src={perguntaAtual.video}
        controls
        className="video-libras"
      ></video>

      {/* Alternativas */}
      <div className="opcoes">
        {perguntaAtual.alternativas.map((opcao) => (
          <button
            key={opcao}
            className="btn-opcao"
            onClick={() => escolherOpcao(opcao)}
            disabled={respondido} // bloqueia ao responder
          >
            {opcao}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {feedback && (
        <p className={`feedback ${resposta === perguntaAtual.correta ? 'correct' : 'incorrect'}`}>
          {feedback}
        </p>
      )}

      {/* Botão próxima pergunta */}
      {respondido && !quizFinalizado && (
        <button className="btn-proxima" onClick={proximaPergunta}>
          {atual < perguntas.length - 1 ? "Próxima pergunta" : "Finalizar quiz"}
        </button>
      )}
    </div>
  );
}
