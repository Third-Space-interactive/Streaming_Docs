---
sidebar_position: 2
---

# Upload Issues

Troubleshooting guide for problems during project upload to Third Space.

## Quick Diagnosis

### Upload progress stuck at 0%

**Symptoms:**
- Progress bar doesn't move
- "Preparing upload..." message indefinitely
- No error message shown

**Common causes:**

1. **File not selected properly**
   - Solution: Click "Select File" or drag-and-drop again
   - Verify file name appears in upload area

2. **Browser extension blocking**
   - Solution: Disable ad blockers temporarily
   - Try incognito/private mode
   - Use different browser (Chrome recommended)

3. **JavaScript error**
   - Solution: Open browser console (F12), check for errors
   - Clear cache and cookies
   - Update browser to latest version

### Upload progress stuck mid-way (10-90%)

**Symptoms:**
- Progress bar advances then stops
- No error message
- Browser tab remains responsive

**Common causes:**

1. **Network instability**
   - Solution: Check internet connection stability
   - Try wired connection instead of WiFi
   - Pause other large downloads/uploads
   - Run speed test: need 5+ Mbps upload minimum

2. **Browser timeout on large files**
   - Solution: Use latest Chrome or Edge
   - Increase browser timeout (Enterprise tier: contact support)
   - Split project into smaller parts if possible (not ideal)

3. **Connection interrupted**
   - Solution: Don't close laptop lid during upload
   - Disable sleep mode during upload
   - Keep browser tab active (not in background)

**Steps to resolve:**
1. Note current percentage (e.g., stuck at 47%)
2. Wait 5 minutes to confirm stuck
3. Cancel upload (X button)
4. Clear browser cache
5. Restart browser
6. Try again

### Upload reaches 100% but fails

**Symptoms:**
- Progress bar completes
- "Processing..." or "Validating..." appears
- Error message after processing

**Common causes:**

1. **Invalid .zip structure** (ERR_001)
   - Error: "Package structure invalid"
   - Solution: See "Zip File Structure Issues" below

2. **Missing executable** (ERR_002)
   - Error: "No executable found"
   - Solution: See "Missing Executable" section

3. **Tier limits exceeded** (ERR_003, ERR_004)
   - Error: "File too large" or "Storage limit reached"
   - Solution: See "File Size Issues" below

### Upload fails immediately with error

**Symptoms:**
- Error message appears within seconds
- No progress bar shown
- Upload never starts

**Common causes:**

1. **File type not supported** (ERR_008)
   - Error: "Invalid file format"
   - Solution: Ensure file is .zip (not .rar, .7z, .tar.gz)
   - Re-compress using Windows/Mac zip or 7-Zip

2. **File size too large for tier** (ERR_003)
   - Error: "File exceeds tier limit"
   - Solution: Check tier limits:
     - Free: 5GB
     - Plus: 10GB
     - Pro: 25GB
     - Enterprise: 100GB+
   - Compress textures or remove unused assets

3. **Storage quota exceeded** (ERR_004)
   - Error: "Storage limit reached"
   - Solution: Delete old/unused projects from dashboard
   - Upgrade tier for more storage

## Detailed Troubleshooting

### Zip File Structure Issues

**Correct structure:**

```
ProjectName.zip
└── ProjectName/
    ├── LinuxNoEditor/
    │   └── ProjectName.sh (executable)
    │   └── ProjectName/
    │       └── (project files)
    └── Engine/
        └── (engine binaries)
```

Or for Windows:

```
ProjectName.zip
└── WindowsNoEditor/
    └── ProjectName.exe
    └── ProjectName/
        └── (project files)
    └── Engine/
        └── (engine binaries)
```

**Common mistakes:**

❌ **Nested zip file:**
```
ProjectName.zip
└── ProjectName.zip  ← Don't double-zip
    └── LinuxNoEditor/
```

❌ **Missing parent folder:**
```
ProjectName.zip
├── LinuxNoEditor/  ← Should be inside ProjectName folder
├── Engine/
```

❌ **Wrong compression method:**
- File extension is .rar or .7z (not .zip)
- Solution: Extract and re-compress with zip format

**How to fix:**

1. Extract your .zip file completely
2. Verify folder structure matches above
3. Re-compress:
   - **Windows**: Right-click parent folder → Send to → Compressed (zipped) folder
   - **Mac**: Right-click parent folder → Compress
   - **Linux**: `zip -r ProjectName.zip ProjectName/`

### Missing Executable

**Error message:** "No executable found" (ERR_002)

**Diagnosis:**

Open your .zip and navigate to expected location:
- Linux: `ProjectName/LinuxNoEditor/ProjectName.sh`
- Windows: `ProjectName/WindowsNoEditor/ProjectName.exe`

**If file doesn't exist:**

