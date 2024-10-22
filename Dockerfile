FROM node:22.2.0

WORKDIR /src/app

COPY . .
RUN npm install 
RUN npm run build
CMD ["npm", "start"]