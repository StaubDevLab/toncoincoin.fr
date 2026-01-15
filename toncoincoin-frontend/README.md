# TonCoinCoin - Frontend 🎨

Ceci est l'application frontend de **TonCoinCoin**, développée avec Next.js.

## 🛠 Stack Technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **UI** : [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/)
- **Composants** : [Radix UI](https://www.radix-ui.com/)
- **Gestion d'état / Fetching** : [TanStack Query v5](https://tanstack.com/query/latest)
- **Authentification** : [NextAuth.js v5](https://authjs.dev/)
- **Icônes** : [Lucide React](https://lucide.dev/)

## 🚀 Démarrage

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

### Build

```bash
npm run build
npm start
```

## 📂 Organisation du code

- `/app` : Routes, layouts et pages (Next.js App Router).
- `/components` : Composants UI réutilisables.
- `/lib` : Utilitaires et fonctions partagées.
- `/providers` : Providers de contexte (QueryClient, Auth, Theme).
- `/public` : Assets statiques.

## 🧪 Linting

```bash
npm run lint
```
