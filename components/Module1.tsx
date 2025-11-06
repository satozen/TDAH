/**
 * Module 1: Comprendre votre cerveau TDAH
 * Combine contenu scientifique fixe (Barkley) avec personnalisation IA
 * Architecture: Formulaire profiling → API Claude → Rendu personnalisé
 */

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

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
  detailedExplanations?: {
    whyThisMatters: string
    commonPatterns: string
    hopeMessage: string
  }
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
      icon: '🧠',
      type: 'education'
    },
    {
      id: 'executive-functions',
      title: 'Les 4 fonctions exécutives affectées',
      icon: '🎯',
      type: 'education'
    },
    {
      id: 'personal-assessment',
      title: 'Votre profil TDAH entrepreneurial',
      icon: '✨',
      type: 'personalized'
    },
    {
      id: 'strengths',
      title: 'Vos super-pouvoirs cachés',
      icon: '⚡',
      type: 'personalized'
    },
    {
      id: 'action-plan',
      title: 'Votre plan d\'action personnalisé',
      icon: '📈',
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
      <div className="w-16 h-16 text-apple-purple mb-8 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-apple-purple border-t-transparent rounded-full animate-spin" />
      </div>
      
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
// COMPOSANT: MODULE CONTENT
// ==========================================
function ModuleContent({ 
  sections, 
  currentSection, 
  setCurrentSection, 
  userProfile, 
  personalizedContent 
}: any) {
  const [completedActions, setCompletedActions] = useState<number[]>([])

  const currentSectionData = sections[currentSection]

  return (
    <div>
      {/* Navigation & Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => window.location.href = '/'}
            className="text-apple-gray hover:text-apple-gray-dark transition-colors"
          >
            ← Retour au tableau de bord
          </button>
          <span className="text-sm text-apple-gray">
            Section {currentSection + 1} / {sections.length}
          </span>
        </div>

        {/* Progress timeline */}
        <div className="flex items-center gap-2">
          {sections.map((section: any, i: number) => (
            <div key={i} className="flex-1">
              <div
                className={`h-2 rounded-full transition-all ${
                  i < currentSection
                    ? 'bg-green-500'
                    : i === currentSection
                    ? 'bg-apple-purple'
                    : 'bg-gray-200'
                }`}
              />
              <p className={`text-xs mt-1 ${i === currentSection ? 'font-bold text-apple-gray-dark' : 'text-apple-gray'}`}>
                {section.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentSection === 0 && (
            <ScienceSection />
          )}
          
          {currentSection === 1 && (
            <ExecutiveFunctionsSection challenges={userProfile.mainChallenges || []} />
          )}
          
          {currentSection === 2 && (
            <PersonalProfileSection personalizedContent={personalizedContent} />
          )}
          
          {currentSection === 3 && (
            <StrengthsSection 
              personalizedContent={personalizedContent}
              sector={userProfile.sector}
            />
          )}
          
          {currentSection === 4 && (
            <ActionPlanSection 
              personalizedContent={personalizedContent}
              completedActions={completedActions}
              setCompletedActions={setCompletedActions}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex gap-4 justify-between mt-12">
        <button
          onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
          disabled={currentSection === 0}
          className="px-8 py-4 rounded-xl border-2 border-gray-300 text-apple-gray-dark font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          ← Section précédente
        </button>

        {currentSection < sections.length - 1 ? (
          <button
            onClick={() => setCurrentSection(currentSection + 1)}
            className="btn-primary px-8 py-4"
          >
            Section suivante →
          </button>
        ) : (
          <button
            onClick={() => alert('Module 1 complété! 🎉')}
            className="btn-primary px-8 py-4"
          >
            ✅ Terminer le module
          </button>
        )}
      </div>
    </div>
  )
}

// ==========================================
// SECTION 1: LA SCIENCE DU TDAH
// ==========================================
function ScienceSection() {
  const [selectedFunction, setSelectedFunction] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold text-apple-gray-dark mb-6">
          La science du TDAH expliquée simplement
        </h2>
        <p className="text-xl text-apple-gray max-w-3xl mx-auto">
          Basé sur les travaux du Dr. Russell Barkley, expert #1 mondial du TDAH
        </p>
      </motion.div>

      {/* Le mythe vs la réalité */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-red-50 to-orange-50 rounded-apple-sm p-8 border-l-4 border-red-500"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Le mythe</h3>
            <p className="text-apple-gray-dark text-lg">
              "Le TDAH = manque d'attention"
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">✅ La réalité</h3>
            <p className="text-apple-gray-dark text-lg">
              "Le TDAH = déficit de <span className="font-bold">RÉGULATION</span> et d'inhibition comportementale"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Analogie du chef d'orchestre */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-apple-sm p-8 shadow-apple-lg"
      >
        <h3 className="text-3xl font-bold text-apple-gray-dark mb-6 text-center">
          🎼 L'analogie du chef d'orchestre
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-apple-gray-dark mb-4">
              Imaginez votre cerveau comme un orchestre :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎻</span>
                <div>
                  <p className="font-bold text-apple-gray-dark">Les musiciens</p>
                  <p className="text-apple-gray">Vos capacités (intelligence, créativité, énergie)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <p className="font-bold text-apple-gray-dark">Le chef d'orchestre</p>
                  <p className="text-apple-gray">Les fonctions exécutives (coordination, timing, régulation)</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl">
            <p className="text-lg text-apple-gray-dark font-semibold mb-3">
              Avec le TDAH :
            </p>
            <p className="text-apple-gray">
              Les musiciens sont <span className="font-bold text-green-600">excellents</span>, 
              mais le chef d'orchestre a parfois du mal à coordonner tout le monde au bon moment.
            </p>
            <p className="text-apple-gray mt-4">
              Résultat : Moments de <span className="font-bold">génie pur</span> (hyperfocus) 
              alternant avec du <span className="font-bold">chaos</span> (distraction).
            </p>
          </div>
        </div>
      </motion.div>

      {/* Quiz rapide */}
      <QuickQuiz />

      {/* Explication détaillée : Pourquoi c'est important */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-apple-sm p-8 shadow-apple-lg"
      >
        <h3 className="text-3xl font-bold text-apple-gray-dark mb-6">
          🔬 Pourquoi cette distinction est CRUCIALE pour vous
        </h3>
        
        <div className="space-y-6 text-lg text-apple-gray-dark leading-relaxed">
          <p>
            Si le TDAH était juste un "manque d'attention", la solution serait simple : 
            <span className="font-bold text-red-600"> "Concentre-toi plus fort !"</span> 
            Mais ça ne marche pas, n'est-ce pas ?
          </p>
          
          <p>
            <span className="font-bold text-apple-purple">Le vrai problème</span> : Votre cerveau a du mal à 
            <span className="font-bold"> réguler</span> son attention, ses émotions, et ses impulsions. 
            C'est comme avoir un thermostat défectueux : parfois il fait trop chaud (hyperfocus), 
            parfois trop froid (distraction totale).
          </p>

          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
            <p className="font-bold text-blue-700 mb-3">💡 Exemple concret en entrepreneuriat :</p>
            <p className="text-apple-gray-dark">
              Vous êtes en réunion avec un client important. Votre cerveau TDAH ne "manque pas d'attention" - 
              il est probablement <span className="font-bold">trop attentif</span> à tout : 
              le bruit de la ventilation, la couleur de la cravate du client, une idée géniale qui vient de vous traverser l'esprit, 
              le SMS qui vient de vibrer dans votre poche...
            </p>
            <p className="text-apple-gray-dark mt-3">
              Le problème n'est pas l'attention, c'est la <span className="font-bold">régulation</span> : 
              votre cerveau ne peut pas "filtrer" ce qui est important de ce qui ne l'est pas.
            </p>
          </div>

          <p>
            <span className="font-bold text-green-600">La bonne nouvelle</span> : 
            Si c'est un problème de régulation, on peut créer des <span className="font-bold">systèmes externes</span> 
            qui font le travail que votre cerveau ne fait pas naturellement. C'est exactement ce qu'on va faire dans ce programme.
          </p>
        </div>
      </motion.div>

      {/* Neurobiologie simplifiée */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-apple-sm p-8"
      >
        <h3 className="text-3xl font-bold text-apple-gray-dark mb-6">
          🧬 La neurobiologie en 2 minutes (sans jargon)
        </h3>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl">
            <h4 className="text-xl font-bold text-apple-gray-dark mb-3">
              ⚡ Dopamine et Noradrénaline : Les neurotransmetteurs clés
            </h4>
            <p className="text-apple-gray-dark leading-relaxed mb-4">
              Votre cerveau TDAH produit moins de <span className="font-bold">dopamine</span> et 
              <span className="font-bold"> noradrénaline</span> que la moyenne. Ces neurotransmetteurs sont comme 
              le "carburant" de votre attention et de votre motivation.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-apple-gray-dark">
                <span className="font-bold">Impact entrepreneurial :</span> C'est pourquoi vous procrastinez sur les tâches ennuyeuses 
                (pas assez de dopamine = pas de motivation) mais excellez dans l'urgence (adrénaline = boost de dopamine).
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h4 className="text-xl font-bold text-apple-gray-dark mb-3">
              🎯 Cortex préfrontal : Le "chef d'orchestre" du cerveau
            </h4>
            <p className="text-apple-gray-dark leading-relaxed mb-4">
              Cette zone du cerveau (derrière votre front) est responsable des fonctions exécutives : 
              planification, organisation, contrôle des impulsions. Chez les personnes TDAH, cette zone 
              <span className="font-bold"> se développe plus lentement</span> (environ 2-3 ans de retard) 
              et peut rester moins active.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-apple-gray-dark">
                <span className="font-bold">Impact entrepreneurial :</span> C'est pourquoi vous avez du mal à planifier à long terme 
                ou à résister aux opportunités impulsives. Mais c'est aussi pourquoi vous êtes excellent en "mode crise" 
                (votre cerveau s'active mieux sous pression).
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h4 className="text-xl font-bold text-apple-gray-dark mb-3">
              ⏰ Réseau du mode par défaut : Toujours "ON"
            </h4>
            <p className="text-apple-gray-dark leading-relaxed mb-4">
              Le "réseau du mode par défaut" est cette partie de votre cerveau qui vagabonde quand vous ne faites rien. 
              Chez les neurotypiques, il s'éteint quand ils se concentrent. Chez vous, 
              <span className="font-bold"> il reste actif</span>, créant un "bruit de fond" constant.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-apple-gray-dark">
                <span className="font-bold">Impact entrepreneurial :</span> C'est pourquoi vous avez 47 idées brillantes par jour 
                (votre cerveau ne s'arrête jamais de créer) mais aussi pourquoi vous avez du mal à finir ce que vous commencez 
                (trop d'idées = trop de distractions).
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ce que ça veut dire pour vous */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-apple p-8"
      >
        <h3 className="text-2xl font-bold text-apple-gray-dark mb-4 text-center">
          💡 Ce que ça veut dire pour votre entrepreneuriat
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🎯',
              title: 'Pas stupide',
              text: 'Vos difficultés ne viennent pas d\'un manque d\'intelligence ou de volonté'
            },
            {
              icon: '⚙️',
              title: 'C\'est mécanique',
              text: 'C\'est un problème de régulation, pas de caractère'
            },
            {
              icon: '🛠️',
              title: 'C\'est réparable',
              text: 'Avec les bons systèmes, vous pouvez compenser et exceller'
            }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-apple-gray-dark mb-2">{item.title}</h4>
              <p className="text-apple-gray">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// ==========================================
// QUIZ INTERACTIF
// ==========================================
function QuickQuiz() {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      question: "Le TDAH disparaît à l'âge adulte",
      answer: false,
      explanation: "Faux! 60% des enfants TDAH gardent des symptômes significatifs à l'âge adulte."
    },
    {
      question: "Le TDAH est causé par un manque de discipline",
      answer: false,
      explanation: "Faux! C'est une différence neurobiologique, pas un choix ou un manque de volonté."
    },
    {
      question: "Les entrepreneurs TDAH ont des avantages compétitifs",
      answer: true,
      explanation: "Vrai! Créativité, tolérance au risque, énergie et hyperfocus sont des atouts majeurs."
    },
    {
      question: "Le TDAH affecte la mémoire de travail",
      answer: true,
      explanation: "Vrai! C'est une des 4 fonctions exécutives principales affectées selon Barkley."
    }
  ]

  const allAnswered = questions.every((_, i) => answers[i] !== undefined)
  const correctCount = questions.filter((q, i) => answers[i] === q.answer).length

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-apple-sm p-8 shadow-apple-lg"
    >
      <h3 className="text-3xl font-bold text-apple-gray-dark mb-6 text-center">
        🧪 Quiz rapide : Vrai ou Faux?
      </h3>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="border-2 border-gray-200 rounded-xl p-6">
            <p className="text-lg font-semibold text-apple-gray-dark mb-4">
              {i + 1}. {q.question}
            </p>
            
            <div className="flex gap-4 mb-4">
              {[true, false].map((value) => (
                <button
                  key={value ? 'true' : 'false'}
                  onClick={() => setAnswers({ ...answers, [i]: value })}
                  disabled={showResults}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                    answers[i] === value
                      ? showResults
                        ? value === q.answer
                          ? 'bg-green-100 border-2 border-green-500 text-green-700'
                          : 'bg-red-100 border-2 border-red-500 text-red-700'
                        : 'bg-apple-purple text-white'
                      : 'bg-gray-100 text-apple-gray-dark hover:bg-gray-200'
                  } disabled:cursor-not-allowed`}
                >
                  {value ? '✅ Vrai' : '❌ Faux'}
                </button>
              ))}
            </div>

            {showResults && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 p-4 bg-blue-50 rounded-lg"
              >
                <p className="text-apple-gray-dark">
                  <span className="font-bold">Explication:</span> {q.explanation}
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {!showResults && allAnswered && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setShowResults(true)}
          className="btn-primary w-full mt-6 py-4"
        >
          Voir les résultats
        </motion.button>
      )}

      {showResults && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl text-center"
        >
          <p className="text-3xl font-bold text-apple-gray-dark mb-2">
            {correctCount} / {questions.length} correct{correctCount > 1 ? 's' : ''}
          </p>
          <p className="text-apple-gray">
            {correctCount === questions.length
              ? '🎉 Parfait! Vous maîtrisez les bases!'
              : correctCount >= questions.length / 2
              ? '👍 Bon travail! Continuez à apprendre.'
              : '💪 Pas de soucis, vous apprenez!'}
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

// ==========================================
// SECTION 2: FONCTIONS EXÉCUTIVES
// ==========================================
function ExecutiveFunctionsSection({ challenges }: { challenges: string[] }) {
  const [selectedFunction, setSelectedFunction] = useState<number | null>(null)

  const functions = [
    {
      id: 'inhibition',
      title: 'Inhibition comportementale',
      icon: '🛑',
      deficit: 'Difficulté à arrêter les réponses automatiques',
      impact: 'Décisions impulsives, interruptions constantes, multitasking chaotique',
      strategy: 'Systèmes de "friction" intentionnelle (ex: délai de 24h avant achat important)',
      relatedChallenges: ['impulsivity', 'decisions'],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'working-memory',
      title: 'Mémoire de travail',
      icon: '🧠',
      deficit: 'Oubli rapide d\'informations récentes',
      impact: 'Perte d\'engagements, oubli de tâches, informations qui se volatilisent',
      strategy: 'Externalisation totale (apps, systèmes de capture, alarmes)',
      relatedChallenges: ['time', 'organization', 'completion'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'self-regulation',
      title: 'Autorégulation émotionnelle',
      icon: '❤️',
      deficit: 'Réactions émotionnelles intenses et rapides',
      impact: 'Stress élevé, burnout fréquent, montagnes russes émotionnelles',
      strategy: 'Routine de régulation quotidienne (exercice, méditation, journaling)',
      relatedChallenges: ['burnout', 'overwhelm'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'reconstitution',
      title: 'Planification & Organisation',
      icon: '📋',
      deficit: 'Difficulté à planifier et organiser des séquences complexes',
      impact: 'Chaos opérationnel, projets qui n\'avancent pas, désorganisation',
      strategy: 'Templates, automatisation, délégation, time blocking',
      relatedChallenges: ['organization', 'procrastination', 'delegation'],
      color: 'from-purple-500 to-violet-500'
    }
  ]

  // Highlight functions related to user's challenges
  const highlightedFunctions = functions.filter(f =>
    f.relatedChallenges.some(c => challenges.includes(c))
  )

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold text-apple-gray-dark mb-6">
          Les 4 fonctions exécutives affectées
        </h2>
        <p className="text-xl text-apple-gray max-w-3xl mx-auto">
          Selon le modèle de Barkley, voici les 4 piliers qui rendent l'entrepreneuriat difficile avec le TDAH
        </p>
      </motion.div>

      {highlightedFunctions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-apple-sm p-6 border-l-4 border-yellow-500"
        >
          <p className="text-apple-gray-dark">
            <span className="font-bold">💡 Basé sur vos défis,</span> ces fonctions sont particulièrement importantes pour vous :
            <span className="font-bold"> {highlightedFunctions.map(f => f.title).join(', ')}</span>
          </p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {functions.map((func, i) => {
          const isHighlighted = highlightedFunctions.some(h => h.id === func.id)
          const isSelected = selectedFunction === i

          return (
            <motion.div
              key={func.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedFunction(isSelected ? null : i)}
              className={`bg-white rounded-apple-sm p-6 shadow-apple-md cursor-pointer transition-all duration-300 ${
                isHighlighted ? 'ring-4 ring-yellow-300 ring-opacity-50' : ''
              } ${
                isSelected ? 'shadow-apple-xl scale-105' : 'hover:shadow-apple-lg'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`text-5xl flex-shrink-0 ${isSelected ? 'animate-bounce' : ''}`}>
                  {func.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-apple-gray-dark mb-2">
                    {func.title}
                  </h3>
                  {isHighlighted && (
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                      ⚡ Important pour vous
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-1">❌ Déficit:</p>
                  <p className="text-apple-gray">{func.deficit}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-orange-600 mb-1">📉 Impact entrepreneurial:</p>
                  <p className="text-apple-gray">{func.impact}</p>
                </div>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className={`mt-4 p-4 bg-gradient-to-r ${func.color} bg-opacity-10 rounded-xl`}>
                        <p className="text-sm font-semibold text-green-600 mb-1">✅ Stratégie compensatoire:</p>
                        <p className="text-apple-gray-dark font-medium">{func.strategy}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p className="text-xs text-apple-gray mt-4 text-center">
                {isSelected ? '👆 Cliquer pour réduire' : '👆 Cliquer pour voir la solution'}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Exemples concrets de chaque fonction */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-apple-sm p-8 shadow-apple-lg"
      >
        <h3 className="text-3xl font-bold text-apple-gray-dark mb-6">
          💼 Exemples concrets en entrepreneuriat
        </h3>
        
        <div className="space-y-8">
          {functions.map((func, i) => {
            const examples = {
              inhibition: [
                "Vous êtes en réunion avec un client, mais vous ne pouvez pas vous empêcher de vérifier votre téléphone toutes les 2 minutes",
                "Vous venez de décider de ne pas embaucher, mais 3 jours plus tard vous avez signé un contrat avec un nouveau employé (impulsivité)",
                "Vous commencez à répondre à un email, mais vous ouvrez 5 autres onglets et oubliez l'email original"
              ],
              'working-memory': [
                "Un client vous appelle pour discuter d'un projet. Vous notez mentalement 'appeler demain'. Le lendemain, vous avez complètement oublié",
                "Vous avez une idée géniale en conduisant. Arrivé au bureau, impossible de vous souvenir de quoi il s'agissait",
                "Vous promettez à votre équipe de faire X cette semaine. Vendredi soir, vous réalisez que vous avez complètement oublié"
              ],
              'self-regulation': [
                "Un client vous critique. Vous réagissez émotionnellement (colère ou tristesse intense) alors que la critique était mineure",
                "Vous avez une journée productive, puis le lendemain vous êtes complètement épuisé et incapable de travailler",
                "Un petit problème devient une crise majeure dans votre tête. Vous stressez pendant 3 jours pour quelque chose qui se règle en 10 minutes"
              ],
              reconstitution: [
                "Vous avez un projet à livrer dans 2 semaines. Vous savez qu'il faut le faire, mais vous ne savez pas par où commencer. Résultat : procrastination",
                "Votre bureau est un chaos. Vous savez qu'il faut ranger, mais vous ne savez pas comment organiser. Alors vous ne faites rien",
                "Vous avez 10 tâches à faire aujourd'hui. Vous ne savez pas laquelle prioriser. Alors vous faites... aucune"
              ]
            }

            return (
              <div key={func.id} className="border-l-4 border-purple-400 pl-6">
                <h4 className="text-2xl font-bold text-apple-gray-dark mb-4 flex items-center gap-3">
                  {func.icon} {func.title}
                </h4>
                <p className="text-apple-gray-dark mb-4 leading-relaxed">
                  {func.deficit}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-orange-600 mb-2">📉 Impact dans votre business :</p>
                  <p className="text-apple-gray-dark">{func.impact}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-green-600 mb-2">✅ La solution :</p>
                  <p className="text-apple-gray-dark font-medium">{func.strategy}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-blue-600 mb-3">💡 Exemples concrets :</p>
                  <ul className="space-y-2">
                    {(examples[func.id as keyof typeof examples] || []).map((example, j) => (
                      <li key={j} className="flex items-start gap-2 text-apple-gray-dark">
                        <span className="text-apple-purple mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Graphique simplifié du profil */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-apple-sm p-8"
      >
        <h3 className="text-2xl font-bold text-apple-gray-dark mb-6 text-center">
          🎯 Votre profil de défis
        </h3>
        
        <div className="space-y-4">
          {functions.map(func => {
            const isAffected = highlightedFunctions.some(h => h.id === func.id)
            const percentage = isAffected ? 80 : 40

            return (
              <div key={func.id}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-apple-gray-dark font-medium flex items-center gap-2">
                    {func.icon} {func.title}
                  </span>
                  <span className="text-sm text-apple-gray">{percentage}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className={`h-full bg-gradient-to-r ${func.color}`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-apple-gray mt-6">
          Ce profil est basé sur les défis que vous avez sélectionnés
        </p>
      </motion.div>
    </div>
  )
}

// ==========================================
// SECTION 3: PROFIL PERSONNEL
// ==========================================
function PersonalProfileSection({ personalizedContent }: any) {
  const [recognizedCount, setRecognizedCount] = useState(0)

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold text-apple-gray-dark mb-6">
          Votre profil TDAH entrepreneurial
        </h2>
        <p className="text-xl text-apple-gray max-w-3xl mx-auto">
          Basé sur VOS réponses, voici comment le TDAH se manifeste dans VOTRE réalité
        </p>
      </motion.div>

      {/* Message personnalisé de bienvenue */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-apple-sm p-8"
      >
        <p className="text-2xl text-apple-gray-dark leading-relaxed text-center">
          {personalizedContent?.welcomeMessage || "Chargement de votre profil personnalisé..."}
        </p>
      </motion.div>

      {/* Manifestations TDAH personnalisées */}
      <div>
        <h3 className="text-3xl font-bold text-apple-gray-dark mb-6">
          📍 Comment ça se manifeste dans VOTRE business
        </h3>
        
        <div className="space-y-4">
          {(personalizedContent?.tdahManifestations || []).map((manifestation: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-apple-md border-l-4 border-red-400"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">💥</div>
                <div className="flex-1">
                  <p className="text-lg text-apple-gray-dark">{manifestation}</p>
                </div>
                <label className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={(e) => setRecognizedCount(prev => e.target.checked ? prev + 1 : prev - 1)}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-apple-gray">Ça me parle!</span>
                </label>
              </div>
            </motion.div>
          ))}
        </div>

        {recognizedCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 bg-blue-50 rounded-xl text-center"
          >
            <p className="text-lg text-apple-gray-dark">
              <span className="font-bold text-blue-600">{recognizedCount}</span> situation{recognizedCount > 1 ? 's' : ''} reconnue{recognizedCount > 1 ? 's' : ''}
              {recognizedCount >= 3 && " 🎯 Vous n'êtes vraiment pas seul(e) !"}
            </p>
          </motion.div>
        )}
      </div>

      {/* Exemples concrets de leur réalité */}
      <div>
        <h3 className="text-3xl font-bold text-apple-gray-dark mb-6">
          🎬 Des scénarios que vous reconnaissez ?
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {(personalizedContent?.relevantExamples || []).map((example: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-apple-md"
            >
              <div className="text-4xl mb-3">🎭</div>
              <p className="text-apple-gray-dark leading-relaxed">{example}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Explications détaillées personnalisées */}
      {personalizedContent?.detailedExplanations && (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-apple-lg"
          >
            <h3 className="text-3xl font-bold text-apple-gray-dark mb-6">
              💡 Pourquoi c'est important pour VOUS
            </h3>
            <p className="text-lg text-apple-gray-dark leading-relaxed">
              {personalizedContent.detailedExplanations.whyThisMatters}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-blue-500"
          >
            <h3 className="text-2xl font-bold text-apple-gray-dark mb-4">
              📊 Patterns communs dans votre secteur
            </h3>
            <p className="text-lg text-apple-gray-dark leading-relaxed">
              {personalizedContent.detailedExplanations.commonPatterns}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-apple-sm p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              ✨ Vous n'êtes pas brisé(e)
            </h3>
            <p className="text-xl opacity-95 leading-relaxed">
              {personalizedContent.detailedExplanations.hopeMessage}
            </p>
          </motion.div>
        </div>
      )}

      {/* Message de validation (fallback si pas de detailedExplanations) */}
      {!personalizedContent?.detailedExplanations && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-apple-sm p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            ✨ Vous n'êtes pas brisé(e)
          </h3>
          <p className="text-xl opacity-95 leading-relaxed">
            Tout ce que vous venez de lire n'est pas de votre faute. C'est juste votre cerveau qui fonctionne différemment. 
            Et maintenant, on va apprendre à en tirer profit.
          </p>
        </motion.div>
      )}
    </div>
  )
}

// ==========================================
// SECTION 4: VOS FORCES
// ==========================================
function StrengthsSection({ personalizedContent, sector }: any) {
  const [selectedStrengths, setSelectedStrengths] = useState<number[]>([])

  const sectorEmojis: Record<string, string> = {
    agricole: '🌾',
    construction: '🏗️',
    tech: '💻',
    commerce: '🛍️',
    service: '🤝',
    autre: '🎯'
  }

  const famousEntrepreneurs = [
    {
      name: 'Richard Branson',
      company: 'Virgin Group',
      quote: 'Mon TDAH est mon super-pouvoir. Je vois des opportunités que les autres ne voient pas.',
      photo: '👨‍💼'
    },
    {
      name: 'David Neeleman',
      company: 'JetBlue',
      quote: 'Si quelqu\'un avait un médicament pour "guérir" mon TDAH, je ne le prendrais pas.',
      photo: '✈️'
    },
    {
      name: 'Paul Orfalea',
      company: 'Kinko\'s',
      quote: 'Mon TDAH m\'a forcé à déléguer. C\'est devenu ma plus grande force.',
      photo: '📋'
    }
  ]

  const handleSelectStrength = (index: number) => {
    if (selectedStrengths.includes(index)) {
      setSelectedStrengths(selectedStrengths.filter(i => i !== index))
    } else if (selectedStrengths.length < 3) {
      setSelectedStrengths([...selectedStrengths, index])
    }
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold text-apple-gray-dark mb-6">
          ⚡ Vos super-pouvoirs cachés
        </h2>
        <p className="text-xl text-apple-gray max-w-3xl mx-auto">
          Le TDAH n'est pas qu'un handicap. Voici VOS forces entrepreneuriales uniques.
        </p>
      </motion.div>

      {/* Statistique encourageante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-apple-sm p-8 text-white text-center"
      >
        <div className="text-6xl font-bold mb-2">29%</div>
        <p className="text-2xl opacity-95">
          des entrepreneurs ont un TDAH
        </p>
        <p className="text-lg opacity-90 mt-2">
          (vs seulement 4-5% de la population générale)
        </p>
        <p className="text-xl mt-4 font-semibold">
          🎯 Ce n'est pas un hasard. Le TDAH crée des entrepreneurs.
        </p>
      </motion.div>

      {/* Forces personnalisées */}
      <div>
        <h3 className="text-3xl font-bold text-apple-gray-dark mb-4">
          💪 VOS forces spécifiques ({sectorEmojis[sector || 'autre'] || '🎯'} {sector || 'votre secteur'})
        </h3>
        <p className="text-apple-gray mb-6 text-lg">
          Le TDAH n'est pas qu'un handicap. Voici VOS forces entrepreneuriales uniques, adaptées à votre secteur et votre profil. 
          Sélectionnez vos 3 forces prioritaires à développer :
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {(personalizedContent?.customizedStrengths || []).map((strength: string, i: number) => {
            const isSelected = selectedStrengths.includes(i)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleSelectStrength(i)}
                className={`bg-white rounded-xl p-6 shadow-apple-md cursor-pointer transition-all ${
                  isSelected 
                    ? 'ring-4 ring-green-400 shadow-apple-xl scale-105' 
                    : 'hover:shadow-apple-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-4xl flex-shrink-0 ${isSelected ? 'animate-pulse' : ''}`}>
                    {isSelected ? '✅' : '⭐'}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-apple-gray-dark leading-relaxed">{strength}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Explication approfondie des forces TDAH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8"
        >
          <h4 className="text-2xl font-bold text-apple-gray-dark mb-6">
            🎓 Pourquoi ces forces sont des atouts en entrepreneuriat
          </h4>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h5 className="text-xl font-bold text-apple-gray-dark mb-3">
                💡 Créativité et pensée divergente
              </h5>
              <p className="text-apple-gray-dark leading-relaxed mb-3">
                Votre cerveau TDAH fait des connexions que les autres ne voient pas. Cette pensée "hors des sentiers battus" 
                est exactement ce dont les entrepreneurs ont besoin pour innover et se différencier.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-apple-gray-dark">
                  <span className="font-bold">Exemple concret :</span> Pendant que vos concurrents suivent les mêmes stratégies, 
                  vous voyez des opportunités qu'ils ne voient pas. Cette capacité à "penser différemment" est votre avantage compétitif.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h5 className="text-xl font-bold text-apple-gray-dark mb-3">
                ⚡ Hyperfocus : Votre super-pouvoir
              </h5>
              <p className="text-apple-gray-dark leading-relaxed mb-3">
                Quand quelque chose vous passionne, vous pouvez travailler 8-10 heures d'affilée avec une productivité exceptionnelle. 
                Cet état de "flow" intense est rare chez les neurotypiques, mais vous pouvez l'atteindre régulièrement.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-apple-gray-dark">
                  <span className="font-bold">Exemple concret :</span> Vous codez une nouvelle feature pendant 6 heures sans pause, 
                  résolvant des problèmes complexes que d'autres mettraient des jours à résoudre. C'est votre hyperfocus en action.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h5 className="text-xl font-bold text-apple-gray-dark mb-3">
                🎯 Tolérance au risque et audace
              </h5>
              <p className="text-apple-gray-dark leading-relaxed mb-3">
                Votre impulsivité, bien canalisée, devient de l'audace entrepreneuriale. Vous prenez des décisions rapides 
                et osez des choses que d'autres n'osent pas, créant des opportunités uniques.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-apple-gray-dark">
                  <span className="font-bold">Exemple concret :</span> Vous lancez un nouveau produit sans attendre que tout soit "parfait". 
                  Cette capacité à agir rapidement vous donne un avantage sur vos concurrents plus prudents.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h5 className="text-xl font-bold text-apple-gray-dark mb-3">
                🔥 Résilience au chaos
              </h5>
              <p className="text-apple-gray-dark leading-relaxed mb-3">
                L'entrepreneuriat est chaotique par nature. Tandis que d'autres sont paralysés par l'incertitude, 
                vous prospérez dans ce chaos. Votre cerveau TDAH est fait pour naviguer dans l'imprévisible.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-apple-gray-dark">
                  <span className="font-bold">Exemple concret :</span> Un client annule un projet majeur. 
                  Alors que d'autres paniquent, vous pivotez rapidement et trouvez une nouvelle opportunité. 
                  Cette flexibilité est votre force.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {selectedStrengths.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 bg-green-50 rounded-xl"
          >
            <p className="text-center text-apple-gray-dark">
              <span className="font-bold text-green-600">{selectedStrengths.length}/3</span> force{selectedStrengths.length > 1 ? 's' : ''} sélectionnée{selectedStrengths.length > 1 ? 's' : ''}
              {selectedStrengths.length === 3 && " 🎯 Parfait ! Ces forces seront votre focus."}
            </p>
          </motion.div>
        )}
      </div>

      {/* Entrepreneurs TDAH célèbres */}
      <div>
        <h3 className="text-3xl font-bold text-apple-gray-dark mb-6 text-center">
          🌟 Vous êtes en bonne compagnie
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {famousEntrepreneurs.map((entrepreneur, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-apple-md text-center"
            >
              <div className="text-6xl mb-4">{entrepreneur.photo}</div>
              <h4 className="text-xl font-bold text-apple-gray-dark mb-1">
                {entrepreneur.name}
              </h4>
              <p className="text-sm text-apple-purple font-semibold mb-4">
                {entrepreneur.company}
              </p>
              <p className="text-apple-gray italic text-sm leading-relaxed">
                "{entrepreneur.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ==========================================
// SECTION 5: PLAN D'ACTION
// ==========================================
function ActionPlanSection({ 
  personalizedContent, 
  completedActions, 
  setCompletedActions 
}: any) {
  const toggleAction = (index: number) => {
    if (completedActions.includes(index)) {
      setCompletedActions(completedActions.filter((i: number) => i !== index))
    } else {
      setCompletedActions([...completedActions, index])
    }
  }

  const completionPercentage = personalizedContent?.actionPlan
    ? Math.round((completedActions.length / personalizedContent.actionPlan.length) * 100)
    : 0

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold text-apple-gray-dark mb-6">
          🚀 Votre plan d'action personnalisé
        </h2>
        <p className="text-xl text-apple-gray max-w-3xl mx-auto">
          Premières actions concrètes à prendre CETTE SEMAINE
        </p>
      </motion.div>

      {/* Progress du plan d'action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-apple-sm p-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-apple-gray-dark">
            Progression
          </h3>
          <span className="text-3xl font-bold text-apple-purple">
            {completionPercentage}%
          </span>
        </div>
        <div className="w-full h-4 bg-white rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            className="h-full bg-gradient-to-r from-apple-purple to-apple-pink"
          />
        </div>
        <p className="text-apple-gray mt-3 text-center">
          {completedActions.length} / {personalizedContent?.actionPlan?.length || 0} actions complétées
        </p>
      </motion.div>

      {/* Explication du plan d'action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-8 shadow-apple-lg mb-8"
      >
        <h3 className="text-2xl font-bold text-apple-gray-dark mb-4">
          🎯 Pourquoi ce plan d'action est important
        </h3>
        <p className="text-lg text-apple-gray-dark leading-relaxed mb-4">
          Comprendre votre TDAH est la première étape, mais <span className="font-bold">l'action est ce qui change tout</span>. 
          Ce plan d'action personnalisé est conçu spécifiquement pour VOS défis et VOTRE secteur.
        </p>
        <p className="text-apple-gray-dark leading-relaxed">
          Chaque action est <span className="font-bold">concrète, actionnable, et adaptée à votre profil TDAH</span>. 
          Pas de théorie poussiéreuse - que du pratique que vous pouvez implémenter dès cette semaine.
        </p>
      </motion.div>

      {/* Liste d'actions */}
      <div className="space-y-4">
        {(personalizedContent?.actionPlan || []).map((action: string, i: number) => {
          const isCompleted = completedActions.includes(i)

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => toggleAction(i)}
              className={`bg-white rounded-xl p-6 shadow-apple-md cursor-pointer transition-all ${
                isCompleted 
                  ? 'bg-green-50 border-2 border-green-500' 
                  : 'hover:shadow-apple-lg border-2 border-transparent'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    isCompleted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-apple-gray-dark'
                  }`}>
                    {isCompleted ? '✓' : i + 1}
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className={`text-lg leading-relaxed mb-2 ${
                    isCompleted 
                      ? 'text-green-700 line-through' 
                      : 'text-apple-gray-dark'
                  }`}>
                    {action}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-apple-gray">
                    <span>⏱️ 15-30 min</span>
                    <span>•</span>
                    <span>Cette semaine</span>
                    <span>•</span>
                    <span className="text-apple-purple font-semibold">Actionnable maintenant</span>
                  </div>
                </div>

                {isCompleted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-3xl"
                  >
                    🎉
                  </motion.div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Message d'encouragement */}
      {completedActions.length > 0 && completedActions.length < (personalizedContent?.actionPlan?.length || 0) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500"
        >
          <p className="text-apple-gray-dark text-lg">
            <span className="font-bold text-blue-600">Excellent progrès !</span> Vous avez complété {completedActions.length} action{completedActions.length > 1 ? 's' : ''}. 
            Continuez sur cette lancée - chaque petite action vous rapproche de votre objectif.
          </p>
        </motion.div>
      )}

      {/* Message de félicitations si tout complété */}
      {completionPercentage === 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-apple-sm p-8 text-white text-center"
        >
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-3xl font-bold mb-4">
            Incroyable ! Vous avez tout complété !
          </h3>
          <p className="text-xl opacity-95">
            C'est exactement ce genre de momentum dont vous avez besoin. 
            Passez au Module 2 pour continuer sur votre lancée !
          </p>
        </motion.div>
      )}

      {/* Ressources téléchargeables */}
      <div>
        <h3 className="text-2xl font-bold text-apple-gray-dark mb-6">
          📚 Ressources à télécharger
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: '📄',
              title: 'PDF: Mon Profil TDAH',
              description: 'Résumé complet de votre profil entrepreneurial',
              action: 'Télécharger PDF'
            },
            {
              icon: '📋',
              title: 'Checklist: 50 signes TDAH',
              description: 'Identifier toutes les manifestations dans votre business',
              action: 'Télécharger'
            },
            {
              icon: '🎯',
              title: 'Template Notion',
              description: 'Votre "Second Brain" pré-configuré',
              action: 'Copier le template'
            },
            {
              icon: '🎥',
              title: 'Vidéo Russell Barkley',
              description: '30 Essential Ideas About ADHD (sous-titres FR)',
              action: 'Regarder'
            }
          ].map((resource, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-apple-md hover:shadow-apple-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{resource.icon}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-apple-gray-dark mb-1">
                    {resource.title}
                  </h4>
                  <p className="text-apple-gray text-sm mb-3">
                    {resource.description}
                  </p>
                  <button className="text-apple-purple font-semibold text-sm hover:text-apple-blue transition-colors">
                    {resource.action} →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Message final */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-apple-blue to-apple-purple rounded-apple-sm p-8 text-white text-center"
      >
        <h3 className="text-3xl font-bold mb-4">
          🎯 Prêt(e) pour la suite ?
        </h3>
        <p className="text-xl opacity-95 mb-6 leading-relaxed">
          Vous venez de comprendre COMMENT votre cerveau fonctionne. 
          Dans le Module 2, on va construire votre "second cerveau" externe pour ne plus rien oublier.
        </p>
        <button className="bg-white text-apple-purple font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-shadow">
          Continuer vers Module 2 →
        </button>
      </motion.div>
    </div>
  )
}

