// src/components/AlunoList.jsx
import { useState, useEffect } from "react";

function AlunoList() {
  const [alunos, setAlunos] = useState([
    { nome: "João", curso: "ADS" },
    { nome: "Maria", curso: "Engenharia" }
  ]);

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");

  useEffect(() => {
    console.log("Aplicação carregada!");
  }, []);

  function adicionarAluno() {
    if (nome && curso) {
      setAlunos([...alunos, { nome, curso }]);
      setNome("");
      setCurso("");
    }
  }

  return (
    <div>
      <h3>Lista de Alunos</h3>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="text"
        placeholder="Curso"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
      />

      <button onClick={adicionarAluno}>Adicionar</button>

      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>
            {aluno.nome} - {aluno.curso}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlunoList;