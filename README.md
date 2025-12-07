# Third Space Streaming Platform Documentation

Official documentation for Third Space Interactive's managed Pixel Streaming platform.

## Overview

This documentation site provides comprehensive guides for deploying Unreal Engine projects to the cloud using Third Space's managed Pixel Streaming platform. No AWS expertise required.

## Project Structure

```
Streaming_Docs/
├── docs/                                    # Documentation content
│   ├── intro.md                            # Platform landing page
│   ├── getting-started/                    # Quick start guides
│   │   ├── quick-start.md
│   │   ├── system-requirements.md
│   │   └── first-deployment.md
│   ├── core-concepts/                      # Platform fundamentals
│   │   ├── how-it-works.md
│   │   ├── credit-system.md
│   │   └── use-cases.md
│   ├── use-case-guides/                    # Detailed use case guides
│   │   ├── architecture-real-estate.md
│   │   ├── education-training.md
│   │   ├── sales-marketing.md
│   │   └── digital-twins.md
│   ├── technical-docs/                     # Technical guides
│   │   ├── packaging/                      # Packaging guides
│   │   │   ├── linux-builds.md
│   │   │   └── windows-builds.md
│   │   └── integration/                    # Integration guides
│   │       └── iframe-embedding.md
│   ├── troubleshooting/                    # Troubleshooting guides
│   │   ├── upload-issues.md
│   │   ├── deployment-issues.md
│   │   ├── performance-issues.md
│   │   └── connection-problems.md
│   ├── pricing/                            # Pricing information
│   ├── platform-features/                  # Dashboard and features
│   ├── faq/                                # Frequently asked questions
│   ├── support-resources/                  # Getting help
│   └── changelog/                          # Version history
├── src/                                    # React components
│   └── components/
│       └── HomepageFeatures/              # Homepage feature cards
├── static/                                 # Static assets
├── docusaurus.config.ts                   # Main configuration
├── sidebars.ts                            # Sidebar navigation
└── vercel.json                            # Vercel deployment config
```

## Documentation Sections

### 1. Getting Started
- **Quick Start** - Deploy your first project in under 5 minutes
- **System Requirements** - UE versions, file sizes, tier limits
- **First Deployment** - Detailed walkthrough of the deployment process

### 2. Core Concepts
- **How It Works** - Platform architecture and technology overview
- **Credit System** - Understanding billing, credits, and cost optimization
- **Use Cases** - Overview of Architecture, Education, Sales, Digital Twins

### 3. Use Case Guides (NEW - Phase 2)
Comprehensive guides with real-world scenarios, ROI calculations, and case studies:
- **Architecture & Real Estate** - Sales centers, property listings, trade shows
- **Education & Training** - Classroom deployments, bootcamps, remote learning
- **Sales & Marketing** - Product configurators, demos, landing pages
- **Digital Twins** - IoT integration, industrial monitoring, facilities management

### 4. Technical Documentation
- **Packaging Guides**
  - Linux Builds (recommended - 50% cost savings)
  - Windows Builds
- **Integration Guides**
  - Iframe Embedding (React, Vue, WordPress examples)

### 5. Troubleshooting (NEW - Phase 2)
Detailed troubleshooting guides for common issues:
- Upload Issues (zip structure, file size, network problems)
- Deployment Issues (instance failures, dependencies, GPU memory)
- Performance Issues (FPS optimization, stream quality, input lag)
- Connection Problems (WebRTC, firewalls, browser compatibility)

### 6. Additional Resources
- **Pricing & Plans** - Tier comparison and credit information
- **Platform Features** - Dashboard overview
- **FAQ** - Common questions
- **Support Resources** - Getting help, contact information
- **Changelog** - Platform updates

## Local Development

### Prerequisites

- Node.js version 20.0 or above
- npm or yarn

### Start Development Server

```bash
npm install
npm start
```

Opens `http://localhost:3000` in your browser. Auto-reloads on changes.

### Build for Production

```bash
npm run build
```

Creates optimized static site in the `build/` folder.

### Test Production Build Locally

```bash
npm run serve
```

Serves the production build at `http://localhost:3000`.

## Adding New Documentation

### Create a New Page

1. Create a markdown file in the appropriate `docs/` subfolder
2. Add frontmatter:

```markdown
---
sidebar_position: 1
---

# Page Title

Your content here...
```

3. Add to `sidebars.ts`:

```typescript
{
  type: 'category',
  label: 'Your Section',
  items: [
    'your-section/your-page',
  ],
}
```

### Best Practices

- **Use descriptive titles** - Clear, searchable page titles
- **Add internal links** - Link to related pages
- **Include code examples** - Use syntax highlighting
- **Add images** - Place in `static/img/` folder
- **Test all links** - Build verifies no broken links

### Linking Between Pages

