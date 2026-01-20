# Lightweight Docker image for static portfolio website
FROM nginx:alpine

# Copy the static HTML file
COPY index.html /usr/share/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
