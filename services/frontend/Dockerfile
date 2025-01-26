FROM node:21-alpine3.18

WORKDIR /app

COPY package*.json ./
# To allow images
COPY next.config.ts ./ 

RUN npm install

COPY . .

# RUN npx next build

# CMD ["npx","next","start"] 
EXPOSE 3000

CMD ["npm","run","dev"] 
