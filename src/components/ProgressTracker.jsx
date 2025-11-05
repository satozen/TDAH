/**
 * Suivi de la progression de l'utilisateur à travers les 8 modules
 * Affiche visuellement le pourcentage de complétion
 */

import './ProgressTracker.css'

const ProgressTracker = ({ completedModules, totalModules }) => {
  const percentage = Math.round((completedModules / totalModules) * 100)

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h3>Votre progression</h3>
        <span className="progress-count">
          {completedModules} / {totalModules} modules complétés
        </span>
      </div>
      
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 0 && (
            <span className="progress-percentage">{percentage}%</span>
          )}
        </div>
      </div>

      {percentage === 100 && (
        <div className="completion-message">
          🎉 Félicitations ! Vous avez terminé tous les modules !
        </div>
      )}
      
      {percentage > 0 && percentage < 100 && (
        <p className="progress-encouragement">
          Continuez comme ça ! Chaque module vous rapproche de votre objectif.
        </p>
      )}
    </div>
  )
}

export default ProgressTracker

