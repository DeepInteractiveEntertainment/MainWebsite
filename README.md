# Deep Interactive Entertainment

Official website: https://deepinteractiveentertainment.com

## Local development

Requires Node.js 22.

```sh
npm ci
npm run dev
```

## Production / Cloudflare Pages

```sh
npm ci
npm run build
```

Next.js exports the complete static site to `out/`. Upload the contents of `out/` through the Cloudflare Pages Direct Upload dashboard. GitHub stores source only; deployments are uploaded manually. No server or Functions are required.

The source, optimized public media, and dependency lockfile are versioned here. Generated builds, local settings, and model-export scratch files are excluded.

The contact form on the studio website opens the visitor's email application.
