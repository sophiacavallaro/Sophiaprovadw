import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Cadastro({ setTela }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar() {
    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha.length < 6) {
      alert("Senha mínima de 6 caracteres");
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        alert("Usuário cadastrado!");
        setTela("login");
      })
      .catch(() => alert("Erro ao cadastrar"));
  }

  return (
    <div className="auth-box">
      <h2>Cadastro</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={cadastrar}>Cadastrar</button>

      {/* 🔥 DENTRO DO FORM */}
      <p
        style={{ marginTop: "10px", cursor: "pointer", color: "#7c3aed" }}
        onClick={() => setTela("login")}
      >
        Já tem conta? Fazer login
      </p>
    </div>
  );
}

export default Cadastro;