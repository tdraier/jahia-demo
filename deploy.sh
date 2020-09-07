echo "building front started ... "
cd demo-front
npm install
npm run build
echo "building back started ... "
cd ..
cd demo-server
mvn clean install
cd ..
ls
echo "start deploying using docker-compose : "
echo "1) building image : "
docker build . -t demo
echo "2) starting services : "
docker-compose -f stack_demo.yml up
