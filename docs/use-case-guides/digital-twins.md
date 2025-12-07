---
sidebar_position: 4
---

# Digital Twins & Industrial IoT

Create interactive digital twins of facilities, equipment, and processes accessible from any device for monitoring, training, and decision-making.

## The Challenge

Industrial digital twin implementations face accessibility and cost barriers:

### Traditional Digital Twin Limitations
- **Workstation requirements**: 3D visualization needs dedicated GPUs
- **Software installation**: IT security blocks desktop applications
- **Access restrictions**: Only available at control rooms or engineering workstations
- **Mobile limitations**: Field technicians can't access on tablets
- **Collaboration barriers**: Remote teams can't view simultaneously
- **Update complexity**: New data requires software redistribution

### Operational Impact
- Decision-makers can't access real-time facility data remotely
- Field technicians lack visual context during repairs
- Training requires expensive simulation hardware
- Slow incident response (can't visualize remotely)
- High cost of ownership for visualization infrastructure
- Limited stakeholder access (executive, client reviews)

### Business Challenges
- Capital expenditure on visualization workstations
- Siloed data (engineering team only access)
- Delayed decision-making (must be at workstation)
- Training bottlenecks (limited simulation stations)
- Vendor lock-in to proprietary platforms

## The Third Space Solution

Stream interactive digital twins from cloud GPUs to any browser. Democratize access to 3D visualization across your organization.

### Key Benefits

**For Operations:**
- Monitor facilities from anywhere (office, home, field)
- Access on tablets during inspections
- Real-time data visualization in 3D context
- Quick incident response (visualize before traveling)
- Multi-stakeholder collaboration

**For Engineering:**
- Share models with non-technical stakeholders
- Eliminate workstation maintenance
- Update once, everyone sees changes
- Integrate with existing data sources (IoT, SCADA, etc.)
- Version control and rollback

**For Management:**
- Executive dashboards with 3D context
- Remote facility reviews
- Budget approval with visual evidence
- Client demonstrations without special hardware
- Global accessibility for distributed teams

## Implementation Guide

### Step 1: Define Your Digital Twin Scope

**Choose your digital twin type:**

| Type | Scope | Update Frequency | Best Tier |
|------|-------|------------------|-----------|
| **Static model** | Facility layout, equipment placement | Weekly/monthly | Plus/Pro |
| **Live monitoring** | Sensor data overlays, status indicators | Real-time | Pro/Enterprise |
| **Simulation** | Process optimization, training scenarios | On-demand | Pro |
| **Predictive** | Maintenance forecasting, analytics | Hourly/daily | Enterprise |

**Typical applications:**
- Manufacturing facility digital twin
- Building management systems (BMS)
- Oil & gas infrastructure monitoring
- Smart city infrastructure
- Supply chain visualization
- Process plant optimization

### Step 2: Build Your UE Digital Twin

**Data integration architecture:**

```
IoT Sensors/SCADA → Data Platform → UE Pixel Streaming Instance
                      (AWS IoT Core,     (Blueprints fetch
                       Azure IoT Hub,     data via HTTP/WebSocket)
                       On-prem API)
```

**UE Blueprint implementation:**

1. **HTTP polling** (simple, works for most cases)
   - Blueprint timer → HTTP GET request every N seconds
   - Parse JSON response
   - Update 3D visualizations (colors, positions, values)

2. **WebSocket** (real-time, advanced)
   - Persistent connection to data source
   - Receive updates as events occur
   - More complex to implement

3. **Static data** (snapshots, no live updates)
   - Load data at startup from JSON file
   - User can refresh to fetch latest
   - Simplest implementation

**Visual representation:**
- **Color coding**: Green (normal), Yellow (warning), Red (alarm)
- **3D widgets**: Floating text showing sensor values
- **Animations**: Equipment state (running, stopped, maintenance)
- **Heat maps**: Temperature, pressure, flow visualization
- **Alerts**: Blinking indicators for critical states

**Example Blueprint structure:**
```
On Tick (Every 5 seconds):
  → HTTP GET /api/sensor-data
  → Parse JSON
  → For each sensor:
    → Update 3D widget text (temperature value)
    → Set material color (green/yellow/red based on threshold)
    → Update animation state (if equipment running)
```

**Performance considerations:**
- Keep polygon count reasonable (60 FPS target)
- Optimize data queries (fetch only changed values)
- Use LOD systems for large facilities
- Cache static geometry, update dynamic elements only

### Step 3: Configure Access Strategy

**User roles and access:**

**Executive/Management:**
- View-only access (no configuration changes)
- High-level KPI overlays
- Summary dashboards
- Mobile-friendly (tablets, phones)

**Operations/Engineering:**
- Interactive controls (change views, filter data)
- Detailed metrics and graphs
- Troubleshooting tools
- Desktop + mobile access

**Field Technicians:**
- Mobile-optimized interface
- Equipment location finder
- Maintenance history overlay
- Work order integration

**External Stakeholders:**
- Client demonstrations
- Regulatory inspections
- Vendor collaboration
- Limited access (specific areas only)

**Implementation:**
- Deploy separate UE projects for different access levels
- Or implement role-based UI in single project
- Share different URLs for different audiences

### Step 4: Deploy and Share

**Choose your tier:**

| Concurrent Users | Use Case | Recommended Tier |
|------------------|----------|------------------|
| 1-2 | Individual monitoring, small teams | Plus ($20) |
| 3-4 | Department access, ops + engineering | Pro ($49) |
| 5-10 | Multi-team access, shift coverage | Enterprise (custom) |
| 24/7 availability | Critical infrastructure monitoring | Enterprise (custom) |

**Deployment options:**

**Option A: Business hours monitoring**
- Deploy during work hours (8am-6pm)
- Stop instance overnight (save credits)
- Suitable for non-critical monitoring

**Option B: On-demand access**
- Deploy only when needed for reviews/inspections
- Stop when not in use
- Best for static models with infrequent access

**Option C: 24/7 availability**
- Critical infrastructure monitoring
- Shift work environments
- Enterprise tier recommended

**Sharing methods:**
- Direct URL to authorized users
- Embed in intranet dashboards
- Link from SCADA/control systems
- QR codes in field (equipment locations)

### Step 5: Integrate with Data Sources

**Common integration patterns:**

**REST API polling:**
```
UE Blueprint Timer (5-60 sec interval)
  ↓
HTTP GET to API endpoint
  ↓
Parse JSON response
  ↓
Update 3D visualization
```

**Example API response:**
```json
{
  "sensors": [
    {"id": "TEMP_001", "value": 72.5, "status": "normal", "location": "Building_A"},
    {"id": "PRESS_002", "value": 145.2, "status": "warning", "location": "Pump_Room"}
  ]
}
```

**Database queries:**
- Connect to SQL database via HTTP API wrapper
- Query recent sensor readings
- Display historical trends

**IoT platforms:**
- AWS IoT Core → Lambda → API Gateway → UE
- Azure IoT Hub → Function App → UE
- Google Cloud IoT → Cloud Functions → UE

**SCADA systems:**
- Export data to API endpoint
- UE polls API for updates
- Visualize in 3D context

**File-based updates:**
- Periodically export CSV/JSON to cloud storage
- UE downloads and parses file
- Simple for static/infrequent updates

## Use Case Scenarios

### Scenario 1: Manufacturing Facility Monitoring

**Setup:**
- Facility: 50,000 sq ft manufacturing plant
- Sensors: 100+ temperature, pressure, flow sensors
- Users: Ops team (4 people), management (3), remote engineers (2)
- Tier: Pro (4 concurrent users, typical peak)

**Digital twin features:**
- 3D facility layout
- Real-time sensor value overlays
- Color-coded equipment status
- Production line flow visualization
- Alert notifications (visual + audio)

**Data integration:**
- SCADA system → REST API
- UE polls every 10 seconds
- Updates 100 sensor visualizations

**Usage pattern:**
- Business hours monitoring: 8am-6pm weekdays
- 10 hours/day × 5 days = 50 hours/week
- Average 2-3 concurrent users
- 200 hours/month total

**Monthly credits:**
```
200 hours × 60 min = 12,000 credits/month
Linux build (1 credit/min)
```

**Cost**: Pro tier ($49) + ~11,700 additional credits (~$293)
**Total**: ~$342/month

**ROI:**
- Prevented unplanned downtime: 2 incidents/month
- Average downtime cost: $50,000/incident
- Early detection via digital twin saved: $100,000/month
- **ROI**: 29,200% ($342 cost → $100k savings)

**Traditional alternative:**
- 9 workstations ($3k each) = $27,000 initial
- Annual maintenance: $3,000
- Third Space payback: Under 3 months

### Scenario 2: Smart Building Management

**Setup:**
- Building: 20-story office complex
- Systems: HVAC, lighting, security, elevators
- Users: Facilities team (3), property management (2), tenants (view-only)
- Tier: Pro (4 concurrent users)

**Digital twin features:**
- Floor-by-floor 3D navigation
- HVAC zone visualization
- Energy consumption heat maps
- Occupancy tracking
- Maintenance request integration

**Data sources:**
- Building Management System (BMS) → API
- Energy meters → Database
- Occupancy sensors → IoT platform

**Usage pattern:**
- Facilities: Daily monitoring (2 hours/day)
- Management: Weekly reviews (1 hour/week)
- Tenants: Occasional access (10 hours/month total)
- Total: ~60 hours/month

**Monthly credits:**
```
60 hours × 60 min = 3,600 credits/month
```

**Cost**: Pro tier ($49) + ~3,300 additional credits (~$83)
**Total**: ~$132/month

**Business value:**
- Energy optimization: 12% reduction in HVAC costs
- Annual energy cost: $200,000
- Savings: $24,000/year ($2,000/month)
- Digital twin cost: $132/month
- **Net savings**: $1,868/month

**Tenant satisfaction:**
- Transparency into building operations
- Faster response to comfort issues
- Increased lease renewal rate: 8% improvement

### Scenario 3: Oil & Gas Pipeline Monitoring

**Setup:**
- Infrastructure: 100-mile pipeline with 50 monitoring stations
- Sensors: Pressure, flow, leak detection, valve status
- Users: Control room (2), field engineers (3), management (2)
- Tier: Enterprise (24/7 monitoring, 5+ concurrent users)

**Digital twin features:**
- 3D pipeline route visualization
- Real-time pressure/flow gradient display
- Leak detection alerts
- Valve control visualization (status, not remote control)
- Historical trend overlays

**Data integration:**
- SCADA → Real-time API
- UE updates every 5 seconds
- Critical alerts trigger visual/audio notifications

**Usage pattern:**
- 24/7 availability (critical infrastructure)
- Average 2-4 concurrent users
- Peak: 5-6 during incidents

**Monthly credits:**
```
24/7 operation: 730 hours/month × 60 min = 43,800 credits/month
(But only 2-4 concurrent users average, not all stations streaming)
```

**Cost**: Enterprise tier (custom pricing, ~$500-800/month for this scale)

**Safety & operational benefits:**
- Early leak detection: Prevented 3 incidents/year
- Average incident cost: $500,000 (cleanup, fines, downtime)
- Annual savings: $1.5 million
- Digital twin annual cost: ~$7,200
- **ROI**: 20,700%

**Regulatory compliance:**
- Visual proof of monitoring for inspections
- Incident response documentation
- Training tool for new operators

### Scenario 4: Campus Infrastructure (University)

**Setup:**
- Campus: 40 buildings, utilities, grounds
- Systems: Power distribution, water, steam, chilled water
- Users: Facilities staff (5), sustainability team (2), students (educational access)
- Tier: Enterprise (educational use, high concurrency during classes)

**Digital twin features:**
- Campus-wide utility flow visualization
- Energy dashboard by building
- Sustainability metrics (carbon footprint)
- Maintenance status overlay
- Student project integration (research data)

**Usage pattern:**
- Facilities: Daily operations (8am-5pm)
- Sustainability reporting: Weekly
- Student labs: 3 classes/week × 20 students (not concurrent, sequential access)
- Average 3-4 concurrent users

**Monthly credits:**
```
Facilities access: 160 hours/month
Student labs: 30 hours/month (sequential, not simultaneous)
Total: ~190 hours × 60 min = 11,400 credits/month
```

**Cost**: Enterprise tier with educational discount (~$300/month)

**Educational value:**
- Live data for sustainability courses
- Engineering students analyze real systems
- Research projects use campus as test bed
- Student publications cite campus digital twin

**Operational benefits:**
- Utility cost reduction: 15%
- Maintenance efficiency: 20% faster issue resolution
- Student engagement: Recruiting tool for prospective students

## Best Practices

### Data Integration

**Design for reliability:**
- Implement error handling (API timeout, connection loss)
- Graceful degradation (show last known data if API fails)
- Reconnection logic (auto-retry failed requests)
- Fallback values (default safe states)

**Optimize performance:**
- Fetch only changed data (delta updates, not full snapshots)
- Cache static data (building geometry doesn't change)
- Limit update frequency (10-60 sec is usually sufficient)
- Batch sensor updates (one API call for multiple sensors)

**Security considerations:**
- Use HTTPS for API calls
- Implement authentication (API keys, tokens)
- Validate data before visualization (prevent injection)
- Respect data privacy (anonymize if needed)

### Visualization Design

**Clarity over complexity:**
- Use consistent color coding (green/yellow/red universally understood)
- Clear labels and units (°F vs °C, PSI vs kPa)
- Avoid cluttering 3D view (show details on demand)
- Hierarchical information (overview → drill-down)

**Mobile optimization:**
- Touch-friendly UI (large buttons, swipe navigation)
- Simplified views for small screens
- Essential information only on mobile
- Landscape orientation for better visibility

**Accessibility:**
- Color-blind friendly palettes
- Text labels in addition to colors
- High contrast mode option
- Keyboard navigation support

### Operational Management

**Monitoring and alerts:**
- Set up credit usage alerts (dashboard notifications)
- Monitor concurrent user peaks (upgrade tier if needed)
- Track session durations (identify high-engagement areas)
- Geographic distribution (optimize region deployment)

**Version control:**
- Tag UE project versions (v1.0, v1.1, etc.)
- Document changes in each deployment
- Maintain rollback capability (previous .zip files)
- Test updates in staging before production

**User training:**
- Create quick-start guide (how to access, navigate)
- Record tutorial videos (walkthrough of features)
- FAQ for common issues (connection problems, etc.)
- Regular feedback sessions (improve usability)

### Cost Optimization

**Reduce credit consumption:**
- Use Linux builds (50% cheaper than Windows)
- Schedule downtime for non-critical systems (nights, weekends)
- Implement aggressive idle timeout (auto-disconnect inactive users)
- Optimize update frequency (slower polling = fewer resources)

**Right-size your tier:**
- Start with Pro, monitor concurrent usage
- Upgrade to Enterprise only if hitting limits regularly
- Consider multiple smaller deployments vs one large
- Seasonal adjustments (scale down during low-activity periods)

**Budgeting:**
```
Estimated monthly credits =
  (Hours of operation per month) × 60 × (Average concurrent users)

Example:
  Business hours only: 200 hrs/month × 60 × 2 users = 24,000 credits
  Linux build: 24,000 credits = ~$600/month
```

## Technical Specifications

### Recommended UE Settings for Digital Twins

**Project settings:**
- **Platform**: Scalable
- **Target framerate**: 30-60 FPS (30 acceptable for monitoring)
- **Resolution**: 1920×1080 (Pro: 4K for executive presentations)
- **Networking**: Enable HTTP requests in Project Settings

**Pixel Streaming:**
- Enable plugin
- Configure encoder settings (default works well)
- Test with target network conditions

**Blueprint architecture:**
```
GameMode:
  - Initialize data connections on BeginPlay
  - Start timer for periodic updates

DataManager Actor:
  - HTTP request functions
  - JSON parsing
  - Broadcast events when data changes

Sensor Actors:
  - Listen for data events
  - Update 3D widget text
  - Change materials based on status
  - Trigger alerts if thresholds exceeded
```

**Performance targets:**
- 60 FPS for interactive walkthroughs
- 30 FPS acceptable for static monitoring
- Under 100ms response to user input
- Under 5 seconds to initial data load

### Data Update Patterns

**Low-frequency monitoring (static models):**
- Update interval: 60+ seconds
- Use HTTP polling
- Simple error handling
- Good for: Facility tours, presentations

**Medium-frequency monitoring (operational):**
- Update interval: 10-30 seconds
- HTTP polling with delta updates
- Retry logic and error handling
- Good for: Manufacturing, building management

**High-frequency monitoring (critical systems):**
- Update interval: 1-5 seconds
- Consider WebSocket for efficiency
- Robust error handling and reconnection
- Good for: Process control, safety systems

**Real-time streaming (advanced):**
- Sub-second updates
- WebSocket or MQTT
- Complex error handling
- Good for: SCADA integration, live process control

### Network Requirements

**For viewers:**
- **Minimum**: 5 Mbps download
- **Recommended**: 10 Mbps download
- **Corporate networks**: Ensure WebRTC not blocked

**For UE instance (outbound from cloud):**
- Data API access (HTTP/HTTPS, WebSocket)
- Firewall rules allow outbound connections
- API endpoints accessible from cloud region

## Common Questions

### Can the digital twin control real equipment?

The visualization itself is read-only (displays data), but you can implement control workflows:

**Safe approach:**
1. User clicks "Request Valve Change" in UE
2. UE sends command to your control system API
3. Your control system validates, logs, and executes
4. Status updates flow back to UE visualization

**Security:**
- Never allow direct equipment control from browser
- All commands go through validated control system
- Implement role-based access control
- Audit all commands

### How often does data update?

This is your choice during UE development:

- **Static models**: Manual refresh only (no automatic updates)
- **Slow polling**: 60+ seconds (suitable for trends, dashboards)
- **Medium polling**: 10-30 seconds (typical for monitoring)
- **Fast polling**: 1-5 seconds (process control, safety systems)

Trade-offs:
- Faster updates = more responsive but more API calls
- Slower updates = less real-time but more efficient

### Can multiple people view the same data simultaneously?

Yes, within tier limits:
- Each concurrent user gets their own UE instance
- All instances fetch from same data source (API)
- Everyone sees the same data (with slight timing variation due to polling)

For synchronized views (everyone sees exactly the same view):
- One person streams and shares screen (Zoom/Teams)
- Others watch the shared screen

### What if my data source goes offline?

Implement graceful degradation in UE:

1. **Detect failure**: HTTP request timeout or error response
2. **Show last known data**: Don't clear display, mark as "Last updated: 2 min ago"
3. **Visual indicator**: "Connection lost" warning
4. **Auto-retry**: Attempt reconnection every 30-60 seconds
5. **Alert user**: Audio/visual notification if prolonged

**Blueprint logic:**
```
If HTTP request fails:
  → Keep displaying previous data
  → Set "Connection Status" widget to red
  → Start retry timer
  → Log error for troubleshooting
```

### How do I secure access to sensitive operational data?

**Current options:**
1. Share URL only with authorized personnel (not publicly listed)
2. Implement authentication in your data API (UE sends API key)
3. Use VPN for access to stream URL
4. Deploy on-demand only when needed

**Coming soon:**
- Password protection for streams (Pro tier)
- Custom domains (Pro tier)
- SSO integration (Enterprise)
- IP whitelisting (Enterprise)

**Best practice:**
- Sanitize data displayed (don't show actual pressure values if sensitive, use "Normal/High/Low")
- Deploy separate instances for external vs internal audiences
- Audit access logs via dashboard

### Can I integrate with my existing SCADA system?

Yes, common pattern:

**Architecture:**
```
SCADA System → Historian Database → REST API → UE Digital Twin
```

**Steps:**
1. Your SCADA stores data in historian (OSIsoft PI, Wonderware, etc.)
2. Create API wrapper to query historian
3. UE polls API for latest values
4. Display in 3D context

**Alternatives:**
- SCADA exports CSV/JSON → Cloud storage → UE downloads
- SCADA → MQTT broker → UE subscribes (advanced)
- SCADA → OPC UA server → Middleware → UE (industrial standard)

Most common: REST API wrapper around historian.

## Success Metrics

Track these KPIs:

**Operational efficiency:**
- Mean time to detect issues (before vs after digital twin)
- Mean time to resolve (faster with visual context)
- Unplanned downtime reduction
- Maintenance cost savings

**Accessibility:**
- Number of users accessing (democratization of data)
- Mobile vs desktop access ratio
- Remote access sessions (field technicians)
- Geographic distribution (global teams)

**Decision-making:**
- Time to decision (with visual evidence)
- Stakeholder engagement in reviews
- Number of data-driven decisions
- Executive dashboard usage

**Cost metrics:**
- Credit consumption per month
- Cost per user per month
- ROI (savings vs subscription cost)
- Infrastructure cost avoided

## Case Study: Food Processing Plant Digital Twin

**Company**: Mid-size food manufacturing facility

**Challenge:**
- 24/7 operations across 3 shifts
- 80+ sensors (temperature, pressure, flow, pH)
- Operations team needs real-time visibility
- Quality assurance requires historical data access
- Executives wanted remote monitoring capability
- Existing SCADA system UI was complex and desktop-only

**Solution:**
- Developed UE5 digital twin of entire facility
- Integrated with SCADA historian via REST API
- Color-coded equipment by operating status
- Real-time sensor value overlays
- Historical trend graphs on demand
- Deployed on Third Space Enterprise tier

**Digital twin features:**
1. 3D facility walkthrough
2. Real-time temperature zones (color heat map)
3. Production line flow visualization
4. Equipment status indicators
5. Alert notifications (critical values)
6. Maintenance schedule overlay
7. Quality metrics dashboard

**Implementation:**
- Development time: 6 weeks (UE project + API integration)
- Data update frequency: 15-second polling
- Users: 12 (ops team, QA, management, remote engineers)
- Concurrent peak: 4-5 users

**Usage pattern:**
```
24/7 availability (critical operations)
730 hours/month continuous operation
Average 3 concurrent users
Linux build (1 credit/min)
```

**Monthly cost:**
```
Enterprise tier: ~$600/month (custom pricing)
Credits included in Enterprise package
Total: ~$600/month
```

**Results (12 months):**

**Operational improvements:**
- Incident detection time: 45 min → 8 min (82% faster)
- Prevented product losses: 6 batches/year ($180,000 value)
- Reduced unplanned downtime: 40 hours/year → 12 hours/year (70% reduction)
- Maintenance response: 30% faster (visual context for technicians)

**User adoption:**
- All 12 users actively use weekly (100% adoption)
- Mobile access: 35% of sessions (field technicians on tablets)
- Executive reviews: Monthly (previously quarterly due to access barriers)
- Remote support: Reduced on-site visits by 50%

**Financial impact:**
```
Annual savings:
  - Prevented losses: $180,000
  - Downtime reduction: $140,000 (28 hours @ $5k/hour)
  - Faster maintenance: $30,000
  Total savings: $350,000/year

Annual cost:
  - Third Space: $7,200/year
  - Development (amortized): $15,000/year
  Total cost: $22,200/year

ROI: 1,476% ($350k savings / $22.2k cost)
Payback period: 0.76 months
```

**Plant Manager quote:**
> "The digital twin transformed how we operate. Our night shift manager in India can now monitor the plant in real-time from his phone. We've prevented multiple costly incidents because we saw the problem developing 30 minutes before it became critical. Best investment we've made in operational technology."

## Next Steps

Ready to build your digital twin?

1. [Review system requirements](../getting-started/system-requirements)
2. [Package your UE digital twin](../technical-docs/packaging)
3. [Sign up for appropriate tier](https://app.thirdspaceinteractive.ca/signup)
4. [Deploy and test](../getting-started/quick-start)

Need help with architecture planning?
- [Contact Enterprise sales](../support-resources/getting-help)
- [Review credit calculations](../core-concepts/credit-system)
- Email: enterprise@thirdspaceinteractive.ca

---

**Related Resources:**
- [Architecture & Real Estate Use Case](./architecture-real-estate)
- [Education & Training Use Case](./education-training)
- [Iframe Embedding Guide](../technical-docs/integration/iframe-embedding)
