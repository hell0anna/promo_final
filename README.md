# YC Web prototype

React + Vite prototype prepared for static deployment to GitHub Pages.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The static site is generated in `dist/`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. Open **Settings → Pages** in the GitHub repository.
3. Set **Source** to **GitHub Actions**.
4. Run the **Deploy to GitHub Pages** workflow, or push a new commit to `main`.

The workflow automatically detects whether the site is hosted at
`username.github.io` or under a repository path such as
`username.github.io/repository-name/`.
