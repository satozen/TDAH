# 🧠 Module 1 - Architecture de Personnalisation IA

## Vue d'ensemble

Le Module 1 combine **contenu scientifique fixe** (basé sur Russell Barkley) avec **personnalisation IA** via Claude (Anthropic).

## 🎯 Objectif

Créer une expérience d'apprentissage qui:
- Est scientifiquement rigoureuse (Barkley)
- S'adapte au profil entrepreneurial unique de chaque utilisateur
- Génère des exemples concrets liés à leur business/secteur
- Propose un plan d'action personnalisé

## 📊 Flow utilisateur

```
[Intro] 
   ↓
[Formulaire Profiling] (5 étapes)
   ↓
[API Claude] → Génération contenu personnalisé
   ↓
[Module Content] → Sections fixes + sections personnalisées
```

## 🗂️ Structure des fichiers

```
components/
└── Module1.tsx                    # Composant principal du module

app/api/
└── personalize-module1/
    └── route.ts                   # API route pour appel à Claude
```

## 🔧 Configuration

### 1. Créer le fichier `.env.local`

```bash
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### 2. Obtenir une clé API Anthropic

1. Aller sur https://console.anthropic.com/
2. Créer un compte
3. Générer une API key
4. Copier dans `.env.local`

**Coût estimé**: ~$0.25 par personnalisation (avec Claude Haiku)

## 📝 Données collectées (Profiling Form)

### Étape 1: Identité
- `name`: Prénom
- `business`: Description du business

### Étape 2: Contexte business
- `sector`: Secteur d'activité (agricole, construction, tech, commerce, service, autre)
- `businessStage`: Stade (idée, lancement, croissance, établi)

### Étape 3: Diagnostic
- `tdahDiagnosed`: Statut diagnostic (oui, non, en cours)

### Étape 4: Défis
- `mainChallenges`: 3 défis max parmi:
  - Gestion du temps
  - Focus/concentration
  - Submergé/trop de projets
  - Procrastination
  - Ne termine rien
  - Désorganisation
  - Paralysie décisionnelle
  - Burnout
  - Impulsivité
  - Difficulté à déléguer

### Étape 5: Pain point principal
- `biggestPain`: Description libre (textarea)

## 🤖 Prompt Engineering

### System Prompt (Expertise Barkley)

Contient:
- Modèle des fonctions exécutives de Barkley
- 4 fonctions exécutives affectées
- Concept de "temps myope"
- Approche compassionnelle
- Instructions de format JSON

### User Prompt (Profil utilisateur)

Injecte:
- Toutes les données du profiling
- Défis formatés lisiblement
- Pain point exact

### Réponse attendue de Claude

```json
{
  "welcomeMessage": "Message personnalisé (2-3 phrases)",
  "tdahManifestations": [
    "3-4 exemples de manifestations TDAH dans leur business"
  ],
  "relevantExamples": [
    "2-3 scénarios concrets de leur réalité"
  ],
  "customizedStrengths": [
    "3-4 forces TDAH adaptées à leur profil"
  ],
  "actionPlan": [
    "3-5 actions concrètes à prendre cette semaine"
  ]
}
```

## 🎨 Sections du Module

### Sections FIXES (contenu scientifique)

1. **La science du TDAH** (Barkley)
   - Vidéo/animation explicative
   - Modèle des fonctions exécutives
   - Neurobiologie simplifiée

2. **Les 4 fonctions exécutives affectées**
   - Mémoire de travail
   - Auto-dialogue
   - Régulation émotionnelle
   - Reconstitution/créativité
   - Impact sur l'entrepreneuriat

### Sections PERSONNALISÉES (génér

ées par IA)

3. **Votre profil TDAH entrepreneurial**
   - Manifestations spécifiques à leur business
   - Exemples concrets de leur quotidien
   - Validation de leur expérience

4. **Vos super-pouvoirs cachés**
   - Forces TDAH appliquées à leur secteur
   - Avantages compétitifs uniques
   - Témoignages d'entrepreneurs similaires

5. **Votre plan d'action personnalisé**
   - 3-5 actions cette semaine
   - Adaptées à leurs défis principaux
   - Outils spécifiques recommandés

## 🛠️ Développement à venir

### Phase 1 (Actuel)
- ✅ Architecture de base
- ✅ Formulaire profiling
- ✅ API Claude integration
- ✅ Génération de contenu personnalisé

### Phase 2 (À faire)
- [ ] Sections fixes avec animations
- [ ] Quiz ASRS-v1.1 interactif
- [ ] Graphiques des fonctions exécutives
- [ ] Vidéos courtes explicatives
- [ ] Templates téléchargeables

### Phase 3 (Avancé)
- [ ] Sauvegarde progression utilisateur
- [ ] Tracking des actions complétées
- [ ] Communauté / partage insights
- [ ] Mises à jour contenu basées sur usage

## 💡 Exemples de personnalisation

### Entrepreneur agricole avec procrastination
**Input**: Secteur agricole, défis = temps + procrastination + paperasse
**Output Claude**:
- Manifestations: "Vous excellez durant les récoltes (urgence réelle) mais reportez indéfiniment vos déclarations gouvernementales"
- Forces: "Votre hyperfocus pendant les périodes critiques fait de vous un excellent gestionnaire de crise"
- Actions: "Créer un système de capture pour noter tous les tracas admin pendant que vous êtes aux champs"

### Startup tech avec trop de projets
**Input**: Tech, défis = submergé + ne termine rien + décisions
**Output Claude**:
- Manifestations: "Vous démarrez 3 nouvelles features par semaine mais votre backlog explose"
- Forces: "Votre curiosité TDAH vous rend excellent en veille technologique et innovation"
- Actions: "Règle du 3-3-3: Max 3 projets actifs ce trimestre. Archiver le reste dans un Notion Someday/Maybe"

## 🚨 Fallback & Erreurs

Si Claude ne répond pas ou erreur API:
- Contenu générique mais utile s'affiche
- Basé sur les meilleures pratiques TDAH
- Permet de continuer l'expérience sans bloquer

## 📈 Métriques à tracker

- Temps de complétion du profiling
- Taux de complétion du Module 1
- Satisfaction du contenu personnalisé (rating)
- Actions réellement prises (self-reported)

## 🔐 Sécurité & Privacy

- Données utilisateur: Stockées temporairement pour génération
- Pas de sauvegarde permanente (pour l'instant)
- API key Anthropic: Côté serveur uniquement
- Headers CORS: Restreints à notre domaine

## 📚 Ressources

### Scientifiques
- Russell Barkley: "Taking Charge of Adult ADHD"
- Modèle des fonctions exécutives
- Vidéos "30 Essential Ideas" (YouTube)

### Techniques
- Anthropic Claude API: https://docs.anthropic.com/
- Next.js API Routes: https://nextjs.org/docs/api-routes
- Framer Motion: https://www.framer.com/motion/

---

**Prochaine étape**: Développer les sections fixes avec animations et interactions

