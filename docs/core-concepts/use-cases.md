---
sidebar_position: 4
---

# Use Cases

Real-world applications of Third Space Pixel Streaming across industries.

## Architecture & Real Estate

### Challenge

Architectural visualizations require high-end gaming PCs to render real-time walkthroughs. Clients and stakeholders often don't have the hardware, making presentations difficult and limiting accessibility.

### Solution with Third Space

Deploy interactive 3D walkthroughs accessible via simple URL. Clients explore on iPads, phones, or any device without downloads.

### Real-World Example: Russell Heights

**Project**: Luxury residential development visualization

**Setup**:
- Unreal Engine 5 archviz project
- Packaged for Linux
- Deployed to Third Space Pro tier

**Usage Pattern**:
- Sales center has 3 iPads with stream URL
- Prospective buyers explore units during visits
- Average session: 15 minutes per buyer
- Monthly usage: ~100 sessions = 1,500 credits

**Results**:
- No expensive workstations needed
- Instant updates when design changes
- Accessible at off-site events and open houses
- Cost: $99/month vs $5,000+ in hardware

[Read full case study →](../use-case-guides/architecture-real-estate)

### Best Practices

- Use high-quality lighting and materials (cloud GPU can handle it!)
- Package for Linux to reduce costs
- Set up multiple camera viewpoints for guided tours
- Enable touch controls for iPad/tablet navigation
- Consider shared instance for group presentations

---

## Education & Training

### Challenge

Teaching Unreal Engine or 3D visualization requires computer labs with expensive GPU workstations. Budget constraints limit access to powerful hardware.

### Solution with Third Space

Students access high-performance Unreal applications from any laptop or Chromebook. Entire class can participate simultaneously.

### Real-World Example: Small Classroom

**Project**: Virtual museum exploration for art history class

**Setup**:
- Custom UE5 environment with historical artifacts
- Pro tier (4 concurrent users) or Enterprise tier (unlimited)
- Individual student access

**Usage Pattern**:
- Small lab sessions (up to 4 students on Pro tier)
- Weekly 1-hour sessions
- Instructor demonstrates on main display
- Students follow along on own devices

**Credits Calculation (Pro tier, 4 students)**:
```
4 students × 60 minutes × 4 sessions/month = 960 credits/month
Well within Pro tier allocation (300 credits/month includes some usage)
```

**Results**:
- Students with basic Chromebooks can participate
- No IT department maintenance
- Instant access for remote/hybrid students
- Cost-effective for small group instruction

**For larger classes:**
- Enterprise tier supports unlimited concurrent users
- Contact sales for custom credit packages and pricing

[Read full case study →](../use-case-guides/education-training)

### Best Practices

- Start with Pro tier for small groups (up to 4 concurrent)
- Upgrade to Enterprise for larger classes
- Pre-load scenes before sessions start
- Set longer idle timeout (Pro tier: 5 min)
- Monitor credit usage to optimize session length

---

## Sales & Marketing

### Challenge

Product demos and configurators face a download barrier. Trade show attendees, website visitors, and retail customers won't install apps to see your product.

### Solution with Third Space

Interactive product experiences accessible instantly via QR code, kiosk, or website embed. No installation friction.

### Example: Automotive Configurator

**Project**: Real-time car customization experience

**Setup**:
- UE5 product configurator
- Color selection, wheel options, interior materials
- Embedded in manufacturer's website

**Usage Pattern**:
- Website visitors access via iframe
- Trade show kiosks run 8 hours/day
- Average session: 3-5 minutes
- High traffic during launches

**Credits Calculation (Trade Show)**:
```
3-day auto show, 1 kiosk, continuous operation:

Total hours: 8 hours/day × 3 days = 24 hours
Total credits (Linux): 24 × 60 = 1,440 credits

Cost: ~$175 via credit pack
vs Shipping gaming PC to show: $500+ logistics + risk
```

**Results**:
- 40% increase in website engagement
- Zero friction at trade shows
- Instant configuration sharing via URL
- Real-time updates for new product variants

[Read full case study →](../use-case-guides/sales-marketing)

### Best Practices

- Optimize for mobile (many retail customers on phones)
- Implement "Share My Configuration" feature
- Use analytics to track popular options
- Set 2-minute idle timeout for kiosks (auto-reset)
- Pre-warm instances before peak traffic

---

## Digital Twins & Industrial Monitoring

### Challenge

Factory managers, engineers, and executives need real-time facility monitoring but can't install specialized software on every device.

### Solution with Third Space

Browser-based access to live digital twin. Monitor operations from office desktops, mobile devices, or remote locations.

### Example: Manufacturing Plant Digital Twin

**Project**: Real-time factory floor visualization with IoT integration

**Setup**:
- UE5 digital twin with live sensor data
- API integration for production metrics
- Multi-user access for management team

**Usage Pattern**:
- Available during business hours for monitoring
- Average 2-4 concurrent users (Pro tier)
- Peak usage during shift changes
- Emergency access from mobile devices

**Credits Calculation**:
```
Business hours monitoring (Pro tier, 5-min idle timeout):

Business hours: 10 hours/day × 22 days = 220 hours/month
Actual usage (with idle): ~60% = 132 hours
Credits: 132 × 60 = 7,920 credits

Recommendation: Enterprise tier for high-volume usage
```

**Results**:
- Executives monitor from any device
- Faster incident response
- Reduced need for floor visits
- Enhanced stakeholder transparency

