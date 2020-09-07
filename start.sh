service apache2 restart
echo "init db ... "
echo "n'hesites pas a checker la bdd en passant par adminer port 8080..."
echo "l'appli va demarrer sur le port 3000 ... "
echo "check build files front : ... "
ls /var/www/html/
echo "starting back ... "
java -jar /home/docker/app/server.jar
