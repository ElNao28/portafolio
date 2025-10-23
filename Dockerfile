# Build app with this node version - local
FROM node:18 AS build

# Create directory work
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build production app
RUN npm run build


# Use Nginx to run production app
FROM nginx:alpine

# Copy react build to public directory of nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]