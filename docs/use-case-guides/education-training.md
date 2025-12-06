---
sidebar_position: 2
---

# Education & Training

Provide students with access to high-performance Unreal Engine experiences without expensive computer lab infrastructure.

## The Challenge

Educational institutions face significant barriers when teaching with Unreal Engine:

### Infrastructure Costs
- **Lab workstations**: $1,500-$3,000 per gaming PC with GPU
- **Maintenance**: IT staff time for driver updates, software installs
- **Refresh cycles**: 3-5 year replacement needed
- **Space limitations**: Physical lab capacity caps enrollment
- **Software licensing**: Per-seat licenses for commercial tools

### Student Access Issues
- **Lab hours**: Limited availability outside class time
- **Remote learning**: Students at home can't run UE projects
- **BYOD limitations**: Personal laptops lack GPU power
- **Platform diversity**: Mac users can't run Windows-only builds
- **File transfers**: Large project files difficult to distribute

### Educational Impact
- Enrollment limited by lab capacity
- Remote/hybrid students excluded from GPU-intensive courses
- Students can't practice outside scheduled lab time
- Expensive equipment sits idle nights/weekends
- International students face hardware shipping issues

## The Third Space Solution

Stream Unreal Engine projects directly to student browsers. Any device becomes a powerful workstation.

### Key Benefits

**For Students:**
- Access from laptops, Chromebooks, tablets
- Work from dorms, home, library
- No software installation required
- Instant access to instructor's latest project
- Practice outside lab hours

**For Institutions:**
- Eliminate $30,000-$150,000 lab costs
- Support remote and hybrid learning
- Scale enrollment without physical constraints
- Reduce IT maintenance burden
- Enable bring-your-own-device policies

**For Instructors:**
- Deploy assignments with a URL
- Everyone sees the same version
- No "it doesn't work on my machine" issues
- Monitor student progress via analytics
- Update projects instantly for all students

## Implementation Guide

### Step 1: Plan Your Course Structure

**Tier selection guide:**

| Class Size | Best Tier | Monthly Cost | Use Case |
|------------|-----------|--------------|----------|
| 1-2 students | Plus | $20 | Tutoring, office hours |
| 3-4 students | Pro | $49 | Small lab sections |
| 5-10 students | Enterprise | Custom | Medium classes |
| 11+ students | Enterprise | Custom | Large lectures |

**Key consideration**: Concurrent users = students accessing at the same time, not total enrollment.

**Example scenario:**
- Course enrollment: 30 students
- Lab sessions: 3 sections of 10 students each
- Students work sequentially, not simultaneously
- **Solution**: Enterprise tier with 10 concurrent users (one section at a time)

### Step 2: Prepare Course Projects

**For instructors creating content:**

1. **Build template projects** (starter code for assignments)
   - Clean, documented UE projects
   - Pre-configured Pixel Streaming plugin
   - Clear learning objectives
   - Commented blueprints/code

2. **Package for Linux** (recommended for cost)
   - 50% cheaper than Windows (1 credit/min vs 2)
   - Package → Linux platform
   - Compress to .zip

3. **Create project variations** (optional)
   - Assignment 1: Basic navigation
   - Assignment 2: Interaction mechanics
   - Assignment 3: Advanced blueprints
   - Final project: Open-ended

**File organization:**
```
COURSE_NAME_Assignment1.zip
COURSE_NAME_Assignment2.zip
COURSE_NAME_FinalProject.zip
```

[Packaging guide for instructors →](../technical-docs/packaging/linux-builds)

### Step 3: Deploy Course Projects

**Upload to Third Space:**

1. Create project for each assignment
2. Use naming convention: `COURSE_SECTION_ASSIGNMENT`
   - Example: `CS401_Fall2024_Assignment1`
3. Configure settings:
   - Resolution: 1080p (works on all student devices)
   - Region: Closest to campus
   - Watermark: Optional course branding (Pro tier)

**Deployment time**: 3-7 minutes per project

### Step 4: Distribute to Students

**Method 1: Direct URL (Simplest)**
```
https://stream.thirdspaceinteractive.ca/your-project-id
```
- Post in LMS (Canvas, Blackboard, Moodle)
- Send via email
- Include in syllabus

**Method 2: Embed in Course Website**
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

**Method 3: QR Code (For in-class)**
- Generate QR code for stream URL
- Display on projector
- Students scan with phones/tablets
- Useful for demos and presentations

### Step 5: Manage Student Access

**Scheduling strategies:**

**Option A: Lab Session Windows**
- Scheduled 2-hour lab slots
- Students access only during their section time
- Instructor present for support
- **Credits**: 2 hours × 10 students × 1 credit/min = 1,200 credits/week

