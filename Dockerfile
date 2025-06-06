# Etapa 1: Build do Angular (SSR)
FROM node:20 AS builder
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM node:20-alpine
WORKDIR /app

RUN npm install -g serve
COPY --from=builder /app/dist/razer-gold/browser .

EXPOSE 8080

CMD ["serve", "-s", ".", "-l", "8080"]

# Etapa 2: Rodar o servidor SSR com Node.js
# FROM node:20-alpine AS runner
# WORKDIR /app
# COPY --from=builder /app/dist/razer-gold /app/dist
# COPY --from=builder /app/package*.json ./
# RUN npm install --omit=dev
# CMD ["node", "dist/server/main.js"]