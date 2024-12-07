import React from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Login from "./Login";

function Profile() {
  const { user, isAdmin } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <main className="profile-container">
      <h1>Perfil de Usuario</h1>
      <img src={user.photoURL} alt="Foto de perfil" className="profile-photo" />
      <p className="profile-name">{user.displayName}</p>
      <p className="profile-email">{user.email}</p>
      {isAdmin && (
        <Link to="/admin" className="admin-link">
          Ir al Panel de Administrador
        </Link>
      )}
      <div className="login-container">
        <Login />
      </div>
    </main>
  );
}

export default Profile;
