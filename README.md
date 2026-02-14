# Josh - Portfolio Website

A modern, fully-responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Features smooth scroll-based carousel animations with a dashboard-inspired hero section.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend Services**: Supabase (optional)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository or extract the project files
2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with dashboard
│   ├── About.tsx           # About section with skills
│   ├── Projects.tsx        # Featured projects section
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Contact.tsx         # Contact form
│   ├── ScrollCarousel.tsx  # Context provider for scroll state
│   ├── CarouselSection.tsx # Fixed carousel sections
│   └── ScrollIndicator.tsx # Bottom scroll indicator
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

## Features

- **Scroll-based Navigation**: Smooth carousel effect as users scroll
- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Performance Optimized**: Next.js optimization, lazy loading
- **Modern UI**: Dashboard-inspired hero, smooth animations
- **Accessible**: Semantic HTML, proper ARIA attributes
- **Contact Form**: Functional contact form with validation
- **Dark Mode Ready**: Tailwind CSS theming support

## Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Customization

### Colors & Branding

Edit `tailwind.config.js` to customize the color scheme and theme.

### Content

Update component content in `/components` folder:
- `Hero.tsx` - Hero section and intro
- `About.tsx` - About me section
- `Projects.tsx` - Featured projects
- `Skills.tsx` - Skills list
- `Contact.tsx` - Contact information and form

### Images

Replace placeholder images with your own. Current placeholders use Pexels API URLs.

## Environment Variables

Create a `.env.local` file for any sensitive configuration:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

```bash
# Or deploy using Vercel CLI
vercel
```

### Deploy to Other Platforms

Next.js can be deployed to any Node.js hosting platform:
- Netlify
- Railway
- Render
- AWS
- Digital Ocean

## Performance

- **SEO Optimized**: Metadata and Open Graph tags configured
- **Image Optimization**: Automatic image optimization via Next.js
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Code Splitting**: Automatic code splitting by route

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue in the repository.

---

**Built with ❤️ using Next.js and Tailwind CSS**
