FROM node:alpine as build

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]