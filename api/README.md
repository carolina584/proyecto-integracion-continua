# NoteFlow - Backend API ⚙️

Esta es la API RESTful para el proyecto **NoteFlow**, encargada de gestionar la conexión a la base de datos y proveer los endpoints necesarios para la administración de tareas.

## 🛠️ Tecnologías

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework para la creación de la API.
- **MongoDB & Mongoose**: Base de datos NoSQL y su ODM para el modelado de datos.
- **Docker**: Contenedorización del entorno.

## 🚀 Instalación y Ejecución Local

Si deseas correr la API de manera independiente (sin Docker), sigue estos pasos:

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Crea un archivo `.env` en este directorio con la cadena de conexión a tu base de datos:
   ```env
   MONGO_URL=mongodb://localhost:27017/noteflow
   ```

3. Inicia el servidor usando la bandera `--env-file` (Node 20.6+):
   ```bash
   node --env-file=.env index.js
   ```

*(Nota: Para ejecutar todo el proyecto, se recomienda usar `docker compose up` desde la raíz del proyecto).*

## 🔌 Endpoints de la API

La API funciona en el puerto `3000` por defecto. 

### Tareas (`/tasks`)

- **`GET /tasks`**: Obtiene todas las tareas ordenadas por fecha de creación (más recientes primero).
- **`POST /tasks`**: Crea una nueva tarea.
  - *Body Requerido*: `{ "title": "string", "description": "string", "priority": "low|medium|high" }`
- **`PUT /tasks/:id`**: Actualiza una tarea existente.
  - *Body*: Puede incluir `title`, `description`, `priority`, y `completed` (booleano).
- **`DELETE /tasks/:id`**: Elimina una tarea mediante su ID.

## 🛡️ Seguridad y Configuraciones
- **CORS:** La API está configurada para aceptar peticiones desde cualquier origen (`Access-Control-Allow-Origin: *`) permitiendo la integración fácil con el Frontend en React.
- **Manejo de Errores:** Validaciones estrictas del formato de `ObjectId` de MongoDB para evitar caídas del servidor al enviar IDs inválidos.
