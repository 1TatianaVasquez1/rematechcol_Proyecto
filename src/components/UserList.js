import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error al cargar datos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;