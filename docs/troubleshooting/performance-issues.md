---
sidebar_position: 4
---

# Performance Issues

Troubleshooting guide for poor FPS, stuttering, lag, and quality issues during streaming.

## Quick Diagnosis

### Low FPS / Stuttering

**Symptoms:**
- Choppy video (under 30 FPS)
- Lag when moving camera
- Inconsistent framerate

**Check:**
1. Is this poor **source** FPS (UE project issue) or poor **stream** FPS (network issue)?

**How to tell:**
- If video is smooth but choppy (compression artifacts), it's **network issue**
- If video is crisp but slow/stuttering, it's **source FPS issue**

**Common causes:**

| Symptom | Cause | Quick Fix |
|---------|-------|-----------|
| Smooth video but choppy motion | Low source FPS (UE project too heavy) | Optimize UE project |
| Blocky/pixelated during motion | Network bandwidth issue | Check internet speed |
| Stutters every few seconds | CPU/GPU bottleneck | Reduce scene complexity |
| Lag only when looking at certain areas | Specific assets too heavy | Optimize those assets |

### Poor Video Quality

**Symptoms:**
- Blurry image
- Compression artifacts (blocky, pixelated)
- Colors look washed out

**Common causes:**
- Low network bandwidth
- Browser video decoder settings
- UE project rendering at low resolution
- Excessive post-processing

### Input Lag

**Symptoms:**
- Mouse/keyboard input delayed
- Click happens 100-500ms late
- Feels unresponsive

**Common causes:**
- Network latency (ping)
- Encoder latency
- VSync enabled in UE project
- Browser rendering lag

## Detailed Troubleshooting

### Optimizing Source FPS (UE Project)

**Goal:** Get your UE project running at 60 FPS minimum (30 acceptable for demos)

**Diagnosis:**

Test locally first:
1. Run your packaged build on local machine
2. Open console (~ key) and type `stat fps`
3. Note FPS value

**If FPS is under 60 on local machine with good GPU:**
Your project is too heavy, must optimize before cloud deployment.

#### Level of Detail (LOD) Optimization

**Biggest performance impact:**

1. **Select all static meshes in scene**
2. **Check LOD settings:**
   - Details panel → LOD Settings
   - Ensure LOD1, LOD2, LOD3 exist
   - If missing, generate auto LODs

3. **Set LOD distances:**
   - LOD0 (highest quality): 0 - 1,000 units
   - LOD1: 1,000 - 3,000 units
   - LOD2: 3,000 - 6,000 units
   - LOD3: 6,000+ units

4. **For background objects:**
   - Use aggressive LODs (reduce by 75% at LOD1)
   - Or replace with billboard sprites if far away

**Expected improvement:** 20-40% FPS gain

#### Texture Optimization

**Second biggest impact:**

1. **Identify large textures:**
   - Content Browser → Filter: Textures
   - Sort by size

