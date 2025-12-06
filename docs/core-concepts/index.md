---
sidebar_position: 1
---

# What is Pixel Streaming?

A simple explanation of Pixel Streaming technology and how Third Space makes it accessible.

## The Concept

Pixel Streaming allows you to run high-fidelity Unreal Engine applications in the cloud and stream the rendered output to any device with a web browser. Think of it as "Netflix for interactive 3D applications."

### How Traditional Applications Work

**Traditional Approach:**
1. User downloads large application file (5-50GB)
2. Requires powerful local hardware (GPU, RAM)
3. Must install and update software
4. Platform-specific (Windows/Mac/Linux builds needed)
5. Limited to devices that can run the app

**Challenges:**
- High barrier to entry for users
- Requires powerful hardware
- Distribution and update logistics
- Security concerns with local installs

### How Pixel Streaming Works

**With Pixel Streaming:**
1. Application runs on a cloud GPU server
2. Video frames are encoded and streamed to user's browser
3. User inputs (mouse, keyboard, touch) are sent back to the server
4. Interactive experience happens in real-time

**Benefits:**
- ✅ No downloads or installations
- ✅ Works on any device with a browser
- ✅ Always up-to-date (single source of truth)
- ✅ No hardware requirements for end users
- ✅ Instant access via URL

## Use Cases

### Architecture & Real Estate

**Problem:** Clients need powerful gaming PCs to view architectural visualizations

**Solution:** Share a simple link - clients explore high-fidelity 3D spaces from any device

**Example:** Russell Heights development tour accessible on iPads at sales centers

### Education & Training

**Problem:** Computer labs need expensive GPU workstations for all students

**Solution:** Students access Unreal Engine training from any laptop or tablet

**Example:** 30 students simultaneously exploring a virtual museum during class

### Product Demonstrations

**Problem:** Trade show attendees won't download a demo app

**Solution:** Instant product configurator accessible via QR code or kiosk

**Example:** Interactive car configurator at auto show - no installation required

### Digital Twins

**Problem:** Factory managers need real-time facility monitoring without specialized software

**Solution:** Browser-based access to live digital twin from office or mobile

**Example:** Manufacturing plant monitoring accessible from any device

## Technical Overview

### Client Side (User's Browser)

**Requirements:**
- Modern web browser (Chrome, Edge, Firefox, Safari)
- WebRTC support (built into all modern browsers)
- Minimum 10 Mbps internet connection
- No plugins, no downloads, no installation

**What Happens:**
1. User opens URL in browser
2. WebRTC connection established
3. Video stream received (H.264 encoding)
4. User inputs captured and sent to server
5. Low latency feedback loop (typically 50-150ms)

### Server Side (Third Space Handles This)

**Infrastructure:**
- AWS G6 GPU instances (NVIDIA L4 Tensor Core GPUs)
- WebRTC signaling servers
- TURN/STUN servers for NAT traversal
- Load balancers for concurrent users
- Auto-scaling based on demand

**What We Handle:**
1. GPU instance provisioning
2. Unreal Engine application execution
3. Video encoding (H.264/H.265)
4. WebRTC connection management
5. Input handling and routing
6. Session management and timeouts
7. Monitoring and health checks

## Why Cloud GPUs?

Unreal Engine applications require significant GPU power for:

- Real-time rendering (30-60 FPS)
- Ray tracing and global illumination
- Physics simulations
- Particle effects and Niagara VFX
- High-resolution textures and materials

**Cloud GPUs provide:**
- On-demand access to powerful hardware
- No upfront capital investment
- Pay only for what you use
- Instant scaling to support multiple users
- Geographic distribution (lower latency)

## The Third Space Difference

### Traditional DIY AWS Pixel Streaming

**What You'd Need to Set Up:**
1. EC2 GPU instances with correct AMI
2. NVIDIA driver installation and configuration
3. Signaling server deployment (Node.js)
4. TURN/STUN server setup
5. Load balancer configuration
6. Auto-scaling groups and policies
7. Monitoring and logging (CloudWatch)
8. Security groups and network configuration
9. Application deployment scripts
10. Update and maintenance pipelines

**Timeline:** 2-4 weeks for initial setup
**Expertise Required:** AWS architecture, Linux administration, WebRTC knowledge
**Ongoing Effort:** 5-10 hours/month maintenance

### Third Space Managed Platform

**What You Do:**
1. Upload packaged Unreal project
2. Click deploy

**Timeline:** 5 minutes
**Expertise Required:** Basic Unreal Engine knowledge
**Ongoing Effort:** Zero - we handle everything

## How Third Space Works

### 1. Upload & Detection

- You upload your packaged Unreal project (.zip)
- We automatically detect OS (Linux or Windows)
- Package is validated for structure and dependencies

### 2. Provisioning

- Appropriate GPU instance is selected (G6 for optimal performance)
- Infrastructure is spun up in AWS
- NVIDIA drivers and dependencies installed
- Your application is deployed and configured

### 3. Streaming Setup

- WebRTC signaling server configured
- TURN/STUN servers established for NAT traversal
- Video encoding parameters optimized
- Input handling configured

### 4. Live & Ready

- You receive a unique streaming URL
- Share with users or embed in website
- We handle all session management
- Auto-scaling for concurrent users

### 5. Credit Management

- Credits consumed only when users are connected
- Automatic idle timeout (2 min) to save costs
- Real-time usage monitoring in dashboard
- Purchase additional credits as needed

## Next Steps

- [Understand the credit system](./credit-system)
- [Learn how Third Space works](./how-it-works)
- [Explore use cases](./use-cases)
- [Start your first deployment](../getting-started/quick-start)
