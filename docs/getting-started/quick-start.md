---
sidebar_position: 1
---

# Quick Start Guide

Deploy your first Unreal Engine Pixel Streaming project in under 5 minutes.

## Prerequisites

Before you begin, make sure you have:

- An Unreal Engine project with Pixel Streaming plugin enabled
- Your project packaged for Linux or Windows
- A Third Space account ([Sign up here](https://app.thirdspaceinteractive.ca/signup))

## Step 1: Package Your Project

### For Linux (Recommended - Lower Credit Cost)

1. In Unreal Engine, go to **Platforms** → **Linux** → **Package Project**
2. Choose a target directory for your packaged build
3. Wait for packaging to complete
4. Compress the entire packaged folder into a `.zip` file

### For Windows

1. In Unreal Engine, go to **Platforms** → **Windows** → **Package Project**
2. Choose a target directory for your packaged build
3. Wait for packaging to complete
4. Compress the entire packaged folder into a `.zip` file

:::tip
Linux builds consume 1 credit per minute, while Windows builds consume 2 credits per minute. We recommend Linux for cost efficiency!
:::

## Step 2: Create Your Account

1. Visit [app.thirdspaceinteractive.ca](https://app.thirdspaceinteractive.ca)
2. Click **Sign Up**
3. Complete registration (free tier includes 100 credits to get started)
4. Verify your email address

## Step 3: Create New Project

1. Log in to your Third Space dashboard
2. Click **+ Create New Project** button
3. You'll enter a 4-step project creation wizard

### Step 1: Upload Project

1. **Enter project name** (required)
2. **Drag and drop your `.zip` file** or click to browse
   - Platform auto-detects build type (Linux/Windows) from filename
   - Example: `MyProject_Linux.zip` → detected as Linux
   - Example: `MyProject.zip` → defaults to Windows
3. Click **Next** when both name and file are provided

:::info Storage Limits
- **Free Tier**: 5GB total storage
- **Plus Tier**: 10GB total storage
- **Pro Tier**: 25GB total storage
- **Enterprise**: 100GB+ total storage
:::

### Step 2: Project Details & Configuration

**Basic Settings:**
1. **Upload thumbnail** (optional) - Project card image
2. **Select build type** - Toggle between Windows/Linux (overrides auto-detection if needed)

**Advanced Options** (expand for more):

**Streaming Settings:**
- **Resolution**: 1080p (default), 1440p (Pro+), 2160p (Pro+), Custom (Pro+)
- **Start with video muted**: Checkbox
- **Enable cursor display**: Checkbox

**Interactivity:**
- **Show stream UI**: Checkbox
- **Enable microphone**: Checkbox
- **Enable camera**: Checkbox

**Branding & Watermark** (Pro tier only):
- **Hide platform watermark**: Pro/Enterprise only
- **Add custom watermark**: Pro/Enterprise only (with file upload)

**Deployment:**
- **Region selection**: North America, Europe, South Asia

3. Click **Next** when configuration is complete

### Step 3: Deployment Progress

Watch the deployment progress:
1. Progress bar shows 0-100% completion
2. Upload to cloud storage (S3)
3. GPU instance provisioning
4. Environment setup and configuration
5. Typically takes 3-7 minutes

### Step 4: Success!

Once deployment completes:
1. See confirmation message with your project name
2. **Action buttons**:
   - **View Stream** - Launch stream in new tab
   - **Share Link** - Get streaming URL
   - **Go To Dashboard** - Return to projects

## Stream Your Project

Once in dashboard:

1. Copy your unique streaming URL
2. Click **Launch Stream** to test in your browser
3. Share the URL with clients or embed in your website

### Embedding in Your Website

Use this iframe code to embed your stream:

```html
<iframe
  src="https://stream.thirdspaceinteractive.ca/your-project-id"
  width="1920"
  height="1080"
  frameborder="0"
  allowfullscreen
></iframe>
```

## What's Next?

- **Customize deployment** - Learn about [deployment options](../platform-features/deployment-options)
- **Monitor usage** - Check your [dashboard](../platform-features/dashboard) for credit consumption
- **Set up custom domain** - Point your own domain to your stream
- **Embed in website** - Full [iframe embedding guide](../technical-docs/integration/iframe-embedding)

## Troubleshooting

If you encounter issues:

- **Upload failed?** Check [upload troubleshooting](../troubleshooting/upload-issues)
- **Instance won't start?** See [deployment issues](../troubleshooting/deployment-issues)
- **Poor performance?** Review [performance optimization](../troubleshooting/performance-issues)

## Need Help?

- Email: support@thirdspaceinteractive.ca
- Discord: [Join our community](https://discord.gg/8pVjBjCe)
- Response time: Within 24 hours
