/**
 * Contenu personnalisé d'un module avec intégration IA
 * Affiche le contenu du module et génère des recommandations personnalisées
 */

import { useState, useEffect } from 'react'
import { generatePersonalizedContent } from '../services/aiService'
import { getModuleData } from '../data/modulesData'
import './ModuleContent.css'

const ModuleContent = ({ moduleId, userProfile, onComplete, onBack }) => {
  const [moduleData, setModuleData] = useState(null)
  const [personalizedContent, setPersonalizedContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const loadModule = async () => {
      setLoading(true)
      
      // Charger les données du module
      const data = getModuleData(moduleId)
      setModuleData(data)
      
      // Générer le contenu personnalisé avec l'IA
      try {
        const aiContent = await generatePersonalizedContent(moduleId, userProfile)
        setPersonalizedContent(aiContent)
      } catch (error) {
        console.error('Erreur de personnalisation IA:', error)
        setPersonalizedContent(null)
      }
      
      setLoading(false)
    }

    loadModule()
  }, [moduleId, userProfile])

  if (loading) {
    return (
      <div className="module-loading">
        <div className="loading-spinner"></div>
        <p>Personnalisation de votre module en cours...</p>
      </div>
    )
  }

  if (!moduleData) {
    return <div className="module-error">Module introuvable</div>
  }

  const sections = moduleData.sections || []
  const currentSectionData = sections[currentSection]

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
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
    <div className="module-content-container">
      <div className="module-header">
        <button className="back-button" onClick={onBack}>
          ← Retour aux modules
        </button>
        
        <div className="module-title-section">
          <h1>
            {moduleData.icon} Module {moduleId}: {moduleData.titre}
          </h1>
          <p className="module-subtitle">{moduleData.description}</p>
        </div>

        <div className="section-indicator">
          Section {currentSection + 1} / {sections.length}
        </div>
      </div>

      <div className="module-content-wrapper">
        <div className="section-content">
          <h2>{currentSectionData?.titre}</h2>
          
          <div className="content-text">
            {currentSectionData?.contenu.map((paragraphe, index) => (
              <p key={index}>{paragraphe}</p>
            ))}
          </div>

          {currentSectionData?.exercices && (
            <div className="exercices-section">
              <h3>💪 Exercices pratiques</h3>
              <ul>
                {currentSectionData.exercices.map((exercice, index) => (
                  <li key={index}>{exercice}</li>
                ))}
              </ul>
            </div>
          )}

          {currentSectionData?.astuces && (
            <div className="tips-section">
              <h3>💡 Astuces pour vous</h3>
              <ul>
                {currentSectionData.astuces.map((astuce, index) => (
                  <li key={index}>{astuce}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {personalizedContent && currentSection === 0 && (
          <div className="personalized-section">
            <h3>🎯 Recommandations personnalisées pour {userProfile.prenom}</h3>
            <div className="ai-content">
              <p>{personalizedContent}</p>
            </div>
          </div>
        )}
      </div>

      <div className="navigation-buttons">
        <button
          className="nav-button secondary"
          onClick={handlePrevious}
          disabled={currentSection === 0}
        >
          ← Précédent
        </button>

        <div className="progress-dots">
          {sections.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSection ? 'active' : ''} ${index < currentSection ? 'completed' : ''}`}
            />
          ))}
        </div>

        <button
          className="nav-button primary"
          onClick={handleNext}
        >
          {currentSection < sections.length - 1 ? 'Suivant →' : 'Terminer ✓'}
        </button>
      </div>
    </div>
  )
}

export default ModuleContent

