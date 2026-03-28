<h1 align="center">IntelliJ Icon Blender</h1>

<p align="center">
  A web tool for forging new icons for <a href="https://plugins.jetbrains.com/">JetBrains IDE plugins</a><br/>
  by combining a <strong>main icon</strong> with a <strong>modifier icon</strong>.
</p>

<p align="center">
  <a href="https://jreznot.github.io/intellij-icon-blender/">🌐 Open IntelliJ Icon Blender</a>
</p>

---

## Why?

IntelliJ-based IDEs use a system of **16×16 SVG icons** for actions, tool windows, menus, and file types. Many of these icons are composed of a base icon with a small modifier badge in the corner — think of a file icon with a ✚ (new), ✎ (edit), or ⚙ (config) overlay.

Creating these combined icons by hand is tedious:

- You need to open the main icon in an SVG editor.
- Cut out space for the modifier so it doesn't overlap the main icon's content.
- Overlay the modifier in the correct position.
- Export both light and dark theme variants.

**IntelliJ Icon Blender** automates this entire process in the browser — select two icons, get the combined result instantly, and download both light and dark SVG files ready for your plugin.

## Features

- **60+ main icons** and **50+ modifier icons** from the [IntelliJ Platform icon set](https://intellij-icons.jetbrains.design/)
- **Automatic contour-based cutout** — traces the actual shape of the modifier icon and creates a precise cutout with uniform padding in the main icon (replicates the logic from IntelliJ IDEA's `OverlayShapeCreator.java`)
- **Manual cutout shape override** — choose between Contour (auto), Circle, Rectangle, or Ellipse
- **Light / Dark theme preview** — switch between light and dark backgrounds to see how the icon looks in both IDE themes
- **One-click download** of both regular and `_dark` SVG variants, with JetBrains copyright headers included
- **Custom icon upload** — upload your own SVG as the main icon
- **Grid picker** — visual grid popup for quickly browsing and selecting icons

## Live Demo

👉 **[jreznot.github.io/intellij-icon-blender](https://jreznot.github.io/intellij-icon-blender/)**

## How It Works

1. **Select a main icon** from the dropdown, grid picker, or upload your own SVG.
2. **Select a modifier icon** from the dropdown or grid picker.
3. The app automatically combines them:
   - Parses the modifier SVG to determine its shape outline.
   - Creates an SVG mask with a contour-based cutout (stroke-expanded outline of the modifier) in the main icon.
   - Overlays the modifier on top.
4. **Preview** the result in light or dark theme.
5. **Download** both `icon.svg` and `icon_dark.svg` files.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Yarn](https://yarnpkg.com/) 1.x

### Setup

```bash
# Clone the repository
git clone https://github.com/jreznot/intellij-icon-blender.git
cd intellij-icon-blender

# Install dependencies
yarn install

# Start development server
yarn dev
```

The app will be available at `http://localhost:5173/`.

### Build

```bash
yarn build
```

The production build is output to the `dist/` directory.

### Deployment

The project is automatically deployed to GitHub Pages on every push to `main` via the [GitHub Actions workflow](.github/workflows/deploy.yml).

## Project Structure

```
intellij-icon-blender/
├── main-icons/          # 60+ main SVG icons (light + dark variants)
├── modifier-icons/      # 50+ modifier SVG icons (light + dark variants)
├── src/
│   ├── App.vue          # Main application component
│   └── main.js          # Vue app entry point
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Pages deployment workflow
```

## Credits

- **Original idea** — [Dima Golovkov](https://github.com/DSGolovkov/), designer from the IntelliJ UX team
- **Implementation** — IntelliJ Platform team
- **Built with** [Junie](https://www.jetbrains.com/junie/), the AI coding agent by JetBrains

## Resources

- 🌐 [IntelliJ Icon Blender (Live)](https://jreznot.github.io/intellij-icon-blender/)
- 🎨 [IntelliJ Platform Icons](https://intellij-icons.jetbrains.design/)
- 📖 [IntelliJ Platform Plugin SDK — Icons](https://plugins.jetbrains.com/docs/intellij/icons.html)
- 🔧 [IntelliJ Community Source](https://github.com/JetBrains/intellij-community)

## License

Copyright 2000-2026 JetBrains s.r.o. and contributors.

Use of this source code is governed by the Apache 2.0 license.
