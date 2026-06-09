# Usa la imagen oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el código de la aplicación
COPY . .

# Expone el puerto de Vite (5173 por defecto)
EXPOSE 5173

# Arranca el servidor de desarrollo de Vite
CMD ["npm", "run", "dev", "--", "--host"]
