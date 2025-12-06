---
sidebar_position: 3
---

# Windows Packaging Guide

Complete guide to packaging your Unreal Engine project for Windows deployment on Third Space.

## Why Package for Windows?

**Simplicity:**
- No cross-compilation needed
- Simpler setup (one-click packaging)
- Test packaged build locally before uploading
- Better third-party plugin compatibility

**Best for:**
- ✅ Quick tests and prototypes
- ✅ Projects using Windows-only plugins
- ✅ First-time users (easier than Linux)
- ✅ Projects with specific Windows library dependencies

**Trade-offs:**
- ❌ **2× credit cost** (2 credits/min vs 1 for Linux)
- ❌ Larger package sizes (20-30% bigger)
- ❌ Slower instance startup (40-60 sec vs 20-30 sec)

**Cost comparison example:**
- 10 hours of usage:
  - Linux: 600 credits (~$15)
  - Windows: 1,200 credits (~$30)
- For production/long-term use, Linux is more cost-effective

## Prerequisites

### Required Software

**1. Unreal Engine 4.27+ or 5.0+**
- Epic Games Launcher version recommended
- Supported versions: 4.27, 5.0, 5.1, 5.2, 5.3, 5.4

**2. Visual Studio (for C++ projects only)**
- Not required for Blueprint-only projects
- If you have C++ code: Visual Studio 2019 or 2022
- Include "Game Development with C++" workload

**3. Disk Space**
- 10-60GB free space for packaging output
- Windows packages are larger than Linux
- Temp files created during packaging

### Verify Engine Installation

1. Open Epic Games Launcher
2. Library → Engine version
3. Options → Verify
4. Ensure Windows platform support installed

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
- Most projects: Use default settings work fine
- Advanced users: Adjust encoder settings, resolution caps
- Leave defaults unless you have specific needs

### Step 2: Configure Project Settings

**Required settings:**

1. **Edit → Project Settings**

2. **Packaging settings:**
   - Build Configuration: **Shipping** (not Development or Debug)
   - Build Target: **Game** (or your custom target, not Editor)
   - [✓] Create compressed cooked packages
   - [✓] Exclude editor content
   - [ ] Include Debug Files (uncheck for smaller size)
   - [ ] Include prerequisites installer (uncheck for cloud deployment)

3. **Project settings:**
   - [✓] Use Pak File (recommended for streaming)
   - Compression settings: Zlib or Oodle (default is fine)

4. **Maps & Modes:**
   - Default Maps → **Game Default Map**: Set your starting map
   - This is the map that loads when stream starts

**Recommended optimizations:**

1. **Project Settings → Rendering:**
   - Default Screen Percentage: 100
   - Anti-Aliasing Method: TAA (good balance)
   - Default Feature Level: SM5 or SM6

2. **Project Settings → Engine → Frame Rate:**
   - Smooth Frame Rate: [✓] Enabled
   - Target FPS: 60 (or unlocked)
   - Min/Max FPS: 30-60

3. **Windows-specific settings (optional):**
   - Project Settings → Platforms → Windows
   - Target RHI: DirectX 12 (better performance on cloud GPUs)
   - Or DirectX 11 (more compatible if issues)

### Step 3: Package the Project

**Packaging process:**

1. **File → Package Project → Windows → Windows (64-bit)**

2. **Select output directory:**
   - Choose easily accessible location (e.g., `C:\PackagedProjects\MyProject`)
   - Avoid spaces in path (can cause issues)
   - Ensure enough disk space (10-60GB)

3. **Wait for packaging to complete:**
   - Small projects: 5-15 minutes
   - Medium projects: 15-45 minutes
   - Large projects: 45-90 minutes
   - Windows packages take longer than Linux

