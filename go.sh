#!/bin/bash

# Generate java executable code
cd backend
mvn clean install
cd ..

# Run docker-compose up
docker compose up -d --build

# Prune unused Docker images
docker image prune -af

# Prune unused Docker containers
docker container prune -f