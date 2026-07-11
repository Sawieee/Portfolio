# Premium Cyberpunk Portfolio 🚀

A stunning, data-driven portfolio website built with Next.js 16, React 19, Tailwind CSS, and Framer Motion. Features a modern cyberpunk aesthetic with smooth animations, responsive design, and easy customization.

## ✨ Features

### Design & Animation
- **Cyberpunk Aesthetic**: Neon cyan and purple color scheme with dark background
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Particle Background**: Animated canvas particles in hero section
- **Glassmorphism**: Modern glass-effect cards with blur and transparency
- **Responsive Design**: Mobile-first approach that works on all devices

### Sections
1. **Hero**: Eye-catching introduction with animated particles
2. **About**: Profile info with stats and photo showcase
3. **Skills**: Categorized skills with tags
4. **Experience**: Timeline view of work history
5. **Projects**: Filterable project gallery with featured items
6. **Badges**: Certifications and credentials showcase
7. **Contact**: Functional contact form
8. **Navigation**: Sticky navbar with smooth scrolling

### Technical Features
- **Data-Driven Content**: All content in `/lib/portfolio-data.ts` for easy updates
- **SEO Optimized**: Meta tags, structured data, and social sharing support
- **Performance**: Image optimization, lazy loading, and code splitting
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Dark Theme**: Always-on dark mode optimized for reading

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Type Safety**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Installation

### Option 1: Using shadcn CLI (Recommended)

```bash
npx shadcn-ui@latest init --cwd=./my-portfolio --preset=new-york
cd my-portfolio
```

Then copy the portfolio files into the project.

### Option 2: Clone and Install

```bash
git clone <repository-url> my-portfolio
cd my-portfolio
pnpm install
pnpm dev
```

Visit `http://localhost:3000` to see your portfolio!

## 🎨 Customization

### Quick Start
1. Edit `/lib/portfolio-data.ts` with your information
2. Replace images in `/public/` with your own
3. Update metadata in `/app/layout.tsx`
4. Deploy to Vercel

### Detailed Setup
See [PORTFOLIO_SETUP.md](./PORTFOLIO_SETUP.md) for complete customization guide.

## 📝 Content Structure

All content is stored in `/lib/portfolio-data.ts`:

```typescript
export const portfolioData = {
  profile: { ... },      // Your personal info
  about: { ... },        // About section
  skills: [ ... ],       // Skill categories
  experience: [ ... ],   // Work history
  projects: [ ... ],     // Portfolio projects
  badges: [ ... ],       // Certifications
  social: [ ... ],       // Social links
};
```

No need to edit components—just update the data file!

## 📂 Project Structure

```
components/
├── navbar.tsx                    # Navigation bar
├── footer.tsx                    # Footer
├── ui/
│   ├── glass-card.tsx           # Reusable glass card
│   ├── glow-button.tsx          # Reusable glow button
│   └── neon-border.tsx          # Reusable neon border
└── sections/
    ├── hero.tsx                 # Hero with particles
    ├── about.tsx                # About section
    ├── skills.tsx               # Skills grid
    ├── experience.tsx           # Experience timeline
    ├── projects.tsx             # Project gallery
    ├── badges.tsx               # Certifications
    └── contact.tsx              # Contact form

lib/
└── portfolio-data.ts            # All content

app/
├── layout.tsx                   # Root layout
├── page.tsx                     # Main page
├── globals.css                  # Global styles
└── favicon.ico

public/
├── profile.png                  # Your photo
├── resume.pdf                   # Your resume
├── projects/                    # Project images
└── badges/                      # Badge images
```

## 🎨 Customization Examples

### Add a New Skill Category

```typescript
// In lib/portfolio-data.ts
skills: [
  // ... existing skills
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
]
```

### Add a New Project

```typescript
// In lib/portfolio-data.ts
projects: [
  // ... existing projects
  {
    title: "My Awesome Project",
    category: "Web App",
    description: "Project description",
    image: "/projects/my-project.png",
    tags: ["React", "Node.js"],
    link: "https://project-link.com",
    featured: true,
  },
]
```

### Modify Colors

Edit the CSS variables in `/app/globals.css`:

```css
:root {
  --background: #050816;      /* Dark navy */
  --primary: #22d3ee;         /* Cyan */
  --secondary: #8b5cf6;       /* Purple */
  --foreground: #e0e0ff;      /* Light text */
}
```

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on each push

```bash
# Or manually deploy
vercel deploy
```

### Deploy to Other Platforms

```bash
# Build for production
pnpm build

# Run production build locally
pnpm start

# Then deploy the .next folder to your hosting
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 768px - 1024px (md, lg)
- **Desktop**: > 1024px (xl)

All sections are optimized for each breakpoint.

## ⚡ Performance

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Sections load on-demand
- **CSS Optimization**: Tailwind CSS with purging
- **Animation Performance**: GPU-accelerated Framer Motion
- **Lighthouse Score**: Typically 90+ on all metrics

## 🔧 Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 📧 Contact Form Setup

The contact form currently logs to console. To enable email delivery:

### Option 1: Formspree (Recommended)
```typescript
// components/sections/contact.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
};
```

### Option 2: Your Own Backend API
```typescript
// Post to your own endpoint
await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

## 🌐 SEO

- Meta tags for Twitter, Open Graph
- Semantic HTML structure
- Mobile-friendly viewport settings
- Structured data support
- Sitemap ready

Edit `/app/layout.tsx` to customize metadata.

## ♿ Accessibility

- Semantic HTML elements (`main`, `nav`, `section`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

## 🔒 Best Practices

- No hardcoded credentials in code
- Environment variables ready
- Type-safe with TypeScript
- Component reusability
- DRY code principles

## 📚 Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

Feel free to fork, modify, and improve this template for your own use!

## 📄 License

MIT License - Feel free to use this template for personal and commercial projects.

## 💡 Tips

- Update `portfolio-data.ts` frequently with new projects
- Keep images optimized (< 200KB per image)
- Use descriptive alt text for all images
- Test on multiple devices before deploying
- Monitor performance with Lighthouse
- Keep dependencies updated

## 🆘 Support

For issues or questions:
1. Check [PORTFOLIO_SETUP.md](./PORTFOLIO_SETUP.md)
2. Review the component files for examples
3. Consult Next.js and Tailwind documentation
4. Check browser console for errors

---

**Happy coding! Make this portfolio your own and showcase your amazing work! 🚀**
