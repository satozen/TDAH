/**
 * Module 1: Comprendre votre cerveau TDAH
 * Combine contenu scientifique fixe (Barkley) avec personnalisation IA
 * Architecture: Formulaire profiling → API Claude → Rendu personnalisé
 */

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Brain, 
  Target, 
  Zap, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Loader2,
  Sparkles
} from 'lucide-react'

interface UserProfile {
  name: string
  business: string
  sector: 'agricole' | 'construction' | 'tech' | 'commerce' | 'service' | 'autre'
  mainChallenges: string[]
  tdahDiagnosed: 'oui' | 'non' | 'en_cours'
  businessStage: 'idee' | 'lancement' | 'croissance' | 'etabli'
  biggestPain: string
}

interface PersonalizedContent {
  welcomeMessage: string
  tdahManifestations: string[]
  relevantExamples: string[]
  customizedStrengths: string[]
  actionPlan: string[]
}

export default function Module1() {
  // États
  const [step, setStep] = useState<'intro' | 'profiling' | 'loading' | 'content'>('intro')
  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({})
  const [personalizedContent, setPersonalizedContent] = useState<PersonalizedContent | null>(null)
  const [currentSection, setCurrentSection] = useState(0)

  // Sections fixes du module (contenu scientifique)
  const fixedSections = [
    {
      id: 'science',
      title: 'La science du TDAH expliquée simplement',
      icon: Brain,
      type: 'education'
    },
    {
      id: 'executive-functions',
      title: 'Les 4 fonctions exécutives affectées',
      icon: Target,
      type: 'education'
    },
    {
      id: 'personal-assessment',
      title: 'Votre profil TDAH entrepreneurial',
      icon: Sparkles,
      type: 'personalized'
    },
    {
      id: 'strengths',
      title: 'Vos super-pouvoirs cachés',
      icon: Zap,
      type: 'personalized'
    },
    {
      id: 'action-plan',
      title: 'Votre plan d\'action personnalisé',
      icon: TrendingUp,
      type: 'personalized'
    }
  ]

  // Appel API pour personnalisation
  const generatePersonalizedContent = async () => {
    setStep('loading')
    
    try {
      const response = await fetch('/api/personalize-module1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userProfile)
      })

      const data = await response.json()
      setPersonalizedContent(data.content)
      setStep('content')
    } catch (error) {
      console.error('Error generating content:', error)
      // Fallback sur contenu générique
      setStep('content')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-apple-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* ÉTAPE 1: INTRO */}
        {step === 'intro' && (
          <IntroSection onStart={() => setStep('profiling')} />
        )}

        {/* ÉTAPE 2: PROFILING FORM */}
        {step === 'profiling' && (
          <ProfilingForm 
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            onSubmit={generatePersonalizedContent}
          />
        )}

        {/* ÉTAPE 3: LOADING */}
        {step === 'loading' && (
          <LoadingScreen />
        )}

        {/* ÉTAPE 4: CONTENU MIXTE */}
        {step === 'content' && (
          <ModuleContent 
            sections={fixedSections}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            userProfile={userProfile as UserProfile}
            personalizedContent={personalizedContent}
          />
        )}

      </div>
    </div>
  )
}

