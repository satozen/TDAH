/**
 * Page principale de l'application Next.js avec Sales Funnel
 * Gère l'état global: Landing Page → Formulaire → Dashboard → Modules
 */

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from '@/components/LandingPage'
import WelcomeForm from '@/components/WelcomeForm'
import Dashboard from '@/components/Dashboard'
import ModuleContent from '@/components/ModuleContent'
import type { UserProfile } from '@/types'

type AppStage = 'landing' | 'form' | 'dashboard' | 'module'

export default function Home() {
  const [stage, setStage] = useState<AppStage>('landing')
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [currentModule, setCurrentModule] = useState<number | null>(null)
  const [completedModules, setCompletedModules] = useState<number[]>([])

  const handleGetStarted = () => {
    setStage('form')
  }

  const handleProfileSubmit = (profile: UserProfile) => {
    setUserProfile(profile)
    setStage('dashboard')
  }

  const handleModuleSelect = (moduleId: number) => {
    setCurrentModule(moduleId)
    setStage('module')
  }

  const handleModuleComplete = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId])
    }
    setCurrentModule(null)
    setStage('dashboard')
  }

  const handleBackToModules = () => {
    setCurrentModule(null)
    setStage('dashboard')
  }

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {stage === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onGetStarted={handleGetStarted} />
          </motion.div>
        )}

        {stage === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeForm onSubmit={handleProfileSubmit} />
          </motion.div>
        )}

        {stage === 'dashboard' && userProfile && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <Dashboard
              userProfile={userProfile}
              completedModules={completedModules}
              onModuleSelect={handleModuleSelect}
            />
          </motion.div>
        )}

        {stage === 'module' && currentModule && userProfile && (
          <motion.div
            key="module"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ModuleContent
              moduleId={currentModule}
              userProfile={userProfile}
              onComplete={handleModuleComplete}
              onBack={handleBackToModules}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

