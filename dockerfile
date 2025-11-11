# Use lightweight Nginx image
FROM nginx:alpine

# Copy your static site into Nginx HTML folder
COPY . /usr/share/nginx/html

# Expose Nginx default port
EXPOSE 80