// ==========================================
// COMPOSANT: INTRO
// ==========================================
function IntroSection({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="text-8xl mb-8"
      >
        🧠
      </motion.div>

      <h1 className="text-5xl md:text-6xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
        Module 1: Comprendre votre<br />
        <span className="bg-gradient-to-r from-apple-purple to-apple-pink bg-clip-text text-transparent">
          cerveau TDAH
        </span>
      </h1>

      <p className="text-xl text-apple-gray mb-8 leading-relaxed">
        Basé sur les recherches du Dr. Russell Barkley, expert #1 mondial du TDAH,<br />
        personnalisé pour <span className="font-bold text-apple-gray-dark">VOTRE</span> réalité entrepreneuriale.
      </p>

      <div className="bg-white rounded-apple-sm p-8 shadow-apple-lg mb-8">
        <h3 className="text-2xl font-bold text-apple-gray-dark mb-6">
          Dans ce module, vous allez :
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            {
              icon: '🔬',
              text: 'Comprendre la science du TDAH (sans jargon médical)'
            },
            {
              icon: '🎯',
              text: 'Identifier comment ça se manifeste dans VOTRE business'
            },
            {
              icon: '⚡',
              text: 'Découvrir vos forces cachées (elles existent !)'
            },
            {
              icon: '📋',
              text: 'Créer votre plan d\'action personnalisé'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <p className="text-apple-gray-dark">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-apple p-6 mb-8">
        <p className="text-apple-gray-dark mb-2">
          ⏱️ <span className="font-bold">Durée:</span> 45-60 minutes
        </p>
        <p className="text-apple-gray-dark">
          💡 <span className="font-bold">Format:</span> Contenu personnalisé + Exercices interactifs
        </p>
      </div>

      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary text-xl px-12 py-5 shadow-apple-xl"
      >
        🚀 Commencer mon parcours
      </motion.button>
    </motion.div>
  )
}

// ==========================================
// COMPOSANT: PROFILING FORM
// ==========================================
function ProfilingForm({ 
  userProfile, 
  setUserProfile, 
  onSubmit 
}: { 
  userProfile: Partial<UserProfile>
  setUserProfile: (profile: Partial<UserProfile>) => void
  onSubmit: () => void
}) {
  const [formStep, setFormStep] = useState(0)

  const formSteps = [
    {
      question: "D'abord, parlez-nous de vous",
      fields: [
        {
          name: 'name',
          label: 'Votre prénom',
          type: 'text',
          placeholder: 'Ex: Marie'
        },
        {
          name: 'business',
          label: 'Votre business (en 2-3 mots)',
          type: 'text',
          placeholder: 'Ex: Agence marketing digital'
        }
      ]
    },
    {
      question: "Dans quel secteur êtes-vous ?",
      fields: [
        {
          name: 'sector',
          label: 'Secteur d\'activité',
          type: 'select',
          options: [
            { value: 'agricole', label: '🌾 Agricole / Agroalimentaire' },
            { value: 'construction', label: '🏗️ Construction / Rénovation' },
            { value: 'tech', label: '💻 Tech / Startup / SaaS' },
            { value: 'commerce', label: '🛍️ Commerce / E-commerce' },
            { value: 'service', label: '🤝 Services / Consulting' },
            { value: 'autre', label: '🎯 Autre' }
          ]
        },
        {
          name: 'businessStage',
          label: 'Stade de votre business',
          type: 'select',
          options: [
            { value: 'idee', label: '💡 Idée / Pré-lancement' },
            { value: 'lancement', label: '🚀 Lancement (0-2 ans)' },
            { value: 'croissance', label: '📈 Croissance (2-5 ans)' },
            { value: 'etabli', label: '🏆 Établi (5+ ans)' }
          ]
        }
      ]
    },
    {
      question: "Avez-vous un diagnostic TDAH ?",
      fields: [
        {
          name: 'tdahDiagnosed',
          label: 'Statut diagnostic',
          type: 'radio',
          options: [
            { value: 'oui', label: '✅ Oui, diagnostiqué par un professionnel' },
            { value: 'en_cours', label: '🔍 En cours d\'évaluation' },
            { value: 'non', label: '❓ Non, mais je m\'identifie aux symptômes' }
          ]
        }
      ]
    },
    {
      question: "Quels sont vos 3 plus grands défis en ce moment ?",
      fields: [
        {
          name: 'mainChallenges',
          label: 'Sélectionnez 3 défis maximum',
          type: 'checkbox',
          options: [
            { value: 'time', label: '⏰ Gestion du temps / Toujours en retard' },
            { value: 'focus', label: '🎯 Difficulté à rester concentré' },
            { value: 'overwhelm', label: '😰 Submergé / Trop de projets' },
            { value: 'procrastination', label: '📋 Procrastination chronique' },
            { value: 'completion', label: '🏁 Ne termine jamais rien' },
            { value: 'organization', label: '📦 Désorganisation / Chaos' },
            { value: 'decisions', label: '🤔 Paralysie décisionnelle' },
            { value: 'burnout', label: '🔥 Burnout / Épuisement' },
            { value: 'impulsivity', label: '⚡ Décisions impulsives' },
            { value: 'delegation', label: '👥 Difficulté à déléguer' }
          ]
        }
      ]
    },
    {
      question: "Décrivez votre plus grande frustration entrepreneuriale liée au TDAH",
      fields: [
        {
          name: 'biggestPain',
          label: 'Soyez spécifique - ça nous aide à personnaliser le contenu',
          type: 'textarea',
          placeholder: 'Ex: Je commence plein de projets excitants mais je n\'en finis aucun. Mon équipe est frustrée et moi aussi...'
        }
      ]
    }
  ]

  const currentStepData = formSteps[formStep]
  const isLastStep = formStep === formSteps.length - 1

  const handleNext = () => {
    if (isLastStep) {
      onSubmit()
    } else {
      setFormStep(formStep + 1)
    }
  }

  const handleBack = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-apple-gray">
            Question {formStep + 1} sur {formSteps.length}
          </span>
          <span className="text-sm text-apple-gray">
            {Math.round(((formStep + 1) / formSteps.length) * 100)}% complété
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-apple-purple to-apple-pink"
            initial={{ width: 0 }}
            animate={{ width: `${((formStep + 1) / formSteps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={formStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-apple-sm p-8 shadow-apple-lg mb-6"
        >
          <h2 className="text-3xl font-bold text-apple-gray-dark mb-8">
            {currentStepData.question}
          </h2>

          <div className="space-y-6">
            {currentStepData.fields.map((field) => (
              <FormField
                key={field.name}
                field={field}
                value={userProfile[field.name as keyof UserProfile]}
                onChange={(value) => setUserProfile({ ...userProfile, [field.name]: value })}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex gap-4 justify-between">
        <button
          onClick={handleBack}
          disabled={formStep === 0}
          className="px-6 py-3 rounded-xl border-2 border-gray-300 text-apple-gray-dark font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          ← Retour
        </button>

        <button
          onClick={handleNext}
          disabled={!isStepValid(currentStepData, userProfile)}
          className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLastStep ? '✨ Générer mon contenu personnalisé' : 'Suivant →'}
        </button>
      </div>
    </motion.div>
  )
}

// ==========================================
// HELPER: Form Field Component
// ==========================================
function FormField({ field, value, onChange }: any) {
  if (field.type === 'text') {
    return (
      <div>
        <label className="block text-apple-gray-dark font-semibold mb-2">
          {field.label}
        </label>
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className="input-apple w-full"
        />
      </div>
    )
  }

  if (field.type === 'textarea') {
    return (
      <div>
        <label className="block text-apple-gray-dark font-semibold mb-2">
          {field.label}
        </label>
        <textarea
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          rows={5}
          className="input-apple w-full resize-none"
        />
      </div>
    )
  }

  if (field.type === 'select') {
    return (
      <div>
        <label className="block text-apple-gray-dark font-semibold mb-2">
          {field.label}
        </label>
        <select
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="input-apple w-full"
        >
          <option value="">Sélectionnez...</option>
          {field.options.map((opt: any) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  if (field.type === 'radio') {
    return (
      <div className="space-y-3">
        {field.options.map((opt: any) => (
          <label
            key={opt.value}
            className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-apple-purple hover:bg-purple-50/50 transition-all"
          >
            <input
              type="radio"
              name={field.name}
              value={opt.value}
              checked={value === opt.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-5 h-5"
            />
            <span className="text-apple-gray-dark">{opt.label}</span>
          </label>
        ))}
      </div>
    )
  }

  if (field.type === 'checkbox') {
    const selectedValues = value || []
    
    return (
      <div className="space-y-3">
        <p className="text-sm text-apple-gray mb-3">
          {selectedValues.length}/3 sélectionnés
        </p>
        {field.options.map((opt: any) => {
          const isSelected = selectedValues.includes(opt.value)
          const isDisabled = !isSelected && selectedValues.length >= 3
          
          return (
            <label
              key={opt.value}
              className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                isSelected 
                  ? 'border-apple-purple bg-purple-50' 
                  : isDisabled
                  ? 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                  : 'border-gray-200 hover:border-apple-purple hover:bg-purple-50/50'
              }`}
            >
              <input
                type="checkbox"
                value={opt.value}
                checked={isSelected}
                disabled={isDisabled}
                onChange={(e) => {
                  const newValues = e.target.checked
                    ? [...selectedValues, opt.value]
                    : selectedValues.filter((v: string) => v !== opt.value)
                  onChange(newValues)
                }}
                className="w-5 h-5"
              />
              <span className="text-apple-gray-dark">{opt.label}</span>
            </label>
          )
        })}
      </div>
    )
  }

  return null
}

