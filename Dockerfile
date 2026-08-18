# Etapa 1: Construcción (Build)
FROM node:20-alpine as build

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo los archivos de dependencias primero (para optimizar la caché de Docker)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código del proyecto
COPY . .

# Ejecutamos el comando de build sobrescribiendo la ruta 'base' exclusivamente para Docker
RUN npx tsc -b && npx vite build --base=/

# Etapa 2: Servidor Web (Producción)
FROM nginx:alpine

# Copiamos los archivos compilados de la etapa anterior a la carpeta pública de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# (Opcional) Copiar una configuración personalizada de Nginx si fuera necesario en el futuro
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos el puerto 80 dentro del contenedor
EXPOSE 80

# Iniciamos Nginx
CMD ["nginx", "-g", "daemon off;"]
