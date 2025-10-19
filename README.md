
# Pirate-Demo

A small demo project: an interactive "Treasure Hunt" website with an optional bug mode.

This application is intentionally simple and is meant to demonstrate how to run a small Express site and automate end-to-end tests with Playwright.

## Features

- Login page (`/login.html`) — sign in as the Captain.
- Interactive map with islands and a treasure.
- Server-side `BUG_MODE` (via environment variable) is forwarded to the treasure page as a query parameter.
- Playwright tests in `tests/` verify the login flow and navigation.

## Requirements

- Node.js (LTS recommended) and npm/yarn
- (For tests) Playwright (installed as a devDependency)

## Installation

1. Install project dependencies

```bash
npm install
```

2. (Optional) Install Playwright browsers

```bash
npx playwright install
```

## Starting the server

By default the server runs on port 3000 and serves static files from `public/`.

```bash
npm start
# opens http://localhost:3000/login.html
```

To enable the bug mode (the server will pass `?bug=true` to `treasure.html`):

```bash
BUG_MODE=1 npm start
```

Note: On Windows PowerShell you would set the environment variable differently:

```powershell
$env:BUG_MODE = "1"; npm start
```

## Playwright tests

The tests are in `tests/treasureHunt.spec.ts` and automate the following:

- Open the login page
- Log in with username `JackSparrow` and password `rum`
- Navigate to several islands and assert headings

To run the tests:

1. Start the server (in one terminal):

```bash
npm start
```

2. Run tests (in another terminal):

```bash
npx playwright test
```

Playwright will generate an HTML report (`playwright-report/index.html`). Open it with:

```bash
npx playwright show-report
```

## Project structure (short)

- `server.js` — minimal Express server serving static files and handling the login POST.
- `public/` — static pages (`login.html`, `treasure.html`, `style.css`, ...).
- `tests/` — Playwright tests.
- `playwright.config.ts` — Playwright configuration (HTML reporter).
- `playwright-report/` — generated HTML report (after test run).
- `package.json` — scripts and dependencies.

## Login credentials (for tests)

- Username: `JackSparrow`
- Password: `rum`

These credentials are intentionally simple and for demo/test purposes only.

## Notes / Additional info

- This project is for learning/demo purposes only. Do not use it in production.
- For CI, set `CI=1` in the environment — the Playwright configuration uses this flag to adjust retries and worker count.
- Contributions, bugs and improvements are welcome via pull requests.

Have fun exploring!
