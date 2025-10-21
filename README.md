# Uyuni Documentation Architecture

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator for technical documentation.

## Installation

```bash
npm install
```

## Local Development

For single-locale development (English only):

```bash
npm start
```

For specific locale development:

```bash
npm start -- --locale de  # German
npm start -- --locale es  # Spanish
npm start -- --locale fr  # French
npm start -- --locale ja  # Japanese
npm start -- --locale zh-Hans  # Chinese Simplified
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

**Note**: In development mode, only one locale is served at a time. For testing multiple locales simultaneously, use the production build.

## Build

### Full Production Build (All Locales)

```bash
npm run build
```

This command generates static content for ALL locales into the `build` directory:
- `build/` - English (default)
- `build/de/` - German
- `build/es/` - Spanish  
- `build/fr/` - French
- `build/ja/` - Japanese
- `build/zh-Hans/` - Chinese Simplified

### Testing Locales Locally

After building, serve the production build to test all locales:

```bash
npm run serve
```

This serves the built site at `http://localhost:3000/Uyuni-Docs-Architecture/` with:
- Working language switcher
- All translated content accessible
- Proper locale routing (e.g., `/de/`, `/es/`, etc.)

### Build Specific Locale

```bash
npm run build -- --locale de  # Build only German
```

## Internationalization (i18n)

### Supported Languages

- **English (en)** - Default
- **German (de)** - Deutsch  
- **Spanish (es)** - Español
- **French (fr)** - Français
- **Japanese (ja)** - 日本語
- **Chinese Simplified (zh-Hans)** - 简体中文

### Adding/Updating Translations

1. **Initialize translation files** for a new locale:
```bash
npm run write-translations -- --locale <locale>
```

2. **Translate documentation**: Edit files in `i18n/<locale>/docusaurus-plugin-content-docs/current/`

3. **Translate UI elements**: Edit JSON files in `i18n/<locale>/docusaurus-theme-classic/`

4. **Test translations**: Build and serve to verify all languages work correctly

### Translation Workflow

1. Update English content first (source of truth)
2. Run build to ensure no errors
3. Update translations in respective locale folders
4. Test with `npm run build && npm run serve`
5. Commit and deploy

## Deployment

### GitHub Pages

The site deploys automatically to GitHub Pages on push to main branch.

Manual deployment:

```bash
npm run deploy
```

### Testing Before Deployment

Always test the full build before deploying:

```bash
# Clean build and test all locales
rm -rf build
npm run build
npm run serve

# Verify:
# - Language switcher works
# - All locales accessible
# - Translated content displays correctly
# - No broken links
```

## Development Tips

- **Use production build** (`npm run serve`) for testing locales
- **Development mode** (`npm start`) only serves one locale at a time
- **Always build** before testing translations
- **Clear cache** if translations don't update: `rm -rf .docusaurus build`

## Project Structure

```
├── docs/                          # English documentation (source)
├── i18n/                          # Translations
│   ├── de/                        # German translations
│   ├── es/                        # Spanish translations
│   ├── fr/                        # French translations
│   ├── ja/                        # Japanese translations
│   └── zh-Hans/                   # Chinese translations
├── src/                           # React components and pages
├── static/                        # Static assets
├── docusaurus.config.ts           # Docusaurus configuration
└── sidebars.ts                    # Documentation sidebar
