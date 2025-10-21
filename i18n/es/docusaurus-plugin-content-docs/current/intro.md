---
sidebar_position: 1
---

# Tutorial de Introducción

Vamos a descubrir **Docusaurus en menos de 5 minutos**.

## Primeros pasos

Comience **creando un nuevo sitio**.

O **pruebe Docusaurus inmediatamente** con **[docusaurus.new](https://docusaurus.new)**.

### Lo que necesitará

- [Node.js](https://nodejs.org/en/download/) versión 20.0 o superior:
  - Al instalar Node.js, se recomienda marcar todas las casillas relacionadas con las dependencias.

## Generar un nuevo sitio

Genere un nuevo sitio de Docusaurus usando la **plantilla clásica**.

La plantilla clásica se agregará automáticamente a su proyecto después de ejecutar el comando:

```bash
npm init docusaurus@latest my-website classic
```

Puede escribir este comando en el Símbolo del sistema, PowerShell, Terminal o cualquier otro terminal integrado de su editor de código.

El comando también instala todas las dependencias necesarias que necesita para ejecutar Docusaurus.

## Iniciar su sitio

Ejecute el servidor de desarrollo:

```bash
cd my-website
npm run start
```

El comando `cd` cambia el directorio con el que está trabajando. Para trabajar con su sitio de Docusaurus recién creado, deberá navegar el terminal allí.

El comando `npm run start` construye su sitio web localmente y lo sirve a través de un servidor de desarrollo, listo para que lo vea en http://localhost:3000/.

Abra `docs/intro.md` (esta página) y edite algunas líneas: el sitio **se recarga automáticamente** y muestra sus cambios.