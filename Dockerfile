FROM node:16.13 AS builder

WORKDIR /app
COPY package.json .
RUN npm i -g @nestjs/cli
RUN yarn

WORKDIR /app
COPY . .
RUN yarn build
RUN chown node:node .
EXPOSE 3000

CMD ["yarn", "start:dev"]
