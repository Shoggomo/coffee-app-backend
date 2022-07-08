
## Description

Coffee app backend.

## Initial Setup

Copy the `.env.template`, change its content according to your setup, and remove the `.template` part from the filename.

## Run Postgres via Docker

```bash
$ source .env
$ docker run -d \
	--name postgres \
	-e POSTGRES_USER=$POSTGRES_USER \
	-e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
	-e POSTGRES_DB=$POSTGRES_DB \
	-v ${HOME}/postgres-data/:/var/lib/postgresql/data \
        -p 5432:5432 \
        postgres
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