1. **You forgot to package the project**
   - Solution: Re-package in Unreal Engine
   - File → Package Project → Linux or Windows
   - Wait for packaging to complete (can take 10-30 minutes)
   - Compress the output folder

2. **Packaging failed in Unreal Engine**
   - Solution: Check UE Output Log for errors
   - Common issue: Missing dependencies or plugins
   - Verify project settings (Pixel Streaming plugin enabled)

3. **File permissions lost (Linux builds only)**
   - Solution: Re-compress with executable flag preserved
   - Linux/Mac users: `zip -r ProjectName.zip ProjectName/`
   - Windows users: Use 7-Zip or WinRAR (preserves permissions)

**If file exists but named differently:**

- Ensure filename matches project name exactly
- Case-sensitive on Linux (ProjectName.sh vs projectname.sh)
- No extra extensions (.sh.txt, .exe.lnk)

### File Size Issues

**Error:** "File too large" (ERR_003)

**Tier limits:**
- Free: 5GB max
- Plus: 10GB max
- Pro: 25GB max
- Enterprise: 100GB+ (custom)

**Solutions:**

**1. Reduce project size (recommended):**

Inside Unreal Engine before packaging:
- Remove unused assets (Content Browser → Fix Up Redirectors → Delete)
- Compress textures (Right-click texture → Compression Settings → DXT1/5)
- Enable Pak file compression (Project Settings → Packaging → "Create compressed cooked packages")
- Remove editor content (Project Settings → Packaging → "Exclude editor content")
- Exclude debug files (uncheck "Include Debug Files")

Expected size reductions:
- Texture compression: 30-50% smaller
- Pak compression: 20-40% smaller
- Removing unused assets: Varies (10-60%)

**2. Check what's consuming space:**

Extract .zip and check folder sizes:
- Large textures folder → Compress textures
- Large audio folder → Compress audio (Ogg Vorbis instead of WAV)
- Large video folder → Lower resolution or bitrate
- Duplicate files → Remove redundant assets

**3. Upgrade tier if necessary:**

If project legitimately needs space:
- Plus tier: $20/month for 10GB
- Pro tier: $49/month for 25GB
- Enterprise: Custom for 100GB+

**4. Split content (last resort, not ideal):**

For very large projects:
- Package core experience separately
- Load additional content dynamically (not recommended for streaming)

### Storage Quota Exceeded

**Error:** "Storage limit reached" (ERR_004)

**Your current storage usage:**
- View in dashboard → Billing → Storage Used

**Storage limits by tier:**
- Free: 5GB total (1 project max)
- Plus: 10GB total (2 projects max)
- Pro: 25GB total (3 projects max)
- Enterprise: 100GB+ total (unlimited projects)

**Solutions:**

**1. Delete old projects:**
1. Go to dashboard
2. Find unused/old projects
3. Click **Delete** (⚠️ Permanent action)
4. Confirm deletion
5. Storage updates within 5 minutes

**2. Replace existing project (update):**
1. Click project name
2. Click **Upload New Version**
3. Upload updated .zip
4. Old version is replaced (frees space)

**3. Upgrade tier for more storage:**
- Plus: 10GB ($20/month)
- Pro: 25GB ($49/month)
- Enterprise: 100GB+ (custom pricing)

### Network/Connection Issues

**Symptoms:**
- Upload starts then fails with "Connection lost"
- "Network error" message
- Inconsistent progress (jumps around)

**Diagnosis:**

1. **Check internet stability:**
   - Run ping test: `ping google.com` (should be under 100ms, 0% loss)
   - Run speed test: Need 5+ Mbps upload minimum
   - Check WiFi signal strength (move closer to router)

2. **Check for network interruptions:**
   - VPN: Disable temporarily during upload
   - Firewall: Whitelist app.thirdspaceinteractive.ca
   - Antivirus: Disable temporarily if blocking uploads
   - Corporate network: May have upload size limits (try from home)

3. **Browser-specific issues:**
   - Chrome/Edge: Generally most reliable
   - Firefox: Sometimes has timeout issues on large files
   - Safari: May have CORS issues (try Chrome)

**Solutions:**

**Use wired connection:**
- Ethernet cable instead of WiFi
- Eliminates wireless interference
- More stable for large uploads

**Upload during off-peak hours:**
- Late night/early morning (less ISP congestion)
- Weekdays instead of weekends

**Increase browser timeout (advanced):**
- Chrome flags: `chrome://flags/#calculate-native-win-occlusion`
- Or use Enterprise tier (server-side timeout increased)

**Resume upload (if supported):**
- Currently not supported (coming soon)
- Workaround: Keep browser tab active until complete

### Browser-Specific Issues

**Chrome/Edge:**
- Generally most reliable
- If fails: Clear cache, disable extensions, try incognito mode

