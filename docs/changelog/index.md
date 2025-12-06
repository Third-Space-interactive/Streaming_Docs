---
sidebar_position: 1
---

# Changelog

Platform updates, new features, and important notices.

## Latest Updates

### December 2024

#### v2.1.0 - December 6, 2024

**New Features:**
- 🎨 Enhanced dashboard UI with real-time metrics
- 🌍 Multi-region deployment (Enterprise tier)
- 📊 Advanced analytics dashboard (Pro/Enterprise)
- 🔐 SSO integration support (Enterprise tier)

**Improvements:**
- ⚡ 30% faster deployment times for Linux packages
- 📦 Increased file size limits across all tiers
- 🚀 Better auto-scaling for concurrent users
- 🔧 Improved error messages and diagnostics

**Bug Fixes:**
- Fixed idle timeout not triggering on some mobile browsers
- Resolved fullscreen issue in Safari 17+
- Corrected credit calculation for shared instances
- Fixed dashboard not refreshing session count

---

## 2024 Releases

### November 2024

#### v2.0.5 - November 22, 2024

**New Features:**
- Custom domain support (Pro tier)
- Password protection for streams (Pro tier)
- Bulk credit pack purchases

**Improvements:**
- Reduced latency by 20ms average
- Better WebRTC connection stability
- Enhanced mobile touch controls

**Bug Fixes:**
- Fixed upload failures for packages >5GB
- Resolved Windows deployment NVIDIA driver issues

---

### October 2024

#### v2.0.0 - October 15, 2024

**Major Release: Platform Redesign**

**New Features:**
- 🎉 Completely redesigned dashboard
- 📱 Mobile-responsive interface
- 🎮 Shared instance mode (Pro/Enterprise)
- 📈 Real-time usage tracking
- 💳 Credit pack purchases
- 🔔 Usage alert notifications

**Breaking Changes:**
- Old API endpoints deprecated (v1.x)
- Minimum browser versions updated

**Migration Guide:**
[See v2.0 migration docs →](#)

---

## Known Issues

### Current Issues

**High Priority:**
- Safari 16 on macOS Ventura: Occasional audio dropout (investigating)
- Mobile Firefox: Fullscreen button not visible (workaround: use Chrome)

**Medium Priority:**
- Dashboard analytics: 5-minute delay in credit updates (visual only, billing accurate)
- Shared instances: Max 20 users before performance degradation (limit will increase)

**Low Priority:**
- Dark mode: Some UI elements not styled correctly
- Project descriptions: Markdown formatting not rendering

**Status:** Track all issues at [status.thirdspaceinteractive.ca](https://status.thirdspaceinteractive.ca)

---

## Planned Features

### Q1 2025

**In Development:**
- 🎬 Session recording and playback
- 🗺️ Geographic usage heatmaps
- 🔌 Webhooks for deployment events (Enterprise)
- 📱 Native mobile app wrappers
- 🎯 A/B testing for multiple project versions

**Under Consideration:**
- VR headset support (Quest, PSVR)
- Collaborative multi-user editing
- AI-powered quality optimization
- Blockchain authentication integration

Vote on features: [roadmap.thirdspaceinteractive.ca](https://roadmap.thirdspaceinteractive.ca)

---

## Maintenance Windows

### Scheduled Maintenance

**Next window:**
- Date: December 15, 2024
- Time: 2:00 AM - 4:00 AM EST
- Impact: Brief interruptions to dashboard (streams unaffected)
- Notification: Email sent 48 hours prior

**Historical windows:**
- November 10, 2024: Infrastructure upgrade
- October 5, 2024: Database migration
- September 20, 2024: Security patches

---

## Security Updates

### Recent Security Patches

**November 28, 2024 - Security Patch v2.0.6**
- Updated WebRTC library to address CVE-2024-XXXXX
- Enhanced iframe sandboxing
- Strengthened API authentication

**October 12, 2024 - Security Patch v2.0.3**
- Fixed potential XSS in project descriptions
- Updated SSL certificates
- Improved session token rotation

Subscribe to security updates: security-updates@thirdspaceinteractive.ca

---

## Deprecated Features

### Upcoming Deprecations

**February 2025:**
- API v1.x endpoints (migrate to v2.x)
- Legacy signaling server (auto-migrated)

**March 2025:**
- Old dashboard URL (will redirect)

### Recently Removed

**November 2024:**
- Flash-based player (replaced with WebRTC)
- FTP upload method (use dashboard only)

---

## API Changes

### v2.1 API Updates

**New Endpoints:**
```
POST /api/v2/projects/{id}/analytics
GET /api/v2/usage/detailed
PUT /api/v2/projects/{id}/settings/domain
```

**Deprecated:**
```
GET /api/v1/projects/list (use /api/v2/projects instead)
```

**Breaking:**
- Authentication now requires Bearer token (previously API key in query)
- Response format changed for `/projects` endpoint

[Full API documentation →](#)

---

## Performance Improvements

### November 2024
- Deployment speed: 8 min → 5 min average (37% improvement)
- Upload processing: 15% faster
- Dashboard load time: 2.1s → 1.3s (38% improvement)

### October 2024
- Streaming latency: 120ms → 100ms average (17% improvement)
- Instance startup: 3 min → 2 min (33% improvement)
- WebRTC connection success rate: 94% → 97%

---

## Stay Updated

### Subscribe to Updates

**Email notifications:**
- [Subscribe to changelog](https://thirdspaceinteractive.ca/subscribe)
- Weekly digest or instant notifications

**RSS Feed:**
- [Changelog RSS](#)
- [Status page RSS](https://status.thirdspaceinteractive.ca/rss)

**Social Media:**
- Twitter: [@ThirdSpaceInt](https://twitter.com/ThirdSpaceInt)
- LinkedIn: [Company page](https://linkedin.com/company/thirdspaceinteractive)

**Discord:**
- #announcements channel: [Join Discord](https://discord.gg/8pVjBjCe)

---

## Version History

[See full version history →](#)

**Quick links:**
- [v2.1.x releases](#)
- [v2.0.x releases](#)
- [v1.x legacy](#)

---

*Last updated: December 6, 2024*
