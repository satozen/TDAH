# 🧠 TDAH chez l'Entrepreneur

Une application web ultra-moderne construite avec **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS** et **Framer Motion**. Programme d'apprentissage personnalisé par IA pour aider les entrepreneurs avec TDAH à transformer leurs défis en super-pouvoirs.

## 🎯 Caractéristiques

### Sales Funnel Complet
- ✅ **Landing Page Premium** - Design inspiré des meilleurs sites de vente avec animations fluides
- ✅ **Copywriting Persuasif** - Sections problème/solution, témoignages, bénéfices
- ✅ **CTAs Optimisés** - Appels à l'action stratégiquement placés
- ✅ **Formulaire d'Onboarding** - Collecte intelligente des informations utilisateur

### Expérience Utilisateur Exceptionnelle
- 🎨 **Design Apple-Style** - Interface épurée, élégante et professionnelle
- ⚡ **Animations Fluides** - Transitions et micro-interactions avec Framer Motion
- 📱 **Responsive Total** - Parfait sur mobile, tablette et desktop
- 🎯 **Personnalisation IA** - Contenu adapté au profil de chaque entrepreneur

### Programme Complet
- 🧠 Module 1: Comprendre votre TDAH
- ⏰ Module 2: Gestion du temps et énergie
- 📋 Module 3: Organisation
- 🎯 Module 4: Focus et concentration
- 💡 Module 5: Prise de décision
- 🤝 Module 6: Relations et communication
- ❤️ Module 7: Gestion émotionnelle
- ⚡ Module 8: Votre système personnalisé

## 🚀 Installation Rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Lancement en 3 étapes

```bash
# 1. Naviguer vers le projet
cd "TDAH chez l'entrepreneur"

# 2. Installer les dépendances
npm install

# 3. Lancer l'application
npm run dev
```

L'application sera accessible sur **http://localhost:3000** 🎉

## 🛠️ Stack Technique

| Technologie | Version | Usage |
|------------|---------|-------|
| **Next.js** | 14.0.4 | Framework React avec SSR et optimisations |
| **React** | 18.2.0 | Bibliothèque UI |
| **TypeScript** | 5.3.3 | Typage statique et sécurité |
| **Tailwind CSS** | 3.4.0 | Framework CSS utilitaire |
| **Framer Motion** | 10.16.16 | Animations et transitions fluides |
| **OpenAI** | 4.20.1 | Personnalisation IA (optionnel) |

## 📁 Structure du Projet

```
/
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Page avec gestion du funnel
│   └── globals.css             # Styles Tailwind personnalisés
├── components/
│   ├── LandingPage.tsx         # Page de vente avec funnel
│   ├── WelcomeForm.tsx         # Formulaire d'onboarding
│   ├── Dashboard.tsx           # Tableau de bord utilisateur
│   ├── ModuleNavigation.tsx    # Navigation entre modules
│   ├── ModuleContent.tsx       # Affichage du contenu
│   └── ProgressTracker.tsx     # Suivi de progression
├── lib/
│   └── modulesData.ts          # Données des modules (TypeScript)
├── types/
│   └── index.ts                # Interfaces TypeScript
├── tailwind.config.ts          # Configuration Tailwind
├── tsconfig.json               # Configuration TypeScript
└── next.config.js              # Configuration Next.js
```

## 🎨 Design System

### Couleurs Apple
```typescript
'apple-blue': '#007AFF',        // Primaire
'apple-green': '#34C759',       // Succès
'apple-purple': '#AF52DE',      // Accent
'apple-orange': '#FF9500',      // Attention
'apple-gray': '#86868B',        // Secondaire
```

### Typography
- Font: SF Pro Display / SF Pro Text (système Apple)
- Letter spacing: -0.022em (apple) / -0.04em (apple-tight)

### Composants Réutilisables
- `btn-primary` - Bouton principal avec gradient
- `btn-secondary` - Bouton secondaire outline
- `card-apple` - Carte avec effet hover
- `glass-effect` - Effet glassmorphism
- `input-apple` - Input style Apple

## 🤖 Configuration IA (Optionnel)

Pour activer la personnalisation IA avec OpenAI GPT-4 :

1. Créez un fichier `.env.local` :
```bash
NEXT_PUBLIC_OPENAI_API_KEY=votre_clé_api_ici
```

2. Obtenez une clé API sur [platform.openai.com](https://platform.openai.com/api-keys)

> **Note**: L'application fonctionne parfaitement sans clé API, avec du contenu personnalisé générique intelligent.

## 📦 Scripts Disponibles

```bash
npm run dev      # Lancer en développement
npm run build    # Build pour production
npm run start    # Lancer le build en production
npm run lint     # Vérifier le code
```

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel
```

### Autres plateformes
- **Netlify**: Compatible avec Next.js
- **Railway**: Support Next.js natif
- **AWS Amplify**: Configuration SSR requise

## 🎯 Parcours Utilisateur

```
Landing Page (Vente)
      ↓
[CTA: Commencer]
      ↓
Formulaire d'Onboarding
      ↓
Dashboard avec Progression
      ↓
Module 1 → 2 → 3 → ... → 8
      ↓
Système Personnalisé Créé
```

## 🏆 Fonctionnalités Premium

- [x] Landing page avec sales funnel optimisé
- [x] Animations Framer Motion fluides
- [x] Design système Apple complet
- [x] 8 modules de contenu riche
- [x] Personnalisation IA
- [x] Suivi de progression visuel
- [x] TypeScript pour la robustesse
- [x] Responsive design complet
- [x] SEO optimisé avec Next.js
- [x] Performance maximale

## 💡 Personnalisation

### Modifier les couleurs
Éditez `tailwind.config.ts` pour changer la palette.

### Ajouter des modules
1. Ajoutez les données dans `lib/modulesData.ts`
2. Mettez à jour le composant `ModuleNavigation.tsx`
3. Le reste est automatique ! ✨

### Changer le contenu du funnel
Éditez `components/LandingPage.tsx` pour personnaliser:
- Les sections
- Les témoignages
- Les bénéfices
- Les CTAs

## 🐛 Troubleshooting

**Port 3000 déjà utilisé ?**
```bash
PORT=3001 npm run dev
```

**Erreurs TypeScript ?**
```bash
npm run build  # Vérifie tous les types
```

**Problèmes de cache ?**
```bash
rm -rf .next
npm run dev
```

## 🤝 Contribution

Ce projet est conçu pour évoluer. Idées d'améliorations:
- [ ] Backend avec base de données (Supabase/Prisma)
- [ ] Authentification utilisateur
- [ ] Sauvegarde de progression
- [ ] Export PDF des modules
- [ ] Communauté d'entrepreneurs
- [ ] Version mobile native (React Native)
- [ ] Intégration Stripe pour version premium

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 Licence

Projet créé dans un but éducatif et de soutien à la communauté entrepreneuriale avec TDAH.

## 💪 À propos du TDAH Entrepreneurial

Le TDAH n'est pas un handicap dans l'entrepreneuriat - c'est souvent un catalyseur. 

**Forces uniques des entrepreneurs TDAH:**
- ✨ Créativité débordante
- ⚡ Hyperfocus puissant
- 🎯 Prise de risque calculée
- 🔥 Énergie contagieuse
- 💡 Vision innovante

Cette application aide à **maximiser ces forces** tout en développant des stratégies pour gérer les défis quotidiens.

---

**Fait avec ❤️ et ⚡ pour les entrepreneurs TDAH**

*Propulsé par Next.js 14 + React 18 + TypeScript + Tailwind CSS + Framer Motion*
