#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building Next.js application..."
npm run build

echo "Build complete!"