4. **Monitor progress:**
   - Output Log shows cooking and compilation steps
   - Look for "BUILD SUCCESSFUL" at end
   - If errors occur, note message and see [Common Errors](#common-errors)

**Expected output:**

After successful packaging, you'll have:

```
OutputDirectory/
└── WindowsNoEditor/
    ├── YourProjectName.exe          ← Executable (main application)
    ├── YourProjectName/             ← Project content
    │   ├── Binaries/
    │   │   └── Win64/
    │   │       └── YourProjectName.exe
    │   ├── Content/
    │   │   └── Paks/
    │   │       └── YourProjectName-Windows.pak
    │   └── Saved/
    └── Engine/
        ├── Binaries/
        ├── Content/
        └── Shaders/
```

**Critical files:**
- `YourProjectName.exe` - Must exist in root folder
- `YourProjectName-Windows.pak` - Contains all game content
- DLL files (various) - Engine and plugin dependencies

### Step 4: Test Package Locally (Highly Recommended)

**Unlike Linux, you CAN test Windows builds locally before uploading.**

**Local testing steps:**

1. Navigate to `OutputDirectory/WindowsNoEditor/`
2. Double-click `YourProjectName.exe`
3. Project should launch

**Expected behavior:**
- Application starts
- May show Pixel Streaming connection errors (expected - no signaling server locally)
- Your level should load
- Camera/controls should work

**If it crashes or doesn't launch:**
- DO NOT upload to Third Space yet
- Fix issues locally first (see [Common Errors](#common-errors))
- Re-package after fixes

**What to test:**
- [ ] Application launches without crash
- [ ] Main menu loads (if applicable)
- [ ] Level loads correctly
- [ ] Basic interactions work
- [ ] No critical error messages

**Note:** Pixel Streaming won't fully work locally (connection errors are normal), but the project itself should run.

### Step 5: Compress to .zip

**Windows built-in zip:**

1. Navigate to output directory
2. Right-click on `WindowsNoEditor` folder (the folder itself, not contents)
3. Send to → Compressed (zipped) folder
4. Rename to `YourProjectName.zip` (optional)

**CRITICAL:** Compress the `WindowsNoEditor` folder, not individual files inside.

❌ **Wrong:**
```
YourProjectName.zip
├── YourProjectName.exe
├── YourProjectName/
└── Engine/
```

✅ **Correct:**
```
YourProjectName.zip
└── WindowsNoEditor/
    ├── YourProjectName.exe
    ├── YourProjectName/
    └── Engine/
```

**Using 7-Zip (recommended for files over 5GB):**

1. Download and install [7-Zip](https://www.7-zip.org/) (free)
2. Right-click `WindowsNoEditor` folder
3. 7-Zip → Add to archive
4. Archive format: **zip** (NOT 7z!)
5. Compression level:
   - Normal: Faster (10-15% compression)
   - Maximum: Slower but smaller (20-30% compression)
6. Click OK

**Expected .zip size:**
- Small project: 1-3GB
- Medium: 3-12GB
- Large: 12-30GB
- Windows packages typically 20-30% larger than Linux

**Verify .zip integrity:**

1. Right-click .zip → Extract to test folder
2. Verify folder structure is correct (WindowsNoEditor at root)
3. Double-click extracted .exe to test (should launch)
4. Delete test folder if successful

### Step 6: Upload to Third Space

1. Go to [Third Space Dashboard](https://app.thirdspaceinteractive.ca)
2. Click "Create New Project"
3. Follow 4-step wizard:
   - **Step 1:** Upload your .zip file
   - **Step 2:** Platform auto-detected as "Windows"
   - **Step 3:** Configure settings (resolution, region, etc.)
   - **Step 4:** Deploy

4. Wait 5-12 minutes for deployment (Windows is slower)
5. Test stream by clicking "Launch Stream"

[Detailed upload guide →](../../getting-started/first-deployment)

## Common Errors

### "Could not compile shaders for platform"

**Error during packaging:** Shader compilation failed

**Solution:**

1. Close Unreal Engine
2. Delete project folders:
   - `YourProject/Saved/`
   - `YourProject/Intermediate/`
3. Restart UE and reopen project
4. Let shaders recompile (may take 5-30 minutes)
5. Try packaging again

### "Missing Visual Studio installation"

**Error:** "Cannot build project - Visual Studio not found"

**For Blueprint-only projects:**
- You don't need Visual Studio
- This error shouldn't occur
- If it does, ensure no accidental C++ classes in project

**For C++ projects:**
1. Install Visual Studio 2019 or 2022
2. Include "Game Development with C++" workload
3. Restart Unreal Engine
4. Try packaging again

### "Packaging failed with exit code 1"

**Generic error - check Output Log for specific reason:**

**Common causes:**

1. **Corrupt asset:**
   - Content Browser → Right-click Content folder → Fix Up Redirectors
   - Content Browser → Validate Assets
   - Fix or delete corrupt assets

2. **Plugin incompatibility:**
   - Disable plugins one by one to identify culprit
   - Check plugin documentation for Windows support

3. **Missing dependencies:**
   - Third-party plugin needs additional DLLs
   - Check plugin documentation for setup requirements

4. **Insufficient disk space:**
   - Free up 30+ GB on drive with UE project
   - Temp files accumulate during packaging

### ".exe crashes immediately when launched"

**Application launches then crashes right away:**

**Diagnosis:**

1. Run from command line to see error messages:
   - Open Command Prompt
   - Navigate to `WindowsNoEditor/` folder
   - Run: `YourProjectName.exe`
   - Note error messages

2. Check Windows Event Viewer:
   - Windows → Event Viewer → Application
   - Look for crash error from your app

**Common causes:**

1. **Missing Visual C++ Redistributables:**
   - Download and install:
     - [VC++ 2015-2022 x64](https://aka.ms/vs/17/release/vc_redist.x64.exe)
   - Restart and try again

2. **DirectX issue:**
   - Update DirectX:
     - [DirectX End-User Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=35)
   - Restart computer
   - Try again

3. **Blueprint/code error:**
   - Crash on BeginPlay
   - Null reference in blueprints
   - Solution: Review Output Log, fix blueprint errors

4. **Incompatible GPU (local testing only):**
   - Your local GPU may not support features
   - Not a problem for cloud deployment (different GPU)
   - Skip local test and upload to Third Space

### File size exceeds tier limit

**Error:** Package is 30GB but Pro tier limit is 25GB

**Solutions:**

**1. Enable aggressive compression:**
- Project Settings → Packaging
- Compression Method: Oodle (UE5) or Zlib (UE4)
- Compression Level: Maximum
- Re-package

**Expected savings:** 15-30% size reduction

**2. Compress textures:**
- Content Browser → Textures → Sort by size
- Right-click large textures → Compression Settings → DXT1/DXT5
- Reduce resolution:
  - 4096 → 2048 (background objects)
  - 2048 → 1024 (far-away objects)

**Expected savings:** 20-40% size reduction

**3. Remove unused content:**
- Content Browser → Right-click Content → Fix Up Redirectors
- Delete unused assets (check no references first)
- Remove unused maps from project

**4. Optimize audio:**
- Use Ogg Vorbis instead of WAV
- Reduce sample rate for ambient sounds (22kHz vs 48kHz)

**5. Package for Linux instead:**
- Linux builds 20-30% smaller
- 50% cheaper to run
- See [Linux Packaging Guide](./linux-builds)

**6. Upgrade tier:**
- Pro tier: 25GB max
- Enterprise tier: 100GB+ (custom)

### "WindowsNoEditor folder is empty"

**Packaging appears to complete but output folder empty:**

**Solution:**

1. Check Output Log for "Permission denied" errors
   - You may not have write access to output directory
   - Choose different output location (e.g., Desktop)

2. Check antivirus:
   - Antivirus may be deleting .exe files (false positive)
   - Add output directory to antivirus exclusions
   - Re-package

3. Check disk space:
   - Need 2-3× final package size for temp files
   - Free up space and re-package

## Optimization Tips

### Reduce Package Size

**1. Texture optimization:**
- Use DXT compression (not RGBA)
- Enable texture streaming (loads textures as needed)
- Reduce resolution for textures viewed from distance

**2. Pak compression:**
- Project Settings → Packaging
- Enable "Create compressed cooked packages"
- Compression Method: Oodle (best compression for UE5)

**3. Exclude unnecessary content:**
- Project Settings → Packaging → "Cook everything in the project": Uncheck
- Manually specify asset directories to include
- Only pack what's needed

**4. Remove debug symbols:**
- Project Settings → Packaging
- [ ] Include Debug Files (uncheck)
- Significantly smaller package

**Expected total savings:** 30-50% size reduction

### Improve Performance

**1. Use DirectX 12 (UE 5.x):**
- Better GPU utilization on cloud instances
- Project Settings → Platforms → Windows → Target RHI: DirectX 12
- Test locally to ensure compatibility

**2. Optimize for Shipping build:**
- Shipping configuration removes debug overhead
- Ensures maximum performance

**3. Set frame rate targets:**
- Project Settings → Frame Rate
- Max FPS: 60 (prevents unnecessary rendering)
- Smooth framerate: Enabled (consistent frame times)

### Speed Up Packaging

**1. Incremental packaging:**
- Subsequent packages reuse previous cook data
- Much faster (5-10 minutes vs 30+ minutes)
- Full rebuild: File → Package Project → Refresh (forces full recook)

**2. Package only changed content (advanced):**
- Project Settings → Packaging
- "Cook only maps" → List only maps you need
- Faster iteration during development

**3. Use SSD for output:**
- Packaging is I/O intensive
- SSD is 2-3× faster than HDD

**4. Close other applications:**
- Packaging uses 100% CPU
- Free up RAM and cores

## Testing Checklist

Before uploading to Third Space:

- [ ] Package completes without errors ("BUILD SUCCESSFUL")
- [ ] `.exe` exists in `WindowsNoEditor/` folder (root level)
- [ ] `.pak` file exists in `YourProjectName/Content/Paks/`
- [ ] Local test: .exe launches without crashing
- [ ] Folder structure is correct (see Step 3)
- [ ] .zip file is under tier limit (5GB/10GB/25GB/100GB)
- [ ] .zip format (not .rar, .7z, etc.)
- [ ] Compressed entire `WindowsNoEditor` folder, not contents

## Advanced: Automated Packaging

**For frequent deployments:**

### Using Unreal Automation Tool (UAT)

**Command-line packaging (run from Command Prompt):**

```batch
"C:\Program Files\Epic Games\UE_5.3\Engine\Build\BatchFiles\RunUAT.bat" BuildCookRun ^
  -project="C:\Projects\MyProject\MyProject.uproject" ^
  -platform=Win64 ^
  -clientconfig=Shipping ^
  -cook ^
  -stage ^
  -pak ^
  -archive ^
  -archivedirectory="C:\PackagedProjects\MyProject"
```

**Create automation script (.bat file):**

```batch
@echo off
set UE_PATH=C:\Program Files\Epic Games\UE_5.3\Engine\Build\BatchFiles
set PROJECT_PATH=C:\Projects\MyProject\MyProject.uproject
set OUTPUT_PATH=C:\PackagedProjects\MyProject

echo ========================================
echo Packaging Windows build...
echo ========================================

"%UE_PATH%\RunUAT.bat" BuildCookRun ^
  -project="%PROJECT_PATH%" ^
  -platform=Win64 ^
  -clientconfig=Shipping ^
  -cook ^
  -stage ^
  -pak ^
  -archive ^
  -archivedirectory="%OUTPUT_PATH%"

if %ERRORLEVEL% NEQ 0 (
  echo.
  echo ========================================
  echo ERROR: Packaging failed!
  echo ========================================
  pause
  exit /b 1
)

echo.
echo ========================================
echo Packaging successful!
echo ========================================
echo.
echo Compressing to .zip...

cd "%OUTPUT_PATH%"
powershell Compress-Archive -Path "WindowsNoEditor" -DestinationPath "MyProject_Windows.zip" -Force

echo.
echo ========================================
echo Done!
echo Package: %OUTPUT_PATH%\MyProject_Windows.zip
echo ========================================
pause
```

**Benefits:**
- One-click packaging
- Scriptable (integrate into CI/CD)
- Consistent results
- No need to open UE Editor

## Troubleshooting Local Testing

### "Application has stopped working"

**Windows error dialog on launch:**

**Check for missing DLLs:**
1. Download [Dependency Walker](http://www.dependencywalker.com/)
2. Open your .exe in Dependency Walker
3. Look for red-highlighted missing DLLs
4. Install missing dependencies (usually Visual C++ Redistributables)

### Black screen when running locally

**Application launches but shows black screen:**

**This is often expected for Pixel Streaming projects:**
- Pixel Streaming expects signaling server
- No server running locally = connection failure
- Black screen while waiting for connection

**Not a problem:**
- Will work fine when deployed to Third Space (has signaling server)

**To verify project is actually working:**
1. Check Task Manager → YourProjectName.exe running
2. Should use CPU/GPU (5-30% usage)
3. If using resources, project is loaded (just can't display due to missing signaling)

### Performance poor when testing locally

**Low FPS during local test:**

**This is about YOUR local GPU:**
- Cloud deployment uses different (often better) GPU
- Poor local performance doesn't mean poor cloud performance

**Still optimize if possible:**
- See [Performance Optimization Guide](../../troubleshooting/performance-issues)
- Target 60 FPS on mid-range GPU

## Next Steps

After successful packaging:

1. [Upload to Third Space →](../../getting-started/first-deployment)
2. [Configure project settings →](../../getting-started/first-deployment#step-2-configure-settings)
3. [Deploy and test →](../../getting-started/quick-start)

**Consider Linux packaging for production:**
- [Linux Packaging Guide →](./linux-builds)
- 50% cost savings
- Worth the extra setup for long-term deployments

**Need help?**
- [Troubleshoot upload issues →](../../troubleshooting/upload-issues)
- [Troubleshoot deployment issues →](../../troubleshooting/deployment-issues)
- [Contact support →](../../support-resources/getting-help)

---

**Related Guides:**
- [Linux Packaging Guide →](./linux-builds) (recommended for cost savings)
- [Folder Structure Reference →](./folder-structure)
- [Common Packaging Errors →](./common-errors)
- [System Requirements →](../../getting-started/system-requirements)
