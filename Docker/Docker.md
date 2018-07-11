Docker
===

### Miscelanous

###### check version of docker products
```shell
# Docker's Information
$ docker info
# Commands to check versions of the Docker's Products
$ docker version
$ docker-composer version
$ docker-machine version
```  

###### help
```shell
# Docker's Help command
$ docker <COMMAND> --help
```  

### Containers

###### create a container
```shell
# Creates a container, It will download the image from docker hub
$ docker container run helo-world
# Creates a container without starts it
$ docker container create --name nginx-test -p 8080:80 nginx
```

###### create a container from image
```shell
# Creating container in detach mode
$ docker container run -d --name nginx-test -p 8080:80 nginx
# Create a container with explicit name from local repository
$ docker container run -d -p 8080:80 --name apache-php7 local/apache-php:7
# Create a container and connect to it
$ docker container run -it --name alpine-test alpine /bin/sh
# Create container from docker hub
$ docker container run -d -p 8080:80 oscarz90/notesdevelopment
```

###### start a container
```shell
# Start a existing container
$ docker container start nginx-test
```

###### Restart a container
```shell
# Start a existing container
$ docker container restart -t 60 nginx-test
```

###### Pause a container
```shell
# Pause a existing container
$ docker container pause nginx-test
```

###### Stops a container
```shell
# Stop a existing container
$ docker container stop nginx-test
# Stop a existing container, It will wait up to 60 seconds before sending a SIGKILL
$ docker container stop -t 60 nginx-test
```

###### Stops a container by forcing it
```shell
# Sends a SIGKILL immediately
$ docker container kill nginx-test
```

###### delete a container
```shell
# Remove a container, If it has volumes, It will delete only the container, not the volumes
$ docker container rm nginx-test
# Removes a running container
$ docker container rm -f nginx-test
# Stops a container and after It removes it, an alternative of the previous command
$ docker container stop nginx-test && docker container rm nginx-test
# Delete the container and its volumes
$ docker container rm -v nginx-test
# Deletes all the exited containers
$ docker container prune
```

###### list containers stooped and running
```shell
# List all existing containers
$ docker container ls -a
# List only running containers
$ docker container ls
```

###### Connect to executing container
```shell
# After exit it, the container would end
$ docker container attach nginx-test
# After exit it, the container would not end
$ docker container attach --sig-proxy=false nginx-test
```

###### Execute a command into the container
```shell
# Execute a command
$ docker container exec nginx-test cat /etc/debian_versiond
# Connect to the container's shell
$ docker container exec -it nginx-test /bin/bash
```

###### See the containers' logs
```shell
# Show the last five lines of the log
$ docker container logs --tail 5 nginx-test
# Show the log in real time
$ docker container logs -f nginx-test
# Show log's information after specific date
$ docker container logs --since 2017-06-24T15:00 nginx-test
# Show log's information after specific date and prepends the time output
$ docker container logs --since 2017-06-24T15:00 -t nginx-test
```

###### See the containers' processes
```shell
$ docker container top nginx-test
```

###### See the containers' statistics
```shell
# Shows the statistics of all the containers
$ docker container stats
# Shows the statistics of a container
$ docker container stats nginx-test
```

###### Inspect docker containers
```shell
# Shows container's configuration
$ docker container inspect nginx-test
```

###### Limit the container's resources
```shell
# Limit resources of a container
$ docker container run -d --name nginx-test --cpu-shares 512 --memory 128M -p 8080:80 nginx
# Update resources of a existing container
$ docker container update --cpu-shares 512 --memory 128M nginx-test
# Memory is set default 0, It means there's no limit
$ docker container update --cpu-shares 512 --memory 128M --memory-swap 256M nginx-test
```

###### Show the port mappings for the containers
```shell
$ docker container port nginx-test
```

###### Inspect changes on the filesystem between the image we used to launch the container and now
```shell
$ docker container diff nginx-test
```
### Volumes

###### Create a volume
```shell
$ docker volume create redis_data
```

###### List volumes
```shell
$ docker volume ls
```

###### Create a container using a volume
```shell
# Create a container using a volume
$ docker container run -d --name redis -v 719d0cc415dbc76fed5e9b8893e2cf547f0ac6c91233451604fdba31f0dd2d2a:/data --network moby-counter redis:alpine
# Create a container using a volume with alias
$ docker container run -d --name redis -v redis_data:/data --network moby-counter redis:alpine
```

###### Inspect volume's configuration
```shell
$ docker volume inspect redis_data
```
###### Delete a volume
```shell
# Delete a volume
$ docker volume rm redis_data
# Delete all the volumes
$ docker volume prune
```

### Network

###### Create a network
```shell
$ docker network create moby-counter
```

###### Create a container using a network
```shell
$ docker container run -d --name redis --network moby-counter redis:alpine
# Create a container using a network and mapping a specific port
$ docker container run -d --name redis --network moby-counter -p 8080:80 russmckendrick/moby-counter
# Create a container with a specific alias for the container, used by the DNS Server to lookup
$ docker container run -d --name redis2 --network moby-counter2 --network-alias redis redis:alpine
```

###### Inspect network's configuration
```shell
$ docker network inspect moby-counter
```

###### Delete a network
```shell
# Delete a network
$ docker network rm moby-counter
# Delete all networks
$ docker network prune
```

###### Network uses a DNS to locate the containers by name instead of IP address
```shell
$ cat /etc/resolv.conf
nameserver 127.0.0.11
options ndots:0
```

###### Perform DNS lookup
```shell
$ #Usage: nslookup [HOST] [SERVER]
$ nslookup nginx-test 127.0.0.11
Server:    127.0.0.11
Address 1: 127.0.0.11

Name:      nginx-test
Address 1: 172.18.0.2 nginx-test.vuejsapp
```

