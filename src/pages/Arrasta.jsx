import React, { useState } from "react"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ArrastaCSS.css";

export default function Arrasta() {
  const sinais = [
    { id: 1, nome: "Mouse", video: "/videos/mouse.mp4" },
    { id: 2, nome: "Teclado", video: "/videos/teclado.mp4" },
    { id: 3, nome: "Monitor", video: "/videos/monitor.mp4" },
    { id: 4, nome: "Impressora", video: "/videos/impressora.mp4" },
  ];

  const [dragMap, setDragMap] = useState({}); // qual vídeo foi arrastado para qual drop
  const [verificado, setVerificado] = useState(false); // se o usuário clicou em verificar
  const [acertos, setAcertos] = useState([]);

  function permitirSoltar(e) {
    e.preventDefault();
  }

  function arrastar(e, nome) {
    e.dataTransfer.setData("nome", nome);
  }

  function soltar(e, dropNome) {
    const nome = e.dataTransfer.getData("nome");
    setDragMap((prev) => ({ ...prev, [dropNome]: nome }));
  }

  function verificar() {
    const acertosLista = [];
    for (const dropNome in dragMap) {
      if (dragMap[dropNome] === dropNome) {
        acertosLista.push(dropNome);
      }
    }
    setAcertos(acertosLista);
    setVerificado(true);
  }

  function proximoNivel() {
    setDragMap({});
    setAcertos([]);
    setVerificado(false);
  }

  return (
    <>
      <Header />
      <div className="jogos-wrapper">
        <h1>Arrasta e Solta em Libras</h1>
        <p>Arraste os vídeos para os nomes correspondentes</p>

        <div className="arrasta-container">
          {/* VÍDEOS */}
          <div className="sign-area">
            {sinais.map((item) => (
              <div
                key={item.id}
                className="sign-tile"
                draggable
                onDragStart={(e) => arrastar(e, item.nome)}
              >
                <span className="badge">Vídeo</span>
                <video src={item.video} controls />
              </div>
            ))}
          </div>

          {/* NOMES / DROPS */}
          <div className="drop-area">
            {sinais.map((item) => {
              const isMatched = verificado && dragMap[item.nome] === item.nome;
              const isWrong = verificado && dragMap[item.nome] && dragMap[item.nome] !== item.nome;
              const videoSelecionado = dragMap[item.nome]; // vídeo arrastado para esse drop

              return (
                <div
                  key={item.nome}
                  className={`drop-zone ${isMatched ? "matched" : ""} ${isWrong ? "wrong" : ""}`}
                  onDragOver={permitirSoltar}
                  onDrop={(e) => soltar(e, item.nome)}
                >
                  <div className="drop-content">
                    <span>{item.nome}</span>
                    {videoSelecionado && (
                      <video
                        src={sinais.find((s) => s.nome === videoSelecionado)?.video}
                        className="mini-video"
                        muted
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTÕES */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {!verificado && (
            <button
              onClick={verificar}
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#2563EB",
                color: "#fff",
                marginRight: "10px",
              }}
            >
              Verificar
            </button>
          )}

          {verificado && (
            <button
              onClick={proximoNivel}
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#16a34a",
                color: "#fff",
              }}
            >
              Próximo Nível
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