2. **Compress oversized textures:**
   - Right-click → Compression Settings → DXT1 (no alpha) or DXT5 (with alpha)
   - Reduce resolution:
     - 4096 → 2048 (walls, floors you don't see up close)
     - 2048 → 1024 (background objects)
   - Keep 2048-4096 only for hero assets seen up close

3. **Enable texture streaming:**
   - Project Settings → Rendering → Textures
   - Enable "Texture Streaming"
   - Set pool size to 2000-3000 MB

**Expected improvement:** 10-20% FPS gain, significant memory savings

#### Lighting Optimization

**Big performance win if using real-time:**

1. **Bake lighting when possible:**
   - Build → Build Lighting
   - Static lights don't cost runtime performance
   - Use for scenes with fixed lighting

2. **If using Lumen (UE5):**
   - Reduce Lumen quality:
     - Post Process Volume → Lumen Global Illumination → Quality: 0.5-0.75
   - Disable Lumen reflections if not needed
   - Consider baked lighting for static scenes

3. **Reduce shadow quality:**
   - Directional light → Dynamic Shadow Distance: 5000 (default 20000)
   - Reduce cascade count: 2-3 (default 4)
   - Use lightmaps for static shadows

**Expected improvement:** 15-30% FPS gain (depends on lighting setup)

#### Material Optimization

**Reduce shader complexity:**

1. **Simplify complex materials:**
   - Reduce texture samples (use atlases)
   - Avoid expensive nodes (noise, complex math)
   - Use material instances (not unique materials)

2. **Disable expensive material features:**
   - Subsurface scattering (unless critical)
   - Parallax occlusion mapping
   - Pixel depth offset

3. **Check shader complexity:**
   - Viewport → Optimization Viewmodes → Shader Complexity
   - Green = good, Yellow = moderate, Red = expensive

**Expected improvement:** 5-15% FPS gain

#### Post-Processing Optimization

**Disable expensive effects:**

1. **Post Process Volume settings:**
   - Disable or reduce:
     - Screen Space Reflections (expensive)
     - Ambient Occlusion (if baked lighting)
     - Bloom Quality → Low
     - Motion Blur → Disabled (saves GPU and looks better for streaming)

2. **Depth of Field:**
   - Disable if not needed
   - Or use very subtle amount

**Expected improvement:** 10-20% FPS gain

#### Blueprint Optimization

**Avoid performance killers:**

1. **Never use Tick for expensive operations:**
   - Bad: Tick → Line Trace every frame
   - Good: Timer (every 0.1s) → Line Trace

2. **Cache references:**
   - Bad: "Get All Actors of Class" every frame
   - Good: Store reference at BeginPlay, use stored reference

3. **Reduce particle counts:**
   - Cut in half, test if still looks good
   - Use GPU particles (more efficient than CPU)

4. **Disable expensive features during streaming:**
   - Check if Pixel Streaming is active
   - Disable cloth simulation, complex physics, etc. if streaming

**Expected improvement:** 5-20% FPS gain (depends on blueprint usage)

#### Quick Wins Checklist

- [ ] Enable aggressive LODs on all static meshes
- [ ] Compress all textures over 1024x1024
- [ ] Disable Screen Space Reflections
- [ ] Disable Motion Blur
- [ ] Reduce shadow distance to 5000
- [ ] Enable texture streaming
- [ ] Use material instances instead of unique materials
- [ ] Remove unnecessary lights (target under 10 dynamic lights)

**Target FPS after optimization:**
- Minimum: 30 FPS (acceptable for presentations)
- Good: 60 FPS (smooth interaction)
- Excellent: 90+ FPS (ultra-smooth, headroom for spikes)

### Improving Stream Quality

**Issue:** Stream looks blurry or blocky despite good FPS

**Diagnosis:**

1. **Check user's internet speed:**
   - Run speed test at [fast.com](https://fast.com)
   - Need minimum:
     - 720p: 5 Mbps
     - 1080p: 10 Mbps
     - 1440p (Pro): 15 Mbps
     - 4K (Pro): 25 Mbps

2. **Check stream resolution setting:**
   - Dashboard → Project Settings → Resolution
   - Ensure matches what you expect (1080p default)
   - Pro tier: Can use 1440p or 4K

**Solutions:**

**If user has slow internet:**
1. Close bandwidth-heavy apps (YouTube, downloads, etc.)
2. Use wired connection instead of WiFi
3. Ask others on network to pause streaming
4. Move closer to WiFi router

**If user has good internet but quality still poor:**
1. Try different browser (Chrome recommended)
2. Disable browser extensions (ad blockers can interfere)
3. Update graphics drivers
4. Try incognito mode (eliminates extension interference)

**If quality is poor for all users:**
1. Check your UE project is rendering at full resolution
   - Project Settings → Engine → Rendering → Default Screen Percentage: 100
2. Disable aggressive anti-aliasing (TAA is fine, MSAA is expensive)
3. Ensure your packaged build is "Shipping" not "Development"

### Reducing Input Lag

**Goal:** Under 100ms from input to visual response

**Measure latency:**

Test subjectively:
- Click mouse and watch for response
- Should feel immediate (under 100ms)
- Under 150ms is acceptable
- Over 200ms feels sluggish

**Optimization steps:**

**1. Reduce network latency:**
- Check ping: `ping thirdspaceinteractive.ca`
- Should be under 100ms
- If over 150ms:
  - Check internet connection
  - Try wired connection
  - Close bandwidth-heavy apps
  - Upgrade internet plan if consistently slow

**2. Disable VSync in UE project:**
- Project Settings → Engine → Rendering
- VSync: Disabled
- Frame Rate: Unlocked (or 60 FPS max)
- VSync adds 16-33ms latency (one frame delay)

**3. Reduce encoder latency (Enterprise tier):**
- Contact support to adjust encoder settings
- Trade-off: Lower latency = slightly lower quality

**4. Optimize UE project for responsiveness:**
- Ensure 60+ FPS (low FPS = high latency feel)
- Disable motion blur (makes lag more noticeable)
- Reduce physics simulation complexity
- Use immediate-response blueprints (not timers)

**Expected latency breakdown:**
- Network latency: 30-80ms (depends on location)
- Encoding latency: 10-30ms
- Decoding latency: 10-20ms
- Input processing: 5-15ms
- **Total:** 50-150ms typical

**Under 100ms:** Excellent, feels instant
**100-150ms:** Good, most users won't notice
**150-200ms:** Acceptable for non-gaming interactions
**Over 200ms:** Noticeable lag, needs optimization

### Troubleshooting Specific Scenarios

#### Issue: Performance varies by device

**Symptoms:**
- Works great on desktop, poor on mobile
- Works on some phones, not others

**Diagnosis:**

It's the **viewer's device** hardware, not your project:
- Older phones/tablets have weak video decoders
- Stream quality adapts to device capability

**Solutions:**

**For mobile users:**
1. Close other apps (free up memory)
2. Ensure good WiFi signal (not cellular)
3. Use newer device if possible (2020+ recommended)
4. Update OS to latest version

**For you (project optimization):**
1. Simplify UI for mobile (larger buttons, less clutter)
2. Support touch controls in UE project
3. Test on mid-range devices, not just high-end

#### Issue: Performance degrades over time

**Symptoms:**
- Starts smooth
- FPS drops after 5-10 minutes
- Gets worse the longer session runs

**Diagnosis:**

**Memory leak** in your UE project:
- Spawning actors without destroying
- Loading assets without unloading
- Accumulating data in arrays

**Solutions:**

1. **Identify leak:**
   - Run locally for 10+ minutes
   - Open console: `stat memory`
   - Watch memory usage over time
   - If constantly growing = leak

2. **Common leak sources:**
   - Spawning actors in Tick without destroying
   - Adding to arrays without removing
   - Loading textures/sounds without unloading
   - Particle systems that never die

3. **Fix patterns:**
   - Use object pooling (reuse actors instead of spawn/destroy)
   - Clear arrays periodically
   - Destroy actors when done: `Destroy Actor` node
   - Set particle system to "auto destroy" when complete

#### Issue: Performance only poor in certain areas

**Symptoms:**
- Smooth in most of scene
- FPS drops to 20-30 in specific room/area
- Consistent problem area

**Diagnosis:**

**Hotspot** in your level:
- Too many lights in one area
- Overly complex meshes
- Expensive materials
- Too many particles

**Solutions:**

1. **Identify what's expensive:**
   - In UE: Viewport → Stat Unit
   - Look at "Frame", "GPU", "Draw" times
   - Navigate to problem area, note which stat spikes

2. **If "Draw" spikes:**
   - Too many draw calls (objects)
   - Solution: Merge static meshes, use instancing

3. **If "GPU" spikes:**
   - Shading complexity or lighting issue
   - Solution: Simplify materials, reduce lights, check post-processing

4. **If "Frame" spikes:**
   - CPU bottleneck (blueprints, physics)
   - Solution: Optimize blueprints, reduce physics objects

#### Issue: Stream stutters but FPS is high

**Symptoms:**
- FPS counter shows 60+
- Video still stutters every 1-2 seconds

**Diagnosis:**

**Frametime variance** (frame pacing issue):
- FPS average is high but inconsistent
- Some frames take 16ms, others 50ms

**Solutions:**

1. **Check frametime consistency:**
   - Console: `stat unit`
   - Look for spikes in "Frame" time
   - Should be consistent (16.6ms for 60 FPS)

2. **Smooth out frametime:**
   - Enable frame smoothing: `t.MaxFPS 60`
   - Disable async tasks that cause hitches
   - Reduce garbage collection frequency

3. **Network-related stutters:**
   - Check user's internet for packet loss
   - Run: `ping -t thirdspaceinteractive.ca`
   - If packet loss over 1%, network issue

## Performance Benchmarks

### Target Performance by Tier

| Tier | Resolution | Min FPS | Recommended FPS |
|------|------------|---------|-----------------|
| Free | 1080p | 30 | 60 |
| Plus | 1080p | 30 | 60 |
| Pro | 1080p-2160p | 30 | 60 |
| Enterprise | Custom | 30+ | 60+ |

### Scene Complexity Guidelines

**For 60 FPS at 1080p:**
- Draw calls: Under 5,000
- Triangles: Under 5 million on screen
- Dynamic lights: Under 10
- Shadow-casting lights: Under 5
- Particle systems: Under 50 active emitters

**For 30 FPS at 1080p (acceptable):**
- Draw calls: Under 10,000
- Triangles: Under 10 million on screen
- Dynamic lights: Under 20
- Particle systems: Under 100 active emitters

## Testing Checklist

Before deploying to Third Space:

### Local Performance Test

- [ ] Package project for target platform (Linux/Windows)
- [ ] Run packaged build (not in Editor)
- [ ] Enable `stat fps` and `stat unit` in console
- [ ] Navigate entire level, note minimum FPS
- [ ] Ensure minimum FPS over 30 (target 60)
- [ ] Check for memory leaks (10+ minute test)
- [ ] Verify no hitches or stutters

### Network Simulation Test

- [ ] Test on slow connection (throttle to 5 Mbps)
- [ ] Test on mobile hotspot
- [ ] Test on WiFi and wired
- [ ] Check video quality at different speeds

### Device Compatibility Test

- [ ] Test on desktop (Windows, Mac)
- [ ] Test on mobile (iOS, Android)
- [ ] Test on tablet
- [ ] Verify touch controls work (if mobile-targeted)

## Quick Reference: FPS Optimization Priority

**Highest impact (do these first):**
1. Enable LODs on all meshes
2. Bake lighting (if static scene)
3. Reduce shadow distance and quality
4. Compress large textures

**Medium impact:**
5. Disable Screen Space Reflections
6. Disable Motion Blur
7. Simplify expensive materials
8. Reduce particle counts

**Lower impact (if still not 60 FPS):**
9. Reduce bloom quality
10. Disable AO if using baked lighting
11. Optimize blueprints (remove Tick usage)
12. Reduce physics simulation complexity

## Still Having Performance Issues?

If you've optimized but still under 30 FPS:

**Contact support with:**
- Project details (UE version, scene type, target)
- Current FPS (minimum, average)
- What you've tried
- Screenshots of problematic areas

**Enterprise tier:**
- Custom GPU instances available (higher performance)
- Dedicated optimization consultation

---

**Related Guides:**
- [Deployment Issues →](./deployment-issues)
- [Connection Problems →](./connection-problems)
- [Packaging Guide →](../technical-docs/packaging)
