#!/bin/bash
# Re-encode videos with frame interpolation for SMOOTH 5x slow motion.
# Requires: brew install ffmpeg (with --enable-libx264)
#
# At 0.2x playback, a 30fps video shows only 6fps = choppy.
# This script creates 150fps versions → at 0.2x = 30fps smooth.
#
# Run from project root: ./scripts/smooth-slow-motion.sh

set -e
cd "$(dirname "$0")/.."
mkdir -p public/smooth

for name in hero-bg section-edge-bg section3-bg; do
  src="public/${name}.mp4"
  dst="public/smooth/${name}.mp4"
  if [ ! -f "$src" ]; then echo "Skip $src (not found)"; continue; fi
  echo "Processing $src → $dst (this may take several minutes)..."
  ffmpeg -y -i "$src" \
    -vf "minterpolate=fps=150:mi_mode=mci:mc_mode=aobmc:me_mode=bidir" \
    -c:v libx264 -preset medium -crf 20 \
    "$dst" 2>/dev/null || {
    echo "minterpolate not available, trying blend mode..."
    ffmpeg -y -i "$src" \
      -vf "minterpolate=fps=150:mi_mode=blend" \
      -c:v libx264 -preset medium -crf 20 \
      "$dst" 2>/dev/null
  }
  echo "Done: $dst"
done

echo ""
echo "Now update the video src paths in components to use /smooth/hero-bg.mp4 etc."
echo "and set playbackRate back to 0.2 for smooth 5x slow motion."
