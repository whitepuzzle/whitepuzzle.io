# WhitePuzzle Astro Theme

A modern, responsive Astro theme for digital consultancies and tech companies.

## Features

- 🚀 Built with Astro 4.0
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Optimized for performance
- 🔧 Easy to customize
- 📄 SEO-friendly
- 🌙 Modern gradient design
- ✨ Smooth animations

## Quick Start

1. Clone or download this theme
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:4321 in your browser

## Customization

### Colors
Edit the color palette in `tailwind.config.mjs`:
```javascript
colors: {
  primary: {
    // Your brand colors
  }
}
```

### Content
- Edit content in component files in `src/components/`
- Modify the main page in `src/pages/index.astro`
- Update company info in `src/components/Footer.astro`

### Deployment

Build for production:
```bash
npm run build
```

The built site will be in the `dist/` directory, ready to deploy to any static hosting service.
