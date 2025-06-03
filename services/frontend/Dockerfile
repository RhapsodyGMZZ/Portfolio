FROM node:22-alpine3.21

WORKDIR /app

COPY package*.json ./
# To allow images
COPY next.config.ts ./ 

RUN npm install --loglevel verbose

COPY . .

RUN npx next build

EXPOSE 3000

CMD ["npx","next","start"] 
#CMD ["npm","run","dev"] 
