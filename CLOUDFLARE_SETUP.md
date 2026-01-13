# Cloudflare Pages Setup Instructions

## Fixed Build Configuration ✅

The repository has been configured to properly handle the subdirectory structure. Here's what was fixed:

### Changes Made
1. ✅ Created proper `build.sh` at repository root that navigates to the project subdirectory
2. ✅ Updated `next.config.js` to fix the multiple lockfiles warning
3. ✅ Created root `package.json` with build scripts
4. ✅ Added `.gitignore` to prevent tracking personal files
5. ✅ Committed and pushed all changes to GitHub

---

## Cloudflare Pages Dashboard Settings

Go to your Cloudflare Pages project and configure the following:

### Build Configuration

**Framework preset:** None (select "None" - don't use Next.js preset)

**Build command:**
```bash
npm run build
```

**Build output directory:**
```
OneDrive/AreoClient/Maria Amiouni/maria-amiouni-web/out
```

**Root directory (Advanced):** 
```
.
```
(Leave as repository root - the default)

**Node.js version:**
```
20
```
(or latest LTS - 22)

### How It Works

1. Cloudflare clones your repository
2. It installs dependencies from the root `package.json`
3. Runs `npm run build` which executes `build.sh`
4. `build.sh` navigates to `OneDrive/AreoClient/Maria Amiouni/maria-amiouni-web/`
5. Installs project dependencies
6. Builds the Next.js app
7. Deploys the `out` directory

### Environment Variables

No environment variables are required for this project.

---

## Troubleshooting

### If the build still fails:

1. **Check the build logs** on Cloudflare Pages for specific errors
2. **Verify the output directory path** is exactly: `OneDrive/AreoClient/Maria Amiouni/maria-amiouni-web/out`
3. **Ensure Node.js version** is set to 20 or higher
4. **Try triggering a new deployment** after saving the settings

### Common Issues

**"No Next.js version detected"**
- Fixed! The root `package.json` now properly calls `build.sh` which navigates to the correct subdirectory.

**"Multiple lockfiles warning"**
- Fixed! The `next.config.js` now explicitly sets the turbopack root directory.

**"Build command failed"**
- Make sure the build command is exactly `npm run build` (not `bash build.sh` directly)

---

## Testing the Build Locally

You can test the build process locally by running:

```bash
# From repository root (C:\Users\Isiata)
npm run build
```

This will execute the same build process that Cloudflare Pages will use.

---

## Next Steps

1. Go to your Cloudflare Pages dashboard
2. Update the build settings as shown above
3. Trigger a new deployment (or push a new commit)
4. Monitor the build logs to ensure it completes successfully

The build should now work correctly! 🎉
