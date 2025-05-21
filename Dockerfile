# Etapa 1 - Build com Node
FROM node:20-alpine AS builder
WORKDIR /app

# Copia os arquivos e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Executa o build Angular para produção
RUN npm run build -- --configuration production

# Etapa 2 - NGINX para servir os arquivos estáticos
FROM nginx:alpine
COPY --from=builder /app/dist/razer-gold /usr/share/nginx/html

# Copie o nginx.conf personalizado se tiver
# Certifique-se que este arquivo existe no projeto
# Se não tiver, pode remover essa linha ou usar o default do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
