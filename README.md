# Tech Pro Academy final project

## Prerequisites

- Docker installed
- Node.js and npm (Node Package Manager) installed
- Java Development Kit (JDK) installed
- Maven installed

This repo uses docker to create a solution that connects a java backend with a mysql database and a react frontent.

Each service is seperated in its own container respectively.
The provided scripts can help start and stop the containers after being given the appropriate permissions with `chmod +x filename.sh`.

The script go.sh also brings the containers down and rebuilds the project.

The script stop.sh only brings the containers down.

Both scripts can be started by typing the command `go.sh` and `./stop.sh`

Executing go.sh rebuilds the code, rebuilds and starts the containers and prunes unused docker resources.

Executing stop.sh brings the containers down

The swagger ui can be accessed at `{virtualmachineIP:8090/techpro-final.html}`
or if the port 8090 has been forwarded :`http://localhost:8090/techpro-final.html`

The frontend can be reached at port 3000.
