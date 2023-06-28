# Backend Container

This container hosts the backend service of the application. It is built using Java, Maven, Spring Boot, and Swagger and is responsible for CRUD actions on a mysql database.

## Prerequisites

- Java Development Kit (JDK) installed
- Maven installed
- Docker installed

## Swagger-IU url

- http://localhost:8090/techpro-final.html

## API Response Timers

| Endpoint              | Average Response Time | Max Response Time | Min Response Time |
| --------------------- | --------------------- | ----------------- | ----------------- |
| `allPeople`           | 23 ms                 | 35 ms             | 10 ms             |
| `/getAllOrderDetails` | 21 ms                 | 32 ms             | 11 ms             |
| `/person`             | 21 ms                 | 31 ms             | 10 ms             |
