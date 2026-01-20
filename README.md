# mypage
Lightweight Portfolio Website

## About

This is a lightweight static portfolio website for Adrian Dimaano. The site has been optimized to run efficiently on low-resource devices like Raspberry Pi.

## Features

- **Static HTML/CSS/JS**: No React or heavy frameworks
- **Lightweight**: Minimal dependencies for optimal performance
- **Responsive Design**: Works on all device sizes
- **Easy Deployment**: Simple to host on any web server

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Deployment

For Raspberry Pi or other low-resource devices:

1. Copy the `index.html` file to your web server directory
2. Serve using a lightweight web server like nginx or lighttpd
3. No build process required - just serve the static files

## Project Structure

- `index.html` - Main HTML file with embedded CSS and JavaScript
- `package.json` - Minimal dependencies (live-server for development)

## Technologies Used

- HTML5
- CSS3 (with Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome for icons

## Performance Optimizations

- No React runtime overhead
- Minimal JavaScript
- Efficient CSS with no frameworks
- Single HTML file for easy deployment
- No build process required
