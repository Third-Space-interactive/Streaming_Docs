---
sidebar_position: 3
---

# First Deployment Walkthrough

A detailed step-by-step guide to deploying your first Pixel Streaming project on Third Space.

## Overview

This guide walks you through the complete deployment workflow, from packaging to sharing your live stream. Expected time: **15-20 minutes**.

## Before You Begin

Ensure you have:

- ✅ Unreal Engine project with Pixel Streaming plugin enabled
- ✅ Third Space account (free tier works for testing)
- ✅ Basic understanding of Unreal Engine packaging

## Part 1: Prepare Your Project

### Enable Pixel Streaming

1. Open your project in Unreal Engine
2. Navigate to **Edit** → **Plugins**
3. Search for "Pixel Streaming"
4. Check the box to enable
5. Click **Restart Now**

### Configure Project Settings

1. Go to **Edit** → **Project Settings**
2. Search for "Pixel Streaming"
3. Recommended settings:
   - **Start On Launch**: True (for testing)
   - **Streamer Port**: 8888 (default)
   - **Use Legacy Pixel Streaming**: False

### Test Locally (Optional but Recommended)

Before uploading, verify Pixel Streaming works locally:

1. Package for your development platform (Windows/Linux)
2. Run the Pixel Streaming Signaling Server
3. Launch your packaged application
4. Connect via browser to `http://localhost`

:::tip
Local testing helps catch configuration issues before cloud deployment.
:::

## Part 2: Package for Linux

We recommend Linux for cost efficiency (1 credit/min vs 2 credits/min for Windows).

### Install Linux Toolchain

1. Open Epic Games Launcher
2. Go to **Unreal Engine** → **Library**
3. Click the dropdown next to your engine version
4. Select **Options**
5. Under **Target Platforms**, check **Linux**
6. Click **Apply** and wait for download

### Package Your Project

1. In Unreal Engine, go to **Platforms** → **Linux** → **Package Project**
2. Create a new folder for output (e.g., `C:\Builds\MyProject_Linux`)
3. Click **Select Folder** and wait for packaging

:::info Packaging Time
Initial packaging can take 15-60 minutes depending on project size. Subsequent packages are faster.
:::

### Verify Package Contents

After packaging completes, verify your folder structure:

```
MyProject/
└── LinuxNoEditor/
    ├── MyProject.sh
    ├── Engine/
    ├── MyProject/
    └── Manifest_NonUFSFiles.txt
```

### Compress for Upload

1. Navigate to the parent folder containing `LinuxNoEditor`
2. Right-click and select **Send to** → **Compressed (zipped) folder** (Windows)
3. Or use 7-Zip/WinRAR: Right-click → **Add to archive** → `.zip` format
4. Name it clearly: `MyProject_Linux.zip`

:::warning
Always compress the **parent folder**, not just the `LinuxNoEditor` folder. The platform needs the full structure.
:::

## Part 3: Upload to Third Space

### Log In to Dashboard

