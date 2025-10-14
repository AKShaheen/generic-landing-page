# Landing Page Customization Guide

This landing page is built to be fully customizable for your clients. All configuration is centralized in `src/config.ts` for easy modifications.

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization Guide

### 1. Color Palette (src/config.ts)

Change the entire color scheme by modifying the `theme` object:

```typescript
export const theme: ThemeConfig = {
  light: {
    primary: '#6366f1',      // Main brand color
    secondary: '#8b5cf6',    // Secondary actions
    accent: '#ec4899',       // Highlights & CTAs
    background: '#ffffff',   // Page background
    surface: '#f9fafb',      // Card backgrounds
    text: '#111827',         // Main text color
    textSecondary: '#6b7280', // Secondary text
    border: '#e5e7eb',       // Border color
  },
  dark: {
    // Dark mode colors
  }
};
```

**Example:** For a blue-green theme:
```typescript
primary: '#0ea5e9',    // Sky blue
secondary: '#06b6d4',  // Cyan
accent: '#10b981',     // Emerald green
```

### 2. Brand Information

Update your brand name and tagline:

```typescript
brand: {
  name: 'YourCompany',
  tagline: 'Your Custom Tagline',
  logo: '✨', // Replace with logo component or emoji
}
```

### 3. Hero Section Content

Customize the main landing section:

```typescript
hero: {
  title: 'Your Main Headline',
  subtitle: 'Your Compelling Subheadline',
  description: 'Your value proposition...',
  ctaPrimary: 'Get Started',
  ctaSecondary: 'Learn More',
}
```

### 4. Features Section

Add, remove, or modify features:

```typescript
features: {
  items: [
    {
      title: 'Feature Name',
      description: 'Feature description...',
      icon: 'speed', // Options: speed, security, integration, analytics, support, scalable
    },
    // Add more features...
  ]
}
```

Available icons:
- `speed` - Lightning bolt
- `security` - Shield
- `integration` - Puzzle piece
- `analytics` - Chart
- `support` - Support icon
- `scalable` - Trending up

### 5. Statistics

Update your company stats:

```typescript
stats: {
  items: [
    { value: '100K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    // Add more stats...
  ]
}
```

### 6. Testimonials

Add customer testimonials:

```typescript
testimonials: {
  items: [
    {
      name: 'Customer Name',
      role: 'Job Title, Company',
      avatar: 'https://example.com/avatar.jpg',
      content: 'Testimonial text...',
      rating: 5,
    },
    // Add more testimonials...
  ]
}
```

### 7. Footer Links

Customize footer navigation:

```typescript
footer: {
  links: {
    product: [
      { label: 'Features', href: '#features' },
      // Add more links...
    ],
    company: [...],
    resources: [...],
    legal: [...],
  },
  social: {
    twitter: 'https://twitter.com/yourcompany',
    github: 'https://github.com/yourcompany',
    linkedin: 'https://linkedin.com/company/yourcompany',
    facebook: 'https://facebook.com/yourcompany',
  }
}
```

## Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/YourSection.tsx`
2. Import and add it to `src/App.tsx`
3. Add configuration to `src/config.ts`

### Changing Animations

Animations are defined in `src/index.css`. Modify keyframes or add new ones:

```css
@keyframes your-animation {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Custom Icons

To use custom icons:

1. Import from react-icons: `import { YourIcon } from 'react-icons/hi'`
2. Update the `iconMap` in components
3. Add icon name to config

## Responsive Design

The landing page is fully responsive:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)

## Theme Switching

The dark/light theme toggle is automatic:
- Uses localStorage to save preference
- Respects system preference
- Smooth transitions between themes

## Performance Tips

1. **Images**: Replace placeholder images with optimized WebP format
2. **Fonts**: The page uses system fonts by default. To add custom fonts, update `src/index.css`
3. **Build**: Run `npm run build` to create optimized production bundle

## Deployment

Deploy to any static hosting service:

- **Vercel**: `vercel`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Build and push `dist` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Need Help?

The codebase is well-commented and uses TypeScript for type safety. Check component files for inline documentation.

## File Structure

```
src/
├── components/        # All UI components
├── contexts/         # React contexts (Theme)
├── hooks/           # Custom React hooks
├── config.ts        # Main configuration file
├── index.css        # Global styles & animations
└── App.tsx          # Main app component
```

Happy customizing! 🚀
