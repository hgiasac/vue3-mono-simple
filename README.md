# Vue 3 simple boilerplate

A simple project structure for learning Vue 3 with TypeScript and Quasar

## Project Structure

- `services/api`: Main API service, using Node.js and Express (http://localhost:9000)
- `services/data`: Hasura project, used for migration only. (http://localhost:8080)
- `services/web`: Vue.js webapp (http://localhost:3000)

## Prerequisites

- Hasura GraphQL Engine 2.0
- Vue 3
- Node.js 14+
- Docker + docker-compose

## Database design and migration

Use Hasura 2.0 CLI: https://docs.hasura.io/1.0/graphql/manual/hasura-cli/install-hasura-cli.html#install

- Create migration using Hasura Console UI

```
hasura console --admin-secret hasura
```

- Migrate: 

```
hasura migrate apply --all-databases --admin-secret hasura
hasura metadata apply --admin-secret hasura
```

## How to Run

Copy `dotenv` file to `.env` and edit configuration if necessary, then start docker

```sh
make dev
# or rebuild 
make dev-build
# sometimes we need to clean all database and run from scratch 
make dev-clean
# rebuild single service
SERVICE=<service-name> make rebuild
# view logs web, api 
docker-compose logs -f <service-name> 

# NOTE: if you are using windows, use this command instead
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d 
```

## Contribution

### Development tools

- Visual Studio Code
- Node.js 
- [Vetur extension](https://vuejs.github.io/vetur/guide/)
- Eslint extension
- Prettier extension