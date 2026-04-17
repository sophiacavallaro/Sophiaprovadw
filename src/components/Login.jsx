import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ setUser, setTela }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar() {
    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch(() => alert("Email ou senha inválidos"));
  }

  return (
    <div className="auth-box">
      <h2>Login</h2>

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

      <button onClick={logar}>Entrar</button>

      {/* 🔥 DENTRO DO FORM */}
      <p
        style={{ marginTop: "10px", cursor: "pointer", color: "#7c3aed" }}
        onClick={() => setTela("cadastro")}
      >
        Não tem conta? Cadastre-se
      </p>
    </div>
  );
}

export default Login;