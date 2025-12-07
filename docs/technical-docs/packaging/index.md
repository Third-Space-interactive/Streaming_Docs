---
sidebar_position: 1
---

# Packaging Your Project

Learn how to properly package your Unreal Engine project for Third Space deployment.

## Overview

Third Space accepts packaged Unreal Engine projects in .zip format for both Linux and Windows platforms. Proper packaging is essential for successful deployment.

## Quick Start

1. **Enable Pixel Streaming plugin** in your UE project
2. **Package for target platform** (Linux recommended)
3. **Compress the package** into .zip file
4. **Upload to Third Space** dashboard

## Platform Choice

### Linux (Recommended)

**Pros:**
- 50% lower cost (1 credit/min vs 2)
- Better GPU driver optimization
- Smaller package sizes
- Faster deployment

**Cons:**
- Requires cross-compilation toolchain
- Slightly more complex initial setup

**Best for:** Cost-conscious deployments, production use

[Linux Packaging Guide →](./linux-builds)

### Windows

**Pros:**
- Simpler packaging process
- No cross-compilation needed
- Better third-party plugin compatibility

**Cons:**
- 2x credit cost
- Larger package sizes
- Slower instance startup

**Best for:** Quick tests, Windows-only plugin dependencies

[Windows Packaging Guide →](./windows-builds)

## Packaging Checklist

Before uploading, verify:

- ✅ Pixel Streaming plugin enabled
- ✅ Project packages without errors
- ✅ Correct folder structure maintained
- ✅ All dependencies included
- ✅ File size within tier limits
- ✅ .zip compression used (not .rar or .7z)
- ✅ Entire parent folder compressed

## Common Issues

### Packaging Fails

- Missing platform SDK
- Plugin incompatibility
- Insufficient disk space
- Unreal Engine version mismatch

See the platform-specific guides for detailed error troubleshooting.

### Upload Rejected

- Incorrect folder structure
- Corrupt .zip file
- Exceeds file size limit
- Missing required files

[Troubleshoot uploads →](../../troubleshooting/upload-issues)

## Next Steps

Choose your platform:
- [Package for Linux →](./linux-builds)
- [Package for Windows →](./windows-builds)
