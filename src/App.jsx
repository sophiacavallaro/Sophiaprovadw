import { useState, useEffect } from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [tela, setTela] = useState("login");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });

    return () => unsubscribe();
  }, []);

  // 🔒 NÃO LOGADO
  if (!user) {
    return (
      <div className="auth-container">
        {tela === "login" ? (
          <Login setUser={setUser} setTela={setTela} />
        ) : (
          <Cadastro setTela={setTela} />
        )}
      </div>
    );
  }

  // ✅ LOGADO
  return <Home />;
}

export default App;