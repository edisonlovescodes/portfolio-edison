# Deploy

byedison.com runs on one VPS with Docker Compose and Caddy (automatic HTTPS).

Server layout, under `/srv/byedison/`:

```
deploy/              this folder, plus .env containing SITE_ADDRESS=byedison.com
www/site/            static export of this portfolio (npm run build → out/)
www/oncodetect/      OncoDetect frontend: vite build --base=/oncodetect/, VITE_API_BASE_URL=/oncodetect/api
www/protogen/        Protogen frontend: vite build --base=/protogen/, VITE_API_BASE_URL=/protogen/api
oncodetect/backend/  github.com/edisonlovescodes/oncodetect, backend folder
protogen/            github.com/edisonlovescodes/protogen, plus runs/latest (not in git)
biosignal-analyzer/  github.com/edisonlovescodes/biosignal-analyzer
```

Start or update: `cd /srv/byedison/deploy && docker compose up -d --build`

To add a demo: put its files in `www/<name>` or add a service, then add one block to `Caddyfile`.
