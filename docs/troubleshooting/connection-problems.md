---
sidebar_position: 5
---

# Connection Problems

Troubleshooting guide for stream connection failures, black screens, and network issues.

## Quick Diagnosis

### Can't connect to stream

**Symptoms:**
- Black screen
- "Connection failed" error
- Infinite loading spinner
- "Cannot establish connection" message

**Quick checks:**

1. **Is instance running?**
   - Check dashboard → Project status
   - Should show "Ready" (green) or "Running" (green)
   - If "Stopped" (gray), click "Start Instance"
   - If "Error" (red), see [Deployment Issues](./deployment-issues)

2. **Try different browser:**
   - Recommended: Chrome or Edge
   - Sometimes Firefox or Safari have issues
   - Try incognito/private mode

3. **Check internet connection:**
   - Run speed test: need 5+ Mbps download
   - Try different network (mobile hotspot test)

**If still failing, continue to detailed troubleshooting below.**

## Detailed Troubleshooting

### Black Screen (No Error Message)

**Symptoms:**
- Stream window loads
- Just shows black screen
- No controls appear
- No error message

**Diagnosis steps:**

**1. Check browser console for errors:**
   - Press F12 (opens Developer Tools)
   - Click "Console" tab
   - Look for red error messages
   - Common errors:
     - "WebRTC connection failed"
     - "Media stream error"
     - "Cannot read property..."

**2. Check network requirements:**

Pixel Streaming uses WebRTC which requires:
- **Ports:** 80, 443 (HTTPS), UDP 3478 (STUN)
- **Protocols:** WebRTC, WebSocket
- **Domains:** `*.thirdspaceinteractive.ca` must not be blocked

**Corporate/school networks often block WebRTC**

**Test from different network:**
- Try mobile hotspot
- Try home network vs work network
- If works on one network but not another = firewall issue

**3. Clear browser cache and cookies:**
   - Chrome: Settings → Privacy → Clear browsing data
   - Select "Cached images and files" and "Cookies"
   - Time range: All time
   - Clear data
   - Restart browser and try again

**4. Check WebRTC support:**
   - Visit: https://test.webrtc.org/
   - Should say "WebRTC is supported"
   - If not, update browser to latest version

**Solutions:**

**If corporate/school network:**
1. Request IT whitelist these domains:
   - `*.thirdspaceinteractive.ca`
   - `*.amazonaws.com` (if using AWS region)
2. Request ports: 80, 443, UDP 3478 opened
3. Or use VPN/mobile hotspot as workaround

**If browser issue:**
1. Update to latest version
2. Disable extensions (ad blockers, privacy tools)
3. Try incognito mode
4. Try different browser

**If still black screen:**
- Contact support with browser console error messages
- Include screenshot of console errors

### "Connection Failed" Error

**Error message:** "Failed to establish connection" or "Connection timeout"

**Common causes:**

| Cause | How to Identify | Solution |
|-------|-----------------|----------|
| Instance not running | Dashboard shows "Stopped" | Start instance |
| Firewall blocking | Works on mobile, not corporate network | Whitelist domains/ports |
| Browser compatibility | Old browser version | Update browser |
| NAT traversal issue | Home network, no other issues | See NAT troubleshooting below |
| Server overloaded | Many users report same issue | Wait or contact support |

**Solutions by cause:**

**1. Instance stopped:**
- Check dashboard status
- If "Stopped", click "Start Instance"
- Wait 30 seconds, try connecting again

**2. Firewall blocking WebRTC:**
- Test: Try from mobile hotspot
- If works on mobile = network firewall issue
- Solution: Whitelist or use different network

**3. Browser too old:**
- Check version: Chrome → Settings → About Chrome
- Update to latest (recommended: Chrome 90+, Firefox 88+, Edge 90+)
- Restart browser after update

**4. NAT traversal issues:**

**Diagnosis:**
- Home network
- Router with strict NAT settings
- VPN active

