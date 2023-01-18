FROM node:17-alpine

WORKDIR /frontend

ENV PATH="./node_modules/.bin/:$PATH"

COPY . .

RUN npm install

CMD ["npm", "run", "start"]
