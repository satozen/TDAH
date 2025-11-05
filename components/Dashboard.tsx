/**
 * Tableau de bord principal avec design Apple et animations Framer Motion
 * Affiche la progression et la navigation entre les modules
 */

'use client'

import { motion } from 'framer-motion'
import ProgressTracker from './ProgressTracker'
import ModuleNavigation from './ModuleNavigation'
import type { UserProfile } from '@/types'

interface DashboardProps {
  userProfile: UserProfile
  completedModules: number[]
  onModuleSelect: (moduleId: number) => void
}

export default function Dashboard({ userProfile, completedModules, onModuleSelect }: DashboardProps) {
  return (
    <div className="min-h-screen px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-b from-apple-blue/95 to-apple-blue-dark rounded-apple 
                        px-8 md:px-12 py-16 text-center text-white shadow-apple-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent" />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-3 letter-spacing-apple-tight relative z-10"
            >
              Bonjour {userProfile.prenom} ! 👋
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto relative z-10"
            >
              Votre programme personnalisé pour mieux vivre le TDAH entrepreneurial
            </motion.p>
          </div>
        </motion.header>

        {/* Progress Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ProgressTracker
            completedModules={completedModules.length}
            totalModules={8}
          />
        </motion.div>

        {/* Module Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ModuleNavigation
            onModuleSelect={onModuleSelect}
            completedModules={completedModules}
            userProfile={userProfile}
          />
        </motion.div>
      </div>
    </div>
  )
}

