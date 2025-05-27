# Etapa 1: Build do Angular (SSR)
FROM node:20-alpine
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

RUN npm install -g http-server
CMD ["http-server", "dist/razer-gold/browser", "-p", "8080", "--fallback", "index.hmtl"]

# Etapa 2: Rodar o servidor SSR com Node.js
# FROM node:20-alpine AS runner
# WORKDIR /app
# COPY --from=builder /app/dist/razer-gold /app/dist
# COPY --from=builder /app/package*.json ./
# RUN npm install --omit=dev
# CMD ["node", "dist/server/main.js"]