/**
 * Composant de suivi de progression avec animations
 * Affiche visuellement le pourcentage de complétion des modules
 */

'use client'

import { motion } from 'framer-motion'
import type { ProgressTrackerProps } from '@/types'

export default function ProgressTracker({ completedModules, totalModules }: ProgressTrackerProps) {
  const percentage = Math.round((completedModules / totalModules) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-apple-sm shadow-apple-lg p-6 md:p-8 mb-12"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h3 className="text-2xl font-bold text-apple-gray-dark letter-spacing-apple">
          Votre progression
        </h3>
        <span className="text-lg font-semibold text-apple-gray">
          {completedModules} / {totalModules} modules complétés
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-12 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-apple-blue to-apple-green 
                   flex items-center justify-center rounded-full"
        >
          {percentage > 0 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white font-bold text-lg"
            >
              {percentage}%
            </motion.span>
          )}
        </motion.div>
      </div>

      {/* Messages */}
      {percentage === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 
                   rounded-xl border-2 border-apple-green/20"
        >
          <p className="text-apple-green font-semibold text-center text-lg">
            🎉 Félicitations ! Vous avez terminé tous les modules !
          </p>
        </motion.div>
      )}

      {percentage > 0 && percentage < 100 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-apple-gray text-center italic"
        >
          Continuez comme ça ! Chaque module vous rapproche de votre objectif.
        </motion.p>
      )}
    </motion.div>
  )
}

