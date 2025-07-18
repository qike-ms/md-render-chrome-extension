# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chrome browser extension called "Simple Markdown Renderer" that automatically renders local Markdown files (.md and .markdown) as styled HTML when opened in the browser via `file://` URLs.

## Architecture

The extension consists of:
- **manifest.json**: Extension configuration with content script registration for local .md files
- **content.js**: Main content script that extracts raw markdown, clears the page, and renders HTML using marked.js
- **marked.min.js**: Third-party markdown parsing library (marked.js)
- **style.css**: GitHub-like styling for rendered markdown content
- **icon128.png**: Extension icon

## Key Components

### Content Script Flow
1. Extracts raw markdown from `document.body.textContent` (browser wraps file content in `<pre>` tags)
2. Clears existing body content
3. Creates a `.markdown-body` container
4. Uses `marked.parse()` to convert markdown to HTML
5. Injects rendered HTML and updates page title to filename

### Styling
- GitHub-inspired responsive design with centered content (max-width: 980px)
- Syntax highlighting for code blocks
- Proper table formatting and typography
- Mobile-responsive breakpoints

## Installation and Testing

To install the extension:
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select this directory
4. Open any local .md file via `file://` URL to test

## Common Development Tasks

- **Modify styling**: Edit `style.css` for visual changes
- **Update markdown parsing**: Replace `marked.min.js` with newer version if needed
- **Change supported file types**: Modify `matches` array in `manifest.json`
- **Debug content script**: Use Chrome DevTools on any opened .md file

## Dependencies

- **marked.js**: Markdown parsing library (included as `marked.min.js`)
- Chrome Extensions Manifest V3 API