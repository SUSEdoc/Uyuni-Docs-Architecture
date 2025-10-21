---
sidebar_position: 2
---

# Traduce tu sitio

Vamos a traducir `docs/intro.md` al francés.

## Configurar i18n

Modifica `docusaurus.config.js` para agregar soporte para el idioma `fr`:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Traducir un documento

Copia el archivo `docs/intro.md` a la carpeta `i18n/fr`:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Traduce `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` al francés.

## Iniciar tu sitio localizado

Inicia tu sitio en el idioma francés:

```bash
npm run start -- --locale fr
```

Tu sitio localizado es accesible en [http://localhost:3000/fr/](http://localhost:3000/fr/) y la página `Getting Started` está traducida.

:::caution

En desarrollo, solo puedes usar un idioma a la vez.

:::

## Agregar un Menú Desplegable de Idiomas

Para navegar sin problemas entre idiomas, agrega un menú desplegable de idiomas.

Modifica el archivo `docusaurus.config.js`:

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