**Solution:**
1. Disable VPN temporarily
2. Try directly connected to modem (bypass router)
3. Check router NAT settings (enable UPnP)
4. Or use mobile hotspot to confirm it's router issue

**5. Ad blocker interference:**
- Disable ad blocker extensions
- Or whitelist `*.thirdspaceinteractive.ca`
- Try incognito mode (disables extensions)

### Infinite Loading Spinner

**Symptoms:**
- Stream window shows loading animation
- Never finishes loading
- No error appears
- Eventually times out (2-5 minutes)

**Diagnosis:**

**1. Check if instance is actually running:**
   - Dashboard → Project → Status
   - "Ready" or "Running" = instance is up
   - "Deploying" = still starting (wait)
   - "Error" = deployment failed (see [Deployment Issues](./deployment-issues))

**2. Check network speed:**
   - Run https://fast.com
   - Need minimum 5 Mbps download
   - If under 3 Mbps, too slow for streaming

**3. Check browser console:**
   - F12 → Console tab
   - Look for "timeout" or "connection" errors
   - Note specific error message

**Common scenarios:**

**Scenario A: Instance deploying**
- Status: "Deploying" (yellow)
- Solution: Wait 3-10 minutes for deployment to complete
- If stuck over 15 minutes, see [Deployment Issues](./deployment-issues)

**Scenario B: Slow internet**
- Speed test shows under 5 Mbps
- Solution: Improve internet connection or lower stream resolution (contact support for resolution adjustment)

**Scenario C: WebSocket connection blocked**
- Console shows "WebSocket connection failed"
- Solution: Network firewall blocking, see firewall troubleshooting

**Scenario D: Server-side startup delay**
- Instance starting up (cold start)
- Solution: Wait 30-60 seconds, refresh page

### Connection Drops Mid-Session

**Symptoms:**
- Stream works initially
- Disconnects after 1-30 minutes
- Error: "Connection lost" or stream freezes

**Common causes:**

**1. Idle timeout triggered:**
- No user input for timeout period
- Free/Plus: 2 minutes idle
- Pro: 5 minutes idle
- Enterprise: Custom

**Test:** Move mouse or click in stream window regularly
**Solution:** Expected behavior (saves credits), refresh to reconnect

**2. Network instability:**
- WiFi signal drops
- ISP connection hiccups
- Packet loss

**Test:** Run continuous ping: `ping -t thirdspaceinteractive.ca`
**Solution:** Use wired connection, improve WiFi signal, contact ISP

**3. Laptop went to sleep:**
- Closed laptop lid
- Screensaver activated
- Power saving kicked in

**Solution:** Keep laptop active during session, disable sleep mode

**4. Browser tab backgrounded:**
- Some browsers throttle background tabs
- Can cause connection drop

**Solution:** Keep stream tab active and visible

**5. Credits depleted:**
- Ran out of credits mid-session
- Instance auto-stopped

**Check:** Dashboard → Billing → Credits Remaining
**Solution:** Top up credits

### Browser-Specific Issues

#### Chrome / Edge Issues

**Issue: "Media stream failed to start"**

**Solution:**
1. Check camera/microphone permissions (if project uses them)
2. Settings → Privacy and security → Site settings → Camera/Microphone
3. Allow for `thirdspaceinteractive.ca`

**Issue: "Hardware acceleration required"**

**Solution:**
1. Settings → System → Use hardware acceleration when available
2. Enable it
3. Restart browser

#### Firefox Issues

**Issue: WebRTC connection unstable**

**Known issue:** Firefox sometimes has WebRTC compatibility issues

**Solution:**
1. Update to latest Firefox version
2. Or switch to Chrome/Edge temporarily

**Issue: Video stutters in Firefox but not Chrome**

**Solution:**
1. about:config → media.peerconnection.video.enabled → true
2. Or use Chrome (better WebRTC support)

#### Safari Issues

**Issue: Stream doesn't load in Safari**

