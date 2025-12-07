---
sidebar_position: 2
---

# Linux Packaging Guide

Complete guide to packaging your Unreal Engine project for Linux deployment on Third Space.

## Why Package for Linux?

**Cost savings:**
- Linux builds: **1 credit per minute**
- Windows builds: **2 credits per minute**
- **50% cost reduction** for same project

**Performance benefits:**
- Better GPU driver optimization on cloud instances
- Faster instance startup (20-30 seconds vs 40-60 seconds)
- Smaller package sizes (15-25% smaller)
- More consistent frame times

**Recommended for:**
- ✅ Production deployments
- ✅ Long-running projects (24/7 availability)
- ✅ Budget-conscious projects
- ✅ Any project where cost matters

**Not recommended for:**
- ❌ Projects using Windows-only plugins
- ❌ Quick one-time tests (Windows is simpler)
- ❌ Plugins requiring specific Windows libraries

## Prerequisites

### Required Software

**1. Unreal Engine 4.27+ or 5.0+**
- Epic Games Launcher version recommended
- Supported versions: 4.27, 5.0, 5.1, 5.2, 5.3, 5.4

**2. Linux Cross-Compilation Toolchain**

This allows you to build Linux executables from Windows.

**For UE 5.0+:**
- Automatically included with Epic Launcher UE installation
- No separate download needed

**For UE 4.27:**
- Download from: Epic Games Launcher → Library → Engine → Version dropdown → Options → Linux Cross-Compile Toolchain
- Or download manually from: https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Linux/GettingStarted/

**3. Disk Space**
- 10-50GB free space for packaging output
- Varies by project size
- Temporary files created during packaging

### Verify Toolchain Installation

**Check if Linux toolchain is installed:**

1. Open Unreal Engine
2. Edit → Project Settings
3. Search for "Linux"
4. Platforms → Linux → Toolchain
5. Should show path to toolchain (e.g., `C:\Program Files\Epic Games\UE_5.3\Engine\Extras\ThirdPartyNotUE\SDKs\HostLinux`)

**If not found:**
- Re-run Epic Games Launcher
- Library → Engine version → Options → Verify
- Or reinstall engine with Linux support selected

## Step-by-Step Packaging

### Step 1: Enable Pixel Streaming Plugin

**First time only:**

1. Edit → Plugins
2. Search "Pixel Streaming"
3. Check "Enabled"
4. Click "Restart Now" (Unreal will restart)

**Verify plugin enabled:**
1. Edit → Project Settings
2. Search "Pixel Streaming"
3. Should see "Pixel Streaming" category in left panel

**Configure plugin settings (optional):**
- Most projects: Use default settings
- Advanced: Adjust encoder settings, resolution limits

### Step 2: Configure Project Settings

**Required settings:**

1. **Edit → Project Settings**

2. **Platforms → Linux:**
   - Enable "Linux" platform
   - Target Architecture: x86_64-unknown-linux-gnu

3. **Packaging:**
   - Build Configuration: **Shipping** (not Development or Debug)
   - Build Target: **Game** (or your custom target, not Editor)
   - [✓] Create compressed cooked packages
   - [✓] Exclude editor content
   - [ ] Include Debug Files (uncheck for smaller size)

4. **Project:**
   - [✓] Use Pak File (better for streaming)
   - Compression settings: Zlib or Oodle (default is fine)

5. **Maps & Modes:**
   - Default Maps → **Game Default Map**: Set your starting map
   - Make sure this is the map you want to load on startup

**Recommended optimizations:**

1. **Project Settings → Rendering:**
   - Default Screen Percentage: 100
   - Anti-Aliasing Method: TAA (good quality/performance)
   - Default Feature Level: SM5 or SM6

2. **Project Settings → Engine → Frame Rate:**
   - Smooth Frame Rate: [✓] Enabled
   - Min/Max FPS: 30-60 (or unlocked)

### Step 3: Package the Project

**Packaging process:**

1. **File → Package Project → Linux**

2. **Select output directory:**
   - Choose easily accessible location (e.g., `C:\PackagedProjects\MyProject`)
   - Avoid spaces in path (can cause issues)
   - Ensure you have enough disk space (10-50GB)

