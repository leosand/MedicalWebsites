# Meddical - Site Web Hospitalier

Un site web moderne et professionnel pour un établissement de santé, développé avec React et Material-UI.

## 🚀 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/your-username/meddical-website.git
cd meddical-website
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

## 🛠️ Technologies Utilisées

- React 18
- Material-UI
- Styled Components
- Vite
- SASS
- React Router

## 📁 Structure du Projet

```
meddical-website/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── layouts/        # Layouts de l'application
│   ├── pages/          # Pages principales
│   ├── assets/         # Ressources statiques
│   └── utils/          # Utilitaires et helpers
├── public/            # Fichiers publics
└── dist/             # Build de production
```

## 🔒 Sécurité

Le site intègre plusieurs mesures de sécurité :
- Protection XSS
- Headers de sécurité
- CSP (Content Security Policy)
- HSTS
- Protection des fichiers sensibles

## 📦 Déploiement sur Hostinger

1. Construisez le projet :
```bash
npm run build
```

2. Uploadez le contenu du dossier `dist` sur votre hébergement Hostinger via FTP

3. Assurez-vous que le fichier `.htaccess` est correctement uploadé à la racine

4. Configurez votre domaine dans le panneau de contrôle Hostinger

## 🔧 Configuration

- Le fichier `.env` pour les variables d'environnement
- `.htaccess` pour la configuration Apache
- `vite.config.js` pour la configuration de build

## 📝 License

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request. 
