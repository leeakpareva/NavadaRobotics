# NAVADA Robotics Portfolio

**Navigating Artistic Vision with Advanced Digital Assistance**

A modern, horizontal-scroll portfolio website showcasing AI-powered robotics projects, built with Next.js 15, TailwindCSS, and shadcn/ui.

## 🚀 Live Demo

Visit the live portfolio: [Your Deployment URL]

## 📋 Table of Contents

- [About NAVADA](#about-navada)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🤖 About NAVADA

NAVADA stands for "Navigating Artistic Vision with Advanced Digital Assistance" - a revolutionary fusion of AI, robotics, and creativity. This portfolio showcases cutting-edge robotics projects powered by Raspberry Pi, Computer Vision, and AI technologies.

### Mission
To pioneer and inspire the next wave of AI developers in robotics by demonstrating and teaching how to build applications and hardware powered by Raspberry Pi.

## ✨ Features

### Design & UX
- **Horizontal Scroll Navigation**: Full-screen pages that scroll left-to-right like a magazine
- **Video Background**: Dynamic robot spider video on the home page
- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: Fade-in and slide animations with staggered delays
- **Professional Typography**: Elegant Crimson Text serif font

### Content Sections
1. **Home**: NAVADA introduction with video background
2. **Raspberry Pi**: Core technology showcase
3. **Computer Vision**: AI vision capabilities and applications
4. **AI Robotics**: Intelligent agents and automation
5. **About**: Professional background and expertise
6. **Contact**: Get in touch functionality

### Interactive Elements
- **Collapsible Sidebar**: Navigation menu with contact form
- **Contact Form**: Integrated mailto functionality
- **Keyboard Navigation**: Arrow keys for page navigation
- **Navigation Dots**: Quick jump to any section
- **Snap Scrolling**: Precise section alignment

## 🛠️ Technologies

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts (Crimson Text)](https://fonts.google.com/)
- **Language**: TypeScript
- **Deployment**: Vercel (configured)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/leeakpareva/NavadaRobotics.git
   cd NavadaRobotics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
navadarobotics/
├── public/                 # Static assets
│   ├── RobotSpidervid.mp4 # Home page video
│   ├── SpiderPi.png       # Robot images
│   ├── Spider-7.png
│   ├── Spider-9.png
│   ├── Twin Dogs.png
│   └── Twins.png
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── about/         # About page route
│   │   ├── ai-robotics/   # AI Robotics page route
│   │   ├── computer-vision/ # Computer Vision page route
│   │   ├── contact/       # Contact page route
│   │   ├── raspberry-pi/  # Raspberry Pi page route
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Main horizontal scroll page
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── ContactForm.tsx
│   │   └── Sidebar.tsx
│   └── lib/
│       └── utils.ts       # Utility functions
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── components.json        # shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # TailwindCSS configuration
├── vercel.json           # Vercel deployment config
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Import repository at [vercel.com](https://vercel.com)
   - Auto-detects Next.js configuration

2. **Environment Variables**
   - No environment variables required for basic deployment

3. **Custom Domain**
   - Configure custom domain in Vercel dashboard

### GitHub Actions

Automated deployment is configured via `.github/workflows/deploy.yml`:

- Deploys on every push to `main` branch
- Runs build tests before deployment
- Requires Vercel tokens in repository secrets

## 🎨 Customization

### Adding New Pages

1. Create new route in `src/app/[page-name]/page.tsx`
2. Add page data to the `pages` array in `src/app/page.tsx`
3. Update sidebar navigation in `src/components/Sidebar.tsx`

### Updating Content

Edit the `pages` array in `src/app/page.tsx`:

```typescript
const pages = [
  {
    id: "new-page",
    icon: YourIcon,
    title: "Page Title",
    subtitle: "Page Subtitle",
    content: [
      "First paragraph",
      "Second paragraph",
      "Third paragraph"
    ],
    image: "/your-image.png",
    position: "left" // or "right"
  }
];
```

### Styling

- Global styles: `src/app/globals.css`
- Component styles: TailwindCSS classes
- Custom animations: CSS-in-JS in page components

## 👨‍💼 About the Developer

**Lee Akpareva, MBA, MA**
- 17+ years in digital transformation and AI leadership
- Expertise in AI, Azure AI Foundry, Computer Vision, Blockchain, Cloud Migration
- Delivered solutions for Generali, Informa Markets, DHL, British Airways, Expedia
- Passionate about bridging art, design, and AI engineering

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Lee Akpareva - [leeakpareva@hotmail.com](mailto:leeakpareva@hotmail.com)

Project Link: [https://github.com/leeakpareva/NavadaRobotics](https://github.com/leeakpareva/NavadaRobotics)

---

**Designed & Developed by Lee Akpareva MBA, MA.**