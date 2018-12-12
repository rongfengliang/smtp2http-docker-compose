FROM node:9
WORKDIR /app
COPY send/ /app/
RUN  yarn
CMD [ "yarn","send" ]