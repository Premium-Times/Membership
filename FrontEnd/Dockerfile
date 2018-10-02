FROM node:10

# create app directory
RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]