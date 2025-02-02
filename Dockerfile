FROM node:16
WORKDIR /opt/lavamusic/

# Copy dependencies first to improve layer caching
COPY package*.json ./
RUN npm install --production
RUN npx prisma generate

COPY . .

CMD [ "npm", "start" ]
