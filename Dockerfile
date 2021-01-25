FROM node:10

# Add wait-for-it
# I am not sure whether or not to make the owner node.  Don't know if node user has enough 
# permisssions to run it.  It is ran from docker-compose yaml.
# COPY wait-for-it.sh /wait-for-it.sh
# RUN chmod +x /wait-for-it.sh
# COPY ./deploy.sh /
# RUN chmod +x /deploy.sh

# If a WORKDIR isn’t set, Docker will create one by default, so it’s a good idea to set it explicitly.
WORKDIR /home/node/App13319/React13319
COPY ./package*.json ./
RUN npm install


# Next, copy your application code with the appropriate permissions to the application directory on the container:
# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /home/node/App13319/React13319

# build the React app.
# RUN /deploy.sh

# ENV PORT 3000
EXPOSE 3000 
# sudo docker build –t brentgroves/app13319:0.13.prod . 
# I think this cmd gets overriden by the docker compose yaml script.
# CMD [ "npm", "run", "all" ]