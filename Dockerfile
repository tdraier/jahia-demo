from ubuntu:latest
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    rm -rf /var/lib/apt/lists/*
RUN add-apt-repository ppa:openjdk-r/ppa
RUN apt-get update
RUN apt-get -y install openjdk-8-jdk
RUN apt-get -y install apache2
RUN service apache2 restart
EXPOSE 80
EXPOSE 8090
EXPOSE 5432
COPY ./demo-front/build/ /var/www/html/
COPY ./demo-server/target/demo-server-0.0.1-SNAPSHOT.jar /home/docker/app/server.jar
COPY ./start.sh /home/docker/app/start.sh
ENTRYPOINT /home/docker/app/start.sh
WORKDIR /home/docker
