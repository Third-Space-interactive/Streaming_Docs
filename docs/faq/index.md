---
sidebar_position: 1
---

# Frequently Asked Questions

Quick answers to common questions about Third Space Streaming Platform.

## Getting Started

### What is Third Space?

Third Space is a managed Pixel Streaming platform that lets you deploy Unreal Engine applications to the cloud without AWS expertise. Users access your interactive 3D experiences via web browser - no downloads required.

### Do I need AWS knowledge?

No! That's the entire point of Third Space. We handle all the AWS infrastructure, GPU provisioning, and WebRTC configuration. You just upload your packaged UE project.

### What Unreal Engine versions are supported?

- **UE 5.0+** (Recommended)
- **UE 4.27** (Fully supported)
- **UE 4.26** (Limited support)

Earlier versions may work but aren't officially supported.

### How long does deployment take?

**Upload time:** Varies by file size and internet speed (2GB = 5-15 minutes typical)

**Deployment time:** 3-7 minutes for infrastructure provisioning and configuration

**Total:** Plan for 10-20 minutes from upload to live stream.

---

## Billing & Credits

### How do credits work?

Credits are consumed based on active streaming time:
- **Linux:** 1 credit = 1 minute
- **Windows:** 2 credits = 1 minute

Credits are ONLY consumed when users are actively connected. Idle instances don't consume credits.

[Full credit system explanation →](../core-concepts/credit-system)

### What happens when I run out of credits?

**Free Tier:** Streams stop until next monthly reset or upgrade

**Paid Tiers:**
- Enable auto-purchase to automatically buy credit packs
- Or streams pause until manual top-up
- Email notifications at 80%, 90%, 100%

### Do unused credits roll over?

**Free/Plus/Pro:** No, credits reset monthly on billing date

**Enterprise:** Rollover negotiable in contract

**Purchased credit packs:** Never expire until used

### Can I get a refund?

- **First month:** 7-day money-back guarantee
- **Credit packs:** Non-refundable
- **Annual plans:** Pro-rated refunds considered case-by-case

---

## Technical

### Why Linux instead of Windows?

We auto-detect your package OS, but we **recommend Linux** because:
- 50% lower cost (1 credit/min vs 2)
- Better GPU performance
- Smaller package sizes
- Faster deployment

Windows is fine for testing or if you have Windows-only plugin dependencies.

### Can I update my project after deploying?

Yes! Simply upload a new package version. You can:
- Replace existing deployment
- Or create new version (keep old one running)

Both options available in dashboard settings.

### What GPU hardware do you use?

AWS G6 instances with NVIDIA L4 Tensor Core GPUs:
- 24GB GDDR6 memory
- Hardware-accelerated H.264 encoding
- Optimized for real-time rendering and streaming

### What's the maximum file size?

Depends on your tier (total storage across all projects):
- **Free:** 5GB
- **Plus:** 10GB
- **Pro:** 25GB
- **Enterprise:** 100GB+

Need larger? Optimize assets or upgrade tier.

### Can multiple users access the same instance?

**Free/Plus:** 1 concurrent user per instance

**Pro/Enterprise:** Up to 4 concurrent users (Pro) or unlimited (Enterprise) per instance:
- All users see the same scene
- Perfect for presentations, classroom sessions
- Massive cost savings (1 instance vs N instances)

OR isolated instances per user (configurable).

---

## Performance

### What's the expected latency?

Typical latency: **50-150ms** depending on:
- User's internet connection quality
- Geographic distance to AWS region
- Network congestion
- Browser and device

Enterprise tier offers multi-region deployment to reduce latency globally.

### What browsers are supported?

**Desktop:**
- Chrome 90+ (Recommended - best WebRTC support)
- Edge 90+
- Firefox 88+
- Safari 14+ (Limited, some features may not work)

**Mobile:**
- iOS Safari 14+
- Chrome for Android 90+

### What internet speed do users need?

**Minimum:** 10 Mbps download
**Recommended:** 25 Mbps for HD quality
**4K streaming:** 50+ Mbps

Upload speed matters less (1-2 Mbps sufficient for inputs).

### Do mobile devices work?

Yes! Touch controls are automatically detected and enabled. Works on:
- iOS 14+ (iPhones, iPads)
- Android 10+ (phones, tablets)

Some complex interactions may need mobile-specific UI adjustments in your UE project.

---

## Security & Privacy

### How is my project data stored?

- **Encrypted at rest** (AWS S3 server-side encryption)
- **Encrypted in transit** (HTTPS, WSS, SRTP)
- **Isolated environments** (no cross-project contamination)
- **Automatic cleanup** after deployment deletion

### Who can access my streams?

**Default:** Anyone with the URL (public link)

**Pro/Enterprise options:**
- Password protection
- Token-based authentication
- IP whitelisting
- SSO integration (Enterprise)

### Is my UE project source code safe?

Yes. We only receive your **packaged build** (compiled binaries), never source code. Your blueprints and assets are compiled and not accessible.

### Do you have a privacy policy?

Yes, available at [thirdspaceinteractive.ca/privacy](https://thirdspaceinteractive.ca/privacy)

---

## Platform Limitations

### What's the maximum concurrent users?

Depends on your tier:
- **Free:** 1 per instance
- **Plus:** 2 per instance
- **Pro:** 4 per instance
- **Enterprise:** Unlimited

Enterprise tier supports hundreds of users with automatic load balancing.

### Are there geographic restrictions?

Currently deployed in:
- US East (primary)
- Additional regions for Enterprise

Enterprise can request specific regions for compliance or latency requirements.

### Can I run this 24/7?

Technically yes, but cost-prohibitive on lower tiers:

**Example:** 24/7 Linux stream for 1 month
- 30 days × 24 hrs × 60 min = 43,200 credits
- Cost: ~$4,320 at standard rates

**Better approach:**
- Use idle timeout to auto-stop
- Deploy on-demand for active users
- Enterprise reserved capacity for 24/7 needs

### What about storage limits?

Total storage per tier:
- **Free:** 5GB (all projects combined)
- **Plus:** 10GB
- **Pro:** 25GB
- **Enterprise:** 100GB+

Delete old projects to free space.

---

## Troubleshooting

### My upload keeps failing

Common causes:
- File too large for tier
- Corrupt .zip file
- Incorrect folder structure
- Browser timeout (try smaller files)

[Full upload troubleshooting →](../troubleshooting/upload-issues)

### Instance won't launch

Check:
- Package structure is correct
- All dependencies included
- No corrupted files
- Tier limits not exceeded

[Deployment troubleshooting →](../troubleshooting/deployment-issues)

### Poor video quality or lag

Try:
- Check user's internet speed
- Reduce project complexity
- Lower target resolution
- Upgrade to better GPU tier (Enterprise)

[Performance optimization →](../troubleshooting/performance-issues)

### Fullscreen doesn't work in iframe

Browser security restricts fullscreen in iframes. Use:

```html
<iframe
  src="your-stream-url"
  allow="fullscreen"
  allowfullscreen
></iframe>
```

[Iframe troubleshooting →](../troubleshooting/fullscreen-iframe)

---

## More Questions?

**Browse by category:**
- [Billing & Credits FAQ](./billing-credits)
- [Technical FAQ](./technical)
- [Performance FAQ](./performance)
- [Security FAQ](./security)
- [Platform Limitations](./limitations)

**Still need help?**
- Email: support@thirdspaceinteractive.ca
- Discord: [Join our community](https://discord.gg/8pVjBjCe)
- Response time: Within 24 hours (faster for Pro/Enterprise)
