/**
 * Application principale pour le programme TDAH chez l'entrepreneur
 * Gère la navigation entre le formulaire initial et les 8 modules d'apprentissage personnalisés par IA
 */

import { useState } from 'react'
import WelcomeForm from './components/WelcomeForm'
import ModuleNavigation from './components/ModuleNavigation'
import ModuleContent from './components/ModuleContent'
import ProgressTracker from './components/ProgressTracker'
import './App.css'

function App() {
  const [userProfile, setUserProfile] = useState(null)
  const [currentModule, setCurrentModule] = useState(null)
  const [completedModules, setCompletedModules] = useState([])

  const handleProfileSubmit = (profile) => {
    setUserProfile(profile)
  }

  const handleModuleSelect = (moduleId) => {
    setCurrentModule(moduleId)
  }

  const handleModuleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId])
    }
    setCurrentModule(null)
  }

  const handleBackToModules = () => {
    setCurrentModule(null)
  }

  return (
    <div className="app">
      {!userProfile ? (
        <WelcomeForm onSubmit={handleProfileSubmit} />
      ) : currentModule ? (
        <ModuleContent
          moduleId={currentModule}
          userProfile={userProfile}
          onComplete={handleModuleComplete}
          onBack={handleBackToModules}
        />
      ) : (
        <div className="dashboard">
          <header className="dashboard-header">
            <h1>Bonjour {userProfile.prenom} ! 👋</h1>
            <p className="subtitle">
              Votre programme personnalisé pour mieux vivre le TDAH entrepreneurial
            </p>
          </header>
          
          <ProgressTracker 
            completedModules={completedModules}
            totalModules={8}
          />
          
          <ModuleNavigation
            onModuleSelect={handleModuleSelect}
            completedModules={completedModules}
            userProfile={userProfile}
          />
        </div>
      )}
    </div>
  )
}

export default App

