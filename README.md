# Quick Scroll Navigation

English | [简体中文](./README.zh-CN.md)

Quick Scroll Navigation is a lightweight Tampermonkey userscript that adds a floating control panel to web pages, allowing users to jump directly to the top, middle, or bottom of the current page.

It is designed for long-form browsing scenarios such as documentation sites, forums, blogs, search result pages, and article pages where repeated manual scrolling is inefficient.

## Features

- Adds a fixed floating panel in the bottom-right corner of the page.
- Provides three one-click actions: `Top`, `Middle`, and `Bottom`.
- Uses smooth scrolling for a cleaner navigation experience.
- Works on both desktop and mobile-sized viewports.
- Runs on almost all standard HTTP and HTTPS websites.
- Avoids duplicate injection by checking whether the panel already exists.

## Use Cases

- Quickly return to the page header after reading a long article.
- Jump to the middle of a long page for faster scanning.
- Reach the bottom of infinite or near-infinite content pages faster.
- Improve navigation efficiency during routine browsing.

## How It Works

The script injects:

- A small fixed-position control panel.
- Three buttons bound to scroll actions.
- A compact CSS block for layout, visual styling, and mobile adjustments.

Scroll behavior is based on the page's scrolling root:

- `Top`: scrolls to position `0`
- `Middle`: scrolls to half of the maximum scrollable height
- `Bottom`: scrolls to the maximum available scroll position

The script uses `document.scrollingElement || document.documentElement` to determine the active scrolling container for standard pages.

## Installation

### Requirements

- A Chromium-based browser or Firefox
- [Tampermonkey](https://www.tampermonkey.net/) or a compatible userscript manager

### Install Steps

1. Install Tampermonkey in your browser.
2. Open the script file:
   [`quick-scroll-navigation.user.js`](./quick-scroll-navigation.user.js)
3. Copy the script content into a new Tampermonkey script, or import the file directly.
4. Save and enable the script.

## Usage

After installation:

1. Open any supported website.
2. Look for the floating button group in the bottom-right corner.
3. Click:
   - `顶部` to jump to the top
   - `中部` to jump to the middle
   - `底部` to jump to the bottom

Note: the button labels are currently implemented in Chinese, while this document is provided in English for repository readers.

## Repository Structure

```text
.
├── quick-scroll-navigation.user.js
├── README.md
└── README.zh-CN.md
```

## Script Metadata

The userscript currently uses the following metadata strategy:

- `@match http://*/*`
- `@match https://*/*`
- `@run-at document-idle`
- `@grant none`

This makes the script broadly available across most websites without requiring special browser permissions beyond Tampermonkey itself.

## Compatibility Notes

- Works best on standard document-scrolling pages.
- Some highly customized web apps may use internal scroll containers instead of the main document, which this version does not explicitly target.
- On pages with restrictive styling or complex overlays, the floating panel may visually overlap with existing UI.

## Limitations

- No collapse or hide toggle yet.
- No per-site enable or disable rules.
- No detection for nested custom scroll containers.
- No keyboard shortcuts in the current version.

## Possible Future Improvements

- Add a collapse/expand toggle.
- Add configurable button position.
- Add multilingual UI labels.
- Add keyboard shortcuts.
- Support custom scroll containers for SPA-heavy websites.
- Add per-domain inclusion and exclusion rules.

## Development

This repository is intentionally simple. The script is self-contained in a single `.user.js` file and does not require any build step, package manager, or external dependency.

To modify behavior:

1. Edit [`quick-scroll-navigation.user.js`](./quick-scroll-navigation.user.js).
2. Re-save or re-import the script in Tampermonkey.
3. Refresh target pages and test the behavior directly in the browser.

## License

This repository is licensed under the MIT License. See [`LICENSE`](./LICENSE) for the full text.
