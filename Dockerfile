# Use a lightweight Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy only package.json initially
COPY package.json ./

# Install dependencies (this will generate package-lock.json if it doesn't exist)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build && ls -la .next

# Expose the application port
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["npm", "run", "start"]
