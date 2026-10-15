# Plan Backend — Notes App

## Option 1 — localStorage (sans backend)

**Principe** : stocker les notes dans le navigateur.

**Étapes**
1. Au `setNotes` → `localStorage.setItem('notes', JSON.stringify(notes))`
2. Au démarrage → `JSON.parse(localStorage.getItem('notes') ?? '[]')`
3. Optionnel : encapsuler dans un hook `useLocalStorage`

**Avantages** : zéro backend, zéro infra, rapide à coder  
**Limites** : données liées au navigateur, pas de sync entre appareils, max ~5 Mo

**Difficulté** : ⭐ Très facile — 1 à 2h

---

## Option 2 — Backend léger : Node.js + Express + fichier JSON

**Principe** : un petit serveur Express qui lit/écrit un fichier `notes.json`.

**Étapes**
1. Créer un projet Node.js avec Express
2. Routes : `GET /notes`, `POST /notes`, `PUT /notes/:id`, `DELETE /notes/:id`
3. Lire/écrire `notes.json` avec `fs.readFileSync` / `fs.writeFileSync`
4. Brancher le frontend sur ces routes avec `fetch`
5. Gérer le CORS (`cors` package)

**Avantages** : simple, pas de base de données  
**Limites** : pas scalable, données perdues si le fichier est supprimé

**Difficulté** : ⭐⭐ Facile — 3 à 5h

---

## Option 3 — Backend avec base de données (Node.js + SQLite ou PostgreSQL)

**Principe** : un serveur Express avec une vraie base de données.

**Étapes**
1. Créer le serveur Express
2. Choisir SQLite (simple, fichier local) ou PostgreSQL (plus robuste)
3. Créer la table `notes (id, title, content, created_at)`
4. Utiliser un ORM comme **Prisma** pour simplifier les requêtes
5. Créer les routes CRUD
6. Brancher le frontend
7. Déployer le backend (Railway, Render, Fly.io...)

**Avantages** : robuste, scalable, données persistantes  
**Limites** : plus long à mettre en place, nécessite un hébergement

**Difficulté** : ⭐⭐⭐ Intermédiaire — 1 à 2 jours

---

## Option 4 — BaaS : Firebase ou Supabase (sans écrire de backend)

**Principe** : utiliser un service qui fournit déjà la base de données et l'API.

### Firebase (Firestore)
1. Créer un projet Firebase
2. Installer `firebase` dans le frontend
3. Remplacer le state React par des appels Firestore (`addDoc`, `getDocs`, `deleteDoc`)
4. Auth gratuite incluse si besoin

### Supabase (PostgreSQL managé)
1. Créer un projet Supabase
2. Créer la table `notes` via l'interface
3. Installer `@supabase/supabase-js`
4. Remplacer le state par des appels Supabase

**Avantages** : pas de backend à écrire, auth et realtime inclus, gratuit au départ  
**Limites** : dépendance à un service tiers, moins de contrôle

**Difficulté** : ⭐⭐ Facile — 2 à 4h

---

## Recommandation

| Objectif | Option recommandée |
|---|---|
| Tester / prototype rapide | Option 1 — localStorage |
| Apprendre le backend | Option 2 — Node.js + JSON |
| App sérieuse avec DB | Option 3 — Prisma + PostgreSQL |
| Aller vite sans backend | Option 4 — Supabase |
