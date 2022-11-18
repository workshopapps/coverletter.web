FROM node:carbon
WORKDIR /client
COPY package* .json

RUN npm install
# RUN npm start
COPY . .
EXPOSE 3000
CMD ["npm", "start"]








