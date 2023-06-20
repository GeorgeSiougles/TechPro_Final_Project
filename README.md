This repo uses docker to create a solution that connects a java backend with a mysql database and a react frontent.

Each service is seperated in its own container respectively.
The provided scripts can help start and stop the containers after being given the appropriate permissions with `chmod +x filename.sh`.

Both scripts can be started by typing the command `go.sh` and `./stop.sh`

Executing go.sh rebuilds the code, rebuilds and starts the containers and prunes unused docker resources.

Executing stop.sh brings the containers down

The swagger ui can be accessed at `{virtualmachineIP:8090/techpro-final.html}`
or if the port 8090 has been forwarded :`http://localhost:8090/techpro-final.html`
