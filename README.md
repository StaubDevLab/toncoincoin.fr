# TonCoinCoin 🪙

TonCoinCoin est un tableau de bord (dashboard) moderne et performant pour la gestion et le suivi, construit avec les dernières technologies du web.

## 🚀 Technologies

Le projet est basé sur une stack technique de pointe :

**Frontend :**
- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) pour le styling
- [Radix UI](https://www.radix-ui.com/) pour les composants accessibles
- [TanStack Query v5](https://tanstack.com/query/latest) pour la gestion du cache et des données
- [NextAuth.js v5](https://authjs.dev/) pour l'authentification
- [Lucide React](https://lucide.dev/) pour l'iconographie

**Infrastructure :**
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL 16](https://www.postgresql.org/) (Base de données principale)
- [Redis](https://redis.io/) (Cache optionnel)
- [Adminer](https://www.adminer.org/) (Interface de gestion de base de données)

## 📦 Structure du projet

```text
.
├── toncoincoin-frontend/   # Application Next.js
├── compose.yml             # Orchestration Docker (DB, Redis, Adminer, Front)
└── README.md               # Documentation principale
```

## 🛠️ Installation et Démarrage

### Prérequis
- Node.js 20+
- Docker & Docker Compose

### Mode Docker (Recommandé pour la prod/test)

Pour lancer l'ensemble de l'infrastructure (Base de données, Adminer, Redis et Frontend) :

```bash
docker compose up -d
```

L'application sera disponible sur `http://localhost:3000`.
L'interface Adminer sera accessible sur `http://localhost:8080`.

### Mode Développement (Local)

Si vous souhaitez travailler sur le frontend avec le Hot Reload :

1.  **Lancer la base de données :**
    ```bash
    docker compose up -d toncoincoin-db toncoincoin-adminer toncoincoin-redis
    ```

2.  **Installer les dépendances du front :**
    ```bash
    cd toncoincoin-frontend
    npm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```

## 🔐 Configuration

Créez un fichier `.env.local` dans le dossier `toncoincoin-frontend` (si non présent) :

```env
AUTH_SECRET="votre_secret_ici"
# Autres variables selon les besoins (DB_URL, etc.)
```

## 🐳 Docker Compose

Le fichier `compose.yml` définit les services suivants :
- `toncoincoin-frontend` : L'application Next.js.
- `toncoincoin-db` : Base de données PostgreSQL (Port 5432).
- `toncoincoin-adminer` : GUI pour PostgreSQL (Port 8080).
- `toncoincoin-redis` : Instance Redis pour le cache (Port 6379).
