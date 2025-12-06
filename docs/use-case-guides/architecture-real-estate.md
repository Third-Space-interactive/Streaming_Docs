---
sidebar_position: 1
---

# Architecture & Real Estate

Deploy interactive architectural visualizations accessible from any device, eliminating the need for expensive workstations.

## The Challenge

Traditional architectural visualization workflows face several barriers:

### Client-Side Limitations
- **Hardware requirements**: Clients need gaming PCs with dedicated GPUs
- **Software installation**: IT departments block Unreal Engine installs
- **File sizes**: 5-50GB downloads deter stakeholders from viewing
- **Platform fragmentation**: Windows/Mac/Linux builds needed
- **Updates**: Every design revision requires new download

### Business Impact
- Lost sales opportunities (clients can't view presentations)
- Expensive demo hardware for sales centers
- Limited remote collaboration
- Delayed decision-making cycles
- High barrier for international clients

## The Third Space Solution

Stream high-fidelity Unreal Engine architectural visualizations directly to any browser. No downloads, no special hardware, instant access.

### Key Benefits

**For Clients:**
- View on iPads, phones, laptops - any device
- No installation or downloads required
- Instant access via link or QR code
- Always see the latest design iteration

**For Firms:**
- Eliminate demo workstation costs
- Enable remote client presentations
- Update once, everyone sees changes
- Global reach without shipping hardware
- Professional presentations on any device

## Implementation Guide

### Step 1: Prepare Your UE Project

**Optimize for streaming:**
1. Target 1920x1080 resolution (Pro tier: up to 2160p)
2. Lock framerate to 30 or 60 FPS
3. Optimize draw calls and material complexity
4. Implement LOD systems for large projects
5. Use Nanite wisely (GPU intensive)

**Enable Pixel Streaming:**
1. Open Project Settings
2. Search for "Pixel Streaming"
3. Enable the plugin
4. Restart Unreal Engine
5. Configure settings (default values work well)

**Add navigation:**
- Use Third Space Navigation Template (optional)
- Or implement custom camera controls
- Ensure touch controls for mobile/tablet
- Add UI for camera presets/viewpoints

### Step 2: Package Your Project

**Recommended: Linux Build**
- 50% lower cost (1 credit/min vs 2 for Windows)
- Package for Linux platform
- Compress entire folder to .zip

**File size optimization:**
- Remove unused assets and plugins
- Compress textures (Unreal's built-in compression)
- Enable Pak file compression
- Typical archviz project: 2-5GB

[Detailed packaging guide →](../technical-docs/packaging/linux-builds)

### Step 3: Deploy to Third Space

**Choose your tier:**
- **Free**: Testing and small demos (60 credits, 1 project)
- **Plus**: Client presentations (100 credits, 2 projects)
- **Pro**: Professional use (300 credits, 3 projects, advanced features)
- **Enterprise**: High-volume or 24/7 access

**Upload process:**
1. Create new project in dashboard
2. Upload .zip file (auto-detects Linux/Windows)
3. Configure settings:
   - Resolution (1080p or higher for Pro tier)
   - Watermark (Pro: hide platform watermark, add custom)
   - Region (North America, Europe, South Asia)
4. Deploy (3-7 minutes)
5. Receive streaming URL

### Step 4: Share with Clients

**Direct URL:**
```
https://stream.thirdspaceinteractive.ca/your-project-id
```

**Embed in website:**
```html
<iframe
  src="https://stream.thirdspaceinteractive.ca/your-project-id"
  width="1920"
  height="1080"
  frameborder="0"
  allowfullscreen
  allow="fullscreen"
></iframe>
```

**QR Code:**
- Generate QR code for streaming URL
- Print on marketing materials
- Place at model home sales centers
- Include in brochures

## Use Case Scenarios

### Scenario 1: Sales Center Presentation

**Setup:**
- 3 iPads at sales center
- Each running the stream URL
- Pro tier (4 concurrent users)
- Project: Multi-unit residential development

**Usage pattern:**
- Open house weekends: 20-30 visitors
- Average 10 minutes per visitor
- 2-3 concurrent users at peak

**Monthly credits:**
- 30 visitors × 10 min = 300 minutes
- 4 weekends = 1,200 credits/month
- **Cost**: Pro tier ($49/month, 300 credits included + additional pack)

**ROI:**
- No $3,000+ gaming PC per iPad
- No IT support for software updates
- Always showing latest design
- Works on client's personal devices too

### Scenario 2: Remote Client Reviews

**Setup:**
- Share URL via email
- Client views from office or home
- Plus or Pro tier depending on frequency

**Usage pattern:**
- Weekly design reviews (1 hour each)
- 2-3 stakeholders viewing simultaneously
- 4 weeks per month

**Monthly credits:**
- 1 hour × 60 min × 4 weeks = 240 minutes
- 3 concurrent users (Pro tier needed)
- **Cost**: Pro tier ($49/month, includes 300 credits)

**Benefits:**
- No travel costs
- Faster iteration cycles
- Document feedback in real-time
- International clients can participate

### Scenario 3: Trade Show / Real Estate Expo

**Setup:**
- Booth with large display + tablet
- QR code for attendee access
- Pro or Enterprise tier

**Usage pattern:**
- 3-day event
- 8 hours/day booth operation
- 100+ attendees scan QR code
- Average 5 minutes per attendee

**Credits calculation:**
```
Booth display: 8 hours × 3 days = 24 hours = 1,440 credits
Attendee access: 100 × 5 min = 500 credits
Total: ~2,000 credits
```

**Cost**: Pro tier + additional credit pack or Enterprise for events

**Advantages:**
- No shipping expensive hardware
- QR code extends reach beyond booth
- Attendees can revisit from home
- Collect analytics on engagement

### Scenario 4: Property Listing Enhancement

**Setup:**
- Embed stream in property listing website
- Available 24/7 for prospective buyers
- Pro or Enterprise tier

**Usage pattern:**
- Listing active for 3 months
- 50 views per month
- Average 8 minutes per view

**Monthly credits:**
```
50 views × 8 min = 400 credits/month
```

**Cost**: Pro tier + small credit pack

**Benefits:**
- Differentiated listings
- Pre-qualified leads (serious buyers tour virtually)
- Available outside business hours
- Global buyer access

## Best Practices

### Design Optimization

**Performance:**
- Target 60 FPS for smooth navigation
- Use Lumen carefully (performance impact)
- Implement aggressive LOD systems
- Limit real-time reflections
- Optimize landscape materials

**Presentation:**
- Create camera bookmark system
- Guided tour mode for key features
- Day/night lighting scenarios
- Material/finish variations
- Furniture placement options

### User Experience

**Navigation:**
- Intuitive controls (mouse + touch)
- Reset camera button
- Preset viewpoints (kitchen, master bedroom, etc.)
- Floor plan toggle
- Measurement tools (optional)

**Mobile optimization:**
- Touch controls clearly indicated
- Larger UI elements for touch
- Optimize for tablet/iPad resolution
- Test on multiple devices

### Credit Management

**Optimize costs:**
1. **Use Linux builds**: 50% cost reduction
2. **Leverage idle timeout**: Auto-stops after 2 min (Free/Plus)
3. **Monitor usage**: Check dashboard analytics
4. **Scheduled access**: For non-24/7 needs, pause instance when not needed
5. **Right-size tier**: Start with Plus, upgrade to Pro as needed

**Budgeting:**
- Free tier: ~6 demos at 10 min each
- Plus tier: ~10 client presentations
- Pro tier: ~30 presentations or 1-2 trade shows
- Enterprise: Custom high-volume needs

## Technical Specifications

### Recommended UE Settings

**Project Settings:**
- Target Platform: Scalable
- Anti-Aliasing: TAA
- Global Illumination: Lumen or baked lightmaps
- Reflections: Lumen or Screen Space
- Shadows: Dynamic or mixed

**Pixel Streaming Plugin:**
- Default settings work well
- Encoder: Hardware (H.264)
- Target bitrate: Adaptive (platform handles)

### Performance Targets

**For smooth streaming:**
- Maintain 60 FPS minimum (30 FPS acceptable)
- Keep draw calls under 5,000
- Limit active lights (use lightmaps when possible)
- Optimize texture streaming
- Monitor GPU memory usage

## Common Questions

### Can clients interact with the model?

Yes! Mouse, keyboard, and touch inputs work. Clients can:
- Navigate through spaces
- Open doors (if scripted)
- Toggle materials/finishes
- Change lighting scenarios
- Interact with UI elements

### What if I need to update the design?

Simply re-package and re-upload:
1. Make changes in Unreal Engine
2. Re-package for Linux/Windows
3. Upload new .zip to same project
4. URL stays the same - clients automatically see updates

### Can multiple clients view simultaneously?

Yes, within tier limits:
- Free: 1 concurrent user
- Plus: 2 concurrent users
- Pro: 4 concurrent users
- Enterprise: Unlimited

Each user gets their own view/camera - they don't interfere with each other.

### How do I present to a large group?

For presentations to 10+ people:
- One person streams to large display
- Others watch the display (not individual streams)
- Or upgrade to Enterprise for unlimited concurrent users

### What about confidential projects?

**Current:** Share URL only with trusted parties (URL is not publicly listed)

**Coming Soon:**
- Password protection (Pro tier)
- Custom domains (Pro tier)
- Access tokens (Enterprise)

## Success Metrics

Track these to measure ROI:

**Engagement:**
- Number of views
- Average session duration
- Return visitors
- Geographic distribution

**Business impact:**
- Reduced hardware costs
- Faster client decision cycles
- Increased international reach
- Higher close rates (measure pre/post)

**Dashboard analytics:**
- View credit consumption
- Session history
- Usage patterns
- Peak times

## Case Study: Russell Heights

**Project**: Luxury residential development visualization

**Challenge**:
- Sales center needed to showcase 8 unit configurations
- International buyers couldn't visit in person
- Design iterations happened weekly
- Required high-quality presentation on any device

**Solution**:
- Deployed single UE5 project to Third Space Pro tier
- 3 iPads at sales center
- Email URL to remote prospects
- QR codes on marketing materials

**Results**:
- Eliminated $9,000 in demo workstations
- 40% of viewings by international buyers
- Design updates deployed in minutes (vs hours previously)
- Increased qualified lead conversion by 25%

**Monthly costs**:
- Pro tier: $49/month
- Average usage: 250-280 credits/month
- Well within included allocation

## Next Steps

Ready to deploy your archviz project?

1. [Package your Unreal Engine project](../technical-docs/packaging)
2. [Sign up for free tier](https://app.thirdspaceinteractive.ca/signup)
3. [Follow quick start guide](../getting-started/quick-start)

Need help?
- [FAQ](../faq)
- [Support](../support-resources/getting-help)
- Email: support@thirdspaceinteractive.ca

---

**Related Resources:**
- [Education & Training Use Case](./education-training)
- [Sales & Marketing Use Case](./sales-marketing)
- [Credit System Explained](../core-concepts/credit-system)