### Images

###### obtain an image
```shell
# Pull an image from docker hub
$ docker image pull nginx
# Pull an specific version of an image from docker hub
$ docker image pull nginx:latest
# Pull an image from docker hub
$ docker pull oscarz90/notesdevelopment
# Pull an image from local repository
$ docker pull localhost:5000/apache-php:7
```

###### list local docker images
```shell
# Lists local download images
$ docker image ls
```

###### inspect docker images
```shell
# Shows image's configuration
$ docker image inspect nginx
```

###### build an image from dockerfile
```shell
# Create a new image specifying the docker file and tag
$ docker image build --file /path/to/your/dockerfile --tag local:dockerfile-example .
# Create a new image with a specific tag
$ docker image build --tag local:dockerfile-example .
# Create a new image with a specific tag and version
$ docker image build --tag local/apache-php:7 .
```

###### build an image from a container
```shell
$ docker container commit alpine-test local:broken-container
```

###### build an image from another image
```shell
$ docker image tag alpine localhost:5000/localalpine
```

###### save image as tar file
```shell
 $ docker image save -o broken-container.tar local:broken-container
```

### Dockerfiles

###### Example Dockerfile
```dockerfile
FROM alpine:latest
LABEL maintainer="Russ McKendrick <russ@mckendrick.io>"
LABEL description="This example Dockerfile installs NGINX."
RUN apk add --update nginx && \
        rm -rf /var/cache/apk/* && \
        mkdir -p /tmp/nginx/

COPY files/nginx.conf /etc/nginx/nginx.conf
COPY files/default.conf /etc/nginx/conf.d/default.conf
ADD files/html.tar.gz /usr/share/nginx/

EXPOSE 80/tcp

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
```

### Docker HUB and Registry

###### login into docker hub
```shell
$ docker login
```

###### Search an image in the docker hub
```shell
$ docker search mongo
```

###### push image to docker hub
```shell
$ docker image push oscarz90/helloWorld:version
```

###### push image to local registry
```shell
$ docker image push localhost:5000/localalpine
```

Docker Machine
===

###### Deploy a local docker host
```shell
$ docker-machine create --driver virtualbox docker-local
```

###### Display the commands to set up the environment for the Docker client
```shell
$ docker-machine env docker-local
```

###### Configure shell to connect to the docker host
```shell
$ eval $(docker-machine env docker-local)
```

###### List docker machines
```shell
$ docker-machine ls
```

###### Connect to the docker using SSH
```shell
$ docker-machine ssh docker-local
```

###### Docker host's managment
```shell
$ docker-machine stop docker-local
$ docker-machine start docker-local
$ docker-machine restart docker-local
$ docker-machine rm docker-local
```

###### Find out details a Docker host
```shell
$ docker-machine ip docker-local
$ docker-machine inspect docker-local
$ docker-machine config docker-local
$ docker-machine status docker-local
$ docker-machine url docker-local
```

### Docker Composer

###### Docker Compose Example File
```yaml
version: "3"
   services:
     redis:
      image: redis:alpine
      volumes:
         - redis_data:/data
      restart: always
     mobycounter:
      depends_on:
         - redis
      image: russmckendrick/moby-counter
      ports:
         - "8080:80"
      restart: always
   volumes:
     redis_data:
```

###### Create and start containers
```shell
# Change to the folder that contains the yml file
$ docker-compose up
# Start docker compose in detached mode
$ docker-compose up -d
```


###### check that container are running
```shell
$ docker-compose ps
```

###### validate our docker-compose.yml
```shell
$ docker-compose config
# If you don't want to see the output and just want to check for errors
$ docker-compose config -q
```

###### read Docker Compose YAML file and it will pull the images needed
```shell
$ docker-compose pull
```

###### execute any build instructions it finds in your file
```shell
$ docker-compose build
```

###### create the containers for our docker compose yaml file without start them
```shell
$ docker-compose create
# Flags
# --force-recreate: This recreates the container even if there is no need to as nothing within the configuration has changed
# --no-recreate: This doesn't recreate a container if it already exists; this flag cannot be used with the preceding flag
# --no-build: This doesn't build the images, even if an image that needs to be built is missing
# --build: This builds the images before creating the containers
```

###### start, stop, restart, pause, and unpause the containers of a docker compose solution
```shell
$ docker-compose start
$ docker-compose stop
$ docker-compose restart
$ docker-compose pause
$ docker-compose unpause
# It is possible to target a single service by passing its name; for example, to pause and unpause the db service we would run:
$ docker-compose pause db
$ docker-compose unpause db
```

###### displays information on the processes running within each of our Docker Compose-launched containers
```shell
$ docker-compose top
# If you would like to see just one of the services
$ docker-compose top db
```

###### streams the logs from each of the running containers to screen
```shell
$ docker-compose logs
```

###### streams events
```shell
$ docker-compose events
```

###### Execute a command into the container
```shell
$ docker-compose exec worker ping -c 3 db
```

###### The run command is useful if you need to run a containerized command
```shell
$ docker-compose run --volume data_volume:/app composer install
```

###### take the service you pass the command and scale it to the number you define
```shell
$ docker-compose scale worker=3
# this actually gives the following warning:
# WARNING: The scale command is deprecated. Use the up command with the --scale flag instead.

# we should now be using is the following command
$ docker-compose up -d --scale worker=3
```

###### kill, rm, and down
```shell
$ docker-compose kill
$ docker-compose rm
# This command has the opposite effect of running docker-compose up, that will remove the containers and the networks created when running docker-compose up
$ docker-compose down
# This will remove all of the containers, networks, volumes and images (both pulled and built)
$ docker-compose down --rmi all --volumes
```
