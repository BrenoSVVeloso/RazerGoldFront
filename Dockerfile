# Etapa 1: Build da aplicação Angular
FROM node:20 AS builder

WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala as dependências
RUN npm install

# Build do projeto para produção
RUN npm run build -- --configuration production

# Etapa 2: Servir com NGINX
FROM nginx:alpine

# Remove a configuração padrão do NGINX
RUN rm /etc/nginx/conf.d/default.conf

# Copia a nova configuração do NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos buildados do Angular para o diretório de publicação do NGINX
COPY --from=builder /app/dist/razer-gold /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando padrão
CMD ["nginx", "-g", "daemon off;"]