---
sidebar_position: 1
---

# Troubleshooting Guide

Common issues and solutions for Third Space Pixel Streaming deployment.

## Quick Diagnostics

### Issue: Upload Failed

**Symptoms:** Upload progress bar stuck, error message, or timeout

**Common Causes:**
- File too large for tier
- Browser timeout on slow connection
- Corrupt .zip file
- Unsupported compression format

[Full upload troubleshooting →](./upload-issues)

---

### Issue: Deployment Failed

**Symptoms:** Status shows "Error" or stuck on "Deploying"

**Common Causes:**
- Incorrect folder structure
- Missing executable or dependencies
- Corrupted package files
- Tier limits exceeded

[Full deployment troubleshooting →](./deployment-issues)

---

### Issue: Poor Performance

**Symptoms:** Low FPS, stuttering, lag, poor video quality

**Common Causes:**
- User's internet connection
- Complex UE project (too many draw calls)
- Suboptimal project settings
- Network congestion

[Performance optimization →](./performance-issues)

---

### Issue: Can't Connect to Stream

**Symptoms:** "Connection failed", black screen, infinite loading

**Common Causes:**
- Firewall blocking WebRTC
- Browser doesn't support Pixel Streaming
- Instance not running (stopped or idle timeout)
- Network NAT traversal issues

[Connection troubleshooting →](./connection-problems)

---

### Issue: Fullscreen Not Working

**Symptoms:** Fullscreen button doesn't work in embedded iframe

**Common Causes:**
- Missing iframe permissions
- Browser security restrictions
- Mobile Safari limitations

[Iframe fullscreen guide →](./fullscreen-iframe)

---

## Error Code Reference

### Common Error Codes

| Code | Meaning | Solution |
|------|---------|----------|
| **ERR_001** | Package structure invalid | Check folder structure requirements |
| **ERR_002** | Missing executable | Ensure .sh or .exe is present |
| **ERR_003** | File size exceeded | Reduce package size or upgrade tier |
| **ERR_004** | Storage limit reached | Delete old projects to free space |
| **ERR_005** | Instance failed to start | Contact support with project ID |
| **ERR_006** | Credits depleted | Top up credits or upgrade tier |
| **ERR_007** | Concurrent user limit | Upgrade tier for more users |
| **ERR_008** | Invalid zip format | Use .zip (not .rar or .7z) |

[Full error code reference →](./error-codes)

---

## Self-Service Diagnostics

### Check Project Status

1. Log in to [dashboard](https://app.thirdspaceinteractive.ca)
2. Find your project card
3. Check status indicator:
   - **Ready** (Green) - Working correctly
   - **Deploying** (Yellow) - Still setting up
   - **Stopped** (Gray) - Manually stopped or idle timeout
   - **Error** (Red) - Deployment failed

### Test Connectivity

1. Click **Launch Stream** from dashboard
2. If it loads in your browser, infrastructure is working
3. Share link with user to test from their network

### Review Usage Metrics

1. Go to project **Analytics**
2. Check recent sessions for:
   - Connection errors
   - Abnormal session lengths
   - Geographic issues

---

## Getting Help

### Before Contacting Support

Please have ready:
- Project ID (from dashboard)
- Error code or message
- Steps to reproduce
- Browser and OS version
- Screenshot if applicable

### Support Channels

**Free Tier:**
- Community Discord: [discord.gg/8pVjBjCe](https://discord.gg/8pVjBjCe)
- Response time: Best effort

**Plus Tier:**
- Email: support@thirdspaceinteractive.ca
- Response time: Within 48 hours

**Pro Tier:**
- Email: support@thirdspaceinteractive.ca
- Response time: Within 24 hours

**Enterprise:**
- Dedicated Slack channel
- Priority email
- Phone support (scheduled)
- Response time: Within 4 business hours

---

## Popular Solutions

### "Cannot read property of undefined" in browser console

**Issue:** WebRTC signaling error

**Solution:**
1. Clear browser cache and cookies
2. Try incognito/private mode
3. Ensure browser is up to date
4. Try different browser (Chrome recommended)

### "Connection timeout" error

**Issue:** Firewall or corporate network blocking WebRTC

**Solution:**
1. Check if ports 80, 443, and UDP 3478 are open
2. Try from different network (mobile hotspot)
3. Request IT whitelist Third Space domains (Enterprise)

### Stream works on desktop but not mobile

**Issue:** Mobile browser compatibility or touch controls

**Solution:**
1. Ensure using iOS 14+ or Android 10+
2. Use Safari on iOS (not Chrome)
3. Check UE project has touch input configured
4. Test on different device

### Video quality is poor despite good internet

**Issue:** Project resolution settings or encoding

**Solution:**
1. Check UE project render resolution
2. Ensure not using excessive post-processing
3. Lower particle effect complexity
4. Contact support for encoder settings adjustment (Enterprise)

---

## Next Steps

Browse detailed troubleshooting guides:

- [Upload Issues →](./upload-issues)
- [Deployment Issues →](./deployment-issues)
- [Performance Issues →](./performance-issues)
- [Connection Problems →](./connection-problems)
- [Iframe Fullscreen →](./fullscreen-iframe)
- [Error Codes →](./error-codes)