**Option B: Open Access Hours**
- 24/7 availability for asynchronous work
- Students access when convenient
- Monitor usage via dashboard analytics
- **Credits**: Variable, depends on student engagement

**Option C: Hybrid Model**
- Required lab time + optional practice hours
- Balances structure with flexibility
- Easier to budget credit usage

**Credit management tip**: Start with scheduled sessions to predict costs, then expand to open access if budget allows.

## Use Case Scenarios

### Scenario 1: Computer Graphics Course Lab

**Setup:**
- Course: CS 401 - Interactive 3D Graphics
- Enrollment: 30 students (3 sections of 10)
- Schedule: Weekly 2-hour labs
- Tier: Enterprise (10 concurrent users)

**Weekly structure:**
- Section A: Monday 10am-12pm
- Section B: Wednesday 2pm-4pm
- Section C: Friday 1pm-3pm
- Linux builds (1 credit/min)

**Monthly credits:**
```
3 sections × 2 hours × 10 students × 60 min = 3,600 credits/month
Plus office hours (2 hrs/week): ~480 credits/month
Total: ~4,000 credits/month
```

**Cost**: Enterprise tier (custom pricing, typically $200-400/month for this usage)

**ROI comparison:**
- Traditional lab: $30,000 initial + $3,000/year maintenance
- Third Space: ~$3,600/year ($300/month × 12 academic months)
- **Savings**: ~$26,000 first year, ~90% ongoing

### Scenario 2: Remote Game Design Workshop

**Setup:**
- 5-day intensive workshop
- 12 participants (global, remote)
- 6 hours/day instruction + demos
- Tier: Enterprise (12 concurrent users)

**Usage pattern:**
- Live instruction: 3 hours/day (instructor shares screen)
- Hands-on practice: 3 hours/day (all students streaming)
- 5 days total

**Credits calculation:**
```
Instructor demos: 5 days × 3 hours × 1 user = 900 credits
Student practice: 5 days × 3 hours × 12 users = 10,800 credits
Total: ~11,700 credits
```

**Cost**: Enterprise tier for 5 days + credit pack

**Benefits:**
- No hardware shipping to international students
- Students use personal laptops
- Everyone sees identical performance
- Instructor can monitor all student screens via session analytics

### Scenario 3: Architecture Visualization Course

**Setup:**
- Course: ARCH 302 - Digital Visualization
- 15 students (hybrid: 8 in-person, 7 remote)
- Weekly 3-hour studio sessions
- Tier: Enterprise (15 concurrent users)
- Pro-quality rendering needed (high resolution)

**Usage pattern:**
- Studio sessions: Once per week, 3 hours
- Individual work: Students practice 2-3 hours/week outside class
- Critique sessions: Whole class views projects together

**Monthly credits:**
```
Studio sessions: 4 weeks × 3 hours × 15 students = 2,700 credits
Individual practice (average): 15 students × 2.5 hours × 4 weeks = 2,250 credits
Total: ~5,000 credits/month
```

**Cost**: Enterprise tier (~$300-400/month)

**Advantages:**
- Remote students participate equally
- High-fidelity rendering for all students
- No Mac vs PC compatibility issues
- Students can show work to external critics via link

### Scenario 4: VR Development Course (Small Class)

**Setup:**
- Course: CS 450 - Virtual Reality Development
- 4 students (graduate seminar)
- Weekly 3-hour meetings + independent study
- Tier: Pro (4 concurrent users)

**Usage pattern:**
- Synchronous meetings: 3 hours/week
- Independent development: 5 hours/week per student (asynchronous)

**Monthly credits:**
```
Synchronous: 4 weeks × 3 hours × 4 students = 720 credits
Asynchronous: 4 weeks × 5 hours × 4 students = 1,200 credits
Total: ~2,000 credits/month
```

**Cost**: Pro tier ($49/month) + credit pack (~$50 additional) = ~$100/month

**Perfect for Pro tier because:**
- Exactly 4 students (Pro max concurrent users)
- Graduate students work independently (not all at once)
- Budget-friendly for small programs

## Best Practices

### Course Design

**Structure projects for streaming:**
- **Performance targets**: 60 FPS on cloud GPU (smooth student experience)
- **File sizes**: Keep projects under 5GB (faster deployment, lower storage costs)
- **Navigation**: Implement intuitive controls (students may have varied UE experience)
- **Instructions**: Include in-app UI guidance (reduce "how do I..." questions)
- **Save states**: Consider checkpoint system (students can resume progress)

**Assignment progression:**
1. **Week 1-2**: Pre-built demo (students explore, no editing)
2. **Week 3-6**: Template projects (students modify parameters)
3. **Week 7-12**: Open projects (students build from starter code)
4. **Week 13-15**: Final projects (original work)

### Student Support

