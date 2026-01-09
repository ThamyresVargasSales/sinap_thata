import React from "react";
import { Link } from "react-router-dom";
import "./JogosCSS.css";

export default function JogosVideos() {

  const jogos = [
    {
      nome: "Quiz de Conceitos",
      nivel: "Iniciante",
      tempo: "10 min",
      lista: ["Vídeos em Libras", "Feedback imediato", "Áudio descrição"],
      link: "/quiz-libras",
    },
    {
      nome: "Arrasta e Solta",
      nivel: "Iniciante",
      tempo: "8 min",
      lista: ["Interação visual", "Feedback ao final", "Fácil e divertido"],
      link: "/arrasta-solta",
    },
    {
      nome: "Descubra pelo Vídeo",
      nivel: "Intermediário",
      tempo: "12 min",
      lista: ["Vídeos dos alunos", "Dicas visuais", "Aprendizado colaborativo"],
      link: "/descubra-video",
    },
  ];

  return (
    <div className="jogos-wrapper">

      {/* Título principal */}
      <section className="titulo-principal">
        <h1>Aprendendo de Forma Divertida</h1>
        <p className="descricao-principal">
          Aprenda informática de forma divertida! Nossos jogos foram
          desenvolvidos para reforçar o aprendizado dos conceitos técnicos
          de maneira lúdica e interativa, todos com suporte completo em Libras.
        </p>
        <p className="subinfo">
          🎮 Jogos educativos com vídeos em Libras produzidos pelos alunos
        </p>
      </section>

      {/* Indicadores */}
      <section className="indicadores">
        <div className="indicador-box">
          <h2>3</h2>
          <p>Jogos Disponíveis</p>
        </div>
        <div className="indicador-box">
          <h2>100%</h2>
          <p>Em Libras</p>
        </div>
        <div className="indicador-box">
          <h2>🖐️</h2>
          <p>Totalmente Acessível</p>
        </div>
        <div className="indicador-box">
          <h2>∞</h2>
          <p>Tentativas Ilimitadas</p>
        </div>
      </section>

      {/* Cards dos jogos */}
      <section className="cards-jogos">
        {jogos.map((jogo, index) => (
          <div className="card-jogo" key={index}>
            <h3>{jogo.nome}</h3>
            <p className={`nivel ${jogo.nivel.toLowerCase()}`}>
              {jogo.nivel} • ⏱️ {jogo.tempo}
            </p>
            <ul className="lista">
              {jogo.lista.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Link correto por jogo */}
            <Link to={jogo.link} className="btn-jogar">
              Jogar Agora
            </Link>
          </div>
        ))}
      </section>

      {/* Como funcionam os jogos */}
      <section className="como-funciona">
        <h2>Como Funcionam os Jogos</h2>
        <div className="funcionamento-container">
          {[
            { num: 1, texto: "Instruções em Libras: todos os jogos incluem vídeos explicativos em Libras para garantir que você entenda completamente as regras e objetivos." },
            { num: 2, texto: "Feedback Visual e Sonoro: receba feedback imediato com sinais visuais, mensagens de apoio e efeitos sonoros." },
            { num: 3, texto: "Vídeos dos Alunos: vídeos em Libras produzidos pelos próprios alunos do SINAP, estimulando colaboração." },
            { num: 4, texto: "Tentativas Ilimitadas: jogue quantas vezes quiser e aprenda no seu próprio ritmo." },
            { num: 5, texto: "Audiodescrição: acessibilidade garantida para usuários com deficiência visual." },
            { num: 6, texto: "Pontuação e Progresso: acompanhe seu desempenho ao longo dos jogos." },
          ].map((item) => (
            <div className="funciona-item" key={item.num}>
              <span className="num">{item.num}</span>
              <p className="texto-item"><strong>{item.texto}</strong></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
