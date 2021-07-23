dev:
	docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d 

dev-build:
	docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build

clean: 
	docker-compose down --remove-orphans -v

dev-clean: clean dev-build

rebuild:
	docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build ${SERVICE}
