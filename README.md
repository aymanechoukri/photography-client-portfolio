# Oussama Kajja Portfolio

A responsive photography portfolio for Oussama Kajja, focused on portraits, weddings, editorials, travel stories, and visual storytelling.

## Features

- Editorial portfolio layout with About, Work, Services, Contact, and Footer sections
- Responsive mobile navigation
- Responsive image gallery for desktop and mobile
- Scroll reveal and hover animations
- Reduced-motion support for accessibility
- WhatsApp, Instagram, and email contact links
- Optimized WebP images with lazy loading and asynchronous decoding

## Run Locally

This is a static HTML, CSS, and JavaScript project. No build step is required.

```bash
python3 -m http.server 4173
```

Open `https://oussamakajja.netlify.app/` in your browser.

## Project Structure

```text
index.html   Main portfolio page
style.css    Layout, responsive styles, and animations
script.js    Scroll reveal and mobile navigation behavior
image/       Original and optimized portfolio images
```

## Image Performance

The active page uses WebP images for smaller file sizes and faster loading. Original image files are kept in the `image/` directory as source backups.
