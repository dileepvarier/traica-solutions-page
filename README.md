# Trica Solutions - The Logical Path to Solutions

Professional business website for **Trica Solutions**, a startup specializing in Logic AI training, IT development, and intelligent test automation services.

> **Tagline**: The Logical Path to Solutions

## 📖 Project Overview

This is a modern, responsive single-page application (SPA) built with Next.js and optimized for static site deployment on GitHub Pages. The website showcases Trica Solutions' services, company information, and provides an easy contact mechanism for potential clients.

### Key Highlights
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Professional navy blue (#1B4965) and lime green (#8DC63F) brand colors
- ✅ Static site export for GitHub Pages deployment
- ✅ Zero-configuration setup with Next.js
- ✅ SEO-optimized with proper meta tags
- ✅ Fast loading with optimized assets

---

## 🛠️ Technology Stack

### Core Framework & Libraries

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.3 | React-based framework for server-side rendering and static site generation |
| **React** | 19.2.0 | UI component library |
| **React DOM** | 19.2.0 | React rendering for web browsers |

### Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | ^9 | Code linting and quality assurance |
| **eslint-config-next** | 16.0.3 | Next.js-specific ESLint configuration |

### Styling & Design

- **CSS Modules**: Component-scoped styling
- **Custom CSS Variables**: Brand color system
- **Responsive Design**: Mobile-first approach with media queries
- **Modern CSS Features**: Flexbox, Grid, clamp() for fluid typography

### Deployment & CI/CD

- **GitHub Actions**: Automated deployment pipeline
- **GitHub Pages**: Static site hosting
- **Next.js Static Export**: Pre-rendered HTML/CSS/JS output

---

## 📋 Features

### Website Sections

1. **Hero Section**
   - Company logo with brand colors
   - Tagline: "The Logical Path to Solutions"
   - Call-to-action buttons
   - Decorative background elements

2. **Services Section**
   - 🤖 Logic AI Training
   - ⚙️ IT Development
   - 🔄 Testing & Automation

3. **About Section**
   - Company mission statement
   - Achievement statistics (customizable)

4. **Contact Section**
   - Contact information display
   - Contact form (frontend only)
   - Service interest selector

5. **Footer**
   - Copyright information
   - Company tagline

### Design Features

- **Brand Colors**: Navy blue and lime green matching company logo
- **Typography**: System font stack for optimal performance
- **Animations**: Smooth hover effects and transitions
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Mobile Optimization**: Touch-friendly buttons, stacked layouts

---

## 🚀 Local Setup & Development

### Prerequisites

Ensure you have the following installed:
- **Node.js**: Version 18 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js (or use yarn/pnpm)
- **Git**: For version control ([Download](https://git-scm.com/))

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/trica-website-frontend.git
   cd trica-website-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This installs all packages listed in `package.json`:
   - Next.js framework
   - React and React DOM
   - ESLint for code quality

3. **Run development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000` with hot-reload enabled

4. **Build for production**
   ```bash
   npm run build
   ```
   Creates optimized static files in the `out/` directory

5. **Preview production build**
   ```bash
   npm start
   ```
   (After building) Serves the production build locally

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized static site for production |
| `npm start` | Serve production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run export` | Alias for build (creates static export) |

---

## 📦 Dependencies & Plugins

### Production Dependencies

#### 1. **next** (v16.0.3)
- **Purpose**: Core framework for React-based applications
- **Features Used**:
  - Static site export (`output: 'export'`)
  - CSS Modules support
  - Automatic code splitting
  - Image optimization disabled for static export
  - Base path configuration for GitHub Pages

#### 2. **react** (v19.2.0)
- **Purpose**: JavaScript library for building user interfaces
- **Features Used**:
  - Functional components
  - Hooks (implicit in Next.js)
  - JSX syntax

#### 3. **react-dom** (v19.2.0)
- **Purpose**: React rendering for web browsers
- **Features Used**:
  - DOM manipulation
  - Event handling
  - Browser-specific rendering

### Development Dependencies

#### 1. **eslint** (v^9)
- **Purpose**: JavaScript/React code linting
- **Configuration**: Extends Next.js recommended settings
- **Benefits**: Catches errors, enforces code style, improves maintainability

#### 2. **eslint-config-next** (v16.0.3)
- **Purpose**: Next.js-optimized ESLint rules
- **Includes**: React best practices, accessibility checks, Next.js-specific rules

---

## 🎨 Project Structure

```
trica-website-frontend/
├── .github/
│   └── workflows/
│       └── nextjs.yml          # GitHub Actions deployment workflow
├── public/
│   ├── logo.png                # Company logo
│   └── .nojekyll              # GitHub Pages configuration
├── src/
│   └── app/
│       ├── globals.css         # Global styles and CSS variables
│       ├── layout.js           # Root layout with metadata
│       ├── page.js             # Main homepage component
│       └── page.module.css     # Component-scoped styles
├── .gitignore                  # Git ignore rules
├── eslint.config.mjs           # ESLint configuration
├── jsconfig.json               # JavaScript/Path configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
└── README.md                   # This file
```

---

## 🌐 Deployment to GitHub Pages

### Step 1: Build the Static Site

```bash
npm run build
```

This creates an optimized static export in the `out` folder.

### Step 2: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Trica website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/trica-website-frontend.git

# Push to main branch
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
4. Create `.github/workflows/nextjs.yml` with the following content:

```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: 'npm'
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with Next.js
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 4: Access Your Site

After the GitHub Action completes, your site will be available at:
```
https://YOUR_USERNAME.github.io/trica-website-frontend/
```

## 🎨 Customization Guide

### Updating Brand Colors

Edit `src/app/globals.css` CSS variables:

```css
:root {
  --primary-color: #1B4965;      /* Navy blue - main brand color */
  --secondary-color: #8DC63F;    /* Lime green - accent color */
  --text-primary: #1e293b;       /* Dark text */
  --text-secondary: #64748b;     /* Muted text */
  /* ... more variables */
}
```

### Updating Content

**Hero Section** (`src/app/page.js`):
- Replace logo: Save your logo as `public/logo.png`
- Update tagline and subtitle text

**Services** (`src/app/page.js`):
- Modify service cards content
- Update icons (emoji or add icon library)

**Contact Info** (`src/app/page.js`):
- Replace `contact@trica.com` with your email
- Update location and service details

**Stats** (`src/app/page.js`):
- Change numbers in the About section

### Adding Custom Fonts

Install Google Fonts (already configured):
```javascript
// src/app/layout.js
import { YourFont } from "next/font/google";
```

---

## 🔧 Configuration Files

### next.config.mjs
```javascript
output: 'export'              // Enable static HTML export
images: { unoptimized: true } // Required for static export
basePath: '...'               // GitHub Pages repository path
```

### package.json
- **Scripts**: Development, build, and deployment commands
- **Dependencies**: Production packages (Next.js, React)
- **DevDependencies**: Development tools (ESLint)

### .gitignore
Excludes from version control:
- `node_modules/` - Dependencies
- `.next/` - Build cache
- `out/` - Production build
- `.env*` - Environment variables

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (adaptive layouts)
- **Desktop**: > 1024px (multi-column grids)

### Mobile Optimizations
- Stacked navigation buttons
- Single-column service cards
- Full-width contact form
- Touch-friendly button sizing (44px minimum)
- Reduced hero height for better viewport usage

---

## 🚦 Performance Optimizations

- ✅ **Static Generation**: Pre-rendered HTML for fast load times
- ✅ **Code Splitting**: Automatic chunking by Next.js
- ✅ **CSS Modules**: Scoped styles prevent conflicts
- ✅ **No External Dependencies**: Minimal bundle size
- ✅ **Optimized Fonts**: System font stack (no web font loading)
- ✅ **Semantic HTML**: Better SEO and accessibility

---

## 🐛 Troubleshooting

### Build Issues

**Problem**: `npm run build` fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**Problem**: Images not showing on GitHub Pages
- Ensure logo is at `public/logo.png`
- Check basePath in `next.config.mjs` matches repository name

### Development Issues

**Problem**: Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

**Problem**: Changes not reflecting
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Clear Next.js cache: `rm -rf .next`

---

## 📊 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

If expanding this project:

1. Create feature branch: `git checkout -b feature-name`
2. Make changes and test locally
3. Run linter: `npm run lint`
4. Commit: `git commit -m "Description"`
5. Push and create pull request

---

## 📄 License

© 2025 Trica Solutions. All rights reserved.

---

## 📞 Support

For questions or issues:
- **Email**: contact@trica.com
- **Website**: [Add production URL after deployment]

---

**Built with ❤️ using Next.js and React**
