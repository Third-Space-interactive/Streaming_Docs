---
sidebar_position: 1
---

# Iframe Embedding Guide

Learn how to embed your Third Space pixel stream into websites, landing pages, and web applications.

## Overview

Third Space streams can be embedded in any website using a standard HTML `<iframe>` element. This allows you to:

- Embed interactive 3D experiences in product pages
- Create immersive landing pages
- Integrate UE content into existing web apps
- Display demonstrations on marketing websites
- Embed in LMS platforms for education

## Basic Embedding

### Simple Iframe

**Minimal implementation:**

```html
<iframe
  src="https://stream.thirdspaceinteractive.ca/your-project-id"
  width="1920"
  height="1080"
  frameborder="0"
  allowfullscreen
  allow="fullscreen"
></iframe>
```

**Replace `your-project-id` with your actual project ID from the dashboard.**

### Finding Your Stream URL

1. Log in to [Third Space Dashboard](https://app.thirdspaceinteractive.ca)
2. Navigate to your project
3. Click "Share" or "Get Embed Code"
4. Copy the stream URL: `https://stream.thirdspaceinteractive.ca/[project-id]`

### Testing Locally

Save this as `test.html` and open in browser:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Third Space Stream Test</title>
</head>
<body style="margin: 0; padding: 0;">
  <iframe
    src="https://stream.thirdspaceinteractive.ca/your-project-id"
    width="100%"
    height="800px"
    frameborder="0"
    allowfullscreen
    allow="fullscreen"
  ></iframe>
</body>
</html>
```

## Responsive Embedding

### Fixed Aspect Ratio (Recommended)

**Maintains 16:9 aspect ratio on all screen sizes:**

```html
<div class="stream-container">
  <iframe
    src="https://stream.thirdspaceinteractive.ca/your-project-id"
    frameborder="0"
    allowfullscreen
    allow="fullscreen"
  ></iframe>
</div>

<style>
.stream-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (9/16 = 0.5625) */
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.stream-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
```

**Other aspect ratios:**
- **16:9** (widescreen): `padding-bottom: 56.25%`
- **4:3** (standard): `padding-bottom: 75%`
- **21:9** (ultrawide): `padding-bottom: 42.86%`
- **1:1** (square): `padding-bottom: 100%`

### Full-Screen Embedding

**Fill entire browser window:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Full Screen Stream</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .full-screen-stream {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }
  </style>
</head>
<body>
  <iframe
    class="full-screen-stream"
    src="https://stream.thirdspaceinteractive.ca/your-project-id"
    allowfullscreen
    allow="fullscreen"
  ></iframe>
</body>
</html>
```

### Mobile-Responsive

**Adapts to mobile, tablet, and desktop:**

```html
<div class="responsive-stream">
  <iframe
    src="https://stream.thirdspaceinteractive.ca/your-project-id"
    frameborder="0"
    allowfullscreen
    allow="fullscreen"
  ></iframe>
</div>

<style>
.responsive-stream {
  position: relative;
  width: 100%;
  max-width: 1920px; /* Don't scale beyond 1080p */
  margin: 0 auto;
}

.responsive-stream::before {
  content: "";
  display: block;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

.responsive-stream iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .responsive-stream {
    width: 100%;
    max-width: 100%;
  }

  /* Slightly taller on mobile for better touch controls */
  .responsive-stream::before {
    padding-top: 75%; /* 4:3 on mobile */
  }
}
</style>
```

## Advanced Features

### Fullscreen Button

**Enable fullscreen mode for embedded streams:**

```html
<div class="stream-wrapper">
  <div class="stream-container">
    <iframe
      id="stream-iframe"
      src="https://stream.thirdspaceinteractive.ca/your-project-id"
      frameborder="0"
      allowfullscreen
      allow="fullscreen"
    ></iframe>
  </div>
  <button onclick="enterFullscreen()" class="fullscreen-btn">
    ⛶ Fullscreen
  </button>
</div>

<style>
.stream-wrapper {
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
}

.stream-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.stream-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fullscreen-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  z-index: 10;
}

.fullscreen-btn:hover {
  background: rgba(0, 0, 0, 0.9);
}
</style>

<script>
function enterFullscreen() {
  const iframe = document.getElementById('stream-iframe');
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) { /* Safari */
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { /* IE11 */
    iframe.msRequestFullscreen();
  }
}
</script>
```

### Loading Indicator

**Show loading state while stream connects:**

```html
<div class="stream-wrapper">
  <div id="loading-indicator" class="loading">
    <div class="spinner"></div>
    <p>Connecting to stream...</p>
  </div>
  <iframe
    id="stream-iframe"
    src="https://stream.thirdspaceinteractive.ca/your-project-id"
    frameborder="0"
    allowfullscreen
    allow="fullscreen"
    onload="hideLoading()"
  ></iframe>
</div>

<style>
.stream-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background: #000;
}

.stream-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: white;
  z-index: 5;
  transition: opacity 0.5s;
}

.loading.hidden {
  opacity: 0;
  pointer-events: none;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top: 4px solid #fff;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading p {
  font-family: Arial, sans-serif;
  font-size: 18px;
}
</style>

<script>
function hideLoading() {
  setTimeout(() => {
    document.getElementById('loading-indicator').classList.add('hidden');
  }, 1000); // Small delay to ensure stream is actually visible
}
</script>
```

### Call-to-Action Overlay

**Add CTA button over stream (marketing use case):**

```html
<div class="stream-wrapper">
  <iframe
    src="https://stream.thirdspaceinteractive.ca/your-project-id"
    frameborder="0"
    allowfullscreen
    allow="fullscreen"
  ></iframe>

  <div class="cta-overlay">
    <h2>Experience Our Product in 3D</h2>
    <button onclick="requestDemo()" class="cta-button">
      Request a Demo →
    </button>
  </div>
</div>

<style>
.stream-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.stream-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cta-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  text-align: center;
  z-index: 10;
  pointer-events: none; /* Allow clicks through to stream */
}

.cta-overlay h2 {
  color: white;
  font-family: Arial, sans-serif;
  margin: 0 0 15px 0;
}

.cta-button {
  padding: 15px 30px;
  background: #5724FF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  pointer-events: auto; /* Button is clickable */
}

.cta-button:hover {
  background: #4518cc;
}
</style>

<script>
function requestDemo() {
  // Redirect to contact form or trigger modal
  window.location.href = '/contact?source=stream-demo';
}
</script>
```

## Framework Integration

### React

**React component for embedding:**

```jsx
import React, { useState } from 'react';

const ThirdSpaceStream = ({ projectId, aspectRatio = 56.25 }) => {
  const [loading, setLoading] = useState(true);

  const streamUrl = `https://stream.thirdspaceinteractive.ca/${projectId}`;

  return (
    <div className="stream-wrapper">
      {loading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Connecting to stream...</p>
        </div>
      )}
      <div style={{ paddingBottom: `${aspectRatio}%`, position: 'relative' }}>
        <iframe
          src={streamUrl}
          frameBorder="0"
          allowFullScreen
          allow="fullscreen"
          onLoad={() => setTimeout(() => setLoading(false), 1000)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      </div>
    </div>
  );
};

