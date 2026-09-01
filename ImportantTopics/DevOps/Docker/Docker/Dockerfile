FROM node:latest
WORKDIR /app
COPY . .
RUN npm install -g nodemon
RUN npm install
EXPOSE 3000
# CMD ["node", "index.js"]
CMD [ "npm" ,"run","dev"]

