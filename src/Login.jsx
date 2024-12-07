import React from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useAuth } from "./AuthContext";

function Login() {
  const { user } = useAuth();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Usuario autenticado:", result.user);
      })
      .catch((error) => {
        console.error("Error de autenticación:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <main className="login-container">
      {user ? (
        <>
          <h1>Sesión iniciada</h1>
          <button onClick={handleSignOut} className="signout-btn">
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <h1>Iniciar sesión</h1>
          <button onClick={signInWithGoogle} className="google-btn">
            Iniciar sesión con Google
          </button>
        </>
      )}
    </main>
  );
}

export default Login;
