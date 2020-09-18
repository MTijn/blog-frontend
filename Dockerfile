FROM node:14.8.0-alpine3.11 as buildContainer

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build:ssr

FROM node:14.8.0-alpine3.11

WORKDIR /app
# Copy dependency definitions
COPY --from=buildContainer /app/package.json /app
COPY --from=buildContainer /app/dist/server.js /app

# Get all the code needed to run the app
COPY --from=buildContainer /app/dist /app/dist

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD ["npm", "run", "serve:ssr"]
