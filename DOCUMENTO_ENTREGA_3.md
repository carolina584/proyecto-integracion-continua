# Documento Consolidado - Entrega 3 (Semanas 7 y 8)

## 1. Historial de Cambios Implementados

A continuación, se detalla el progreso técnico alcanzado en la integración de la plataforma de software con herramientas de Integración y Despliegue Continuo (CI/CD):

1. **Dockerización Inicial:** Creación del `Dockerfile` para la API de Node.js y configuración de `docker-compose.yml` para orquestar la API junto con la base de datos (MongoDB) y el servidor de Jenkins.
2. **Implementación de Jenkins:** Configuración de `Dockerfile.jenkins` para tener permisos en la máquina host y definición del pipeline en el archivo `Jenkinsfile` (Construcción y Despliegue de la imagen de Docker).
3. **Refactorización de la API:** Mejoras de seguridad y estabilidad en `api/index.js`, incluyendo:
   - Configuración del Middleware de **CORS**.
   - Manejo seguro de **Variables de Entorno** (`.env` y `process.env`).
   - Validaciones de tipos (`ObjectId`) en los endpoints PUT y DELETE.
4. **Integración con Travis CI:** Creación del archivo `.travis.yml` para ejecutar la validación automática del código y la construcción de la imagen en los servidores de Travis.
5. **Integración con Codeship:** Inclusión de los archivos `codeship-services.yml` y `codeship-steps.yml` para configurar los pipelines mediante contenedores bajo la plataforma Codeship Pro.

---

## 2. Solución de Problemas (Troubleshooting)

Durante el proceso de integración, surgieron diversos inconvenientes que se lograron resolver de la siguiente forma:

- **Error: `MongooseError: The uri parameter to openUri() must be a string, got "undefined"`**
  - **Causa:** La aplicación Node.js intentaba conectarse a MongoDB pero no estaba cargando el archivo `.env` local.
  - **Solución:** Ejecutar la API pasando el archivo de entorno en la línea de comandos usando Node.js nativo: `node --env-file=.env index.js` (para Node 20.6+). En el entorno dockerizado, se mapeó a través de `environment` en el docker-compose.
  
- **Error: Jenkins fallaba al usar el comando `docker` dentro de su pipeline.**
  - **Causa:** El contenedor de Jenkins no tenía permisos ni acceso al daemon de Docker de la máquina host.
  - **Solución:** Se creó una imagen customizada de Jenkins (`Dockerfile.jenkins`), se ejecutó bajo el usuario `root` y se mapeó el socket de docker (`/var/run/docker.sock:/var/run/docker.sock`) en el `docker-compose.yml`.

- **Problemas de tipos en el estado (Completado/Pendiente):**
  - **Causa:** El frontend original enviaba un *string* (`status: 'completado'`) en lugar del booleano (`completed: true`) que esperaba Mongoose en la API.
  - **Solución:** Se ajustó la lógica del componente `TaskItem` para invertir directamente la variable booleana `task.completed`.

---

## 3. Responsabilidades del Equipo (Grupo 9)

La distribución equitativa y la colaboración fueron clave en el éxito de la Entrega 3:

| Nombre | Rol / Responsabilidad | Tareas Realizadas |
| :--- | :--- | :--- |
| **Yina Carolina Muñoz Perez** | Coordinación & CI/CD | Estructuración inicial de Jenkins y pipelines. |
| **Miguel Augusto Rojas Hernandez** | Desarrollo Backend | Configuración de la API REST, modelos de Mongoose y variables de entorno. |
| **Johan Stiwer Cañon Cadena** | Operaciones Docker | Empaquetamiento de contenedores, Dockerfiles y Docker Compose. |
| **Hector David Toledo Garcia** | Desarrollo Frontend | Implementación de React, TailwindCSS y RTK para el cliente web. |
| **Feder Ramírez Madrigal** | Aseguramiento de Calidad & CI | Integraciones con Travis CI y Codeship, revisión de código y documentación. |

### Puntos Destacados del Frontend:
- **Tecnologías:** React 19 (mediante Vite), Tailwind CSS v4 para el diseño responsivo, y Redux Toolkit (RTK) para la gestión del estado global asíncrono.
- **App.jsx:** Estructura principal modernizada y centralizada en una sola columna.
- **Sistema de Modales:** La interfaz es altamente interactiva, utilizando ventanas flotantes (`Modal.jsx`) tanto para la creación y edición de tareas, como para confirmar eliminaciones sin usar los "alerts" por defecto del navegador.
- **Diseño Moderno:** Uso de iconos limpios (con `lucide-react`) y paleta de colores agradables (`bg-blue-600`, etc.), estados vacíos (*Empty States*) cuando no hay tareas, y feedback de estado (Cargando, Error).

> *Nota: Estas responsabilidades son descriptivas del proyecto y muestran un enfoque colaborativo y multidisciplinario.*

---

## 4. Opiniones y Conclusiones Generales

- **Automatización es vital:** Integrar herramientas como Jenkins, Travis CI y Codeship ha demostrado que el proceso manual de pruebas y despliegues es propenso a errores humanos. La automatización aporta mucha más confiabilidad.
- **Los contenedores unifican los entornos:** Trabajar con Docker y Docker Compose mitigó por completo el problema de "funciona en mi máquina". Garantizó que lo que corre localmente, correrá igual en el pipeline de CI/CD.
- **Transparencia en el código:** Tener la infraestructura definida como código (Archivos YML y Jenkinsfile) dentro del mismo repositorio de control de versiones permite auditar cualquier cambio y volver fácilmente atrás si un despliegue falla.
