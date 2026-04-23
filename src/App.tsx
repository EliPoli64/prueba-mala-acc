import React, { useState } from "react";
import { FaBars, FaSearch, FaSave, FaFilter, FaEdit, FaUserCircle, FaChartLine, FaFileAlt, FaHome } from "react-icons/fa";

export default function Dashboard() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html>
      <head>
        <title>STE - Panel</title>
        <style>
          {`
            body { margin: 0; font-family: sans-serif; }
            .header { background: #1e2a3e; padding: 1rem; display: flex; justify-content: space-between; align-items: center; }
            .btn-icon { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: white; }
            .hidden-menu { display: none; background: #2d3e50; padding: 1rem; }
            .hidden-menu.open { display: block; }
            .card { border: 1px solid #ddd; margin: 1rem; padding: 1rem; border-radius: 8px; }
            button { cursor: pointer; }
            .low-contrast { color: #999999; background-color: #ffffff; padding: 0.5rem; margin: 0.5rem 0; }
            .grid { display: flex; gap: 1rem; flex-wrap: wrap; }
            .fake-link { color: #1e2a3e; text-decoration: underline; cursor: pointer; }
            table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
            td, th { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
            .no-label-input { margin: 1rem 0; width: 100%; padding: 0.5rem; }
          `}
        </style>
      </head>
      <body>
        <div className="header">
          <div className="fake-link" onClick={() => alert("Navegando a inicio")}>
            <FaHome /> STE Tutorias
          </div>
          <div>
            <button className="btn-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars />
            </button>
            <button className="btn-icon" onClick={() => setSearchOpen(!searchOpen)}>
              <FaSearch />
            </button>
            <FaUserCircle size={32} color="white" />
            <a href="/perfil">
              <FaUserCircle size={32} color="white" />
            </a>
          </div>
        </div>

        <div className={`hidden-menu ${menuOpen ? "open" : ""}`}>
          <div onClick={() => alert("Ir a Tutorias")}>Tutorias</div>
          <div onClick={() => alert("Ir a Estadisticas")}>Estadisticas</div>
          <div onClick={() => alert("Cerrar sesion")}>Salir</div>
        </div>

        {searchOpen && (
          <div className="card">
            <div>Buscar</div>
            <input type="text" placeholder="Nombre o carnet" />
            <button>
              <FaSearch />
            </button>
          </div>
        )}

        <div className="card">
          <h4>Registro rapido</h4>
          <div className="low-contrast">
            Complete el formulario para registrar una tutoria
          </div>

          <label>Estudiante</label>
          <input type="text" />

          <span>Curso</span>
          <select>
            <option selected disabled>Seleccione un curso</option>
            <option>Matematicas</option>
            <option>Fisica</option>
          </select>

          <div>Fecha</div>
          <input type="date" />

          <div role="button" onClick={() => alert("Guardado")} style={{ background: "#007bff", color: "white", padding: "0.5rem", textAlign: "center" }}>
            <FaSave /> Guardar
          </div>

          <div aria-hidden="true" role="alert" onClick={() => alert("Error simulado")}>
            Mensaje importante del sistema
          </div>
        </div>

        <div className="card">
          <div className="grid">
            <div>
              <FaChartLine size={32} />
              <div>Totales</div>
            </div>
            <div onClick={() => alert("Ver detalle")}>
              <FaFileAlt size={32} />
              <div>Ver informes</div>
            </div>
            <a href="/reportes">
              <FaFileAlt size={32} />
            </a>
          </div>

          <h4>Asistencia reciente</h4>
          <div style={{ color: "#aaa", fontSize: "12px" }}>Datos actualizados al dia de hoy</div>

          <div role="button" tabindex="1">
            <FaFilter /> Filtrar por fecha
          </div>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Maria Gonzalez</td>
                <td><button><FaEdit /></button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Carlos Ramirez</td>
                <td><button><FaEdit /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  );
}