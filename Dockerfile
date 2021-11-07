FROM alpine
RUN apk add --update nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3001
CMD ["npm", "start"]