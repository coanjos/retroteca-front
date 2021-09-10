FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build -- --prod --output-path=dist
EXPOSE 4200
CMD ["npm", "run", "start"]
