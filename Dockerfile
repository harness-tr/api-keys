# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Override the inherited entrypoint
ENTRYPOINT ["node"]

# Start the server
CMD ["server.js"]