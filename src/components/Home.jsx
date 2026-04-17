
import { useState, useEffect } from "react";
import StatusBar from "./StatusBar";
import Footer from "./Footer";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import "../App.css";

function Home() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");

  // 🔥 BUSCAR DO FIRESTORE
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "alunos"), (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAlunos(lista);
    });

    return () => unsubscribe();
  }, []);

  // 🔥 SALVAR NO FIRESTORE
  async function adicionar() {
    if (!nome || !curso) {
      alert("Preencha todos os campos!");
      return;
    }

    await addDoc(collection(db, "alunos"), {
      nome: nome,
      curso: curso,
    });

    setNome("");
    setCurso("");
  }

  function sair() {
    signOut(auth);
  }

  return (
    <div>
      <StatusBar mensagem="Sistema Acadêmico" />

      <div className="container">
        <div className="card">

          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/12/43/kids-160168_1280.png"
            className="imagem"
          />

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

            {/* 🔥 LISTA DO FIRESTORE */}
            {alunos.map((a) => (
              <p key={a.id}>
                {a.nome} - {a.curso}
              </p>
            ))}

            <button onClick={sair}>Logout</button>
          </div>

        </div>
      </div>

      <Footer nome="Seu Nome" ano="2026" />
    </div>
  );
}

export default Home;