**Onboarding checklist:**
- [ ] Test URL access on multiple devices (laptop, tablet, phone)
- [ ] Provide browser compatibility list (Chrome, Edge recommended)
- [ ] Create troubleshooting FAQ for common student issues
- [ ] Record tutorial video showing how to access stream
- [ ] Test with low-bandwidth connection (rural students)

**Common student issues:**
| Issue | Solution |
|-------|----------|
| "Stream won't load" | Check browser (use Chrome/Edge), disable VPN, check firewall |
| "Controls don't work" | Click inside stream window to focus, check input method (mouse vs touch) |
| "Quality is poor" | Check internet speed (5 Mbps minimum), close other bandwidth apps |
| "Session timed out" | Idle timeout kicked in, refresh page to reconnect |

**Accessibility considerations:**
- Ensure UI text is readable (high contrast)
- Support keyboard-only navigation (not all students use mice)
- Provide alternative assessment options (for students with limited internet)

### Credit Management

**Optimize costs:**

1. **Use Linux builds**: Cuts costs in half vs Windows
2. **Schedule concentrated sessions**: Better than 24/7 open access for budgeting
3. **Set idle timeouts**: Automatically disconnect inactive students
4. **Monitor analytics**: Identify usage patterns, adjust availability windows
5. **Educate students**: Remind them to close sessions when done

**Budgeting formula:**
```
Monthly credits = (
  (Concurrent students × Session hours × Weeks) +
  (Individual practice estimate)
) × Credit rate
```

**Example calculation (Pro tier):**
- 4 students, 3-hour weekly labs, 4 weeks/month
- Individual practice: 2 hours/student/week
- Linux builds: 1 credit/min

```
Lab sessions: 4 × 3 × 4 × 60 = 2,880 credits
Individual: 4 × 2 × 4 × 60 = 1,920 credits
Total: 4,800 credits/month
Pro includes: 300 credits
Additional needed: ~4,500 credits (~$113 via credit packs)
Monthly cost: $49 + $113 = $162 for 4-student class
```

**Compare to traditional lab:**
- 4 workstations × $2,000 = $8,000 initial
- Third Space annual: $162 × 12 = ~$1,944
- **Payback**: Under 5 months

### Assessment & Grading

**Track student engagement:**
- Dashboard analytics show session durations
- Identify struggling students (low usage may indicate difficulty)
- Verify assignment completion via access logs

**Evaluation strategies:**
- **Live demos**: Students present via stream during class
- **Recorded walkthroughs**: Students capture and submit video
- **Code reviews**: Instructor accesses student project files
- **Peer critiques**: Share URLs for classmate feedback

**Academic integrity:**
- Each student gets unique stream instance (can't see others' work during exam)
- Instructor can monitor multiple sessions via dashboard
- Time-limited access for timed assessments

## Technical Specifications

### Recommended UE Project Settings

**For educational projects:**
- **Platform**: Scalable (runs on various cloud GPUs)
- **Target framerate**: 60 FPS minimum
- **Resolution**: 1920x1080 (standard for student devices)
- **Pixel Streaming plugin**: Enable and configure defaults

**Performance optimization:**
- Use LOD systems (maintain 60 FPS even in complex scenes)
- Bake lighting when possible (reduces GPU load)
- Optimize blueprints (avoid every-tick events)
- Compress textures (faster uploads, lower storage costs)

### Network Requirements

**For students:**
- **Minimum**: 5 Mbps download, 1 Mbps upload
- **Recommended**: 10 Mbps download, 3 Mbps upload
- **Ideal**: 25 Mbps+ for 1080p 60fps

**For institution:**
- Ensure campus network allows WebRTC traffic
- Whitelist Third Space streaming domains if firewall blocks
- Test with campus VPN if students use it

### Supported Devices

**Verified to work:**
- Windows laptops (any, no GPU needed)
- MacBooks (Intel and Apple Silicon)
- Chromebooks (with Chrome browser)
- iPads (iOS 14+)
- Android tablets (Chrome browser)

**Not recommended:**
- Smartphones (screen too small for complex UE interfaces)
- Public library computers (may block WebRTC)

## Common Questions

### Can students work on the same project simultaneously?

No, each concurrent user gets their own isolated instance. Students cannot see or interfere with each other's work. This is a feature for academic integrity.

For collaborative projects, consider:
- Students take turns accessing the shared stream
- Use version control (Git) for collaborative development
- Stream final integrated project for presentation

### How do students save their work?

This depends on your course structure:

**Option 1: Instructor-provided read-only projects**
- Students explore/interact but don't modify
- No saving needed
- Best for demos and early assignments

**Option 2: Provide save/export functionality in UE project**
- Implement blueprint save system
- Students export progress to file
- Submit files to LMS for grading