export default ThirdSpaceStream;

// Usage:
// <ThirdSpaceStream projectId="your-project-id" aspectRatio={56.25} />
```

### Vue

**Vue component:**

```vue
<template>
  <div class="stream-wrapper">
    <div v-if="loading" class="loading-indicator">
      <div class="spinner"></div>
      <p>Connecting to stream...</p>
    </div>
    <div class="stream-container">
      <iframe
        :src="streamUrl"
        frameborder="0"
        allowfullscreen
        allow="fullscreen"
        @load="onLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirdSpaceStream',
  props: {
    projectId: {
      type: String,
      required: true
    },
    aspectRatio: {
      type: Number,
      default: 56.25 // 16:9
    }
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    streamUrl() {
      return `https://stream.thirdspaceinteractive.ca/${this.projectId}`;
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style scoped>
.stream-container {
  position: relative;
  padding-bottom: v-bind(aspectRatio + '%');
  height: 0;
  overflow: hidden;
}

.stream-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.loading-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: white;
  z-index: 5;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top: 4px solid #fff;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<!-- Usage: <ThirdSpaceStream project-id="your-project-id" /> -->
```

### WordPress

**Add to post/page editor (HTML block):**

```html
<!-- wp:html -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://stream.thirdspaceinteractive.ca/your-project-id"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allowfullscreen
    allow="fullscreen"
  ></iframe>
</div>
<!-- /wp:html -->
```

**Or use shortcode (requires custom plugin or functions.php):**

```php
// Add to functions.php
function third_space_stream_shortcode($atts) {
  $a = shortcode_atts(array(
    'project' => '',
    'width' => '100%',
    'height' => '600px'
  ), $atts);

  $url = esc_url('https://stream.thirdspaceinteractive.ca/' . $a['project']);

  return sprintf(
    '<iframe src="%s" width="%s" height="%s" frameborder="0" allowfullscreen allow="fullscreen"></iframe>',
    $url,
    esc_attr($a['width']),
    esc_attr($a['height'])
  );
}
add_shortcode('thirdspace', 'third_space_stream_shortcode');

// Usage in post/page editor:
// [thirdspace project="your-project-id" width="100%" height="600px"]
```

## Security & Permissions

### Required Iframe Attributes

**For fullscreen to work:**

```html
<iframe
  allowfullscreen
  allow="fullscreen"
></iframe>
```

Without these, fullscreen button won't work in embedded context.

### Content Security Policy (CSP)

**If your site uses CSP headers, whitelist:**

```http
Content-Security-Policy: frame-src https://stream.thirdspaceinteractive.ca
```

Or in meta tag:

```html
<meta http-equiv="Content-Security-Policy" content="frame-src https://stream.thirdspaceinteractive.ca">
```

### X-Frame-Options

Third Space allows embedding (does NOT send `X-Frame-Options: DENY`).

Your site's headers may block embedding your own page in iframes, but won't affect embedding Third Space streams.

## Troubleshooting

### Stream not loading in iframe

**Symptoms:** Blank iframe or "refused to connect" error

**Solutions:**

1. **Check project URL:**
   - Verify project ID is correct
   - Test URL directly in browser (should work)

2. **Check CSP headers:**
   - Browser console (F12) → Check for CSP errors
   - Whitelist `stream.thirdspaceinteractive.ca` in CSP

3. **Check instance status:**
   - Dashboard → Project status must be "Ready" or "Running"
   - If "Stopped", start instance first

4. **Browser compatibility:**
   - Use modern browser (Chrome, Edge, Firefox, Safari 14+)
   - Update to latest version

### Fullscreen not working

**Symptoms:** Fullscreen button doesn't trigger fullscreen mode

**Solutions:**

1. **Add iframe attributes:**
   ```html
   <iframe allowfullscreen allow="fullscreen"></iframe>
   ```

2. **Safari-specific issue:**
   - Safari requires `webkitRequestFullscreen()`
   - See [Fullscreen Button](#fullscreen-button) example above

3. **Mobile browsers:**
   - Some mobile browsers restrict fullscreen
   - Test on different devices

### Performance issues on mobile

**Symptoms:** Slow, choppy, or doesn't load on mobile devices

**Solutions:**

1. **Optimize for mobile:**
   - Reduce stream resolution (contact support to adjust)
   - Simplify UE project (lower polygon counts, effects)

2. **Network speed:**
   - Mobile devices on cellular may have slow connection
   - Ensure user has good WiFi or 4G/5G

3. **Device capability:**
   - Older phones/tablets may struggle with video decoding
   - Recommend device from 2020+ for best experience

### Responsive sizing not working

**Symptoms:** Iframe doesn't scale properly on different screen sizes

**Solution:**

Use the padding-bottom trick for aspect ratio:

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe
    src="..."
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  ></iframe>
</div>
```

This maintains 16:9 ratio at all screen sizes.

## Best Practices

### Performance

1. **Lazy loading** (don't load until visible):
   ```html
   <iframe loading="lazy" src="..."></iframe>
   ```

2. **Defer offscreen embeds:**
   - Only load iframe when user scrolls to it
   - Saves bandwidth and credits

3. **Limit concurrent embeds:**
   - Don't embed multiple streams on same page
   - Each uses concurrent user slot

### User Experience

1. **Provide loading indicator:**
   - Users know stream is connecting
   - Prevents "blank screen" confusion

2. **Add instructions:**
   - "Click to interact" or "Use mouse to explore"
   - Helps users understand it's interactive

3. **Fallback content:**
   - Show static image if stream fails to load
   - Prevents broken experience

### SEO

1. **Iframes are not indexed:**
   - Search engines don't index iframe content
   - Add descriptive text around iframe for SEO

2. **Use descriptive title attribute:**
   ```html
   <iframe title="3D Product Configurator" src="..."></iframe>
   ```

3. **Provide text alternative:**
   - Describe what's in the stream for accessibility and SEO

## Analytics Integration

### Track stream engagement

**Using Google Analytics:**

```html
<script>
// Track when stream loads
document.getElementById('stream-iframe').addEventListener('load', function() {
  gtag('event', 'stream_loaded', {
    'event_category': 'engagement',
    'event_label': 'product_demo'
  });
});

// Track fullscreen usage
document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement) {
    gtag('event', 'fullscreen_entered', {
      'event_category': 'engagement',
      'event_label': 'product_demo'
    });
  }
});
</script>
```

### Track time spent viewing

```javascript
let streamStartTime = null;

document.getElementById('stream-iframe').addEventListener('load', function() {
  streamStartTime = Date.now();
});

window.addEventListener('beforeunload', function() {
  if (streamStartTime) {
    const duration = Math.round((Date.now() - streamStartTime) / 1000);
    navigator.sendBeacon('/analytics/stream-duration', JSON.stringify({
      duration: duration,
      project: 'your-project-id'
    }));
  }
});
```

## Next Steps

- [Explore use cases →](../../use-case-guides)
- [Sales & Marketing integration →](../../use-case-guides/sales-marketing)
- [Troubleshoot connection issues →](../../troubleshooting/connection-problems)
- [Learn about credit system →](../../core-concepts/credit-system)

---

**Need help with custom integration?**
- Pro/Enterprise support: support@thirdspaceinteractive.ca
- [Join Discord community](https://discord.gg/8pVjBjCe)
