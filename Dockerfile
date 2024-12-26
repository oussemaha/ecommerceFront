# Étape 1 : Construire l'application Angular
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier tout le reste des fichiers du projet
COPY . .

# Construire l'application Angular
RUN npm install -g @angular/cli && \
    export NODE_OPTIONS=--openssl-legacy-provider && \
    ng build 

# Étape 2 : Configurer Nginx pour servir l'application
FROM nginx:latest

# Copier les fichiers Angular build dans le dossier Nginx
COPY --from=build /app/dist/client /usr/share/nginx/html

# Copier le fichier de configuration personnalisé de Nginx si nécessaire
# Uncomment and modify the following line if you have a custom nginx.conf:
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 8080 pour le trafic HTTP
EXPOSE 8080

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
