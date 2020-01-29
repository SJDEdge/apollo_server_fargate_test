## Apollo Server Fargate Test

Bare bones Apollo server containerised and pushed to AWS ERS/ECS

Building the docker image:

`docker build -t apollo-server-fargate-test .`

Running the docker image as a container:

`docker run -p 4000:4000 --name api-apollo-server-fargate-test -d apollo-server-fargate-test`