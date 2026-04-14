import { useState, useEffect } from "react";
import StatusBar from "./components/StatusBar";
import Footer from "./components/Footer";
import Imagem from "./components/Imagem";
import "./App.css";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");

  useEffect(() => {
    console.log("Carregou");
  }, []);

  function adicionar() {
    if (!nome || !curso) return;

    setAlunos([...alunos, { nome, curso }]);
    setNome("");
    setCurso("");
  }

  return (
    <div>
      <StatusBar mensagem="Sistema Acadêmico" />
  
      <div className="container">
        <div className="card">
  
          {/* imagem */}
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/12/43/kids-160168_1280.png"
            className="imagem"
          />
  
          {/* formulário */}
          <div className="form">
            <h2>Alunos</h2>
  
            <input
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
  
            <input
              placeholder="Curso"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
            />
  
            <button onClick={adicionar}>Adicionar</button>
  
            {alunos.map((a, i) => (
              <p key={i}>
                {a.nome} - {a.curso}
              </p>
            ))}
          </div>
  
        </div>
      </div>
  
      <Footer nome="Seu Nome" ano="2026" />
    </div>
  );
  }

  export default App;