FROM node:slim

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["./run_app.sh"]
