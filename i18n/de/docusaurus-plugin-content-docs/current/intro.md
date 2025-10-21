---
sidebar_position: 1
---

# Tutorial Einführung

Lassen Sie uns **Docusaurus in weniger als 5 Minuten** entdecken.

## Erste Schritte

Beginnen Sie mit der **Erstellung einer neuen Website**.

Oder **probieren Sie Docusaurus sofort** mit **[docusaurus.new](https://docusaurus.new)** aus.

### Was Sie benötigen

- [Node.js](https://nodejs.org/en/download/) Version 20.0 oder höher:
  - Bei der Installation von Node.js wird empfohlen, alle Kontrollkästchen für Abhängigkeiten zu aktivieren.

## Eine neue Website generieren

Generieren Sie eine neue Docusaurus-Website mit der **klassischen Vorlage**.

Die klassische Vorlage wird automatisch zu Ihrem Projekt hinzugefügt, nachdem Sie den Befehl ausgeführt haben:

```bash
npm init docusaurus@latest my-website classic
```

Sie können diesen Befehl in die Eingabeaufforderung, PowerShell, das Terminal oder jedes andere integrierte Terminal Ihres Code-Editors eingeben.

Der Befehl installiert auch alle notwendigen Abhängigkeiten, die Sie zum Ausführen von Docusaurus benötigen.

## Ihre Website starten

Führen Sie den Entwicklungsserver aus:

```bash
cd my-website
npm run start
```

Der `cd` Befehl wechselt das Verzeichnis, mit dem Sie arbeiten. Um mit Ihrer neu erstellten Docusaurus-Website zu arbeiten, müssen Sie das Terminal dorthin navigieren.

Der `npm run start` Befehl erstellt Ihre Website lokal und stellt sie über einen Entwicklungsserver bereit, der unter http://localhost:3000/ für Sie bereitsteht.

Öffnen Sie `docs/intro.md` (diese Seite) und bearbeiten Sie einige Zeilen: Die Website **lädt automatisch neu** und zeigt Ihre Änderungen an.