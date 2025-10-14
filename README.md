# Modern Landing Page Template

A stunning, fully customizable landing page built with React, TypeScript, and Tailwind CSS. Perfect for showcasing in your portfolio and adapting to client requirements.

![Modern Landing Page](https://img.shields.io/badge/React-19.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4)

## Features

- **Dark/Light Theme Toggle** - Automatic theme switching with localStorage persistence
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Eye-catching scroll animations and transitions
- **Customizable Color Palette** - Easy-to-modify color system
- **Modern Components**:
  - Hero section with animated background
  - Feature cards with icons
  - Stats counter with animation
  - Testimonials carousel
  - Call-to-action section
  - Comprehensive footer
- **TypeScript** - Full type safety
- **Performance Optimized** - Fast load times and smooth interactions
- **SEO Ready** - Semantic HTML structure

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Node Version Note

This project uses Vite 7+ which requires Node.js 20.19+ or 22.12+. If you're on an older version:

1. Upgrade Node.js to the latest LTS version, OR
2. Use a version manager like `nvm`:
   ```bash
   nvm install 22
   nvm use 22
   ```

## Project Structure

```
landing-page/
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx    # Navigation with theme toggle
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Features.tsx  # Features grid
│   │   ├── Stats.tsx     # Statistics section
│   │   ├── Testimonials.tsx  # Testimonials carousel
│   │   ├── CTA.tsx       # Call-to-action
│   │   └── Footer.tsx    # Footer with links
│   ├── contexts/
│   │   └── ThemeContext.tsx  # Theme management
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts  # Scroll animations
│   │   └── useCountUp.ts  # Number animation
│   ├── config.ts         # **Main configuration file**
│   ├── index.css         # Global styles & animations
│   └── App.tsx           # Main application
├── CUSTOMIZATION.md      # Detailed customization guide
└── README.md
```

## Customization

**All content and styling can be customized via `src/config.ts`!**

### Change Colors

```typescript
export const theme: ThemeConfig = {
  light: {
    primary: '#6366f1',    // Your brand color
    secondary: '#8b5cf6',  // Secondary color
    accent: '#ec4899',     // Accent color
    // ... more colors
  }
};
```

### Update Content

```typescript
export const config = {
  brand: {
    name: 'YourBrand',
    tagline: 'Your Tagline',
  },
  hero: {
    title: 'Your Headline',
    subtitle: 'Your Subheadline',
    // ... more content
  },
  // ... all sections configurable
};
```

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for the complete guide.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Vite** - Build tool
- **React Icons** - Icon library

## Key Features in Detail

### Theme System
- Automatic dark/light mode detection
- Manual toggle with smooth transitions
- Persists user preference
- CSS variables for dynamic theming

### Animations
- Fade-in, slide, and scale animations
- Intersection Observer for scroll triggers
- Smooth number counting
- Floating elements
- Custom keyframe animations

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized layouts for all screen sizes
- Touch-friendly mobile navigation

### Performance
- Code splitting ready
- Optimized images
- Minimal dependencies
- Fast initial load
- Smooth 60fps animations

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Portfolio Tips

When showcasing this in your portfolio:

1. **Customize it** - Make it unique with your own color scheme
2. **Add case studies** - Show different variations for different "clients"
3. **Performance metrics** - Show Lighthouse scores
4. **Before/After** - Show the customization process
5. **Live demos** - Deploy multiple themed versions

## License

MIT License - feel free to use this for client projects!

## Contributing

This is a portfolio template, but suggestions are welcome! Open an issue or PR.

## Support

For customization help, check [CUSTOMIZATION.md](CUSTOMIZATION.md) or review the inline code comments.

## Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Avatars by [Pravatar](https://pravatar.cc/)
- Built with modern web standards

---

**Made with ❤️ and TypeScript**

Ready to customize for your next client! 🚀
