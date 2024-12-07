import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

function AdminPanel() {
  const { user, isAdmin } = useAuth();

  if (!user || !isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <main className="admin-panel">
      <h1>Panel de Administrador</h1>
      <p>Bienvenido, {user.displayName}</p>
      <div className="admin-content">
        <h2>Configurar sitio</h2>
        <ul>
          <li>Gestionar usuarios</li>
          <li>Ver estadísticas</li>
          <li>Más opciones</li>
        </ul>
      </div>
    </main>
  );
}

export default AdminPanel;