**Option 3: Version control integration**
- Students access development projects
- Changes committed to Git
- Stream latest build for testing

### What if a student's internet is too slow?

Third Space adapts video quality to network conditions, but very slow connections (under 3 Mbps) may struggle.

**Solutions:**
- Student uses campus network instead of home internet
- Reduce stream resolution to 720p (less bandwidth)
- Allow alternative assignment format (not all courses must use streaming)
- Partner students (one streams, one watches) for slow-internet students

### Can I limit student access to specific times?

Not directly via Third Space platform, but you can:
- Share URL only during designated lab hours
- Use LMS to make link available only during scheduled times
- Monitor usage via dashboard, remind students of scheduled hours
- Enterprise tier: Contact support for custom access control

### How do I handle exams or timed assessments?

**Strategy 1: Scheduled exam window**
1. Deploy exam project just before exam time
2. Share URL with students
3. Set time limit (e.g., "2-hour exam, closes at 5pm")
4. Monitor concurrent access via dashboard
5. Delete project or change URL after exam ends

**Strategy 2: Individual exam links**
- Not currently supported (coming soon: password protection)
- Current workaround: Deploy separate project instances with unique URLs per student (requires Enterprise tier)

### What about students in different time zones (online programs)?

**Asynchronous access works well:**
- Students access during their local daytime
- Rarely will all students be online simultaneously
- Allows smaller concurrent user tier (cost savings)

**Example:**
- 20 students across 4 time zones
- Maximum 5-6 concurrent (others offline)
- Enterprise tier with 10 concurrent handles peak capacity

## Success Metrics

Track these to measure program effectiveness:

**Student engagement:**
- Average session duration per student
- Number of sessions per student per week
- Completion rate (did students access all assignments?)

**Learning outcomes:**
- Compare grades to previous in-person-only cohorts
- Survey student satisfaction vs traditional lab
- Measure retention in subsequent advanced courses

**Cost efficiency:**
- Total credits consumed vs traditional lab costs
- Cost per student per course
- ROI timeline (when does Third Space pay for itself?)

**Access equity:**
- Percentage of remote students able to participate
- Device diversity (how many used non-gaming devices?)
- Geographic distribution (international students?)

**Dashboard analytics provide:**
- Session history
- Credit consumption by project
- Peak usage times (optimize scheduling)

## Case Study: Game Design Bootcamp

**Program**: 12-week intensive Unreal Engine game development bootcamp

**Challenge:**
- Cohort of 15 students (8 local, 7 international remote)
- Traditional lab would cost $45,000 (15 workstations)
- Remote students couldn't access local lab
- Needed high-end GPU performance for UE5 projects

**Solution:**
- Deployed to Third Space Enterprise tier
- 15 concurrent users
- Linux builds for all course projects
- Weekly live sessions + asynchronous practice time

**Usage pattern:**
```
Live instruction: 3 days/week × 4 hours = 12 hours/week
Student practice: Average 15 hours/week per student
12 weeks total
```

**Credits calculation:**
```
Live sessions: 12 weeks × 12 hours × 15 students = 10,800 credits
Student practice: 12 weeks × 15 hours × 15 students = 16,200 credits
Total: 27,000 credits over 12 weeks
```

**Cost:**
- Enterprise tier: ~$400/month × 3 months = $1,200
- Additional credits: ~27,000 - included allocation = ~$500 additional
- **Total**: ~$1,700 for entire bootcamp

**Results:**
- **Cost savings**: $43,300 vs traditional lab (96% reduction)
- **Access**: 100% of students participated (including all remote)
- **Performance**: No difference in grades between local and remote students
- **Satisfaction**: 92% of students rated experience "excellent"
- **Outcomes**: 13/15 students employed in game industry within 6 months

**Instructor feedback:**
> "Third Space eliminated the barrier between remote and in-person students. Everyone had the exact same experience, same performance, same access. I'll never go back to physical labs."

## Next Steps

Ready to bring Unreal Engine to your classroom?

1. [Review system requirements](../getting-started/system-requirements)
2. [Package your first course project](../technical-docs/packaging/linux-builds)
3. [Sign up for appropriate tier](https://app.thirdspaceinteractive.ca/signup)
4. [Deploy and test with small group first](../getting-started/quick-start)

Need help planning your implementation?
- [Calculate your credit needs](../core-concepts/credit-system)
- [Contact us for educational pricing](../support-resources/getting-help)
- Email: support@thirdspaceinteractive.ca (mention "Education")

---

**Related Resources:**
- [Architecture & Real Estate Use Case](./architecture-real-estate)
- [Sales & Marketing Use Case](./sales-marketing)
- [Troubleshooting Guide](../troubleshooting)
- [FAQ - Billing & Credits](../faq)
