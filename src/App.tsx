import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: '#1a1a2e', color: 'white', padding: '1rem' }}>
        <div onClick={() => setIsOpen(!isOpen)} style={{ fontSize: '1.5rem', cursor: 'pointer', display: 'inline-block' }}>
          ☰
        </div>
        <div style={{ float: 'right', display: 'flex', gap: '1rem' }}>
          <div onClick={() => console.log('notifications')} style={{ cursor: 'pointer', position: 'relative' }}>
            🔔
            <span style={{ backgroundColor: 'red', borderRadius: '50%', padding: '0.1rem 0.4rem', fontSize: '0.7rem', position: 'absolute', top: '-8px', right: '-12px' }}>3</span>
          </div>
          <img src="https://randomuser.me/api/portraits/lego/1.jpg" style={{ width: '35px', height: '35px', borderRadius: '50%', cursor: 'pointer' }} />
        </div>
      </div>

      {isOpen && (
        <div style={{ backgroundColor: '#16213e', color: 'white', padding: '1rem', position: 'absolute', width: '200px', zIndex: 1000 }}>
          <div style={{ padding: '0.5rem', cursor: 'pointer', borderBottom: '1px solid #0f3460' }}>Dashboard</div>
          <div style={{ padding: '0.5rem', cursor: 'pointer', borderBottom: '1px solid #0f3460' }}>Estadísticas</div>
          <div style={{ padding: '0.5rem', cursor: 'pointer', borderBottom: '1px solid #0f3460' }}>Configuración</div>
          <div style={{ padding: '0.5rem', cursor: 'pointer' }}>Cerrar Sesión</div>
        </div>
      )}

      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#ff6b6b', padding: '1.5rem', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>12,345</div>
            <div>Usuarios Totales</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>↑ 15%</div>
          </div>
          <div style={{ backgroundColor: '#4ecdc4', padding: '1.5rem', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>$87,234</div>
            <div>Ingresos</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>↑ 8%</div>
          </div>
          <div style={{ backgroundColor: '#ffe66d', padding: '1.5rem', borderRadius: '10px', color: '#333', cursor: 'pointer' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>3,456</div>
            <div>Órdenes</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>↓ 2%</div>
          </div>
          <div style={{ backgroundColor: '#ff6b6b', padding: '1.5rem', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>89.2%</div>
            <div>Tasa Conversión</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>↑ 5%</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '0.75rem', flex: 1, border: '1px solid #ddd', borderRadius: '5px' }}
          />
          <button
            onClick={() => console.log('search:', searchTerm)}
            style={{ backgroundColor: '#4ecdc4', border: 'none', padding: '0.75rem 2rem', borderRadius: '5px', color: '#fff', cursor: 'pointer' }}
          >
            Buscar
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <select style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '5px', flex: 1 }}>
            <option>Todas las categorías</option>
            <option>Electrónicos</option>
            <option>Ropa</option>
            <option>Hogar</option>
          </select>
          <select style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '5px', flex: 1 }}>
            <option>Ordenar por fecha</option>
            <option>Ordenar por nombre</option>
            <option>Ordenar por precio</option>
          </select>
        </div>

        <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Ventas Mensuales</div>
          <div style={{ height: '300px', backgroundColor: '#e0e0e0', borderRadius: '8px', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: 0, left: '10%', width: '8%', height: '45%', backgroundColor: '#ff6b6b' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: '22%', width: '8%', height: '65%', backgroundColor: '#4ecdc4' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: '34%', width: '8%', height: '80%', backgroundColor: '#ffe66d' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: '46%', width: '8%', height: '55%', backgroundColor: '#ff6b6b' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: '58%', width: '8%', height: '70%', backgroundColor: '#4ecdc4' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: '70%', width: '8%', height: '85%', backgroundColor: '#ffe66d' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: '82%', width: '8%', height: '60%', backgroundColor: '#ff6b6b' }}></div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Últimas Órdenes</div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>ID</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Cliente</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Producto</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Total</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd', cursor: 'pointer' }} onClick={() => console.log('row clicked')}>
                <td style={{ padding: '1rem' }}>#1001</td>
                <td style={{ padding: '1rem' }}>Juan Pérez</td>
                <td style={{ padding: '1rem' }}>Laptop Pro</td>
                <td style={{ padding: '1rem' }}>$1,299</td>
                <td style={{ padding: '1rem', color: '#4ecdc4', fontWeight: 'bold' }}>Completado</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd', cursor: 'pointer' }} onClick={() => console.log('row clicked')}>
                <td style={{ padding: '1rem' }}>#1002</td>
                <td style={{ padding: '1rem' }}>María García</td>
                <td style={{ padding: '1rem' }}>Teléfono X</td>
                <td style={{ padding: '1rem' }}>$899</td>
                <td style={{ padding: '1rem', color: '#ffe66d', fontWeight: 'bold' }}>Pendiente</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd', cursor: 'pointer' }} onClick={() => console.log('row clicked')}>
                <td style={{ padding: '1rem' }}>#1003</td>
                <td style={{ padding: '1rem' }}>Carlos López</td>
                <td style={{ padding: '1rem' }}>Audífonos</td>
                <td style={{ padding: '1rem' }}>$149</td>
                <td style={{ padding: '1rem', color: '#ff6b6b', fontWeight: 'bold' }}>Cancelado</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd', cursor: 'pointer' }} onClick={() => console.log('row clicked')}>
                <td style={{ padding: '1rem' }}>#1004</td>
                <td style={{ padding: '1rem' }}>Ana Martínez</td>
                <td style={{ padding: '1rem' }}>Monitor 4K</td>
                <td style={{ padding: '1rem' }}>$549</td>
                <td style={{ padding: '1rem', color: '#4ecdc4', fontWeight: 'bold' }}>Completado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#1a1a2e', borderRadius: '8px', color: 'white' }}>
          <form onSubmit={(e) => { e.preventDefault(); console.log('submitted'); }}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>Nombre Completo</div>
              <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '5px', border: 'none' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>Correo Electrónico</div>
              <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '5px', border: 'none' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>Mensaje</div>
              <textarea rows={3} style={{ width: '100%', padding: '0.75rem', borderRadius: '5px', border: 'none' }}></textarea>
            </div>
            <button type="submit" style={{ backgroundColor: '#4ecdc4', border: 'none', padding: '0.75rem 2rem', borderRadius: '5px', color: '#fff', cursor: 'pointer', width: '100%' }}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;