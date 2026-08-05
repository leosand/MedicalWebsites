# 🏥 Meddical — Site Web Hospitalier

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-0081CB?style=flat-square&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E)

**Meddical** est un site web vitrine moderne et responsive pour un centre hospitalier, développé avec React et Material-UI. Il présente les services médicaux, l'équipe de médecins et un espace de contact, avec un soin particulier apporté au SEO (données structurées, Open Graph) et à la sécurité (headers HTTP, CSP, routage SPA).

> 💡 Projet *showcase* basé sur le template Figma communautaire *MEDDICAL — Hospital website template (Community)*.

## ✨ Key Features

- 🚨 **Services médicaux** : urgences 24/7, consultations spécialisées, imagerie médicale, laboratoire d'analyses, chirurgie et maternité
- 👨‍⚕️ **Équipe de médecins** : cartes de présentation des praticiens avec liens vers leurs réseaux sociaux
- 📞 **Page de contact** : formulaire, adresse, téléphone, e-mail et horaires d'ouverture
- 📱 **Design responsive** : header avec menu mobile (drawer) et mise en page fluide
- 🎬 **Animations** fluides avec Framer Motion
- 🔍 **SEO intégré** : métadonnées par page, Open Graph, Twitter Cards et données structurées JSON-LD (`MedicalOrganization` / `MedicalClinic`)
- 🔒 **Sécurité renforcée** : `.htaccess` (CSP, HSTS, X-Content-Type-Options, X-Frame-Options) et compression GZIP
- 🧪 **Tests unitaires** avec Jest et React Testing Library

## 🛠 Technical Stack

| Technologie | Rôle |
|---|---|
| [React 18](https://react.dev) | Bibliothèque UI |
| [Vite 5](https://vitejs.dev) | Bundler / serveur de développement |
| [Material-UI 5](https://mui.com) | Bibliothèque de composants |
| [styled-components](https://styled-components.com) | Styles CSS-in-JS |
| [React Router 6](https://reactrouter.com) | Routage client |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Axios](https://axios-http.com) | Requêtes HTTP |
| [SASS](https://sass-lang.com) | Styles préprocessés |
| [Jest](https://jestjs.io) + [Testing Library](https://testing-library.com) | Tests unitaires |
| [ESLint](https://eslint.org) + [Prettier](https://prettier.io) | Qualité de code |

## 🚀 Getting Started

**Prérequis** : [Node.js](https://nodejs.org) ≥ 18 et npm.

```bash
# 1. Cloner le dépôt
git clone https://github.com/leosand/MedicalWebsites.git
cd MedicalWebsites

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

### Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (Vite) |
| `npm run build` | Build de production (dossier `dist/`) |
| `npm run preview` | Prévisualisation du build de production |
| `npm test` | Lancement des tests Jest |
| `npm run lint` | Vérification ESLint |
| `npm run format` | Formatage Prettier |

### Déploiement (ex. Hostinger)

1. Générer le build : `npm run build`
2. Uploader le contenu du dossier `dist/` à la racine de l'hébergement
3. Vérifier que `.htaccess` est bien présent à la racine (sécurité + fallback du routage SPA vers `index.html`)

### Structure du projet

```
src/
├── assets/        # Styles SCSS, images et logo
├── components/    # Composants réutilisables (Header, Footer)
├── layouts/       # Layouts de l'application (MainLayout)
├── pages/         # Pages (Home, Services, Doctors, Contact, NotFound)
└── utils/         # Utilitaires (SEO : métadonnées et données structurées)
```

## 📄 Licence

Projet *showcase* basé sur le template Figma communautaire **MEDDICAL — Hospital website template (Community)**. Aucun fichier `LICENSE` n'est inclus dans le dépôt.
