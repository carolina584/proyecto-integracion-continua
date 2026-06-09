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

- **Frontend:** React, Vite, Tailwind CSS, Redux Toolkit (RTK)
- **Backend:** Node.js, Express.js
- **Base de Datos:** MongoDB
- **Contenedores:** Docker, Docker Compose
- **CI/CD:** Jenkins, Travis CI, Codeship
- **Control de Versiones:** GitHub

---

## 🏗️ Arquitectura del Sistema

El sistema está compuesto por los siguientes servicios principales:

- **Frontend (Cliente SPA):** Aplicación React servida por Vite.
- **API (Backend Node.js):** REST API construida con Express.
- **Base de datos:** MongoDB para almacenamiento NoSQL.
- **Servidor CI:** Jenkins para integración y despliegue continuo.

Todos los servicios se ejecutan en contenedores Docker mediante `docker-compose.yml`.

---

## 📁 Estructura del Proyecto

```text
Proyecto-integracion-continua/
├── api/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── .env (generado localmente)
├── frontend/
│   ├── Dockerfile
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── docker-compose.yml
├── Dockerfile.jenkins
├── Jenkinsfile
├── .travis.yml
├── codeship-services.yml
├── codeship-steps.yml
├── DOCUMENTO_ENTREGA_3.md
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

- **Frontend (Web App):** http://localhost:5173
- **API (Backend):** http://localhost:3000
- **Jenkins:** http://localhost:8080
- **MongoDB:** puerto 27017

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
