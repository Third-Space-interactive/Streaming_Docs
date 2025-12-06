---
sidebar_position: 3
---

# Sales & Marketing

Transform product demonstrations and marketing campaigns with interactive Unreal Engine experiences accessible from any device.

## The Challenge

Sales and marketing teams struggle to showcase products effectively:

### Traditional Demo Limitations
- **Demo stations**: Require $3,000+ gaming PCs at events
- **Portability**: Heavy equipment difficult to transport
- **Setup time**: Hours to configure at trade shows
- **Device limitations**: Clients can't view on their own devices
- **Geographic reach**: International prospects can't experience demos
- **Update friction**: New product versions require hardware refresh

### Sales Workflow Issues
- Prospects must visit showroom/office for demos
- Sales reps can't demo remotely during video calls
- Product configurators require software installation
- File sizes too large for email distribution
- Demo quality depends on prospect's hardware
- No analytics on prospect engagement

### Marketing Campaign Barriers
- Interactive content requires downloads
- Landing pages can't show real-time 3D
- Mobile users excluded from GPU-intensive experiences
- Campaign reach limited by technical barriers
- Hard to track which features prospects explore
- A/B testing interactive content is complex

## The Third Space Solution

Embed interactive Unreal Engine experiences directly into sales funnels, websites, and campaigns. One click to experience.

### Key Benefits

**For Sales Teams:**
- Demo from anywhere via screen share
- Send prospect a link (no installation)
- Product always shows latest version
- Works on client's existing devices
- Track which features prospects explore
- Present to multiple stakeholders simultaneously

**For Marketing:**
- Embed 3D configurators in landing pages
- Include in email campaigns (link-based)
- Mobile-friendly interactive ads
- Analytics on engagement and conversion
- A/B test different experiences
- Global reach without regional infrastructure

**For Customers/Prospects:**
- Explore products at their own pace
- Access from phone, tablet, laptop
- Configure options in real-time
- Share with decision-makers easily
- No commitment (no download/install)
- Available 24/7 on-demand

## Implementation Guide

### Step 1: Choose Your Experience Type

**Product Configurator**
- Let customers customize products in 3D
- Change colors, materials, options
- See pricing update in real-time
- Use for: Vehicles, furniture, custom products

**Virtual Showroom**
- Walkthrough of product displays
- Explore at own pace
- Interact with product details
- Use for: Real estate, retail, exhibitions

**Product Demonstration**
- Guided experience showing features
- Interactive hotspots for information
- Automated or user-controlled
- Use for: Complex machinery, software, technology

**Brand Experience**
- Immersive storytelling
- Gamified engagement
- Emotional connection
- Use for: Brand awareness, launches, events

### Step 2: Build Your UE Experience

**Design for conversion:**

1. **First impression (0-10 seconds)**
   - Immediately show value
   - Clear call-to-action visible
   - Intuitive controls (no tutorial needed)
   - Visually stunning opening

2. **Core experience (10-120 seconds)**
   - Highlight key differentiators
   - Enable meaningful interaction
   - Guide attention to important features
   - Keep user engaged

3. **Conversion path (120+ seconds)**
   - Contact sales button
   - Request quote functionality
   - Save/share configuration
   - Download spec sheet

**UE Blueprint implementation tips:**
- Implement "Request Info" button → Opens URL to contact form
- "Save Configuration" → Generates shareable URL or PDF
- Analytics events → Track feature exploration
- Mobile-optimized UI (touch controls)

**Performance targets:**
- 60 FPS minimum (smooth = professional)
- Under 3 seconds to first frame
- Responsive to all inputs under 100ms
- Works on mobile networks (optimize for 5 Mbps)

### Step 3: Optimize for Marketing

**File size and deployment:**
- Target under 5GB packaged (faster deployment)
- Use Linux builds (50% cost savings)
- Package for 1080p (Pro tier: 4K for premium)
- Compress assets aggressively

**Branding (Pro tier):**
- Remove platform watermark
- Add company logo/branding
- Custom loading screens
- Branded UI elements

**Multiple variations:**
- Deploy product line variations separately
- A/B test different experiences
- Seasonal/campaign-specific versions
- Regional customizations

[Packaging guide →](../technical-docs/packaging/linux-builds)

### Step 4: Integrate with Sales Funnel

**Landing pages:**
```html
<!-- Full-page embedded experience -->
<iframe
  src="https://stream.thirdspaceinteractive.ca/product-configurator"
  width="100%"
  height="800px"
  frameborder="0"
  allowfullscreen
  allow="fullscreen"
></iframe>
```

