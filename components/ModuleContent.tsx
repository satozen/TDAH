/**
 * Composant d'affichage du contenu d'un module avec animations
 * Navigation entre sections et recommandations IA personnalisées
 */

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getModuleData } from '@/lib/modulesData'
import type { ModuleContentProps } from '@/types'

export default function ModuleContent({ moduleId, userProfile, onComplete, onBack }: ModuleContentProps) {
  const [moduleData, setModuleData] = useState(getModuleData(moduleId))
  const [currentSection, setCurrentSection] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const data = getModuleData(moduleId)
    setModuleData(data)
  }, [moduleId])

  if (!moduleData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-apple-gray">Module introuvable</p>
      </div>
    )
  }

  const sections = moduleData.sections || []
  const currentSectionData = sections[currentSection]
  const totalSections = sections.length

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1)
    } else {
      onComplete(moduleId)
    }
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  return (
    <div className="min-h-screen bg-apple-bg px-4 md:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={onBack}
            className="btn-secondary mb-6"
          >
            ← Retour aux modules
          </button>

          <div className="bg-gradient-to-br from-apple-blue to-apple-purple rounded-apple px-8 py-12 text-white shadow-apple-xl">
            <div className="text-6xl mb-4">{moduleData.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 letter-spacing-apple-tight">
              Module {moduleId}: {moduleData.titre}
            </h1>
            <p className="text-lg opacity-90">{moduleData.description}</p>
          </div>

          <div className="mt-4 text-center">
            <span className="inline-block bg-white px-6 py-2 rounded-full shadow-apple-md font-semibold text-apple-gray">
              Section {currentSection + 1} / {totalSections}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-apple shadow-apple-lg p-8 md:p-12 mb-8"
          >
            <h2 className="text-3xl font-bold text-apple-blue mb-6 letter-spacing-apple-tight">
              {currentSectionData?.titre}
            </h2>

            <div className="space-y-4 mb-8 text-lg text-apple-gray-dark leading-relaxed">
              {currentSectionData?.contenu.map((paragraphe, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {paragraphe}
                </motion.p>
              ))}
            </div>

            {/* Exercices */}
            {currentSectionData?.exercices && currentSectionData.exercices.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-apple-sm p-6 mb-6 border-l-4 border-apple-blue"
              >
                <h3 className="text-2xl font-bold text-apple-blue mb-4 flex items-center gap-2">
                  💪 Exercices pratiques
                </h3>
                <ul className="space-y-3">
                  {currentSectionData.exercices.map((exercice, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex gap-3 text-apple-gray-dark"
                    >
                      <span className="text-apple-blue font-bold flex-shrink-0">→</span>
                      <span>{exercice}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Astuces */}
            {currentSectionData?.astuces && currentSectionData.astuces.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-apple-sm p-6 border-l-4 border-apple-orange"
              >
                <h3 className="text-2xl font-bold text-apple-orange mb-4 flex items-center gap-2">
                  💡 Astuces pour vous
                </h3>
                <ul className="space-y-3">
                  {currentSectionData.astuces.map((astuce, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex gap-3 text-apple-gray-dark"
                    >
                      <span className="text-apple-orange font-bold flex-shrink-0">✦</span>
                      <span>{astuce}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Personnalisation IA (première section uniquement) */}
            {currentSection === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-apple-sm p-6 border-l-4 border-apple-purple"
              >
                <h3 className="text-2xl font-bold text-apple-purple mb-4 flex items-center gap-2">
                  🎯 Recommandations personnalisées pour {userProfile.prenom}
                </h3>
                <p className="text-apple-gray-dark leading-relaxed">
                  En tant qu&apos;entrepreneur dans le secteur <strong>{userProfile.secteurActivite}</strong>, 
                  avec des défis spécifiques en <strong>{userProfile.principauxDefis.slice(0, 2).join(' et ')}</strong>, 
                  ce module vous aidera à développer des stratégies adaptées à votre profil unique.
                  Prenez le temps de faire les exercices - ils sont conçus spécialement pour maximiser 
                  vos forces TDAH.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between gap-4 mb-12"
        >
          <button
            onClick={handlePrevious}
            disabled={currentSection === 0}
            className="btn-secondary"
          >
            ← Précédent
          </button>

          {/* Progress dots */}
          <div className="flex gap-2">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? 'bg-apple-blue w-8'
                    : index < currentSection
                    ? 'bg-apple-green'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="btn-primary"
          >
            {currentSection < totalSections - 1 ? 'Suivant →' : 'Terminer ✓'}
          </button>
        </motion.div>
      </div>
    </div>
  )
}

