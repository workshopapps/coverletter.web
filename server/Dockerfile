FROM node:16-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install -g nodemon


COPY . .

EXPOSE 5000

CMD ["node", "app.js"]
