# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the port the app will run on
EXPOSE 3003

# Start the server
CMD ["node", "ecomm.js"]
