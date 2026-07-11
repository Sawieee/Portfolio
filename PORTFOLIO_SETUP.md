# Premium Cyberpunk Portfolio Setup Guide

Welcome to your premium cyberpunk portfolio! This guide will help you customize and maintain your portfolio.

## 🎨 Portfolio Features

- **Modern Design**: Cyberpunk aesthetic with neon cyan and purple accents
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Data-Driven**: All content stored in `/lib/portfolio-data.ts` for easy updates
- **8 Main Sections**: Hero, About, Skills, Experience, Projects, Badges, Contact, Footer
- **Particle Background**: Animated canvas background in hero section
- **Project Filtering**: Filter projects by category
- **Contact Form**: Fully functional contact form
- **SEO Optimized**: Meta tags and structured data

## 📝 Customization Guide

### 1. Update Your Profile Data

Edit `/lib/portfolio-data.ts` to update your personal information:

```typescript
export const portfolioData = {
  profile: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio",
    email: "your@email.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, State",
    photo: "/profile.png",
    resume: "/resume.pdf",
  },
  // ... rest of data
};
```

### 2. Update Your Profile Photo

1. Replace `/public/profile.png` with your profile photo (dimensions: square, recommended 400x400px or larger)
2. Update the `photo` field in `portfolio-data.ts` if needed

### 3. Add Your Skills

Edit the `skills` array in `/lib/portfolio-data.ts`:

```typescript
skills: [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  // ... add more categories
]
```

### 4. Add Your Experience

Edit the `experience` array in `/lib/portfolio-data.ts`:

```typescript
experience: [
  {
    title: "Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "Job description",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3",
    ],
  },
  // ... add more experiences
]
```

### 5. Add Your Projects

Edit the `projects` array in `/lib/portfolio-data.ts`:

```typescript
projects: [
  {
    title: "Project Title",
    category: "Web App",
    description: "Project description",
    image: "/projects/project-1.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://project-link.com",
    featured: true,
  },
  // ... add more projects
]
```

Replace project images in `/public/projects/` with your actual project screenshots.

### 6. Add Your Certifications/Badges

Edit the `badges` array in `/lib/portfolio-data.ts`:

```typescript
badges: [
  {
    title: "Certification Title",
    issuer: "Issuer Name",
    date: "2023",
    image: "/badges/badge-1.png",
  },
  // ... add more badges
]
```

### 7. Update Social Links

Edit the `social` array in `/lib/portfolio-data.ts`:

```typescript
social: [
  { platform: "GitHub", url: "https://github.com/yourprofile", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "Linkedin" },
  // ... add more social links
]
```

### 8. Update Metadata

Edit `/app/layout.tsx` to update SEO information:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description',
  // ... update other fields
};
```

## 📁 Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── globals.css         # Global styles and animations
│   └── page.tsx            # Main page
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── footer.tsx          # Footer
│   ├── ui/
│   │   ├── glass-card.tsx  # Reusable glass card component
│   │   ├── glow-button.tsx # Reusable glow button component
│   │   └── neon-border.tsx # Reusable neon border component
│   └── sections/
│       ├── hero.tsx        # Hero section with particles
│       ├── about.tsx       # About section
│       ├── skills.tsx      # Skills section
│       ├── experience.tsx  # Experience timeline
│       ├── projects.tsx    # Projects with filtering
│       ├── badges.tsx      # Certifications section
│       └── contact.tsx     # Contact form
├── lib/
│   └── portfolio-data.ts   # All portfolio content
└── public/
    ├── profile.png        # Profile photo
    ├── resume.pdf         # Your resume
    ├── projects/          # Project images
    └── badges/            # Badge/certification images
```

## 🎨 Color Customization

The cyberpunk theme uses the following colors defined in `/app/globals.css`:

- **Primary Background**: `#050816` (dark navy)
- **Primary Accent**: `#22d3ee` (cyan)
- **Secondary Accent**: `#8b5cf6` (purple)
- **Text Color**: `#e0e0ff` (light purple-white)
- **Muted**: `#1f2937` (dark gray)

To change the theme, update the CSS variables in the `:root` section of `/app/globals.css`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on each push

### Manual Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📧 Contact Form Setup

The contact form currently logs submissions to the browser console. To make it functional:

1. **Using Vercel Analytics**: Set up a form endpoint
2. **Using Formspree**: Replace form submission in `components/sections/contact.tsx`
3. **Using your backend**: Post to your own API endpoint

Example with Formspree:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Post to Formspree endpoint
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  });
};
```

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format for faster loading
2. **Lazy Loading**: Images are automatically lazy-loaded with Next.js
3. **Code Splitting**: Sections load only when needed
4. **Animations**: Animations are GPU-accelerated for smooth performance

## 🔧 Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run linter
pnpm lint
```

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design
- Touch-friendly navigation
- Optimized typography for mobile
- Hamburger menu on smaller screens

## ✨ Animation Customization

Custom animations are defined in `/app/globals.css`:
- `glow`: Glowing effect
- `float`: Floating animation
- `pulse-border`: Pulsing border
- `neon-glow`: Neon text effect
- `scan-line`: Scan line effect

Adjust animation durations and intensities in the keyframes.

## 🐛 Troubleshooting

### Images Not Loading
- Check image paths in `portfolio-data.ts`
- Ensure images are in `/public/` directory
- Verify image extensions match file names

### Animations Not Working
- Clear browser cache
- Restart development server with `pnpm dev`
- Check console for JavaScript errors

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check `/app/globals.css` for conflicting styles
- Verify color variables are set in `:root`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 📄 License

This portfolio template is yours to use and customize. Feel free to use it for your personal portfolio!

---

Happy coding! Feel free to customize and make this portfolio your own! 🚀
