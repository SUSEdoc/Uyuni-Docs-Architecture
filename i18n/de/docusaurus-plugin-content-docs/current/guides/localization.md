# Lokalisierungsleitfaden

Dieser Leitfaden erklärt, wie Sie Übersetzungen für die Uyuni Documentation Architecture-Website hinzufügen und verwalten.

## Unterstützte Sprachen

Die Website unterstützt derzeit die folgenden Sprachen:

- **Englisch (en)** - Standard
- **Deutsch (de)** - Deutsch
- **Spanisch (es)** - Español
- **Französisch (fr)** - Français
- **Japanisch (ja)** - 日本語
- **Chinesisch Vereinfacht (zh-Hans)** - 简体中文

## Verzeichnisstruktur

Docusaurus verwendet eine spezifische Verzeichnisstruktur für Übersetzungen:

```
i18n/
├── de/
│   ├── docusaurus-plugin-content-docs/
│   │   └── current/
│   │       └── (übersetzte Dokumente)
│   └── docusaurus-theme-classic/
│       ├── footer.json
│       └── navbar.json
├── es/
│   └── ...
└── fr/
    └── ...
```

## Übersetzungen hinzufügen

### Schritt 1: Übersetzungsdateien initialisieren

Um Übersetzungsdateien für eine bestimmte Sprache zu initialisieren (z.B. Deutsch):

```bash
npm run write-translations -- --locale de
```

Dies erstellt die notwendigen JSON-Dateien für UI-Elemente.

### Schritt 2: Dokumentation übersetzen

Kopieren Sie Ihre Dokumentationsdateien in den entsprechenden Sprachordner:

```bash
mkdir -p i18n/de/docusaurus-plugin-content-docs/current
cp -r docs/* i18n/de/docusaurus-plugin-content-docs/current/
```

Übersetzen Sie dann den Inhalt in diesen Dateien.

### Schritt 3: UI-Elemente übersetzen

Bearbeiten Sie die generierten JSON-Dateien:

- `i18n/{locale}/docusaurus-theme-classic/navbar.json` - Navigationsleistentext
- `i18n/{locale}/docusaurus-theme-classic/footer.json` - Fußzeilentext
- `i18n/{locale}/code.json` - React-Komponenten-Strings

### Schritt 4: Lokal testen

Starten Sie den Entwicklungsserver für eine bestimmte Sprache:

```bash
npm run start -- --locale de
```

### Schritt 5: Für Produktion erstellen

Alle Sprachen erstellen:

```bash
npm run build
```

Oder eine bestimmte Sprache erstellen:

```bash
npm run build -- --locale de
```

## Weblate für Übersetzungen verwenden

[Weblate](https://weblate.org/) wird für kollaboratives Übersetzungsmanagement empfohlen:

1. **Weblate-Projekt einrichten** für Ihre Dokumentation
2. **Git-Repository verbinden** mit Weblate
3. **Komponenten konfigurieren** für jeden Dokumentationsbereich
4. **Übersetzer einladen** zur Mitarbeit
5. **Übersetzungen überprüfen und zusammenführen** zurück in Ihr Repository

## Sprachumschalter

Ein Sprach-Dropdown erscheint automatisch in der Navigationsleiste, wenn mehrere Sprachen konfiguriert sind. Benutzer können dynamisch zwischen Sprachen wechseln.

## Best Practices

1. **Englisch als Quelle beibehalten**: Aktualisieren Sie immer zuerst die englische Dokumentation
2. **Übersetzungsschlüssel verwenden**: Verwenden Sie für UI-Elemente konsistente Übersetzungsschlüssel
3. **Struktur beibehalten**: Behalten Sie dieselbe Dateistruktur in allen Sprachen bei
4. **Übersetzungen versionieren**: Synchronisieren Sie Übersetzungen mit Dokumentationsversionen
5. **Regelmäßige Updates**: Halten Sie Übersetzungen mit Quelländerungen aktuell

## Übersetzungsworkflow mit Git

```bash
# 1. Branch für Übersetzungen erstellen
git checkout -b translations/german

# 2. Übersetzte Dateien hinzufügen
git add i18n/de/

# 3. Änderungen committen
git commit -m "Deutsche Übersetzungen hinzufügen"

# 4. Push und Pull Request erstellen
git push origin translations/german
```

## Automatisierte Übersetzungsupdates

Erwägen Sie die Einrichtung automatisierter Workflows mit:

- **GitHub Actions** für CI/CD
- **Weblate-Integration** für automatische Pull Requests
- **Translation Memory** zur Wiederverwendung früherer Übersetzungen

## Ressourcen

- [Docusaurus i18n Dokumentation](https://docusaurus.io/docs/i18n/introduction)
- [Weblate Dokumentation](https://docs.weblate.org/)
- [Crowdin Integration](https://docusaurus.io/docs/i18n/crowdin)

## Hilfe benötigt?

Bei Fragen zur Lokalisierung öffnen Sie bitte ein Issue im Repository oder kontaktieren Sie das Dokumentationsteam.