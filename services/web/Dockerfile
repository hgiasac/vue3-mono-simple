# Stage 1 - the build process
FROM node:16.1 as build

WORKDIR /app

ARG API_HOST

COPY app/package.json app/.eslintrc.js app/.postcssrc.js app/.prettierrc app/.babelrc \
  app/babel.config.js app/package-lock.json app/tsconfig.json \
  app/quasar.conf.js app/quasar.extensions.js ./
RUN npm ci
COPY app/. ./
RUN API_HOST=${API_HOST} npm run build

# Stage 2 - the production environment
FROM nginx:1.20
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
