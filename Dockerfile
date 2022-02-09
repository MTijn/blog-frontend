FROM node:current-alpine3.15 as buildContainer

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build:ssr

FROM node:current-alpine3.15

WORKDIR /app
# Copy dependency definitions
COPY --from=buildContainer /app/package.json /app

# Get all the code needed to run the app
COPY --from=buildContainer /app/dist /app/dist

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD ["npm", "run", "serve:ssr"]
