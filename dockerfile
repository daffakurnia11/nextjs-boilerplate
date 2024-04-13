# Use an official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the entire project directory to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE ${PORT:-3000}

# Set environment variable to enable hot reload in development
ENV NODE_ENV=development

# Start the React app
CMD ["yarn",  "dev"]
