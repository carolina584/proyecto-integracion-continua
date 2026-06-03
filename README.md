# NoteFlow 📝

## 🚀 Descripción del Proyecto

**NoteFlow** es un sistema de gestión de tareas (To-Do List) desarrollado como parte de un proyecto académico enfocado en la implementación de Integración Continua (CI).

La aplicación permite gestionar tareas mediante una API REST construida con Node.js y Express, utilizando MongoDB como base de datos y Docker para la contenerización de todos los servicios.

---

## 🎯 Funcionalidades

- Crear tareas
- Consultar tareas
- Actualizar tareas
- Eliminar tareas

Cada tarea contiene:

- Título
- Descripción
- Prioridad
- Estado (completado / pendiente)

---

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose
- Jenkins (CI/CD)
- GitHub

---

## 🏗️ Arquitectura del Sistema

El sistema está compuesto por tres servicios principales:

- API (Node.js)
- Base de datos (MongoDB)
- Servidor de integración continua (Jenkins)

Todos los servicios se ejecutan en contenedores Docker.

---

## 📁 Estructura del Proyecto

```text
Proyecto-integracion-continua/
├── api/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── .env (generado localmente)
├── docker-compose.yml
├── Dockerfile.jenkins
├── Jenkinsfile
└── README.md
```

---

## ⚙️ Ejecución del Proyecto

### 1. Clonar repositorio

git clone https://github.com/carolina584/proyecto-integracion-continua.git
cd proyecto-integracion-continua

### 2. Levantar servicios

docker compose up --build

### 3. Verificar servicios

docker ps

---

## 🌐 Accesos

- API: http://localhost:3000
- Jenkins: http://localhost:8080
- MongoDB: puerto 27017

---

## 🔌 Endpoints principales

GET /tasks  
POST /tasks  
PUT /tasks/:id  
DELETE /tasks/:id

---

## 🔄 Integración Continua (Jenkins)

El pipeline realiza:

1. Clonar repositorio
2. Construir imagen Docker
3. Desplegar contenedor

## 👥 Autores (Grupo 9)

- Yina Carolina Muñoz Perez
- Miguel Augusto Rojas Hernandez
- Johan Stiwer Cañon Cadena
- Hector David Toledo Garcia
- Feder Ramírez Madrigal

---

## 📖 Estado

Proyecto académico - Integración Continua con Docker y Jenkins
