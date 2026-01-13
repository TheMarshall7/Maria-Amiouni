#!/bin/bash
set -e

# Navigate to the Next.js project directory
cd OneDrive/AreoClient/Maria\ Amiouni/maria-amiouni-web || {
  echo "Error: Could not find project directory"
  exit 1
}

echo "Installing dependencies..."
npm install

echo "Building Next.js application..."
npm run build

echo "Build complete!"
