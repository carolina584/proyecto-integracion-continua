const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Función para crear conexión con reintentos
function connectDB() {
  const db = mysql.createConnection({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'example',
    database: process.env.DB_NAME || 'proyecto'
  });

  db.connect(err => {
    if (err) {
      console.error('Error conectando a la base de datos:', err.message);
      // Reintentar después de 5 segundos
      setTimeout(connectDB, 5000);
    } else {
      console.log('Conexión exitosa a la base de datos MySQL');
    }
  });

  return db;
}

const db = connectDB();

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('API funcionando y conectada a la base de datos');
});

// Mantener el servidor escuchando
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});



