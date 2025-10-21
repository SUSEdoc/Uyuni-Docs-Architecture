---
sidebar_position: 1
---

# Gestionar Versiones de Documentación

Docusaurus puede gestionar múltiples versiones de su documentación.

## Crear una versión de documentación

Lance la versión 1.0 de su proyecto:

```bash
npm run docusaurus docs:version 1.0
```

La carpeta `docs` se copia en `versioned_docs/version-1.0` y se crea `versions.json`.

Su documentación ahora tiene 2 versiones:

- `1.0` en `http://localhost:3000/docs/` para la documentación de la versión 1.0
- `current` en `http://localhost:3000/docs/next/` para la **documentación próxima, no publicada**

## Agregar un Menú Desplegable de Versiones

Para navegar sin problemas entre versiones, agregue un menú desplegable de versiones.

Modifique el archivo `docusaurus.config.js`:

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