// ==========================================
// HELPER: Validate Step
// ==========================================
function isStepValid(stepData: any, userProfile: Partial<UserProfile>): boolean {
  return stepData.fields.every((field: any) => {
    const value = userProfile[field.name as keyof UserProfile]
    if (!value) return false
    if (field.type === 'checkbox') return (value as string[]).length > 0
    if (typeof value === 'string') return value.trim().length > 0
    return true
  })
}

// ==========================================
// COMPOSANT: LOADING SCREEN
// ==========================================
function LoadingScreen() {
  const [tip, setTip] = useState(0)
  
  const tips = [
    "🧠 Le TDAH n'est pas un déficit d'attention, mais de régulation...",
    "⚡ Votre impulsivité peut devenir de l'audace entrepreneuriale...",
    "🎯 Les entrepreneurs TDAH prennent des risques mieux calculés...",
    "💡 29% des entrepreneurs ont un TDAH (vs 4-5% de la population)...",
    "🚀 Richard Branson, David Neeleman et Paul Orfalea ont tous un TDAH..."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTip((prev) => (prev + 1) % tips.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh]"
    >
      <Loader2 className="w-16 h-16 text-apple-purple animate-spin mb-8" />
      
      <h2 className="text-3xl font-bold text-apple-gray-dark mb-4">
        Création de votre contenu personnalisé...
      </h2>

      <AnimatePresence mode="wait">
        <motion.p
          key={tip}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xl text-apple-gray max-w-2xl text-center"
        >
          {tips[tip]}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  )
}

// ==========================================
// COMPOSANT: MODULE CONTENT (TODO: À développer)
// ==========================================
function ModuleContent({ sections, currentSection, setCurrentSection, userProfile, personalizedContent }: any) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-apple-gray-dark">
        Contenu du module (à développer)
      </h2>
      <p className="text-apple-gray">
        Section {currentSection + 1} / {sections.length}
      </p>
    </div>
  )
}

