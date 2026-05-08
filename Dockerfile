FROM node:22-alpine AS build
WORKDIR /app
COPY frontend/crohns-colitis-website/package*.json ./
RUN npm ci
COPY frontend/crohns-colitis-website/ .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist/crohns-colitis-website/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
