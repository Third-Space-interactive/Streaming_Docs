---
sidebar_position: 2
---

# System Requirements

Ensure your Unreal Engine project meets these requirements before uploading to Third Space.

## Unreal Engine Compatibility

### Supported Versions

- **Unreal Engine 5.0+** (Recommended)
- **Unreal Engine 4.27** (Supported)
- **Unreal Engine 4.26** (Limited support)

:::warning
Earlier versions (UE 4.25 and below) may have Pixel Streaming plugin limitations. Please test thoroughly.
:::

## Pixel Streaming Plugin

Your project must have the Pixel Streaming plugin enabled:

1. Open your project in Unreal Engine
2. Go to **Edit** → **Plugins**
3. Search for "Pixel Streaming"
4. Enable the plugin
5. Restart the editor
6. Package your project

## Packaging Requirements

### Linux Builds (Recommended)

**Why Linux?**
- **50% lower cost** - 1 credit per minute vs 2 for Windows
- **Better performance** - Optimized GPU drivers
- **Faster deployment** - Smaller package sizes

**Cross-Compilation from Windows:**

1. Install Linux cross-compilation toolchain
2. Download the Linux target platform from Epic Games Launcher
3. Package for Linux platform in Unreal Engine
4. See our [Linux Packaging Guide](../technical-docs/packaging/linux-builds) for detailed steps

### Windows Builds

**When to use Windows:**
- Blueprint-only projects (easier packaging)
- Third-party plugins with Windows-only dependencies
- Projects requiring specific Windows DLLs

**Requirements:**
- Package for Windows 64-bit
- Include all necessary DLL dependencies
- Test locally before uploading

## File Size Limits

| Tier | Storage Limit |
|------|---------------|
| **Free** | 5GB total |
| **Plus** | 10GB total |
| **Pro** | 25GB total |
| **Enterprise** | 100GB+ total |

:::tip Reducing Package Size
- Remove unused content and plugins
- Compress textures and audio
- Exclude debug symbols
- Use Pak file compression
- Enable content cooking optimization
:::

## Folder Structure Requirements

Your packaged project must maintain this structure:

### Linux Package Structure
```
YourProject/
├── LinuxNoEditor/
│   ├── YourProject.sh (executable)
│   ├── Engine/
│   ├── YourProject/
│   └── Manifest_NonUFSFiles.txt
```

### Windows Package Structure
```
YourProject/
├── WindowsNoEditor/
│   ├── YourProject.exe (executable)
│   ├── Engine/
│   ├── YourProject/
│   └── Manifest_NonUFSFiles.txt
```

Compress the **entire parent folder** (YourProject) into a `.zip` file.

## Network & Streaming Requirements

### Client-Side Requirements

**Browsers:**
- Chrome 90+ (Recommended)
- Edge 90+
- Firefox 88+
- Safari 14+ (Limited WebRTC support)

**Bandwidth:**
- Minimum: 10 Mbps download
- Recommended: 25+ Mbps for HD streaming
- 4K streaming: 50+ Mbps

**Devices:**
- Desktop: Windows, macOS, Linux
- Mobile: iOS 14+, Android 10+
- Touch input automatically detected

### Server-Side (Handled by Third Space)

We automatically provision:
- AWS G6 GPU instances (NVIDIA L4 Tensor Core GPUs)
- WebRTC signaling servers
- TURN/STUN servers for NAT traversal
- Load balancing for concurrent users
- Auto-scaling based on demand

## Project Limitations by Tier

### Free Tier
- **Concurrent users**: 1
- **Session timeout**: 2 minutes idle
- **Credits**: 60/month
- **Projects**: 1
- **Storage**: 5GB
- **Support**: Community Discord

### Plus Tier
- **Concurrent users**: 2
- **Session timeout**: 2 minutes idle
- **Credits**: 100/month
- **Projects**: 2
- **Storage**: 10GB
- **Support**: Email (48hr response)

### Pro Tier
- **Concurrent users**: 4
- **Session timeout**: 5 minutes idle
- **Credits**: 300/month
- **Projects**: 3
- **Storage**: 25GB
- **Support**: Email (24hr response)
- **Advanced features**: Custom resolutions, watermark control

### Enterprise Tier
- **Concurrent users**: Unlimited
- **Session timeout**: Custom (up to 30 min)
- **Credits**: Custom packages (1,000+)
- **Projects**: Unlimited
- **Storage**: 100GB+
- **Support**: Priority support + dedicated Slack channel

## Plugin Compatibility

### Tested & Supported Plugins

- Epic Marketplace plugins (most)
- Cesium for Unreal
- Water Plugin
- Niagara VFX
- MetaHumans

### Known Incompatibilities

- Plugins requiring local file system access
- Native OS dialog plugins
- Hardware-specific plugins (VR controllers, haptics)

:::info
If you're using a custom plugin, test locally with Pixel Streaming before uploading.
:::

## Performance Optimization

For best streaming quality:

- Target 1920x1080 resolution
- Lock framerate to 30 or 60 FPS
- Optimize draw calls and material complexity
- Use LOD systems for large scenes
- Enable Nanite and Lumen with care (GPU intensive)

## Next Steps

- [Package your project](../technical-docs/packaging/linux-builds)
- [Complete your first deployment](./first-deployment)
- [Learn about credit consumption](../core-concepts/credit-system)
