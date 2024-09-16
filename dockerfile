#Base image taken from:https://hub.docker.com/r/cypress/browsers/tags
FROM cypress/browsers:node-20.6.1-chrome-116.0.5845.187-1-ff-117.0-edge-116.0.1938.76-1
#Create the folder where our project will be stored
RUN mkdir /uat-test
#We make it our workdirectory
WORKDIR /uat-test
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./jsconfig.json .
COPY ./.cypress-cucumber-preprocessorrc.json .
COPY ./cucumber-html-report.js .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD [""]