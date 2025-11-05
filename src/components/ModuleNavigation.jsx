/**
 * Navigation des 8 modules d'apprentissage sur le TDAH entrepreneurial
 * Affiche les modules disponibles avec leur statut de complétion
 */

import './ModuleNavigation.css'

const modules = [
  {
    id: 1,
    titre: "Comprendre votre TDAH",
    description: "Découvrez comment le TDAH influence votre style entrepreneurial",
    icon: "🧠",
    color: "#6366f1"
  },
  {
    id: 2,
    titre: "Gestion du temps et énergie",
    description: "Techniques adaptées pour optimiser votre productivité",
    icon: "⏰",
    color: "#10b981"
  },
  {
    id: 3,
    titre: "Organisation et planification",
    description: "Systèmes simples pour rester organisé sans vous surcharger",
    icon: "📋",
    color: "#f59e0b"
  },
  {
    id: 4,
    titre: "Focus et concentration",
    description: "Stratégies pour maintenir votre attention sur l'essentiel",
    icon: "🎯",
    color: "#ef4444"
  },
  {
    id: 5,
    titre: "Prise de décision",
    description: "Prenez des décisions efficaces sans paralysie analytique",
    icon: "💡",
    color: "#8b5cf6"
  },
  {
    id: 6,
    titre: "Relations et communication",
    description: "Améliorez vos interactions professionnelles",
    icon: "🤝",
    color: "#ec4899"
  },
  {
    id: 7,
    titre: "Gestion émotionnelle",
    description: "Maîtrisez vos émotions et votre impulsivité",
    icon: "❤️",
    color: "#14b8a6"
  },
  {
    id: 8,
    titre: "Votre système personnalisé",
    description: "Créez votre propre système de travail adapté à votre TDAH",
    icon: "⚡",
    color: "#f97316"
  }
]

const ModuleNavigation = ({ onModuleSelect, completedModules }) => {
  return (
    <div className="modules-container">
      <h2 className="modules-title">Vos 8 modules d'apprentissage</h2>
      
      <div className="modules-grid">
        {modules.map(module => {
          const isCompleted = completedModules.includes(module.id)
          
          return (
            <div
              key={module.id}
              className={`module-card ${isCompleted ? 'completed' : ''}`}
              onClick={() => onModuleSelect(module.id)}
              style={{ '--module-color': module.color }}
            >
              {isCompleted && (
                <div className="completion-badge">✓</div>
              )}
              
              <div className="module-icon">{module.icon}</div>
              
              <div className="module-content">
                <h3 className="module-titre">
                  Module {module.id}: {module.titre}
                </h3>
                <p className="module-description">{module.description}</p>
              </div>
              
              <div className="module-footer">
                <button className="module-button">
                  {isCompleted ? 'Revoir' : 'Commencer'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ModuleNavigation

