---
sidebar_position: 2
---

# Ihre Website übersetzen

Lassen Sie uns `docs/intro.md` ins Französische übersetzen.

## i18n konfigurieren

Ändern Sie `docusaurus.config.js`, um Unterstützung für die `fr` Sprache hinzuzufügen:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Ein Dokument übersetzen

Kopieren Sie die `docs/intro.md` Datei in den `i18n/fr` Ordner:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Übersetzen Sie `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` ins Französische.

## Ihre lokalisierte Website starten

Starten Sie Ihre Website mit der französischen Sprache:

```bash
npm run start -- --locale fr
```

Ihre lokalisierte Website ist unter [http://localhost:3000/fr/](http://localhost:3000/fr/) erreichbar und die `Getting Started` Seite ist übersetzt.

:::caution

In der Entwicklung können Sie nur eine Sprache gleichzeitig verwenden.

:::

## Sprach-Dropdown hinzufügen

Um nahtlos zwischen Sprachen zu navigieren, fügen Sie ein Sprach-Dropdown hinzu.

Ändern Sie die `docusaurus.config.js` Datei:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```
