# Etapa 1 - Build do Angular
FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build -- --configuration production

# Etapa 2 - Servir com NGINX
FROM nginx:alpine

# Remove config padrão do NGINX
RUN rm /etc/nginx/conf.d/default.conf

# Copia build Angular
COPY --from=builder /app/dist/razer-gold /usr/share/nginx/html

# Copia nginx.conf personalizado
COPY nginx.conf /etc/nginx/conf.d/default.conf
