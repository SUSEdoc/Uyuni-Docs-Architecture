# Guide de localisation

Ce guide explique comment ajouter et gérer les traductions pour le site Architecture de documentation Uyuni.

## Langues prises en charge

Le site prend actuellement en charge les langues suivantes :

- **Anglais (en)** - Par défaut
- **Allemand (de)** - Deutsch
- **Espagnol (es)** - Español
- **Français (fr)** - Français
- **Japonais (ja)** - 日本語
- **Chinois simplifié (zh-Hans)** - 简体中文

## Structure des répertoires

Docusaurus utilise une structure de répertoires spécifique pour les traductions :

```
i18n/
├── de/
│   ├── docusaurus-plugin-content-docs/
│   │   └── current/
│   │       └── (docs traduites)
│   └── docusaurus-theme-classic/
│       ├── footer.json
│       └── navbar.json
├── es/
│   └── ...
└── fr/
    └── ...
```

## Ajout de traductions

### Étape 1 : Initialiser les fichiers de traduction

Pour initialiser les fichiers de traduction pour une locale spécifique (par exemple, l'allemand) :

```bash
npm run write-translations -- --locale de
```

Cela crée les fichiers JSON nécessaires pour les éléments de l'interface utilisateur.

### Étape 2 : Traduire la documentation

Copiez vos fichiers de documentation dans le dossier de locale approprié :

```
i18n/[locale]/docusaurus-plugin-content-docs/current/
```

### Étape 3 : Traduire les éléments de l'interface utilisateur

Éditez les fichiers JSON créés dans :

- `navbar.json` - Éléments de navigation
- `footer.json` - Éléments de pied de page
- `code.json` - Chaînes codées en dur dans les composants React

## Construire avec les langues

### Mode développement

Le mode développement ne sert qu'une seule langue à la fois :

```bash
npm start -- --locale fr
```

### Construction de production

Pour construire toutes les langues :

```bash
npm run build
```

Puis servir localement :

```bash
npm run serve
```

## Conseils de traduction

### Maintenir la cohérence

- Utilisez une terminologie cohérente dans toutes les traductions
- Gardez le même style et ton que le contenu original
- Préservez la structure Markdown et les liens

### Tester les traductions

Après avoir ajouté des traductions :

1. Construisez le site avec `npm run build`
2. Servez localement avec `npm run serve`
3. Testez le sélecteur de langue
4. Vérifiez que tout le contenu est correctement traduit

### Fichiers de traduction automatique

Docusaurus peut générer automatiquement des fichiers de traduction pour les éléments d'interface utilisateur :

```bash
npm run write-translations -- --locale [code-locale]
```

## Bonnes pratiques

1. **Traduisez progressivement** : Commencez par les pages les plus importantes
2. **Maintenez à jour** : Synchronisez les traductions avec le contenu anglais
3. **Examinez régulièrement** : Vérifiez l'exactitude et la pertinence
4. **Testez minutieusement** : Assurez-vous que tous les liens et la navigation fonctionnent

## Structure des fichiers de locale

Chaque locale doit maintenir la même structure que le contenu anglais :

```
i18n/[locale]/
├── docusaurus-plugin-content-docs/
│   └── current/
│       ├── intro.md
│       ├── guides/
│       │   └── localization.md
│       └── tutorial-extras/
│           ├── manage-docs-versions.md
│           └── translate-your-site.md
└── docusaurus-theme-classic/
    ├── navbar.json
    ├── footer.json
    └── code.json
```

## Dépannage

### Le sélecteur de langue ne s'affiche pas

Assurez-vous que :
- La configuration i18n est correcte dans `docusaurus.config.ts`
- Les dossiers de locale existent
- Au moins un fichier traduit existe dans chaque locale

### Erreurs 404 lors du changement de langue

- Construisez le site avec `npm run build`
- Utilisez `npm run serve` au lieu de `npm start` pour tester
- Vérifiez que tous les fichiers requis existent dans chaque locale

### Traductions manquantes

Si du contenu apparaît en anglais dans une version traduite :
- Vérifiez que le fichier traduit existe au bon emplacement
- Assurez-vous que la structure des dossiers correspond exactement
- Reconstruisez le site après avoir ajouté des traductions