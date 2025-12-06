---
sidebar_position: 3
---

# Deployment Issues

Troubleshooting guide for problems during project deployment and instance startup.

## Quick Diagnosis

### Deployment stuck at "Deploying..."

**Symptoms:**
- Status shows "Deploying" for over 10 minutes
- Progress indicator spinning indefinitely
- No error message appears

**Expected deployment time:**
- Small projects (under 2GB): 3-5 minutes
- Medium projects (2-10GB): 5-10 minutes
- Large projects (10-25GB): 10-15 minutes
- Very large (25GB+): 15-20 minutes

**If stuck longer than expected:**

1. **Wait 15 minutes first**
   - Large projects can take time
   - Background extraction and validation happening
   - Don't refresh page during deployment

2. **Check dashboard status indicator**
   - Green "Ready" = Successful
   - Yellow "Deploying" = In progress
   - Red "Error" = Failed
   - Gray "Stopped" = Stopped or idle timeout

3. **If stuck over 20 minutes:**
   - Refresh browser page
   - Check if status updated
   - If still "Deploying", contact support with project ID

### Deployment fails with error

**Common error codes:**

| Error Code | Meaning | Quick Fix |
|------------|---------|-----------|
| **ERR_001** | Invalid package structure | Fix folder structure, see below |
| **ERR_002** | Missing executable | Ensure .sh or .exe is present |
| **ERR_005** | Instance failed to start | See "Instance Failed to Start" section |
| **ERR_009** | Dependency missing | Check UE plugins and dependencies |
| **ERR_010** | Incompatible UE version | Verify UE version compatibility |
| **ERR_011** | GPU initialization failed | Contact support (infrastructure issue) |

### Instance starts but immediately stops

**Symptoms:**
- Deployment succeeds
- Instance starts
- Stops within seconds or minutes
- Status changes to "Stopped" or "Error"

**Common causes:**

1. **Application crash on startup**
   - Solution: See "Application Crash Issues" below

2. **Missing dependencies**
   - Solution: Check project dependencies, see "Missing Dependencies"

3. **Insufficient GPU memory**
   - Solution: Optimize project, see "GPU Memory Issues"

### Instance runs but stream won't connect

**Symptoms:**
- Dashboard shows "Ready" or "Running"
- Click "Launch Stream" but nothing loads
- Black screen or infinite loading
- "Connection failed" error

**This is a connection issue, not deployment issue**
- See: [Connection Problems Guide →](./connection-problems)

## Detailed Troubleshooting

### Invalid Package Structure (ERR_001)

**Error message:** "Package structure invalid" or "Cannot locate project files"

**Diagnosis:**

Extract your uploaded .zip and verify structure:

**Correct structure (Linux):**
```
ProjectName.zip
└── ProjectName/                    ← Parent folder
    └── LinuxNoEditor/              ← Build folder
        ├── ProjectName.sh          ← Executable (required)
        ├── ProjectName/            ← Project folder
        │   ├── Binaries/
        │   ├── Content/
        │   └── Saved/
        └── Engine/
            ├── Binaries/
            └── Content/
```

**Correct structure (Windows):**
```
ProjectName.zip
└── ProjectName/                    ← Parent folder
    └── WindowsNoEditor/            ← Build folder
        ├── ProjectName.exe         ← Executable (required)
        ├── ProjectName/            ← Project folder
        │   ├── Binaries/
        │   ├── Content/
        │   └── Saved/
        └── Engine/
            ├── Binaries/
            └── Content/
```

**Common mistakes:**

❌ **Missing parent folder:**
```
ProjectName.zip
├── LinuxNoEditor/     ← Should be inside ProjectName/
├── ProjectName.sh
└── Engine/
```
**Fix:** Create parent folder, move all contents inside, re-zip

❌ **Wrong folder names:**
```
ProjectName.zip
└── ProjectName/
    └── Linux/         ← Should be "LinuxNoEditor"
        └── ...
```
**Fix:** Rename to exact name: `LinuxNoEditor` or `WindowsNoEditor`

❌ **Executable in wrong location:**
```
ProjectName.zip
└── ProjectName/
    ├── ProjectName.sh      ← Should be inside LinuxNoEditor/
    └── LinuxNoEditor/
        └── ...
```
**Fix:** Move executable to LinuxNoEditor/ or WindowsNoEditor/ folder

**How to verify before uploading:**

