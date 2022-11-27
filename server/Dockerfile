FROM node:16-alpine AS development
ENV NODE_ENV development

WORKDIR /server

COPY package.json .
COPY package-lock.json .

RUN npm install -g nodemon


COPY . .

EXPOSE 5001

CMD ["node", "app.js"]
