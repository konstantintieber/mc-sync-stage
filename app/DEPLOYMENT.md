# Deployment

The app is a static site. `npm run build` writes everything it needs into `app/dist/`, and deploying means copying the contents of that folder to the directory your subdomain serves. No server-side runtime is needed.

The talk files in `/talks` are bundled into the JavaScript at build time, so **any change to a talk needs a rebuild and redeploy**.

## One-time setup

### 1. Configure the subdomain

- Point the subdomain's document root at an empty directory, e.g. `/var/www/mc.example.com`.
- **Enable HTTPS.** The service worker (offline support) and notifications only work over HTTPS. Without it the app still shows the schedule, but cue reminders and offline mode won't work. Let's Encrypt (`certbot`) is the usual free option.

### 2. Recommended cache headers

The service worker checks `sw.js` for updates. If the browser caches that file, phones keep showing an old version. Files in `assets/` have content hashes in their names, so they can be cached forever.

| Path | Header |
|---|---|
| `/sw.js`, `/registerSW.js`, `/index.html`, `/manifest.webmanifest` | `Cache-Control: no-cache` |
| `/assets/*` | `Cache-Control: public, max-age=31536000, immutable` |

nginx:

```nginx
location = /sw.js               { add_header Cache-Control "no-cache"; }
location = /registerSW.js       { add_header Cache-Control "no-cache"; }
location = /index.html          { add_header Cache-Control "no-cache"; }
location = /manifest.webmanifest { add_header Cache-Control "no-cache"; }
location /assets/               { add_header Cache-Control "public, max-age=31536000, immutable"; }
```

Apache (`.htaccess` in the document root, needs `mod_headers`):

```apache
<FilesMatch "^(sw\.js|registerSW\.js|index\.html|manifest\.webmanifest)$">
  Header set Cache-Control "no-cache"
</FilesMatch>
<If "%{REQUEST_URI} =~ m#^/assets/#">
  Header set Cache-Control "public, max-age=31536000, immutable"
</If>
```

The app has no client-side routes, so no SPA fallback/rewrite rule is needed.

## Deploying

Run from the `app/` directory:

```sh
npm ci            # install exact dependency versions from package-lock.json
npm test          # optional: checks the talk files parse correctly
npm run build     # type-checks, then writes the site to dist/
```

Then copy the **contents** of `dist/` (not the folder itself) to the subdomain's document root.

## Checking the deployment

1. Open `https://mc.example.com/` and check that the session list loads.
2. In the browser dev tools, check the Network tab for 404s.
3. In Application → Service Workers, check that `sw.js` is registered and active.
4. On the MC phones: open the site, use "Add to Home Screen", and allow notifications. Do this on the day before, on good Wi-Fi, so the app is cached for offline use at the venue.

## Updating after changes

Rebuild and upload the updated files. If a phone is stuck on an old version, close and reopen the app.
