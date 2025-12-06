---
sidebar_position: 2
---

# How Third Space Works

An under-the-hood look at Third Space's cloud GPU streaming infrastructure.

## Architecture Overview

Third Space provides a managed Pixel Streaming platform built on AWS infrastructure. We handle the complexity so you can focus on creating great Unreal Engine experiences.

```
[Your Unreal Project]
        ↓
[Third Space Platform]
        ↓
[AWS GPU Infrastructure]
        ↓
[End Users' Browsers]
```

## The Upload Phase

### 1. Package Upload

When you upload a packaged project:

**You provide:**
- Project name
- Packaged `.zip` file (Linux or Windows build)

**Platform detects:**
- Operating system from filename (Linux/Windows)
- File size and contents

**Uploaded to:**
- Secure cloud storage
- Prepared for deployment

### 2. Project Configuration

**You configure:**
- Build type (Linux or Windows)
- Optional thumbnail image
- Streaming resolution (1080p default, Pro: 1440p/2160p/custom)
- Branding options (Pro: watermark control)
- Deployment region (North America, Europe, South Asia)

## The Deployment Phase

### 3. Infrastructure Provisioning

**Cloud GPU instances:**
- AWS infrastructure with GPU support
- Optimized for Pixel Streaming workloads
- Automatic provisioning based on your tier

### 4. Environment Setup

**Platform prepares:**
1. Operating system environment (Linux or Windows)
2. GPU drivers and dependencies
3. Pixel Streaming infrastructure components
4. Your Unreal Engine application

## The Streaming Phase

### 5. WebRTC Connection

When a user accesses your stream:

**Connection flow:**
1. User opens streaming URL in browser
2. WebRTC connection established
3. Video stream begins
4. User inputs transmitted back to server

**Technology:**
- WebRTC for low-latency streaming
- H.264 video encoding
- Adaptive bitrate based on connection quality

### 6. Video Quality

**Streaming settings:**
- Resolution: Up to 1080p (Pro: up to 2160p)
- Frame rate: 30 or 60 FPS
- Typical latency: 50-150ms
- Bitrate: Adapts automatically (5-20 Mbps typical)

### 7. Input Handling

**Supported inputs:**
- Mouse: Position, clicks, wheel
- Keyboard: Key presses
- Touch: Single/multi-touch gestures (mobile)
- Gamepad: Controller inputs (if configured)

## Session Management

### 8. User Sessions

**Session lifecycle:**

1. **Connection** - User opens stream URL
2. **Active Session** - Credits consumed per minute
3. **Idle Detection** - No input for X minutes
4. **Timeout** - Session ended, credits stop

**Idle Timeouts by Tier:**
- Free/Plus: 2 minutes
- Pro: 5 minutes
- Enterprise: Custom (up to 30 minutes)

### 9. Concurrent Users

**Per-tier limits:**
- **Free**: 1 concurrent user
- **Plus**: 2 concurrent users
- **Pro**: 4 concurrent users
- **Enterprise**: Unlimited

Multiple concurrent users can access projects within tier limits.

## Credit System

### 10. Credit Consumption

**How credits are calculated:**

```
Linux: 1 credit = 1 minute of streaming
Windows: 2 credits = 1 minute of streaming
```

**Example scenarios:**

**Scenario 1: Quick Demo**
- 5 users × 10 minutes each × 1 credit/min (Linux) = 50 credits

**Scenario 2: Regular Usage**
- 10 sessions × 15 minutes each × 1 credit/min (Linux) = 150 credits

**Scenario 3: Trade Show Kiosk**
- Average 3 min per user × 100 users/day × 3 days = 900 credits

### 11. Cost Optimization

**Platform automatically optimizes costs:**

1. **Idle Shutdown**
   - Instances stop when no users connected
   - 2-minute grace period (Free/Plus)
   - Credits only consumed during active sessions

2. **Credit-based billing**
   - Pay only for active streaming minutes
   - No charges when idle
   - Monthly credit allocation by tier

## Monitoring & Analytics

### 12. Real-Time Metrics

**Dashboard provides:**

- **Session metrics**: Active users, session duration
- **Credit usage**: Real-time and historical
- **Basic analytics**: Session count, total minutes (all tiers)
- **Advanced analytics**: Detailed charts and trends (Pro tier)

### 13. Platform Monitoring

**We continuously monitor:**

- Instance health
- Stream quality
- Connection status
- Credit consumption

## Security

### 14. Security Measures

**Infrastructure security:**
- Encrypted storage
- Encrypted transmission (HTTPS, WSS, SRTP)
- Secure cloud infrastructure
- Automatic cleanup after sessions

### 15. Access Control

**Current:**
- Public URL access (anyone with link)

**Coming Soon:**
- Password protection (Pro+)
- Custom domains (Pro+)
- Token-based authentication (Enterprise)
- IP whitelisting (Enterprise)
- SSO integration (Enterprise)

## Scalability

### 16. Growth Support

**Platform handles:**

- Multiple concurrent users (within tier limits)
- Projects across different regions
- On-demand resource allocation

**Enterprise features (coming soon):**
- Reserved capacity
- Custom scaling policies
- Multi-region deployment
- Dedicated infrastructure

## Next Steps

- [Understand the credit system in detail](./credit-system)
- [Explore use cases](./use-cases)
- [Learn about pricing tiers](../pricing)
- [Deploy your first project](../getting-started/quick-start)
