# Dockerfile for frontend

# Use the official Node.js image as the base for building the app
FROM node:18 AS build
WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Set build-time environment variables
ARG VITE_CURRENT_HOST
ARG VITE_BACKEND_URL
ARG VITE_LANDING_PAGE_LINK
ENV VITE_CURRENT_HOST=$VITE_CURRENT_HOST
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_LANDING_PAGE_LINK=$VITE_LANDING_PAGE_LINK

# Copy the entire application and build it
COPY . .
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:1.23
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to access the application
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
