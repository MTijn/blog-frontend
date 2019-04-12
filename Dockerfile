FROM node:10.15.1-alpine as buildContainer

COPY . /app
WORKDIR /app
RUN npm install
RUN npm rebuild node-sass --force
RUN npm run build:prod

FROM node:10.15.1-alpine

WORKDIR /app
# Copy dependency definitions
COPY --from=buildContainer /app/package.json /app
COPY --from=buildContainer /app/dist/server.js /app

# Get all the code needed to run the app
COPY --from=buildContainer /app/dist /app/dist

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD ["npm", "run", "server"]
