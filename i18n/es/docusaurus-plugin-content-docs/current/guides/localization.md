# Guía de Localización

Esta guía explica cómo agregar y gestionar traducciones para el sitio de Arquitectura de Documentación de Uyuni.

## Idiomas Soportados

El sitio actualmente soporta los siguientes idiomas:

- **Inglés (en)** - Predeterminado
- **Alemán (de)** - Deutsch
- **Español (es)** - Español
- **Francés (fr)** - Français
- **Japonés (ja)** - 日本語
- **Chino Simplificado (zh-Hans)** - 简体中文

## Estructura de Directorios

Docusaurus utiliza una estructura de directorios específica para las traducciones:

```
i18n/
├── de/
│   ├── docusaurus-plugin-content-docs/
│   │   └── current/
│   │       └── (documentos traducidos)
│   └── docusaurus-theme-classic/
│       ├── footer.json
│       └── navbar.json
├── es/
│   └── ...
└── fr/
    └── ...
```

## Agregando Traducciones

### Paso 1: Inicializar Archivos de Traducción

Para inicializar archivos de traducción para un idioma específico (por ejemplo, español):

```bash
npm run write-translations -- --locale es
```

Esto crea los archivos JSON necesarios para los elementos de la interfaz de usuario.

### Paso 2: Traducir Documentación

Copie sus archivos de documentación a la carpeta del idioma apropiado:

```bash
mkdir -p i18n/es/docusaurus-plugin-content-docs/current
cp -r docs/* i18n/es/docusaurus-plugin-content-docs/current/
```

Luego traduzca el contenido en estos archivos.

## Mejores Prácticas

1. **Mantener el inglés como fuente**: Siempre actualice primero la documentación en inglés
2. **Usar claves de traducción**: Para elementos de UI, use claves de traducción consistentes
3. **Mantener la estructura**: Mantenga la misma estructura de archivos en todos los idiomas
4. **Versionar traducciones**: Sincronice las traducciones con las versiones de documentación
5. **Actualizaciones regulares**: Mantenga las traducciones actualizadas con los cambios fuente

## Recursos

- [Documentación i18n de Docusaurus](https://docusaurus.io/docs/i18n/introduction)
- [Documentación de Weblate](https://docs.weblate.org/)

## ¿Necesita Ayuda?

Para preguntas sobre localización, por favor abra un issue en el repositorio o contacte al equipo de documentación.