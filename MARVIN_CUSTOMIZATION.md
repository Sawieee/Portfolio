# Marvin Jay Nilayan - Premium Portfolio Customization Guide

## Welcome!

Your premium cyberpunk portfolio has been fully personalized with your information and ready to showcase your skills as a 4th-year CS student at Holy Angel University.

## What's Included

### ✨ Personalized Sections

1. **Hero Section** - Two-column layout with your profile image, name, title, bio, and stats
   - Glowing animated frame around your profile photo
   - Floating badge showing "4th Yr CS Student"
   - Quick stats: 15+ Projects, 20+ Technologies, 4 Years in CS, 8+ Hackathons
   - Direct social links (GitHub, LinkedIn, Twitter, Email)

2. **About Section** - Your HAU story with profile image and achievements
   - Custom bio about your CS education at Holy Angel University
   - Key statistics about your projects and accomplishments

3. **Skills Section** - 4 skill categories you master
   - Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Vue.js, React Native
   - Backend & Database: Node.js, Express.js, Python, PostgreSQL, MongoDB, Firebase
   - AI & Data: Machine Learning, TensorFlow, Data Analysis, LLM Integration, OpenAI API
   - Tools & DevOps: Git & GitHub, Docker, AWS, Figma, Agile/Scrum, REST APIs

4. **Experience Section** - Your journey from Year 1 to Senior
   - Senior Year (2024-Present): Research & Development at HAU
   - Freelance work (2023-Present)
   - Internship experience (2023-2024)
   - Third Year academic projects (2023-2024)

5. **Projects Section** - Showcase your best work
   - HAU Academic Mapping (HAU MAP) - Featured AI-powered academic roadmap
   - U Companion Mobile App - Featured university companion app
   - AI Learning Assistant - Featured ML tutoring system
   - Real-Time Chat Application, E-Learning Platform, Portfolio Website

6. **Badges Section** - Your certifications and achievements
   - CCNA Routing & Switching (Cisco)
   - AWS Certified Cloud Practitioner
   - AI & Machine Learning Fundamentals
   - Full-Stack Web Development
   - Mobile App Development
   - Dean's List Honor

7. **Contact Section** - Easy ways to reach you
   - Contact form for direct messages
   - Social media links

## How to Customize

### Update Your Information

All your content is stored in a single, easy-to-edit file:

**File:** `/lib/portfolio-data.ts`

This TypeScript file contains all your portfolio data structured as objects:

```typescript
// Update your profile
profile: {
  name: "Marvin Jay Nilayan",
  title: "CS Student & Full-Stack Developer",
  bio: "Your bio here",
  email: "your-email@example.com",
  phone: "+63 (905) XXX-XXXX",
  photo: "/profile.png",
}

// Update skills, experience, projects, badges
```

### Replace Images

1. **Profile Photo:**
   - Replace `/public/profile.png` with your professional photo
   - Recommended: 500x500px square image
   - Will display with glowing cyan/purple frame in hero section

2. **Project Images:**
   - Update `/public/projects/project-1.png` through `project-6.png`
   - Recommended: 1200x800px landscape images
   - Shows in the Projects section gallery

3. **Badge/Certification Images:**
   - Update `/public/badges/` with your actual certification images
   - Optional - icons are used as fallback

### Update Your Projects

Edit `/lib/portfolio-data.ts` and update the projects array:

```typescript
{
  title: "Your Project Name",
  category: "Web App", // or "Mobile App", "Design"
  description: "What it does and why it matters",
  image: "/projects/project-X.png",
  tags: ["React", "Next.js", "AI"],
  link: "https://github.com/yourusername/project-name",
  featured: true, // Shows first
}
```

### Update Your Experience

Edit the experience array to add/update your roles:

```typescript
{
  title: "Your Title",
  company: "Holy Angel University / Company Name",
  period: "2024 - Present",
  description: "What you did and learned",
  achievements: [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3",
  ],
}
```

### Update Your Skills

Add or update skill categories:

```typescript
{
  category: "Your Category",
  items: ["Skill 1", "Skill 2", "Skill 3", ...]
}
```

## Design Features

### Color Scheme
- **Primary Brand**: Cyan (#22d3ee) - Fresh, tech-forward
- **Secondary**: Purple (#8b5cf6) - Elegant, creative
- **Background**: Dark navy (#050816) - Modern cyberpunk aesthetic
- **Accents**: White/Gray for contrast

### Animations
- Smooth scroll-triggered fade-ins
- Floating and glitch effects on text
- Hover state transformations
- Animated particles and grid in background
- Floating badge in hero section

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Hamburger menu on mobile
- Touch-friendly buttons

## Adding New Sections (Advanced)

To add a new section like "Blog" or "Testimonials":

1. Create a new file: `/components/sections/your-section.tsx`
2. Use the pattern from existing sections
3. Import and add to `/app/page.tsx`:
   ```tsx
   import { YourSection } from '@/components/sections/your-section';
   // Then add <YourSection /> in the JSX
   ```

## Deployment

### Deploy to Vercel (Recommended)

```bash
# If using GitHub
git push origin main  # Vercel auto-deploys

# Or use Vercel CLI
vercel deploy
```

### Custom Domain
1. Go to Vercel Dashboard
2. Add your custom domain
3. Update DNS records at your registrar

## Future Enhancements

Ideas you can add:

1. **Command Palette** - Press Ctrl+K to search sections
2. **Dark/Light Theme Toggle** - Add theme switcher
3. **Blog Section** - Add writing samples or technical posts
4. **Notion Integration** - Pull projects from Notion database
5. **Analytics** - Track visitor engagement
6. **Testimonials** - Add quotes from professors/colleagues
7. **3D Elements** - Add Three.js animations
8. **Newsletter** - Email subscription form

## Tips for Success

1. **Keep content fresh** - Update projects and achievements regularly
2. **Use high-quality images** - Professional photos matter
3. **Write compelling descriptions** - Sell your projects
4. **Fix broken links** - Ensure all GitHub/demo links work
5. **Test on mobile** - Visit on phone before sharing
6. **Get feedback** - Show friends and mentors

## Support & Questions

If you need help:

1. Check the original code comments
2. Review the existing component patterns
3. Consult the design system in `/components/ui/`
4. Look at Framer Motion docs for animations

## File Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── sections/             # All sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── badges.tsx
│   │   └── contact.tsx
│   ├── ui/                   # UI components
│   │   ├── glass-card.tsx
│   │   ├── glow-button.tsx
│   │   └── neon-border.tsx
│   ├── navbar.tsx            # Navigation
│   └── footer.tsx            # Footer
├── lib/
│   ├── portfolio-data.ts     # YOUR CONTENT (edit this!)
│   └── utils.ts
└── public/
    ├── profile.png           # Your photo
    ├── projects/             # Project screenshots
    └── badges/               # Certification images
```

## Next Steps

1. ✅ Portfolio is built and live
2. 📸 Replace profile.png with your photo
3. 🔗 Update social links in portfolio-data.ts
4. 📝 Update your bio and add real projects
5. 🚀 Deploy to Vercel with your custom domain
6. 📤 Share with Holy Angel University classmates!

---

**Made with ❤️ using Next.js, React, Framer Motion, and Tailwind CSS**

Happy coding, Marvin! 🚀