**Email campaigns:**
```markdown
[See it in action →](https://stream.thirdspaceinteractive.ca/your-experience)
```
- Include compelling thumbnail
- Clear CTA: "Configure Your [Product]"
- Works on mobile email clients

**Sales presentations:**
- Share screen during Zoom/Teams calls
- Send link for prospect to explore after call
- Embed in proposal documents
- Include in follow-up emails

**Trade show / events:**
- QR codes on booth displays
- Tablets at booth (no gaming PCs needed)
- Business cards with QR code
- Attendees take experience home via link

### Step 5: Track and Optimize

**Analytics to monitor:**
- Number of unique visitors
- Average session duration
- Feature interaction heatmaps (implement in UE)
- Conversion rate (clicks on contact/quote)
- Geographic distribution
- Device types used

**Dashboard metrics:**
- Credit consumption (cost per lead)
- Peak usage times
- Session history
- Concurrent user patterns

**Optimization loop:**
1. Deploy initial experience
2. Monitor engagement analytics
3. Identify drop-off points
4. Update UE project with improvements
5. Re-deploy (same URL, updated content)
6. Measure improvement

## Use Case Scenarios

### Scenario 1: Automotive Product Configurator

**Setup:**
- Product: Custom vehicle configurator
- Deployment: Embedded on website product pages
- Tier: Pro (4 concurrent users expected at peak)
- Linux build (1 credit/min)

**Experience features:**
- 12 color options
- 3 interior packages
- 8 wheel designs
- Real-time pricing display
- "Request Quote" CTA button

**Usage pattern:**
- Website traffic: 5,000 visitors/month
- Configurator conversion: 10% (500 users)
- Average session: 5 minutes
- Peak concurrent: 3-4 users

**Monthly credits:**
```
500 users × 5 min average = 2,500 credits/month
```

**Cost**: Pro tier ($49/month, includes 300 credits) + 2,200 additional credits (~$55)
**Total**: ~$104/month

**Conversion impact:**
- Pre-Third Space: 2% of website visitors requested quote
- With configurator: 8% request quote (4× increase)
- Cost per qualified lead: $104 / (500 × 8%) = $2.60/lead

**ROI:**
- Average vehicle sale: $45,000
- Close rate on quotes: 15%
- Monthly sales from configurator: 40 quotes × 15% = 6 sales
- Revenue: 6 × $45,000 = $270,000/month
- **ROI**: 259,900% ($104 spend → $270k revenue)

### Scenario 2: Trade Show Product Demo

**Setup:**
- Event: 3-day industry trade show
- Booth: 2 iPads for hands-on demos
- QR codes: On banners, business cards, brochures
- Tier: Pro (4 concurrent users)

**Usage pattern:**
- Booth hours: 8 hours/day × 3 days = 24 hours
- Booth demos: 2 iPads running continuously = 2,880 credits
- QR code scans: 200 attendees × 4 min average = 800 credits
- Total: ~3,700 credits

**Cost**: Pro tier ($49/month) + ~3,400 additional credits (~$85)
**Event total**: ~$134

**Compare to traditional:**
- Shipping 2 gaming PCs: $500
- Rental gaming PCs on-site: $800/event
- Setup time: 4 hours labor
- **Savings**: $650+ per event

**Lead generation:**
- 200 QR code scans (engaged attendees)
- 150 provided contact info (75% conversion)
- 30 became qualified leads (20%)
- **Cost per qualified lead**: $134 / 30 = $4.47

### Scenario 3: Remote Sales Demonstrations

**Setup:**
- Sales team: 5 reps
- Product: Industrial machinery visualization
- Use case: Screen share during prospect calls
- Tier: Pro (4 concurrent demos max)

**Usage pattern:**
- Each rep: 3 demos/day
- Average demo: 30 minutes
- 20 working days/month
- Not all reps demo simultaneously (sequential)

**Monthly credits:**
```
5 reps × 3 demos × 20 days × 30 min = 9,000 credits/month
(But only 4 concurrent, so peaks handled by Pro tier)
```

**Cost**: Pro tier ($49) + ~8,700 additional credits (~$218)
**Total**: ~$267/month for sales team

**Sales impact:**
- Demos conducted: 300/month
- Close rate with interactive demo: 25%
- Average deal size: $50,000
- Monthly revenue: 75 deals × $50k = $3,750,000

