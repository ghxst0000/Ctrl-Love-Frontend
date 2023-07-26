FROM node:20-alpine3.17 as build

WORKDIR /Ctrl-Love
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "dev"]