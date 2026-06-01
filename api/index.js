/**
 * ======================================================
 * 📌 NOTEFLOW API - SERVIDOR PRINCIPAL
 * ======================================================
 * Este archivo configura:
 * - Servidor Express
 * - Conexión a MongoDB
 * - Modelo de datos (Task)
 * - Endpoints CRUD para gestión de tareas
 * ======================================================
 */

// 🔹 Importación de dependencias
const express = require("express");
const mongoose = require("mongoose");

// 🔹 Inicialización de la aplicación
const app = express();
const PORT = 3000;

// 🔹 Middleware para manejar JSON en las peticiones
app.use(express.json());

/**
 * ======================================================
 * 🔌 CONEXIÓN A BASE DE DATOS (MongoDB)
 * ======================================================
 * Se conecta usando la variable de entorno definida
 * en docker-compose.yml
 */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Conexión exitosa a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión a MongoDB:", err));

/**
 * ======================================================
 * 🧱 MODELO DE DATOS: TASK
 * ======================================================
 * Representa una tarea dentro del sistema NoteFlow
 */
const Task = mongoose.model("Task", {
  title: {
    type: String,
    required: true, // Campo obligatorio
  },
  description: {
    type: String,
    default: "", // Descripción opcional
  },
  completed: {
    type: Boolean,
    default: false, // Estado inicial: no completada
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"], // Valores permitidos
    default: "medium",
  },
  createdAt: {
    type: Date,
    default: Date.now, // Fecha automática de creación
  },
});

/**
 * ======================================================
 * 📌 ENDPOINT: Obtener todas las tareas
 * Método: GET
 * Ruta: /tasks
 * ======================================================
 */
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener las tareas",
    });
  }
});

/**
 * ======================================================
 * 📌 ENDPOINT: Crear una nueva tarea
 * Método: POST
 * Ruta: /tasks
 * ======================================================
 */
app.post("/tasks", async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
    });

    await task.save();

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear la tarea",
    });
  }
});

/**
 * ======================================================
 * 📌 ENDPOINT: Actualizar una tarea
 * Método: PUT
 * Ruta: /tasks/:id
 * ======================================================
 * Permite actualizar:
 * - title
 * - description
 * - completed
 * - priority
 */
app.put("/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        priority: req.body.priority,
      },
      {
        new: true, // Devuelve el objeto actualizado
        runValidators: true, // Valida el esquema
      },
    );

    if (!updatedTask) {
      return res.status(404).json({
        error: "Tarea no encontrada",
      });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar la tarea",
    });
  }
});

/**
 * ======================================================
 * 📌 ENDPOINT: Eliminar una tarea
 * Método: DELETE
 * Ruta: /tasks/:id
 * ======================================================
 */
app.delete("/tasks/:id", async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        error: "Tarea no encontrada",
      });
    }

    res.json({
      message: "Tarea eliminada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar la tarea",
    });
  }
});

/**
 * ======================================================
 * 📌 ENDPOINT BASE
 * Método: GET
 * Ruta: /
 * ======================================================
 */
app.get("/", (req, res) => {
  res.send("🚀 NoteFlow API funcionando correctamente");
});

/**
 * ======================================================
 * 🚀 INICIO DEL SERVIDOR
 * ======================================================
 */
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
