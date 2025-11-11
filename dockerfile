# Use nginx as the base image
FROM nginx:alpine

# Copy all your web files to Nginx's default html directory
COPY . /usr/share/nginx/html

# Expose container port 80 (inside Docker)
EXPOSE 80