[Read full case study →](../use-case-guides/digital-twins)

### Best Practices

- Start with Pro tier (4 concurrent users) for small teams
- Upgrade to Enterprise for larger teams or 24/7 monitoring
- Optimize project for efficient streaming
- Integrate with existing monitoring dashboards
- Monitor credit consumption and adjust usage as needed

---

## Event & Exhibition Experiences

### Challenge

Events, museums, and exhibitions need engaging interactive experiences but can't rely on visitor devices or complex installations.

### Solution with Third Space

Deploy on dedicated kiosks or allow visitors to access on their own devices via QR codes. Experiences work instantly without downloads.

### Example: Museum Interactive Exhibit

**Project**: Ancient civilization exploration for museum installation

**Setup**:
- UE5 historical reconstruction
- Touch-screen kiosks (3 units)
- QR codes for personal device access

**Usage Pattern**:
- Museum open 6 days/week, 8 hours/day
- 3 kiosks run simultaneously
- Average visitor session: 7 minutes
- Peak on weekends

**Credits Calculation**:
```
Kiosk operation:
6 days × 8 hours × 3 kiosks = 144 hours/week
Monthly: 144 × 4 = 576 hours

With idle timeout optimization (60% active): 346 hours
Credits (Linux): 346 × 60 = 20,760 credits/month

Recommendation: Enterprise tier with bulk discount
```

**Results**:
- Minimal hardware investment (basic touch screens)
- Remote content updates without on-site visits
- Analytics on visitor engagement
- Personal device access for accessibility

### Best Practices

- Implement auto-reset for kiosk mode
- Use 1-2 minute idle timeout for quick turnover
- Brand the loading screen
- Provide multi-language support
- Track popular content areas via analytics

---

## Virtual Tours & Open Houses

### Challenge

Real estate agents, venues, and event spaces need to showcase properties remotely, especially for out-of-town clients or during off-hours.

### Solution with Third Space

24/7 accessible virtual tours. Clients self-tour at their convenience without scheduling agent time.

### Example: Commercial Property Tour

**Project**: Office building virtual tour for leasing

**Setup**:
- Photorealistic UE5 environment
- Multiple floor plans and configurations
- Embedded on property website

**Usage Pattern**:
- Prospects access anytime
- Average 20 tours/week
- Average duration: 12 minutes each
- Peak during business listings

**Credits Calculation**:
```
Weekly usage: 20 tours × 12 minutes = 240 minutes
Monthly: 240 × 4 = 960 minutes (960 credits)

Cost: Pro tier ($99/month) includes 2,000 credits
Plenty of headroom for growth
```

**Results**:
- Pre-qualified leads (serious prospects tour first)
- Reduced agent time on unqualified showings
- Global reach (international investors)
- Instant updates for space modifications

### Best Practices

- Include measurement tools for space planning
- Implement lead capture (email gate for access)
- Provide downloadable floor plans post-tour
- Track user navigation patterns
- A/B test different staging options

---

## Training Simulations

### Challenge

Safety training, equipment operation, and procedural training require expensive physical setups or specialized software installations.

### Solution with Third Space

Browser-based training simulations accessible from anywhere. No installations, instant updates to procedures.

### Example: Forklift Safety Training

**Project**: Virtual forklift operation simulator

**Setup**:
- UE5 warehouse environment with physics
- Interactive safety scenarios
- Progress tracking and scoring

**Usage Pattern**:
- 50 employees complete annual certification
- 30-minute training session each
- Spread across 2-week period
- Accessible from break room kiosks or home

**Credits Calculation**:
```
Total: 50 employees × 30 minutes = 1,500 minutes
Credits (Linux): 1,500 credits

Annual cost: ~$180 via credit packs
vs Physical trainer: $5,000+ per session
```

**Results**:
- 96% cost reduction vs in-person training
- Standardized training quality
- Instant remedial training access
- Detailed analytics on performance
- Zero travel costs for remote employees

### Best Practices

- Implement progress saving (persistent data)
- Use WebRTC data channels for score tracking
- Provide instant feedback on mistakes
- Generate completion certificates
- Track attempt history for compliance

---

## When to Use Third Space

### Ideal For:

✅ **High-fidelity 3D experiences** needing instant browser access
✅ **Projects with sporadic usage** (demos, presentations, events)
✅ **Multi-user scenarios** (classrooms, shared presentations)
✅ **Remote access requirements** (global clients, distributed teams)
✅ **Rapid iteration** (frequent content updates)
✅ **No-installation mandates** (corporate networks, public kiosks)

### Not Ideal For:

❌ **24/7 continuous operation** with hundreds of concurrent users (consider dedicated infrastructure)
❌ **Ultra-low latency requirements** (under 20ms) like competitive gaming
❌ **Offline access needs** (no internet connectivity)
❌ **Tiny file sizes** (under 100MB) - consider WebGL instead

---

## Next Steps

Choose your use case to learn more:

- [Architecture & Real Estate Guide](../use-case-guides/architecture-real-estate)
- [Education & Training Guide](../use-case-guides/education-training)
- [Sales & Marketing Guide](../use-case-guides/sales-marketing)
- [Digital Twins Guide](../use-case-guides/digital-twins)

Or start deploying:

- [Quick Start Guide](../getting-started/quick-start)
- [Pricing Calculator](../pricing/cost-calculator)
- [Contact Sales for Enterprise](../pricing/enterprise)