```markdown
[Link text](../other-section/page-name)
[Another link](../../getting-started/quick-start)
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub:
```bash
git add .
git commit -m "Update documentation"
git push origin main
```

2. Vercel will auto-deploy (if connected)

### Manual Vercel Setup

1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Add custom domain: `docs.thirdspaceinteractive.ca`
5. Update DNS with provided CNAME record

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Configuration

### Site Information

Edit `docusaurus.config.ts`:

```typescript
const config: Config = {
  title: 'Third Space Streaming Platform',
  tagline: 'Pixel Streaming Made Simple',
  url: 'https://docs.thirdspaceinteractive.ca',
  baseUrl: '/',
  // ...
};
```

### Homepage Features

Update homepage feature cards in `src/components/HomepageFeatures/index.tsx`:

```typescript
const FeatureList: FeatureItem[] = [
  {
    title: "Quick Start",
    icon: "▶",
    description: "Deploy in 5 minutes...",
    link: "/docs/getting-started/quick-start",
  },
  // ...
];
```

### Theme Customization

Edit `src/css/custom.css` for colors and styles:

```css
:root {
  --ifm-color-primary: #5724FF;
  --ifm-color-primary-dark: #4518cc;
  /* ... */
}
```

## Phase 2 Updates (December 2024)

### New Content Added

✅ **4 Comprehensive Use Case Guides** (~400+ lines each)
- Architecture & Real Estate with Russell Heights case study
- Education & Training with Game Design Bootcamp case study
- Sales & Marketing with Luxury Yacht Configurator case study
- Digital Twins with Food Processing Plant case study

✅ **4 Detailed Troubleshooting Guides** (~200-300 lines each)
- Upload Issues (zip structure, file size, network)
- Deployment Issues (instance failures, dependencies, errors)
- Performance Issues (FPS optimization, quality, lag)
- Connection Problems (WebRTC, browsers, firewalls)

✅ **2 Platform-Specific Packaging Guides** (~500+ lines each)
- Linux Packaging Guide (cross-compilation, optimization)
- Windows Packaging Guide (local testing, troubleshooting)

✅ **1 Integration Guide**
- Iframe Embedding (React, Vue, WordPress, advanced features)

### Documentation Stats

- **Total pages**: 40+ documentation pages
- **New Phase 2 content**: ~3,500 lines
- **Use case guides**: 4 with ROI calculations and case studies
- **Code examples**: Multiple frameworks (React, Vue, WordPress, vanilla JS)
- **Step-by-step guides**: All major user workflows covered

### Fixed Issues

- ✅ Updated sidebar navigation with all Phase 2 content
- ✅ Fixed all broken internal links
- ✅ Fixed broken anchor links (privacy policy, step references)
- ✅ Verified build completes successfully

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build production site |
| `npm run serve` | Serve production build locally |
| `npm run clear` | Clear Docusaurus cache |
| `npm run swizzle` | Eject Docusaurus components for customization |

## Writing Guidelines

### Markdown Features

**Code blocks with syntax highlighting:**
```typescript
const example = "Hello World";
```

**Admonitions:**
```markdown
:::tip
Use Linux builds to save 50% on credits!
:::

:::warning
Ensure your project is under the tier file size limit.
:::
```

**Tabs:**
```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="Linux">
    Linux-specific content
  </TabItem>
  <TabItem value="windows" label="Windows">
    Windows-specific content
  </TabItem>
</Tabs>
```

### Style Guide

- Use **sentence case** for headings
- Keep paragraphs **under 3-4 lines**
- Use **bullet points** for lists
- Add **code examples** where applicable
- Include **step numbers** for procedures
- Use **tables** for comparisons
- Add **images** to clarify complex concepts

## Troubleshooting Build Issues

### Clear Cache

```bash
npm run clear
npm start
```

### Check for Broken Links

```bash
npm run build
```

Build will fail if broken links are detected.

### Common Issues

- **Broken links**: Update all relative links to valid paths
- **Broken anchors**: Ensure anchor IDs match heading slugs
- **MDX errors**: Check for `<` characters (use "under" instead of `<20`)

## Documentation Resources

- [Docusaurus Documentation](https://docusaurus.io)
- [Markdown Features](https://docusaurus.io/docs/markdown-features)
- [MDX Guide](https://mdxjs.com/)
- [Deployment Guide](./DEPLOYMENT.md)

## Contributing

When adding new documentation:

1. Follow existing structure and naming conventions
2. Add comprehensive examples and code snippets
3. Include troubleshooting sections where relevant
4. Link to related pages
5. Test the build before committing
6. Update this README if adding new major sections

## Support

- **Documentation Issues**: Create an issue in this repository
- **Platform Support**: support@thirdspaceinteractive.ca
- **Website**: [thirdspaceinteractive.ca](https://thirdspaceinteractive.ca)
- **Discord**: [Join community](https://discord.gg/8pVjBjCe)

---

Built with ❤️ using [Docusaurus](https://docusaurus.io/)