1. Extract your .zip completely
2. Navigate to: `ProjectName/LinuxNoEditor/` (or WindowsNoEditor)
3. Verify executable is there: `ProjectName.sh` or `ProjectName.exe`
4. Check folder names match exactly (case-sensitive on Linux)

### Missing Executable (ERR_002)

**Error message:** "No executable found" or "Cannot locate startup binary"

**Diagnosis:**

The deployment system searches for:
- Linux: `ProjectName.sh` inside `LinuxNoEditor/`
- Windows: `ProjectName.exe` inside `WindowsNoEditor/`

**If file doesn't exist:**

1. **Packaging incomplete in Unreal Engine**
   - You may have canceled packaging early
   - Or packaging failed silently

**Solution:**
1. Delete the packaged folder
2. In UE: File → Package Project → Linux (or Windows)
3. Choose output location
4. Wait until "Build successful" message (can take 10-30 min)
5. Verify executable exists before compressing

2. **Wrong build target selected**
   - You packaged for wrong platform

**Solution:**
- If you have WindowsNoEditor but uploaded as Linux → Re-upload and select Windows
- Or re-package for correct platform

3. **File permissions lost (Linux builds)**
   - Executable flag removed during compression

**Solution:**
- Compress on Linux/Mac: `zip -r ProjectName.zip ProjectName/`
- Or use 7-Zip on Windows (preserves permissions)
- Avoid Windows Explorer's "Send to → Compressed folder" for Linux builds

**If file exists but named differently:**

- Must match project name exactly
- Case-sensitive: `ProjectName.sh` ≠ `projectname.sh`
- No extra extensions: Not `ProjectName.sh.txt`

**Verify executable is not corrupt:**