**Cause:** Safari has stricter WebRTC policies

**Solution:**
1. Safari → Preferences → Privacy
2. Uncheck "Prevent cross-site tracking" (for testing)
3. Or use Chrome/Edge

**Issue: Touch controls don't work on iPad Safari**

**Solution:**
1. Ensure your UE project has touch input configured
2. Test with external mouse (if works with mouse = touch input not implemented)

### Mobile-Specific Issues

#### iOS (iPhone/iPad)

**Issue: Stream won't load on iOS**

**Requirements:**
- iOS 14+ required
- Use Safari (not Chrome on iOS, it's still Safari underneath)

**Solution:**
1. Update to iOS 14 or later
2. Use Safari browser
3. Allow camera/mic if prompted (even if project doesn't use them)

**Issue: Touch controls unresponsive**

**Solution:**
1. Tap inside stream window to focus
2. Ensure UE project has touch input events configured
3. Try landscape orientation (more screen space)

#### Android

**Issue: Stream won't load on Android**

**Requirements:**
- Android 10+ recommended
- Chrome browser required

**Solution:**
1. Update Android OS to 10 or later
2. Use Chrome (not Samsung Browser, Firefox, etc.)
3. Enable hardware acceleration in Chrome flags

**Issue: Poor performance on Android**

**Cause:** Older/low-end devices have weak video decoders

**Solution:**
1. Close other apps
2. Use WiFi (not cellular)
3. Lower stream resolution (contact support)
4. Or use newer device (2020+)

### Corporate Network Troubleshooting

**Common corporate network blocks:**

| Block Type | Symptom | Solution |
|------------|---------|----------|
| WebRTC blocked | "Connection failed" | Request IT whitelist WebRTC |
| UDP ports blocked | Timeout after 30s | Request UDP 3478 opened |
| Domain blocked | Immediate failure | Request whitelist *.thirdspaceinteractive.ca |
| Proxy interference | Slow or unstable | Bypass proxy or configure exceptions |
| VPN required | Can't connect without VPN | Use VPN, or request VPN split-tunneling |

**How to request IT whitelist:**

**Email template for IT department:**

```
Subject: Whitelist Request for Third Space Streaming Platform

Hi [IT Team],

We need access to the Third Space Streaming platform for [business purpose: client demos / training / architectural visualization].

Please whitelist the following:

Domains:
- *.thirdspaceinteractive.ca
- *.amazonaws.com (AWS infrastructure)

Protocols:
- WebRTC (for video streaming)
- WebSocket (for signaling)

Ports:
- 80, 443 (HTTPS)
- UDP 3478 (STUN for WebRTC)

This is a cloud-based Pixel Streaming platform for Unreal Engine content.
Documentation: https://docs.thirdspaceinteractive.ca

Thank you,
[Your Name]
```

### VPN Issues

**Issue: Can't connect when VPN is active**

**Cause:** VPN routes traffic through restricted network or adds latency

**Test:** Disable VPN, try connecting
- If works without VPN = VPN blocking

**Solutions:**

**Option 1: Disable VPN** (if not required for security)

**Option 2: Split tunneling**
- Configure VPN to exclude `*.thirdspaceinteractive.ca`
- Allows direct connection for streaming

**Option 3: Use different VPN server**
- Try different geographic region
- Some servers less restrictive than others

**Option 4: Contact VPN provider**
- Request WebRTC compatibility
- Ask about UDP port forwarding

## Advanced Diagnostics

### Check WebRTC Connection Status

**Browser console test:**

1. Open stream page
2. Press F12 → Console
3. Paste and run:
   ```javascript
   RTCPeerConnection.prototype.getStats().then(stats => console.log(stats))
   ```
4. Look at output:
   - "connected" = good
   - "failed" or "disconnected" = problem
   - "checking" or "new" = still connecting (wait)

### Test Network Connectivity

**From command line:**

**1. Test basic connectivity:**
```bash
ping thirdspaceinteractive.ca
```
- Should return under 100ms
- 0% packet loss

**2. Test continuous stability:**
```bash
ping -t thirdspaceinteractive.ca
```
- Run for 5 minutes
- Check for packet loss (should be 0%)
- Inconsistent ping times = unstable network

**3. Trace route:**
```bash
tracert thirdspaceinteractive.ca  (Windows)
traceroute thirdspaceinteractive.ca  (Mac/Linux)
```
- Shows path to server
- High latency hop = bottleneck

### Check Firewall Logs (Advanced)

**For IT/Network admins:**

1. Check firewall logs for blocked connections
2. Look for:
   - Blocked domains: `*.thirdspaceinteractive.ca`
   - Blocked ports: UDP 3478, TCP 443
   - WebRTC-related blocks

3. Create exceptions for:
   - Source: Internal network
   - Destination: `*.thirdspaceinteractive.ca`
   - Ports: All
   - Protocol: Allow WebRTC

## Connection Checklist

Before contacting support, verify:

**Browser:**
- [ ] Using Chrome or Edge (latest version)
- [ ] Extensions disabled (try incognito mode)
- [ ] Cache and cookies cleared
- [ ] Hardware acceleration enabled

**Network:**
- [ ] Internet speed over 5 Mbps download
- [ ] Tested on different network (mobile hotspot)
- [ ] VPN disabled (if applicable)
- [ ] Firewall allows WebRTC (corporate networks)

**Instance:**
- [ ] Dashboard shows "Ready" or "Running"
- [ ] Have credits available
- [ ] Within concurrent user limit for tier

**Troubleshooting tried:**
- [ ] Refreshed page
- [ ] Restarted browser
- [ ] Tested different device
- [ ] Checked browser console for errors

## Error Messages Reference

| Error Message | Meaning | Solution |
|---------------|---------|----------|
| "Connection failed" | Can't reach server | Check network/firewall |
| "Connection timeout" | Request took too long | Check internet speed |
| "Media stream error" | WebRTC setup failed | Check browser support |
| "Instance not running" | Project stopped | Start instance from dashboard |
| "Session limit reached" | Too many concurrent users | Upgrade tier or wait |
| "WebSocket connection failed" | Signaling blocked | Network/firewall issue |

## Still Can't Connect?

**Gather diagnostic information:**

1. **Browser info:**
   - Browser and version (Chrome 120, Firefox 115, etc.)
   - Operating system (Windows 11, macOS 14, etc.)

2. **Network info:**
   - Speed test results (Mbps download/upload)
   - Network type (home WiFi, corporate, mobile)
   - VPN active? (yes/no)

3. **Error details:**
   - Exact error message
   - Screenshot
   - Browser console errors (F12 → Console tab, screenshot)

4. **What you've tried:**
   - List troubleshooting steps attempted
   - Results of each

**Contact support:**

- Free tier: [Discord](https://discord.gg/8pVjBjCe)
- Plus: support@thirdspaceinteractive.ca (48hr)
- Pro: support@thirdspaceinteractive.ca (24hr)
- Enterprise: Dedicated Slack (4hr)

**Include in message:**
```
Subject: Connection Issue - [Your Project Name]

Browser: [Chrome 120 / Firefox 115 / etc.]
OS: [Windows 11 / macOS 14 / etc.]
Network: [Home WiFi / Corporate / Mobile]
VPN: [Yes/No]

Error: [Exact error message or "Black screen, no error"]

Troubleshooting tried:
- [X] Different browser
- [X] Incognito mode
- [X] Different network
- [ ] Cleared cache

Browser console errors (screenshot attached):
[Paste console errors or attach screenshot]

Speed test results: [X Mbps download, Y Mbps upload]
```

---

**Related Guides:**
- [Performance Issues →](./performance-issues)
- [Deployment Issues →](./deployment-issues)
- [Upload Issues →](./upload-issues)
- [Getting Started →](../getting-started/quick-start)
