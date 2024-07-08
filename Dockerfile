FROM node:20

WORKDIR /app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

COPY .next ./.next

CMD ["npm", "run", "dev"]