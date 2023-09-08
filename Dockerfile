FROM node:18.12.1-slim

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY src /app/src
COPY public /app/public
COPY tsconfig.json /app/tsconfig.json
COPY .env /app/.env


EXPOSE 3000
CMD npm start