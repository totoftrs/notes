# Notes App

Reproduction du challenge [Frontend Mentor — Note Taking Web App](https://www.frontendmentor.io/challenges/note-taking-web-app-773r7bUfOG).

## Étapes

### 1. Persistance — localStorage
- [x] Sauvegarder les notes dans `localStorage` au `setNotes`
- [x] Charger les notes depuis `localStorage` au démarrage

### 2. Édition du titre
- [x] Rendre le titre éditable directement dans la vue principale (pas seulement à la création)

### 3. Tags
- [ ] Ajouter un champ tags à la note (tableau de strings)
- [ ] Afficher les tags sur chaque note dans la sidebar
- [ ] Permettre d'ajouter / supprimer des tags

### 4. Archive
- [ ] Ajouter un champ `archived: boolean` sur les notes
- [ ] Bouton "Archiver" sur une note sélectionnée
- [ ] Vue séparée "Notes archivées" dans la sidebar
- [ ] Pouvoir désarchiver une note

### 5. Recherche
- [ ] Input de recherche dans la sidebar
- [ ] Filtrer les notes par titre en temps réel (debounce ?)

### 6. Filtres par tag
- [ ] Afficher la liste des tags existants dans la sidebar
- [ ] Cliquer sur un tag filtre les notes qui le contiennent

### 7. Thème clair / sombre
- [ ] Bouton toggle dark/light mode
- [ ] Persister le thème choisi dans `localStorage`

### 8. CSS / UI
- [ ] Reproduire fidèlement le design Frontend Mentor
- [ ] Responsive mobile

---

## Stack
- React + TypeScript
- Vite
- SCSS
- localStorage (pas de backend)
