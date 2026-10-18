# SS-Website

This repository contains a Next.js app in `/ss-website`.

## Vercel deployment readiness

The app is configured for Vercel using `/ss-website/vercel.json` and existing scripts:

- `npm ci`
- `npm run build`
- `npm run dev`

### Remaining account-side steps (required in Vercel UI/CLI)

1. Import `BryanWills-800/SS-Website` into Vercel.
2. Set **Root Directory** to `ss-website`.
3. Confirm framework is **Next.js**.
4. Keep default build output handling for Next.js.
5. Add any required environment variables in Vercel Project Settings.
6. Trigger first deployment.