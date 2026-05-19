# NoteFlow - Proyecto Integración Continua

**Institución:** Politécnico Grancolombiano
**Módulo:** Integración Continua (Entrega 1 Semana 3)
**Grupo:** 9

## 👥 Equipo de Trabajo

El proyecto cuenta con la participación activa de los siguientes integrantes, asumiendo diferentes roles (desarrollo backend, gestión del repositorio, pruebas y documentación) para garantizar un trabajo colaborativo y organizado:

- Yina Carolina Muñoz Perez
- Johan Stiwer Cañon Cadena
- Hector David Toledo Garcia
- Feder Ramírez Madrigal
- Miguel Augusto Rojas Hernandez

## 📝 Descripción del Proyecto

**NoteFlow** es un sistema de gestión de tareas (To-Do List) desarrollado bajo una arquitectura basada en microservicios. Este sistema permite a los usuarios:
- Crear nuevas tareas.
- Consultar tareas existentes.
- Actualizar el estado o información de las tareas.
- Eliminar tareas.

### Stack Tecnológico

- **Backend:** Node.js con el framework Express.
- **Base de Datos:** MongoDB (Servicio de persistencia de datos eficiente y estructurado).
- **Contenedores:** Docker.
- **Control de Versiones:** GitHub.
- **CI/CD:** Jenkins (a implementar en fases posteriores).

## 🏗️ Arquitectura y Justificación

La arquitectura propuesta se basa en el uso de contenedores **Docker**, donde se implementarán al menos dos servicios principales que se comunicarán entre sí:
1. **Aplicación (API)** en Node.js.
2. **Base de Datos** en MongoDB.

Esto garantiza un entorno de desarrollo consistente, reproducible y alineado con las buenas prácticas de integración continua.

### Justificación de Tecnologías y Proyecto

- **Evidencia de Integración Continua:** La elección del proyecto permite evidenciar claramente principios como la modularidad, escalabilidad y automatización.
- **Node.js:** Justificado por su eficiencia, facilidad de implementación y amplia adopción, permitiendo optimizar el tiempo de desarrollo dentro de las siete semanas del módulo.
- **Flujo de Trabajo Automatizado:** El uso de GitHub para control de versiones y Docker para la contenerización establece una base sólida para la posterior implementación de Jenkins.
- **Factibilidad:** "NoteFlow" se ajusta a los tiempos establecidos, permite la participación activa de todo el equipo y facilita la aplicación práctica de conceptos para el fortalecimiento de competencias en desarrollo de software moderno.

## ▶️ Ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/carolina584/proyecto-integracion-continua.git
   ```
2. Iniciar los servicios con Docker Compose:
   ```bash
   docker-compose up --build
   ```

## 🔗 Enlaces

- **Repositorio en GitHub:** [proyecto-integracion-continua](https://github.com/carolina584/proyecto-integracion-continua)
