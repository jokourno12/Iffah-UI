# Use the official Node.js image as the base image
FROM node:20.12.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose the port on which the Angular application will run
EXPOSE 4200

# Start the Angular application
CMD ["npm", "run", "start"]