**Compared to travel for in-person demos:**
- Previous approach: Fly to prospect for demo
- Travel cost per demo: $1,500 average
- 300 demos × $1,500 = $450,000/month travel budget
- **Savings**: $449,733/month (99.9% reduction)

### Scenario 4: Marketing Campaign Landing Page

**Setup:**
- Campaign: New product launch
- Duration: 30-day campaign
- Tier: Plus (2 concurrent users expected)
- Interactive 3D product experience embedded on landing page

**Campaign metrics:**
- Paid ads drive 10,000 landing page visits
- 15% engage with 3D experience = 1,500 users
- Average engagement: 3 minutes
- Peak concurrent: 2 users (Plus tier limit)

**Monthly credits:**
```
1,500 engaged users × 3 min = 4,500 credits
```

**Cost**: Plus tier ($20) + ~4,400 additional credits (~$110)
**Total**: ~$130 for campaign

**Campaign performance:**
- Engaged users (used 3D): 1,500
- Conversion to lead: 12% = 180 leads
- **Cost per lead**: $130 / 180 = $0.72

**Compare to static landing page:**
- Previous conversion rate: 3%
- With interactive 3D: 12% (4× improvement)
- Interactive experience created 4× more leads for same ad spend

### Scenario 5: 24/7 Embedded Showroom

**Setup:**
- Use case: Luxury furniture brand
- Deployment: Virtual showroom on website
- Available: 24/7 for global customers
- Tier: Pro (4 concurrent users)

**Usage pattern:**
- Monthly visitors: 2,000
- 20% explore showroom: 400 users
- Average exploration: 8 minutes
- Peak concurrent: 3-4 users (Pro tier)

**Monthly credits:**
```
400 users × 8 min = 3,200 credits
```

**Cost**: Pro tier ($49) + ~2,900 additional credits (~$73)
**Total**: ~$122/month

**Business value:**
- Showroom visitors convert to sale: 8%
- Monthly sales: 400 × 8% = 32 sales
- Average order: $5,000
- Monthly revenue from showroom: 32 × $5k = $160,000
- **Marketing cost**: 0.076% of revenue ($122 / $160k)

**Physical showroom comparison:**
- Rent for retail space: $8,000/month
- Staffing: $12,000/month
- Utilities: $800/month
- Total physical cost: $20,800/month
- **Savings**: $20,678/month (99.4% reduction)

## Best Practices

### Experience Design

