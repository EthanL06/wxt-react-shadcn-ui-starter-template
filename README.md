# WXT + React + shadcn/ui Starter Template

A modern Chrome/Firefox extension boilerplate using [WXT](https://wxt.dev/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).

## Getting Started

1. **Install dependencies**

```bash
pnpm install
```

2. **Run the development server**

```bash
pnpm dev
```

## Project Structure

This template follows WXT's recommended structure with a few key modifications:

- ✅ **Uses `src/` directory** ([docs](https://wxt.dev/guide/essentials/project-structure#adding-a-src-directory))
- 🚫 **Auto-imports disabled** to maintain full control

> You can customize these settings in the wxt.config.ts file.

### Entrypoints

All entrypoints live under `src/entrypoints/`:

- `popup/` – Extension popup UI
- `main.content/` – Injected content scripts
- `background/` – Background service worker

📖 [WXT entrypoints guide](https://wxt.dev/guide/essentials/entrypoints.html#including-other-files)

## Manifest Configuration

Edit your extension manifest in `wxt.config.ts`.

📖 [WXT manifest config docs](https://wxt.dev/guide/essentials/config/manifest.html)

## Tech Stack

- **[WXT](https://wxt.dev/)** – Modern DX for browser extensions
- **[React](https://reactjs.org/)** – UI framework
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** – Styled UI components
