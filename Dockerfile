# Build Angular
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production

# Serve com NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/razer-gold /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf