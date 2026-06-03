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
const PORT = process.env.PORT || 3000;

// 🔹 Middleware
app.use(express.json());

// Middleware básico de CORS (permite peticiones desde cualquier origen)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

/**
 * ======================================================
 * 🔌 CONEXIÓN A BASE DE DATOS (MongoDB)
 * ======================================================
 */
const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  console.error("❌ ERROR CRÍTICO: La variable de entorno MONGO_URL no está definida.");
  process.exit(1);
}

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Conexión exitosa a MongoDB"))
  .catch((err) => {
    console.error("❌ Error de conexión a MongoDB:", err);
    process.exit(1);
  });

/**
 * ======================================================
 * 🧱 MODELO DE DATOS: TASK
 * ======================================================
 */
const Task = mongoose.model("Task", {
  title: {
    type: String,
    required: true,
    trim: true, // Elimina espacios en blanco innecesarios
  },
  description: {
    type: String,
    default: "",
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * ======================================================
 * 📌 ENDPOINT: Obtener todas las tareas
 * ======================================================
 */
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); // Ordenadas por la más reciente
    res.json(tasks);
  } catch (error) {
    console.error("Error en GET /tasks:", error);
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
});

/**
 * ======================================================
 * 📌 ENDPOINT: Crear una nueva tarea
 * ======================================================
 */
app.post("/tasks", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ error: "El campo 'title' es obligatorio" });
    }

    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error en POST /tasks:", error);
    res.status(500).json({ error: "Error al crear la tarea" });
  }
});

/**
 * ======================================================
 * 📌 ENDPOINT: Actualizar una tarea
 * ======================================================
 */
app.put("/tasks/:id", async (req, res) => {
  try {
    // Validar si el ID proporcionado es un formato válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Formato de ID no válido" });
    }

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
        runValidators: true, // Ejecuta las validaciones del modelo
      }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error(`Error en PUT /tasks/${req.params.id}:`, error);
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
});

/**
 * ======================================================
 * 📌 ENDPOINT: Eliminar una tarea
 * ======================================================
 */
app.delete("/tasks/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Formato de ID no válido" });
    }

    const deleted = await Task.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json({ message: "Tarea eliminada correctamente", deletedTaskId: deleted._id });
  } catch (error) {
    console.error(`Error en DELETE /tasks/${req.params.id}:`, error);
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
});

/**
 * ======================================================
 * 📌 ENDPOINT BASE
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
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