3. **Wait for packaging to complete:**
   - Small projects: 5-15 minutes
   - Medium projects: 15-45 minutes
   - Large projects: 45+ minutes

4. **Monitor progress:**
   - Output Log shows packaging steps
   - Look for "BUILD SUCCESSFUL" at end
   - If errors occur, note error message and see [Common Errors](#common-errors) below

**Expected output:**

After successful packaging, you'll have:

```
OutputDirectory/
└── LinuxNoEditor/
    ├── YourProjectName.sh          ← Executable (launch script)
    ├── YourProjectName/            ← Project content
    │   ├── Binaries/
    │   │   └── Linux/
    │   │       └── YourProjectName ← Actual binary
    │   ├── Content/
    │   │   └── Paks/
    │   │       └── YourProjectName-Linux.pak
    │   └── Saved/
    └── Engine/
        ├── Binaries/
        ├── Content/
        └── Shaders/
```

**Critical files:**
- `YourProjectName.sh` - Must exist, must have execute permissions
- `YourProjectName-Linux.pak` - Contains all game content

### Step 4: Verify Package Locally (Optional but Recommended)

**You cannot run Linux builds directly on Windows**, but you can verify structure.

**Check folder structure:**

1. Navigate to `OutputDirectory/LinuxNoEditor/`
2. Verify `YourProjectName.sh` exists (same name as your project)
3. Verify `YourProjectName/Binaries/Linux/` folder exists
4. Verify `.pak` file exists in `YourProjectName/Content/Paks/`

**Check file sizes (rough estimate):**
- Small project: 1-3 GB
- Medium project: 3-10 GB
- Large project: 10-25 GB

If suspiciously small (under 500 MB), packaging may have failed partially.

**Optional: Test on Linux machine**

If you have access to a Linux machine (or WSL2):

1. Copy entire `LinuxNoEditor/` folder to Linux machine
2. Open terminal in folder
3. Make executable: `chmod +x YourProjectName.sh`
4. Run: `./YourProjectName.sh`
5. Should launch (may fail Pixel Streaming setup, that's OK for local test)

### Step 5: Compress to .zip

**Windows built-in zip:**

1. Navigate to output directory
2. Right-click on `LinuxNoEditor` folder (not individual files inside)
3. Send to → Compressed (zipped) folder
4. Rename to `YourProjectName.zip` (optional but clear)

**WARNING:** Do NOT zip the individual contents - zip the entire `LinuxNoEditor` folder itself.

❌ **Wrong:**
```
YourProjectName.zip
├── YourProjectName.sh
├── YourProjectName/
└── Engine/
```

✅ **Correct:**
```
YourProjectName.zip
└── LinuxNoEditor/
    ├── YourProjectName.sh
    ├── YourProjectName/
    └── Engine/
```

**Using 7-Zip (recommended for large files):**

1. Download and install 7-Zip (free)
2. Right-click `LinuxNoEditor` folder
3. 7-Zip → Add to archive
4. Archive format: **zip** (not 7z!)
5. Compression level: Normal (faster) or Maximum (smaller)
6. Click OK

**Expected .zip size:**
- 30-40% smaller than uncompressed folder
- Small project: 800MB - 2GB
- Medium: 2-7GB
- Large: 7-25GB

**Verify .zip file:**

1. Right-click .zip → Extract to test folder
2. Verify folder structure is correct
3. Delete test folder

### Step 6: Upload to Third Space

1. Go to [Third Space Dashboard](https://app.thirdspaceinteractive.ca)
2. Click "Create New Project"
3. Follow 4-step wizard:
   - **Step 1:** Upload your .zip file
   - **Step 2:** Platform auto-detected as "Linux"
   - **Step 3:** Configure settings (resolution, region, etc.)
   - **Step 4:** Deploy

4. Wait 3-10 minutes for deployment
5. Test stream by clicking "Launch Stream"

[Detailed upload guide →](../../getting-started/first-deployment)

## Common Errors

### "Missing Linux Toolchain"

**Error during packaging:** "Unable to find Linux toolchain"

**Solution:**

1. Install Linux Cross-Compile Toolchain:
   - UE 5.0+: Usually included, verify installation
   - UE 4.27: Epic Launcher → Library → Engine → Options → Install Linux toolchain

2. Restart Unreal Engine after installation

3. Verify installation:
   - Edit → Project Settings → Platforms → Linux
   - Should show toolchain path

### "Packaging failed with exit code 1"

**Generic error, check Output Log for details:**

**Common causes:**

1. **Missing plugin binaries for Linux:**
   - Some third-party plugins don't support Linux
   - Solution: Disable plugin, or find Linux-compatible alternative

2. **Code compilation errors:**
   - C++ project with Linux-incompatible code
   - Solution: Fix code errors shown in Output Log

3. **Asset reference errors:**
   - Missing assets or broken references
   - Solution: Content Browser → Fix Up Redirectors

4. **Insufficient disk space:**
   - Packaging needs 2-3x project size temporarily
   - Solution: Free up disk space (20+ GB recommended)

### ".pak file missing after packaging"

**Error:** Package completes but no .pak file exists

**Solution:**

1. Check Output Log for "Cook" errors
2. Verify Project Settings → Packaging → [✓] Use Pak File is checked
3. Ensure at least one map is set in "List of maps to include"
4. Try File → Package Project → Refresh

### "Executable (.sh) not found"

**Error when uploading:** "No Linux executable found"

**Solution:**

1. Verify `YourProjectName.sh` exists in `LinuxNoEditor/` folder
2. Check filename matches your project name exactly (case-sensitive)
3. If missing, re-package and check Output Log for errors

### "Plugin X is not compatible with Linux"

**Error during packaging:** "Plugin [Name] does not support Linux platform"

**Solution:**

**Option 1: Disable plugin** (if not critical)
1. Edit → Plugins
2. Find plugin, uncheck "Enabled"
3. Restart UE
4. Re-package

**Option 2: Package for Windows instead**
- Windows supports more plugins
- See [Windows Packaging Guide](./windows-builds)

**Option 3: Find Linux-compatible alternative**
- Search for similar plugin with Linux support

### File size over tier limit

**Error:** Package is 30GB but Pro tier limit is 25GB

**Solutions:**

**1. Compress textures:**
- Content Browser → Textures → Sort by size
- Right-click large textures → Compression Settings → DXT1/5
- Reduce resolution: 4096 → 2048

**2. Remove unused content:**
- Edit → Project Settings → Packaging
- "Additional Asset Directories to Cook": Only include necessary content
- Content Browser → Right-click → Fix Up Redirectors
- Delete unused assets

**3. Enable aggressive Pak compression:**
- Project Settings → Packaging
- Compression Method: Oodle (UE5) or Zlib
- Compression Level: Maximum

**4. Exclude non-essential assets:**
- Remove high-res textures not needed for streaming
- Remove unused maps
- Remove editor-only content

**5. Upgrade tier if project legitimately needs space:**
- Pro tier: 25GB max
- Enterprise tier: 100GB+ (custom)

## Optimization Tips

### Reduce Package Size

**1. Texture compression:**
- Use DXT1 for textures without alpha
- Use DXT5 for textures with alpha
- Never use RGBA (uncompressed)
- Enable texture streaming

**2. Audio compression:**
- Use Ogg Vorbis (not WAV)
- Reduce sample rate for non-critical sounds (22kHz vs 48kHz)
- Use mono for sounds without directional importance

**3. Mesh optimization:**
- Use LODs aggressively
- Reduce polygon counts on background objects
- Remove unused meshes from Content Browser

**4. Pak compression:**
- Project Settings → Packaging → Compression Method: Oodle (best compression)
- Trade-off: Slightly slower deployment (1-2 min extra)

### Improve Packaging Speed

**1. Use SSD for output directory:**
- Packaging is I/O intensive
- SSD vs HDD: 2-3× faster

**2. Close unnecessary applications:**
- Free up RAM and CPU
- Packaging uses 100% CPU

**3. Exclude debug symbols:**
- Project Settings → Packaging → [ ] Include Debug Files
- Significantly faster and smaller

**4. Incremental packaging (for iteration):**
- Subsequent packages are faster (reuses previous cook data)
- Full clean: File → Package Project → Refresh before packaging

## Testing Checklist

Before uploading to Third Space:

- [ ] Package completes without errors ("BUILD SUCCESSFUL")
- [ ] `.sh` executable exists in `LinuxNoEditor/` folder
- [ ] `.pak` file exists in `YourProjectName/Content/Paks/`
- [ ] Folder structure is correct (see Step 3)
- [ ] .zip file is under tier limit (5GB/10GB/25GB/100GB)
- [ ] .zip format (not .rar, .7z, or .tar.gz)
- [ ] Compressed entire `LinuxNoEditor` folder, not contents

## Troubleshooting Packaging Issues

### Packaging takes forever (over 2 hours)

**Normal for very large projects, but if seems stuck:**

1. Check Output Log for progress (should show files being cooked)
2. Ensure SSD has enough space (temp files accumulate)
3. Close other applications (free up RAM)
4. If stuck at specific asset, may be corrupt - check Output Log for asset name

### Packaging uses too much disk space

**Temp files can use 2-3× final package size:**

1. Ensure 50+ GB free space before packaging
2. Delete old packaged builds (free up space)
3. Clear intermediate files: Project folder → Delete `Saved/` and `Intermediate/` folders
4. Restart packaging

### Different plugins for Linux vs Windows

**Some plugins only work on one platform:**

**Check plugin compatibility:**
1. Edit → Plugins
2. Find plugin → Details
3. Look for "Supported Platforms"
4. If "Linux" not listed, won't work

**Workaround:**
- Disable Linux-incompatible plugins
- Implement fallback (detect platform, disable feature if Linux)
- Or package for Windows (2× credit cost)

## Advanced: Automated Packaging

**For frequent deployments, automate packaging:**

### Using Unreal Automation Tool (UAT)

**Command-line packaging:**

```bash
"C:\Program Files\Epic Games\UE_5.3\Engine\Build\BatchFiles\RunUAT.bat" BuildCookRun ^
  -project="C:\Projects\MyProject\MyProject.uproject" ^
  -platform=Linux ^
  -clientconfig=Shipping ^
  -cook ^
  -stage ^
  -pak ^
  -archive ^
  -archivedirectory="C:\PackagedProjects\MyProject"
```

**Benefits:**
- Scriptable (integrate into CI/CD)
- Consistent packaging
- No need to open UE Editor

**Script example (Windows .bat file):**

```batch
@echo off
set UE_PATH=C:\Program Files\Epic Games\UE_5.3\Engine\Build\BatchFiles
set PROJECT_PATH=C:\Projects\MyProject\MyProject.uproject
set OUTPUT_PATH=C:\PackagedProjects\MyProject

echo Packaging for Linux...
"%UE_PATH%\RunUAT.bat" BuildCookRun -project="%PROJECT_PATH%" -platform=Linux -clientconfig=Shipping -cook -stage -pak -archive -archivedirectory="%OUTPUT_PATH%"

if %ERRORLEVEL% NEQ 0 (
  echo Packaging failed!
  pause
  exit /b 1
)

echo Packaging successful!
echo Compressing to .zip...

cd "%OUTPUT_PATH%"
powershell Compress-Archive -Path "LinuxNoEditor" -DestinationPath "MyProject_Linux.zip" -Force

echo Done! Package ready at: %OUTPUT_PATH%\MyProject_Linux.zip
pause
```

## Next Steps

After successful packaging:

1. [Upload to Third Space →](../../getting-started/first-deployment)
2. [Deploy and test →](../../getting-started/quick-start)
3. [Learn about credits →](../../core-concepts/credit-system)

**Need help?**
- [Troubleshoot upload issues →](../../troubleshooting/upload-issues)
- [Troubleshoot deployment issues →](../../troubleshooting/deployment-issues)
- [Contact support →](../../support-resources/getting-help)

---

**Related Guides:**
- [Windows Packaging Guide →](./windows-builds)
- [System Requirements →](../../getting-started/system-requirements)
- [Troubleshooting Upload Issues →](../../troubleshooting/upload-issues)
- [Troubleshooting Deployment Issues →](../../troubleshooting/deployment-issues)