**Keep it focused:**
- One clear goal per experience (don't try to show everything)
- Under 2 minutes for core message
- Intuitive controls (test with non-gamers)
- Mobile-first design (most users on phones)

**Optimize for conversion:**
- Place CTA buttons strategically (visible but not intrusive)
- Implement "Share This Configuration" feature
- Track analytics events in UE (feature clicks, time spent)
- A/B test different layouts

**Visual quality:**
- First impression is critical (stunning visuals)
- Use Lumen for realistic lighting (if performance allows)
- High-quality materials and textures
- Smooth animations (60 FPS minimum)

### Sales Enablement

**Equip your sales team:**
- Create demo script/flow document
- Train reps on interactive features
- Provide troubleshooting FAQ
- Share best practices (screen share settings, etc.)

**Integration with CRM:**
- Track who accesses demo links (use unique URLs per prospect)
- Log engagement duration in CRM
- Trigger follow-up based on interaction
- Score leads by depth of engagement

**Objection handling:**
- "Can I see it in different colors?" → Yes, configurator
- "How does it compare to competitor?" → Side-by-side demo
- "Will it fit in my space?" → Scale reference in 3D
- "Can I show my team?" → Shareable link

### Marketing Campaign Optimization

**Funnel integration:**

1. **Awareness stage**: Brand experience (emotional/storytelling)
2. **Consideration stage**: Product demo (features/benefits)
3. **Decision stage**: Configurator (personalization)
4. **Retention stage**: Tutorials/training (customer success)

**Multi-channel distribution:**
- Website: Embedded iframe
- Email: Link with compelling thumbnail
- Social media: Teaser video + "Try it yourself" link
- Paid ads: Landing page with embedded experience
- Partners: Shareable links for resellers

**A/B testing:**
- Test different opening scenes
- Vary CTA button placement
- Try guided vs free exploration
- Measure session duration and conversion

**Credit management:**
- Monitor usage spikes during campaigns
- Scale tier up for major launches
- Use idle timeout to manage costs
- Set alerts for unusual activity

### Performance Monitoring

**Key metrics:**

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| Avg session duration | 2+ minutes | Improve engagement, simplify navigation |
| Conversion rate | 5-15% | Optimize CTA placement, reduce friction |
| Mobile usage | 50%+ | Ensure touch controls work perfectly |
| Return visitors | 10-20% | Add "Save & Return" feature |
| Load time | Under 5 sec | Optimize file size, reduce initial load |

**Dashboard analytics:**
- Review weekly credit consumption trends
- Identify peak usage days/hours
- Monitor concurrent user limits (upgrade if hitting ceiling)
- Track geographic distribution (consider multi-region)

### Brand Consistency

**Visual identity:**
- Match website branding (colors, fonts, logo)
- Consistent UI patterns across experiences
- Professional loading screens
- Branded error messages

**Voice and tone:**
- Instructional text matches brand voice
- CTA button copy aligned with marketing
- Error messages stay on-brand
- Tutorial content maintains tone

## Technical Specifications

### Recommended UE Settings for Sales/Marketing

**Project settings:**
- **Platform**: Scalable (works across cloud GPUs)
- **Target framerate**: 60 FPS minimum (30 acceptable for cinematic)
- **Resolution**: 1920×1080 default (Pro: 4K for luxury brands)
- **Anti-aliasing**: TAA (best quality/performance balance)

**Pixel Streaming plugin:**
- Enable plugin and configure defaults
- Test with low bandwidth (mobile networks)
- Implement reconnection logic (graceful failures)

**Blueprint features to implement:**
- "Contact Sales" button → Opens URL
- "Save Configuration" → Generates unique URL or JSON
- Analytics events → Track feature interactions
- "Share" button → Copy link to clipboard
- Reset camera → Return to starting view

**Mobile optimization:**
- Large touch targets (minimum 44×44 pixels)
- Swipe gestures for camera
- Pinch to zoom
- Landscape and portrait support
- Network-adaptive quality

### Analytics Integration

**Track these events in UE:**
```cpp
// Example Blueprint events to track
OnFeatureClicked("Color_Picker")
OnConfigurationSaved("Red_Sport_Package")
OnCTAClicked("Request_Quote")
OnSessionCompleted(Duration_Seconds)
```

**Send to analytics platform:**
- Google Analytics via URL parameters
- Mixpanel for event tracking
- Segment for multi-platform
- Custom webhooks to CRM

### File Size Optimization

**Target sizes:**
- Landing page embeds: Under 3GB (fast deployment)
- Trade show demos: Under 5GB (good quality/size balance)
- Premium experiences: Under 10GB (Pro tier)

**Compression techniques:**
- Use Unreal's Pak file compression
- Optimize textures (compress, resize unused high-res)
- Remove unused assets and plugins
- Use shared materials (reduce unique shaders)

## Common Questions

### Can I password-protect my sales demo?

Password protection is coming soon (Pro tier feature). Currently:
- Share URL only with intended recipients
- URL is not publicly listed or searchable
- Monitor usage via dashboard (identify unauthorized access)

For highly confidential products:
- Consider Enterprise tier (custom access controls available)
- Deploy on-demand only when needed

### How do I embed in my website?

Use an iframe:

```html
<iframe
  src="https://stream.thirdspaceinteractive.ca/your-project-id"
  width="100%"
  height="600px"
  frameborder="0"
  allowfullscreen
></iframe>
```

Responsive design:
```css
.stream-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.stream-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

[Full embedding guide →](../technical-docs/integration/iframe-embedding)

### Can multiple prospects view at the same time?

Yes, within your tier's concurrent user limit:
- **Plus**: 2 concurrent users
- **Pro**: 4 concurrent users
- **Enterprise**: Unlimited

Each user gets their own independent instance. They cannot see or interfere with each other.

For high-traffic campaigns, consider:
- Upgrade to Pro or Enterprise
- Deploy multiple identical projects (distributes load)
- Monitor peak usage and scale accordingly

### How quickly can I update for a product launch?

Very fast:
1. Update your UE project with new features
2. Re-package for Linux/Windows
3. Upload new .zip to same Third Space project
4. Deploy (3-7 minutes)
5. URL stays the same - everyone sees new version

Total time: Under 15 minutes from UE changes to live.

### Can I track which features prospects explore?

Yes, implement analytics in your UE project:

**Method 1: URL parameters**
- On feature click, append to URL
- Track in Google Analytics

**Method 2: Custom analytics events**
- Send HTTP requests from UE to analytics platform
- Example: Track "Clicked_Premium_Package" event

**Method 3: Dashboard analytics**
- View session durations
- Identify engaged users (long sessions = high interest)
- Geographic data (where leads come from)

### What's the best tier for marketing campaigns?

Depends on expected concurrent users:

| Campaign Size | Expected Concurrent | Recommended Tier |
|---------------|---------------------|------------------|
| Small (under 1K visits) | 1-2 | Plus ($20) |
| Medium (1K-10K visits) | 2-4 | Pro ($49) |
| Large (10K+ visits) | 4+ | Enterprise (custom) |

**Pro tip**: Start with Plus, monitor concurrent usage, upgrade if hitting limits.

### Can I use this for internal sales training?

Absolutely! Great use case:

**Training scenarios:**
- New sales rep onboarding (explore product at own pace)
- Product knowledge refresh (updated automatically)
- Role-playing demos (practice presentations)
- Certification testing (interactive assessments)

**Benefits:**
- Reps learn on any device
- Always training on latest product version
- Track completion via analytics
- No expensive training hardware

## Success Metrics

Track these KPIs:

**Engagement:**
- Click-through rate from ad → experience
- Average session duration
- Feature interaction rate
- Return visitor rate

**Conversion:**
- Experience → Lead conversion rate
- Cost per lead (credits ÷ leads)
- Lead quality score (engagement duration)
- Sales close rate (qualified leads → customers)

**ROI:**
- Revenue attributed to experience
- Cost savings vs traditional (trade shows, demos)
- Marketing cost as % of revenue
- Payback period

**Operational:**
- Credit consumption per session
- Concurrent user peak times
- Geographic distribution
- Device types (mobile vs desktop)

## Case Study: Luxury Yacht Configurator

**Company**: Premium yacht manufacturer

**Challenge:**
- Yachts cost $2-10 million (high-stakes sales)
- Prospects globally distributed (Europe, Asia, Americas)
- Physical showrooms only in 3 cities
- Custom configurations take weeks to visualize
- Competitors had no interactive tools

**Solution:**
- Developed UE5 yacht configurator
- Deployed on Third Space Pro tier
- Embedded on website product pages
- Sales team uses in video calls

**Configurator features:**
- 5 hull designs
- 20+ interior layouts
- Material/finish picker (woods, fabrics)
- Deck equipment configurator
- Real-time pricing calculator
- "Request Consultation" CTA

**Results (6 months):**

**Engagement:**
- 1,200 configurator sessions
- Average duration: 12 minutes (high interest)
- 68% mobile usage (prospects exploring from anywhere)
- 280 "Request Consultation" clicks (23% conversion)

**Sales impact:**
- 280 qualified leads from configurator
- 42 became serious prospects (15%)
- 8 closed sales (19% close rate)
- Average sale: $4.2 million
- **Revenue**: $33.6 million in 6 months

**Cost:**
- Third Space Pro: $49/month × 6 = $294
- Additional credits (12,000 total): ~$600
- Development (UE project): $15,000 one-time
- **Total 6-month cost**: $15,894

**ROI:**
- Marketing cost: 0.047% of revenue ($15,894 / $33.6M)
- Cost per closed sale: $1,987 ($15,894 / 8 sales)
- Return: 211,500% ($33.6M revenue / $15,894 cost)

**CEO quote:**
> "The configurator became our #1 lead generation tool. Prospects who spent 10+ minutes in it closed at 3× our normal rate. Best marketing investment we've ever made."

## Next Steps

Ready to transform your sales and marketing?

1. [Review system requirements](../getting-started/system-requirements)
2. [Package your UE experience](../technical-docs/packaging)
3. [Sign up for a tier](https://app.thirdspaceinteractive.ca/signup)
4. [Deploy and embed](../technical-docs/integration/iframe-embedding)

Need help planning your experience?
- [Contact sales for consultation](../support-resources/getting-help)
- [Calculate credit needs](../core-concepts/credit-system)
- Email: sales@thirdspaceinteractive.ca

---

**Related Resources:**
- [Architecture & Real Estate Use Case](./architecture-real-estate)
- [Education & Training Use Case](./education-training)
- [Iframe Embedding Guide](../technical-docs/integration/iframe-embedding)
- [Credit System](../core-concepts/credit-system)
