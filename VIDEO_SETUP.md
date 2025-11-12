# Video Background Setup Guide

Your landing page now expects a video file at `/static/video/background.mp4`.

## Option 1: Place Video Directly in Static Folder (Best for small files)

1. If your video is **under 10MB**, simply place it in the `/static/video/` folder
2. Name it `background.mp4`
3. Restart your dev server

**Pros**: Simple, no extra setup
**Cons**: Increases bundle size, slow for large files

## Option 2: Upload to Vercel Blob (Recommended for production)

You're already using Vercel Blob for images. Here's how to add your video:

### A. Using the CLI:
```bash
npm install -g vercel
vercel blob upload your-video.mp4 --token YOUR_BLOB_READ_WRITE_TOKEN
```

### B. Using the Vercel Dashboard:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Storage → Blob
4. Upload your video file
5. Copy the public URL

### C. Update the code:
Once uploaded, edit `src/routes/+page.svelte` line 5:
```typescript
const VIDEO_URL = 'https://your-blob-url.vercel-storage.com/your-video.mp4';
```

## Option 3: Use a CDN (Cloudinary, Mux, etc.)

1. Upload your video to Cloudinary/Mux
2. Get the public URL
3. Update line 5 in `src/routes/+page.svelte`:
```typescript
const VIDEO_URL = 'https://res.cloudinary.com/your-cloud/video/your-video.mp4';
```

## Video Specifications

For best performance:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or 1280x720
- **File size**: Under 5MB for web (compress if needed)
- **Length**: 10-30 seconds for looping backgrounds
- **Frame rate**: 30fps

## Compress Your Video

Use [HandBrake](https://handbrake.fr/) or online tools:
- **Online**: https://www.freeconvert.com/video-compressor
- **CLI**: `ffmpeg -i input.mp4 -vcodec h264 -crf 28 output.mp4`

## Fallback Plan

If you can't upload the video right now, the page will display "Your browser does not support the video tag" and the buttons will still work over a dark gradient background.
