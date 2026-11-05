# build stage
FROM node:24-alpine AS build
WORKDIR /app
RUN apk upgrade --no-cache
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY index.html vite.config.js ./
COPY public ./public
COPY src ./src
RUN npm run build

# runtime stage
FROM node:24-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
RUN apk upgrade --no-cache
COPY --from=build /app/dist ./dist
COPY server.mjs ./server.mjs
COPY package.json ./package.json
USER node
EXPOSE 3000
CMD ["node", "server.mjs"]
