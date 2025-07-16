FROM node:20 as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build
FROM nginx:stable-perl as production-stage
# 注意打包后的地址变化 /app/dist
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5002
