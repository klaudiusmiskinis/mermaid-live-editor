[![Join our Discord!](https://img.shields.io/static/v1?message=join%20chat&color=9cf&logo=discord&label=discord)](https://discord.gg/sKeNQX4Wtj)

# Mermaid Live Editor

Edit, preview and share mermaid charts/diagrams.

## Features

- Edit and preview flowcharts, sequence diagrams, gantt diagrams in real time.
- Download the result as PNG or SVG without contacting any server.

## Live demo

You can try out a [live version](https://mermaid.live/).

# Contributors are welcome!

If you want to speed up the progress for mermaid-live-editor, join the Discord channel and contact knsv.

## Docker

### Run published image

```bash
docker run --platform linux/amd64 --publish 8000:8080 ghcr.io/mermaid-js/mermaid-live-editor
```

### Development

```bash
docker compose up --build
```

Then open http://localhost:3000

### Building and running images locally

#### Build

```bash
docker build -t mermaid-js/mermaid-live-editor .
```

#### Run

```bash
docker run --detach --name mermaid-live-editor --publish 8080:8080 mermaid-js/mermaid-live-editor
```

Visit: <http://localhost:8080>

#### Stop

```bash
docker stop mermaid-live-editor
```

## Setup

Below link will help you making a copy of the repository in your local system.

https://docs.github.com/en/get-started/quickstart/fork-a-repo

## Requirements

- [Node.js](https://nodejs.org/en/) current LTS version
- [pnpm](https://pnpm.io/) package manager. Install with `corepack enable pnpm`

## Development

```sh
pnpm install
pnpm dev -- --open
```

This app is created with Svelte Kit.

### Local/offline usage

The provided `.env` file already disables all connections to external services.
Simply start the development server with:

```bash
pnpm dev
```

## GitHub Pages

La aplicación se despliega automáticamente en **GitHub Pages** mediante un flujo
de trabajo de GitHub Actions. Cada vez que se realiza un push a la rama
`main`, se ejecuta el proceso de construcción y el contenido generado en la
carpeta `docs` se publica en la rama `gh-pages`. Tras finalizar, la dirección de
la página se puede consultar en la pestaña de _Actions_.