Before compressing, test locally:
- Linux: `chmod +x ProjectName.sh && ./ProjectName.sh`
- Windows: Double-click `ProjectName.exe`
- Should launch the project (may fail Pixel Streaming setup locally, that's OK)
- If doesn't launch, packaging failed

### Instance Failed to Start (ERR_005)

**Error message:** "Instance failed to start" or "Application error on startup"

**Meaning:** Your project deployed successfully, but crashes when trying to run on cloud GPU.

**Common causes:**

**1. Project crashes on startup**

Your UE project has a bug that crashes immediately:
- Blueprint error (null reference, infinite loop)
- Plugin incompatibility
- Missing asset reference

**Diagnosis:**
- Test your packaged build locally before uploading
- If crashes locally, it will crash on cloud too

**Solution:**
1. Fix crash in UE project
2. Re-package
3. Test packaged build locally (must run without crashing)
4. Re-upload to Third Space

**2. Pixel Streaming plugin not configured**

**Solution:**
1. In UE: Edit → Plugins → Search "Pixel Streaming"
2. Enable plugin
3. Restart UE
4. Project Settings → Search "Pixel Streaming"
5. Verify settings configured
6. Re-package and re-upload

**3. Incompatible UE version** (ERR_010)

**Supported versions:**
- UE 5.0 - 5.4 (recommended: 5.3, 5.4)
- UE 4.27 (legacy support)

**Not supported:**
- UE 5.5+ (not yet tested)
- UE 4.26 and below (use 4.27 minimum)

**Solution:** Re-package with supported UE version

**4. GPU driver incompatibility** (ERR_011)

**Rare, infrastructure issue:**
- Cloud GPU failed to initialize
- Driver mismatch

**Solution:** Contact support with project ID (they'll restart on different instance)

### Missing Dependencies (ERR_009)

**Error message:** "Missing required dependencies" or "DLL not found" / "SO not found"

**Common causes:**

**1. Third-party plugin requires system libraries**

Some UE plugins depend on OS libraries not installed on cloud instance.

**Common problematic plugins:**
- Custom video codecs
- Database connectors (MySQL, PostgreSQL)
- Hardware-specific plugins (VR headsets, motion capture)

**Solution:**
- Test with plugin disabled
- If works without plugin, contact support about adding library (Enterprise tier)
- Or find alternative plugin

**2. Packaging didn't include all files**

**Solution:**
1. In UE Project Settings → Packaging:
   - Enable "Include Prerequisites Installer" (Windows)
   - Enable "Include crash reporter" (helps debug)
   - Check "Cook everything in the project"
2. Re-package and test locally
3. Re-upload

**3. Wrong build configuration**

**Solution:**
1. Verify you're packaging "Shipping" build, not "Development" or "Debug"
2. In UE: Edit → Project Settings → Packaging
   - Build Configuration: Shipping
3. Re-package

**4. Custom engine build**

If you're using a custom-compiled Unreal Engine (not Epic Launcher version):
- May have non-standard dependencies
- Solution: Use official Epic Launcher UE version

### GPU Memory Issues

**Symptoms:**
- Deployment succeeds
- Instance starts then crashes after 10-60 seconds
- No specific error code

**Diagnosis:**

Your project uses more GPU memory than available on cloud instance.

**Cloud GPU specs:**
- Free/Plus/Pro tiers: ~8-12GB GPU memory
- Enterprise: Custom (up to 24GB+)

**Check your project's GPU usage:**
1. In UE Editor: Stats → GPU
2. Look at "Used Texture Memory" and "Total Allocated Memory"
3. If over 6-8GB, you're at risk

**Solution: Optimize GPU memory usage**

**Texture optimization:**
1. Content Browser → Filter: Textures
2. Sort by size (largest first)
3. For large textures (over 2048x2048):
   - Right-click → Compression Settings → DXT1 or DXT5
   - Reduce resolution: 4096 → 2048, 2048 → 1024
   - Use texture streaming (Project Settings → Rendering)

**Material optimization:**
1. Reduce material complexity (fewer texture samples)
2. Use material instances (not unique materials)
3. Combine textures when possible

**Mesh optimization:**
1. Use LODs (Level of Detail) aggressively
2. Reduce polygon count on background objects
3. Use Nanite wisely (can be memory-intensive)

**Lighting:**
1. Bake lighting when possible (instead of real-time Lumen)
2. Reduce shadowmap resolution
3. Limit number of dynamic lights

**Post-processing:**
1. Disable expensive effects (screen-space reflections, AO)
2. Lower bloom quality
3. Reduce particle counts

**Target GPU memory usage:**
- Free/Plus/Pro tiers: Under 6GB safe
- 6-8GB: May work but risky
- Over 8GB: Likely to crash, upgrade to Enterprise or optimize

### Application Crash Issues

**Symptoms:**
- Instance starts (dashboard shows "Running")
- Crashes within seconds to minutes
- Status changes to "Error" or "Stopped"

**Diagnosis:**

Your UE project has a runtime error. Common causes:

**1. Blueprint errors:**
- Null reference (accessing actor that doesn't exist)
- Infinite loop in Tick event
- Division by zero
- Array out of bounds

**Solution:**
1. Test packaged build locally (not in UE Editor)
2. Check Output Log for errors
3. Fix blueprint errors
4. Common fix: Add "Is Valid" checks before accessing objects

**2. Plugin incompatibility:**
- Plugin works in Editor but crashes in packaged build
- Or plugin incompatible with Linux (if using Linux build)

**Solution:**
1. Disable plugins one by one
2. Re-package and test after each
3. Identify problematic plugin
4. Find alternative or contact plugin developer

**3. Corrupted asset:**
- Mesh, texture, or other asset is corrupt

**Solution:**
1. In UE: Right-click Content folder → Fix Up Redirectors
2. Content Browser → Validate Assets
3. Fix or replace corrupt assets
4. Re-package

**4. Linux-specific issues (if using Linux builds):**
- Case-sensitive file paths (Windows is case-insensitive, Linux is not)
- Example: Blueprint references "Textures/Wood.png" but file is "textures/wood.png"

**Solution:**
1. Ensure all asset references match exact case
2. Or package for Windows instead (avoids case sensitivity)

**How to debug:**

Since you can't see crash logs on cloud instance:

1. **Test locally first (critical):**
   - Package your project
   - Run the packaged build on your own machine
   - If crashes locally, fix before uploading to cloud

2. **Add logging:**
   - Use "Print String" in blueprints at key points
   - Helps identify where crash occurs
   - Example: Print "Level loaded" at BeginPlay

3. **Simplify project:**
   - Create minimal test project
   - Add features back incrementally
   - Identify what causes crash

## Instance Management Issues

### Can't start instance (Credits depleted - ERR_006)

**Error message:** "Insufficient credits to start instance"

**Solution:**

1. **Check credit balance:**
   - Dashboard → Billing → Credits Remaining

2. **Top up credits:**
   - Purchase credit pack (one-time)
   - Or upgrade tier (includes monthly credits)

3. **Monthly credits reset:**
   - If close to renewal date, wait for reset
   - Free: 60 credits/month
   - Plus: 100 credits/month
   - Pro: 300 credits/month

### Concurrent user limit reached (ERR_007)

**Error message:** "Maximum concurrent users reached"

**Meaning:** Someone else is already using your project streams.

**Tier limits:**
- Free: 1 concurrent user
- Plus: 2 concurrent users
- Pro: 4 concurrent users
- Enterprise: Unlimited

**Solution:**

1. **Wait for other sessions to end:**
   - Check Dashboard → Project → Active Sessions
   - Sessions auto-end after idle timeout (2-5 min)

2. **Manually stop other sessions:**
   - Dashboard → Project → Stop All Sessions

3. **Upgrade tier:**
   - Plus: $20/month for 2 concurrent
   - Pro: $49/month for 4 concurrent
   - Enterprise: Unlimited

### Instance stops unexpectedly

**Symptoms:**
- Stream was working
- Suddenly disconnects
- Dashboard shows "Stopped"

**Common causes:**

**1. Idle timeout triggered:**
- No user input for timeout period
- Free/Plus: 2 minutes idle
- Pro: 5 minutes idle
- Enterprise: Custom

**Solution:**
- Expected behavior (saves credits)
- User refreshes page to reconnect
- Or upgrade to Pro/Enterprise for longer timeout

**2. Credits depleted mid-session:**
- Ran out of credits while streaming

**Solution:**
- Top up credits
- Monitor credit usage in dashboard

**3. Instance crash:**
- Application error during runtime

**Solution:**
- See "Application Crash Issues" above
- Test packaged build locally to reproduce

**4. Infrastructure issue:**
- Cloud provider issue (rare)

**Solution:**
- Try restarting instance
- If persists, contact support

## Deployment Best Practices

**Before uploading:**

1. ✅ Test packaged build locally
   - Must run without crashing
   - Verify Pixel Streaming plugin enabled
   - Check GPU memory usage (under 6GB recommended)

2. ✅ Verify package structure
   - Extract .zip and verify folder layout
   - Check executable is present and named correctly

3. ✅ Optimize for cloud
   - Compress textures
   - Use LODs
   - Bake lighting when possible
   - Target 30-60 FPS

**During deployment:**

1. ✅ Wait patiently
   - Large projects take 10-15 minutes
   - Don't refresh page during deployment

2. ✅ Monitor status
   - Check dashboard for status updates
   - If stuck over 20 min, contact support

**After deployment:**

1. ✅ Test immediately
   - Click "Launch Stream" and verify it works
   - Test on different devices/networks
   - Check controls and interactions

2. ✅ Monitor performance
   - Check FPS and responsiveness
   - If poor, optimize project and re-upload

## Error Code Reference

### Complete Error Code List

| Code | Error | Cause | Solution |
|------|-------|-------|----------|
| ERR_001 | Invalid package | Wrong folder structure | Fix structure and re-upload |
| ERR_002 | Missing executable | .sh or .exe not found | Verify packaging completed |
| ERR_003 | File too large | Exceeds tier limit | Reduce size or upgrade tier |
| ERR_004 | Storage full | No space left | Delete old projects |
| ERR_005 | Instance start fail | Application crashes | Test locally, fix crash |
| ERR_006 | No credits | Depleted credits | Purchase credits or upgrade |
| ERR_007 | Concurrent limit | Too many users | Upgrade tier |
| ERR_008 | Invalid zip | Not .zip format | Re-compress as .zip |
| ERR_009 | Missing dependencies | Required libraries missing | Check plugins and packaging |
| ERR_010 | UE version incompatible | Unsupported UE version | Use UE 4.27 - 5.4 |
| ERR_011 | GPU initialization | Infrastructure issue | Contact support |

## Still Having Issues?

If you've tried all troubleshooting steps:

**Gather information:**
- Project name and ID
- Error code or message
- UE version used
- Build type (Linux or Windows)
- Project size
- Plugins used
- Screenshot of error

**Contact support:**
- Free tier: [Discord](https://discord.gg/8pVjBjCe)
- Plus: support@thirdspaceinteractive.ca (48hr)
- Pro: support@thirdspaceinteractive.ca (24hr)
- Enterprise: Dedicated Slack (4hr)

**Include in message:**
- "My deployment fails with [error code/message]"
- "I've tested the packaged build locally: [Yes/No]"
- "Project specs: UE [version], [Linux/Windows], [X GB], plugins: [list]"
- Attach screenshot

---

**Related Guides:**
- [Upload Issues →](./upload-issues)
- [Performance Issues →](./performance-issues)
- [Connection Problems →](./connection-problems)
- [Packaging Guide →](../technical-docs/packaging)
