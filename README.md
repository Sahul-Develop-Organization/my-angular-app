# In project root
docker build -t sahul/express-server:latest ./server
docker build -t sahul/angular-client:latest ./client

docker push sahul/express-server:latest
docker push sahul/angular-client:latest
