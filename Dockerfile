FROM node:alpine

#RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]