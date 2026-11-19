# Khairul Zamidi: portfolio

A one-page portfolio: a React (Vite, TypeScript) client served by an ASP.NET Core (.NET 10) API that also takes contact-form messages.

```
client/   React app. Content lives in src/sections/*.tsx; the design kit (CSS, motion, icons) is in public/assets
server/   Portfolio.Api (serves the built site, POST /api/contact) and Portfolio.Tests (xUnit)
Dockerfile  builds the client, runs the tests, publishes the API
```

## Run it

With Docker (recommended on this machine, see the note below):

```bash
docker build -t khairul-portfolio .
docker run -p 8080:8080 -v portfolio-data:/data khairul-portfolio
# open http://localhost:8080
```

Messages from the contact form are appended to `/data/messages.jsonl` in the container (the `portfolio-data` volume).

For frontend work, the Vite dev server proxies `/api` to `http://localhost:5080`:

```bash
cd client && npm install && npm run dev          # http://localhost:5173
cd server && dotnet run --project Portfolio.Api   # http://localhost:5080 (needed only to test the form)
```

`npm run build` writes the site into `server/Portfolio.Api/wwwroot`.

> **Windows Smart App Control** is on for this PC and blocks .NET binaries built locally, so `dotnet run` and `dotnet test` fail with "An Application Control policy has blocked this file". Use Docker, or turn Smart App Control off in Windows Security, App & browser control.

## GitHub Pages

Every push to  publishes the client as a static site to https://khairul006.github.io/portfolio/ (). Pages cannot run the .NET API, so on that build the contact form opens the visitor's email app, addressed to you. Run the Docker image instead when you want the form to save messages.

One-time setup: in the repo's **Settings > Pages**, set **Source** to **GitHub Actions**.

## The contact API

`POST /api/contact` takes form data (`name`, `email`, `message`, optional `company`):

- `200 {"ok": true}` when saved
- `400` validation problem, with errors keyed by field
- `429` after 5 posts from one IP in 10 minutes

## Updating content

Text and lists sit at the top of each file in `client/src/sections/`. Swap `client/public/khairul.jpg` for a higher-resolution photo (600×800 or larger), and `client/public/resume.pdf` for a new resume.
