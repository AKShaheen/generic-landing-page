/**
 * Landing Page Configuration
 *
 * Easily customize this file to match your client's branding and requirements.
 * All colors, content, and settings can be modified here.
 */

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
}

export interface ThemeConfig {
  light: ColorPalette;
  dark: ColorPalette;
}

// Global Color Palette - Easily customizable
export const theme: ThemeConfig = {
  light: {
    primary: '#6366f1',      // Indigo - Main brand color
    secondary: '#8b5cf6',    // Purple - Secondary actions
    accent: '#ec4899',       // Pink - Highlights & CTAs
    background: '#ffffff',   // White background
    surface: '#f9fafb',      // Light gray for cards
    text: '#111827',         // Dark text
    textSecondary: '#6b7280', // Gray text
    border: '#e5e7eb',       // Light border
  },
  dark: {
    primary: '#818cf8',      // Lighter indigo
    secondary: '#a78bfa',    // Lighter purple
    accent: '#f472b6',       // Lighter pink
    background: '#0f172a',   // Dark blue-gray
    surface: '#1e293b',      // Lighter dark surface
    text: '#f8fafc',         // Light text
    textSecondary: '#94a3b8', // Gray text
    border: '#334155',       // Dark border
  }
};

// Landing Page Content Configuration
export const config = {
  // Company/Brand Info
  brand: {
    name: 'YourBrand',
    tagline: 'Building the Future',
    logo: '✨', // You can replace with an actual logo component
  },

  // Hero Section
  hero: {
    title: 'Transform Your Business',
    subtitle: 'With Next-Generation Solutions',
    description: 'Empower your team with cutting-edge technology that scales with your ambitions. Join thousands of companies already transforming their workflow.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Learn More',
    image: '🚀', // Placeholder - replace with actual image
  },

  // Features Section
  features: {
    title: 'Everything You Need',
    subtitle: 'Powerful features to accelerate your success',
    items: [
      {
        title: 'Lightning Fast',
        description: 'Optimized performance that keeps your workflow running smoothly without any delays.',
        icon: 'speed',
      },
      {
        title: 'Secure by Default',
        description: 'Enterprise-grade security measures to protect your data and maintain privacy.',
        icon: 'security',
      },
      {
        title: 'Easy Integration',
        description: 'Seamlessly connect with your existing tools and platforms in minutes.',
        icon: 'integration',
      },
      {
        title: 'Real-time Analytics',
        description: 'Get instant insights with powerful analytics and reporting tools.',
        icon: 'analytics',
      },
      {
        title: '24/7 Support',
        description: 'Our dedicated team is always here to help you succeed.',
        icon: 'support',
      },
      {
        title: 'Scalable Solution',
        description: 'Grow without limits. Our platform scales with your business needs.',
        icon: 'scalable',
      },
    ],
  },

  // Stats Section
  stats: {
    title: 'Trusted by Industry Leaders',
    subtitle: 'Join thousands of satisfied customers worldwide',
    items: [
      { value: '50K+', label: 'Active Users' },
      { value: '99.9%', label: 'Uptime' },
      { value: '150+', label: 'Countries' },
      { value: '4.9/5', label: 'Rating' },
    ],
  },

  // Testimonials Section
  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Real stories from real customers',
    items: [
      {
        name: 'Sarah Johnson',
        role: 'CEO, TechCorp',
        avatar: 'https://i.pravatar.cc/150?img=1',
        content: 'This solution has completely transformed how we operate. The ROI was evident within the first month. Highly recommended!',
        rating: 5,
      },
      {
        name: 'Michael Chen',
        role: 'Product Manager, InnovateLab',
        avatar: 'https://i.pravatar.cc/150?img=2',
        content: 'The ease of integration and intuitive interface made adoption seamless across our entire team. Game changer!',
        rating: 5,
      },
      {
        name: 'Emily Rodriguez',
        role: 'CTO, FutureScale',
        avatar: 'https://i.pravatar.cc/150?img=3',
        content: 'Outstanding performance and reliability. The support team is incredibly responsive. Best decision we made this year.',
        rating: 5,
      },
    ],
  },

  // CTA Section
  cta: {
    title: 'Ready to Get Started?',
    description: 'Join thousands of companies already using our platform to transform their business.',
    buttonText: 'Start Your Free Trial',
    note: 'No credit card required • Cancel anytime',
  },

  // Footer
  footer: {
    description: 'Building innovative solutions for tomorrow\'s challenges.',
    links: {
      product: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Security', href: '#security' },
        { label: 'Roadmap', href: '#roadmap' },
      ],
      company: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
      ],
      resources: [
        { label: 'Documentation', href: '#docs' },
        { label: 'API Reference', href: '#api' },
        { label: 'Support', href: '#support' },
        { label: 'Community', href: '#community' },
      ],
      legal: [
        { label: 'Privacy', href: '#privacy' },
        { label: 'Terms', href: '#terms' },
        { label: 'License', href: '#license' },
      ],
    },
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
      facebook: '#',
    },
    copyright: `© ${new Date().getFullYear()} YourBrand. All rights reserved.`,
  },
};