1. Visit [app.thirdspaceinteractive.ca](https://app.thirdspaceinteractive.ca)
2. Log in with your credentials
3. You'll see your project dashboard

### Create New Project

1. Click **+ New Project** button
2. Fill in project details:
   - **Project Name**: MyFirstStream
   - **Description**: Testing Third Space deployment
   - **Category**: Select appropriate category
3. Click **Create**

### Upload Package

1. Click **Upload Build** on your project card
2. Drag and drop your `.zip` file or click to browse
3. Monitor upload progress

**Upload speeds vary based on:**
- File size (2GB can take 5-15 minutes)
- Your internet connection
- Server load

:::tip
Upload during off-peak hours for faster speeds. Keep the browser tab open during upload.
:::

## Part 4: Deployment

### Automatic Configuration

Once upload completes, Third Space automatically:

1. **Detects OS** - Identifies Linux or Windows from your package
2. **Validates structure** - Checks for required files and folders
3. **Provisions GPU** - Spins up appropriate AWS G6 instance
4. **Configures streaming** - Sets up WebRTC, TURN/STUN servers
5. **Tests deployment** - Runs health checks

### Monitor Deployment Status

You'll see status updates:

- ⏳ **Uploading** - File transfer in progress
- 🔍 **Validating** - Checking package structure
- ⚙️ **Provisioning** - Setting up infrastructure
- 🚀 **Deploying** - Installing and configuring
- ✅ **Ready** - Stream is live!

Typical deployment time: **3-7 minutes**

### Troubleshooting Deployment Failures

If deployment fails, check:

- Package structure matches requirements
- All required files are included
- No corrupt files in the package
- File size within tier limits

See [Deployment Troubleshooting](../troubleshooting/deployment-issues) for detailed solutions.

## Part 5: Test Your Stream

### Launch Stream

1. Once status shows **Ready**, click **Launch Stream**
2. A new tab will open with your Pixel Stream
3. Allow microphone/camera permissions if prompted (for bi-directional features)

### Test Interactions

Verify the following work:

- **Mouse/keyboard input** - Navigate your scene
- **Touch controls** (on mobile) - If accessing from phone/tablet
- **Fullscreen** - Click fullscreen button
- **Quality** - Check video quality and responsiveness

### Check Performance Metrics

In the dashboard, monitor:

- **FPS** - Should be 30-60fps
- **Latency** - Typically 50-150ms
- **Bitrate** - Adapts based on connection
- **Credits consumed** - Track your usage

## Part 6: Share Your Stream

### Get Your Streaming URL

Copy the URL from your dashboard. It will look like:

```
https://stream.thirdspaceinteractive.ca/proj_abc123xyz
```

### Share Options

**Direct Link:**
- Share URL via email, Slack, etc.
- Anyone with the link can access (public)
- Set password protection in project settings (Pro tier)

**Embed in Website:**

```html
<iframe
  src="https://stream.thirdspaceinteractive.ca/proj_abc123xyz"
  width="1920"
  height="1080"
  frameborder="0"
  allowfullscreen
  allow="microphone; camera; fullscreen"
></iframe>
```

**Custom Domain (Pro/Enterprise):**
- Point `demo.yourcompany.com` to your stream
- See [Custom Domain Setup](../technical-docs/integration/custom-domains)

## Part 7: Manage Your Credits

### Understanding Credit Consumption

Your stream consumes credits based on:

- **OS type**: 1 credit/min (Linux) or 2 credits/min (Windows)
- **Active time**: Only when someone is connected
- **Idle timeout**: Auto-stops after 2 minutes of inactivity (Free/Plus)

### Monitor Usage

In the dashboard:

1. Click **Usage & Billing**
2. View real-time credit consumption
3. Set up usage alerts (Pro tier)
4. Purchase additional credit packs if needed

### Pause or Stop Instance

To conserve credits:

- **Pause**: Click **Pause Instance** - restarts quickly when needed
- **Stop**: Click **Stop Instance** - full shutdown, requires redeployment

:::tip
Use the 2-minute idle timeout feature. Your instance automatically stops when no one is connected, saving credits.
:::

## Next Steps

Congratulations! You've successfully deployed your first Pixel Stream.

### Explore More:

- [Embed in your website](../technical-docs/integration/iframe-embedding)
- [Set up custom domain](../technical-docs/integration/custom-domains)
- [Optimize for performance](../troubleshooting/performance-issues)
- [Scale to multiple users](../platform-features/scalability)
- [Explore use cases](../use-case-guides/architecture-real-estate)

### Upgrade Your Plan:

Need more concurrent users or credits?

- [Compare pricing tiers](../pricing/plans)
- [Use the cost calculator](../pricing/cost-calculator)
- [Contact sales for Enterprise](../pricing/enterprise)

## Need Help?

- **Email**: support@thirdspaceinteractive.ca
- **Discord**: [Join community](https://discord.gg/8pVjBjCe)
- **FAQ**: Check [common questions](../faq)
