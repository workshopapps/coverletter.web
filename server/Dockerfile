FROM node:16-alpine AS development
ENV NODE_ENV development
ENV env_name GOOGLE_CLIENT_ID="55786759606-5d4a3tajvph8a153kcuksk0b800urrva.apps.googleusercontent.com"
ENV env_name GOOGLE_CLIENT_SECRET="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"

WORKDIR /server

COPY package.json .
COPY package-lock.json .

RUN npm install -g nodemon


COPY . .

EXPOSE 5001

CMD ["node", "app.js"]
