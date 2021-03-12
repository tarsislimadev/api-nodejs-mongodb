FROM node:15.11

ENV DB_URL=mongodb://database:27017/south

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run migrations

CMD npm start
