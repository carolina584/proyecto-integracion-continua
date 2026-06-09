# NoteFlow - Frontend Web 🎨

Este es el cliente web Single Page Application (SPA) para el proyecto **NoteFlow**. Proporciona una interfaz de usuario moderna, limpia y responsiva para gestionar las tareas.

## 🛠️ Tecnologías

- **React 19**: Biblioteca principal para la interfaz de usuario.
- **Vite**: Empaquetador ultrarrápido para el desarrollo.
- **Tailwind CSS v4**: Framework de utilidades CSS para el diseño y responsividad.
- **Redux Toolkit (RTK) & React-Redux**: Manejo del estado global de la aplicación y operaciones asíncronas.
- **Axios**: Cliente HTTP para comunicarse con la API.
- **Lucide React**: Biblioteca de iconos minimalistas.

## 🌟 Características de la Interfaz

- **Diseño Moderno:** Interfaz de usuario limpia, de una sola columna centralizada.
- **Modales UI:** La creación, edición y eliminación de tareas se maneja a través de ventanas modales sobrepuestas (sin alertas nativas del navegador), brindando una experiencia fluida.
- **Gestión de Estados:** Indicadores visuales durante la carga de tareas (`loading`) y manejo de errores visible al usuario.
- **Responsivo:** Adaptado completamente para dispositivos móviles y de escritorio.

## 🚀 Instalación y Ejecución Local

Si deseas correr el entorno de desarrollo Frontend de manera independiente (sin Docker), sigue estos pasos:

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Configura la URL de la API. Por defecto apuntará a `http://localhost:3000/tasks`. Si necesitas cambiarlo, puedes usar una variable de entorno en un archivo `.env` local:
   ```env
   VITE_API_URL=http://tu-api:3000/tasks
   ```

3. Inicia el servidor de desarrollo de Vite:
   ```bash
   npm run dev
   ```
La aplicación se abrirá en `http://localhost:5173`.

## 📦 Estructura de Componentes

- `App.jsx`: Componente contenedor principal y maquetación general.
- `components/Modal.jsx`: Componente reutilizable para las ventanas flotantes.
- `components/ConfirmModal.jsx`: Modal específico para confirmaciones (Ej: Eliminar).
- `components/TaskForm.jsx`: Formulario reutilizable para crear y editar tareas.
- `components/TaskList.jsx`: Renderizador de la colección de tareas.
- `components/TaskItem.jsx`: Componente individual de visualización para cada tarea.
- `features/tasksSlice.js`: Configuración de Redux para los *thunks* asíncronos y el estado.