**Firefox:**
- Known issue: Timeout on files over 2GB (upgrade to latest version)
- Solution: Use Chrome for large uploads
- Or split project (not recommended)

**Safari:**
- Mac users: Safari works but can be slower
- Solution: Use Chrome or Edge on Mac
- iOS Safari: Mobile uploads not recommended (use desktop)

**Mobile browsers:**
- ❌ Not recommended for project uploads
- File sizes too large for mobile connections
- Use desktop/laptop instead

## Step-by-Step Upload Checklist

Before uploading, verify:

- [ ] File is .zip format (not .rar, .7z, or .tar.gz)
- [ ] File size is under tier limit (5GB/10GB/25GB/100GB)
- [ ] Extracted zip to verify structure is correct
- [ ] Executable (.sh or .exe) is present and named correctly
- [ ] Internet connection is stable (5+ Mbps upload)
- [ ] Using Chrome or Edge browser (latest version)
- [ ] Ad blockers and extensions disabled
- [ ] Enough storage quota available in your account

During upload:

- [ ] Keep browser tab active (don't minimize or switch)
- [ ] Don't close laptop lid or let computer sleep
- [ ] Monitor progress (should advance steadily)
- [ ] Check browser console for errors if stuck (F12 key)

After upload completes:

- [ ] Wait for "Processing..." message
- [ ] Wait for validation (can take 1-3 minutes)
- [ ] Proceed to configuration step
- [ ] Deploy and test stream

## Common Error Messages

### "Upload session expired"

**Cause:** Browser tab left idle too long before uploading

**Solution:**
1. Refresh page
2. Start upload process again
3. Complete upload within 60 minutes of initiating

### "Network timeout"

**Cause:** Upload took too long, server closed connection

**Solution:**
1. Check internet speed (need 5+ Mbps upload)
2. Reduce file size if possible
3. Try wired connection
4. Upload during off-peak hours

### "Invalid zip archive"

**Cause:** Corrupt .zip file or wrong compression format

**Solution:**
1. Extract .zip file to verify it's not corrupt
2. Re-compress using built-in OS tools:
   - Windows: Right-click → Send to → Compressed (zipped) folder
   - Mac: Right-click → Compress
3. Avoid using WinRAR (creates .rar not .zip)
4. Use 7-Zip in "zip" mode (not 7z mode)

### "Project name already exists"

**Cause:** You already have a project with this name

**Solution:**
1. Rename your project in dashboard (if updating)
2. Or use different project name
3. Or delete existing project first (if no longer needed)

### "Credits depleted"

**Cause:** No credits remaining to deploy project

**Solution:**
1. Purchase credit pack (Billing page)
2. Upgrade tier (includes monthly credits)
3. Wait until next billing cycle (credits reset monthly)

Note: You can upload projects without credits, but can't deploy until credits are available.

## Prevention Best Practices

**Before packaging in Unreal Engine:**

1. Test project runs locally (Launch → Standalone Game)
2. Enable Pixel Streaming plugin and configure
3. Verify Project Settings → Packaging settings:
   - Build Configuration: Shipping
   - Build Target: Blank/Game (not Editor)
   - Enable Pak file compression
   - Exclude editor content

**During packaging:**

1. Watch Output Log for errors
2. Fix any warnings before compressing
3. Verify packaged build runs locally (test .sh or .exe)
4. Only compress if local test succeeds

**When compressing:**

1. Use operating system's built-in zip (most compatible)
2. Include parent folder (don't zip contents directly)
3. Name .zip file same as project name (optional but clear)
4. Verify .zip size is under tier limit before uploading

**Before uploading:**

1. Extract .zip and verify structure
2. Check internet connection speed
3. Close unnecessary browser tabs and apps
4. Disable VPN and antivirus temporarily

## Still Having Issues?

If you've tried all troubleshooting steps:

1. **Gather diagnostic info:**
   - Project size and name
   - Tier (Free/Plus/Pro/Enterprise)
   - Error code or message
   - Browser and version
   - OS and version
   - Screenshot of error

2. **Contact support:**
   - Free tier: [Discord community](https://discord.gg/8pVjBjCe)
   - Plus tier: support@thirdspaceinteractive.ca (48hr response)
   - Pro tier: support@thirdspaceinteractive.ca (24hr response)
   - Enterprise: Dedicated Slack channel (4hr response)

3. **Include in your message:**
   - "I'm getting [error message] when uploading"
   - "I've tried: [list troubleshooting steps]"
   - "Project size: [X GB], Tier: [Y], Browser: [Z]"
   - Attach screenshot of error

---

**Related Guides:**
- [Deployment Issues →](./deployment-issues)
- [Linux Packaging Guide →](../technical-docs/packaging/linux-builds)
- [Windows Packaging Guide →](../technical-docs/packaging/windows-builds)
- [System Requirements →](../getting-started/system-requirements)
