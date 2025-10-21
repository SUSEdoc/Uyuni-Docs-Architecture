---
sidebar_position: 1
---

# Dokumentationsversionen verwalten

Docusaurus kann mehrere Versionen Ihrer Dokumentation verwalten.

## Dokumentationsversion erstellen

Veröffentlichen Sie Version 1.0 Ihres Projekts:

```bash
npm run docusaurus docs:version 1.0
```

Der `docs` Ordner wird in `versioned_docs/version-1.0` kopiert und `versions.json` wird erstellt.

Ihre Dokumentation hat jetzt 2 Versionen:

- `1.0` unter `http://localhost:3000/docs/` für die Version 1.0 Dokumentation
- `current` unter `http://localhost:3000/docs/next/` für die **kommende, unveröffentlichte Dokumentation**

## Versions-Dropdown hinzufügen

Um nahtlos zwischen Versionen zu navigieren, fügen Sie ein Versions-Dropdown hinzu.

Ändern Sie die `docusaurus.config.js` Datei:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
