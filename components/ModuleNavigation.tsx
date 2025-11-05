/**
 * Navigation des 8 modules avec cartes animées style Apple
 * Affiche les modules avec leur statut de complétion
 */

'use client'

import { motion } from 'framer-motion'
import type { ModuleNavigationProps } from '@/types'

const modules = [
  {
    id: 1,
    titre: "Comprendre votre TDAH",
    description: "Découvrez comment le TDAH influence votre style entrepreneurial",
    icon: "🧠",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    titre: "Gestion du temps et énergie",
    description: "Techniques adaptées pour optimiser votre productivité",
    icon: "⏰",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    titre: "Organisation",
    description: "Systèmes simples pour rester organisé sans vous surcharger",
    icon: "📋",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 4,
    titre: "Focus et concentration",
    description: "Stratégies pour maintenir votre attention sur l'essentiel",
    icon: "🎯",
    color: "from-red-500 to-rose-600"
  },
  {
    id: 5,
    titre: "Prise de décision",
    description: "Prenez des décisions efficaces sans paralysie analytique",
    icon: "💡",
    color: "from-purple-500 to-violet-600"
  },
  {
    id: 6,
    titre: "Relations et communication",
    description: "Améliorez vos interactions professionnelles",
    icon: "🤝",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 7,
    titre: "Gestion émotionnelle",
    description: "Maîtrisez vos émotions et votre impulsivité",
    icon: "❤️",
    color: "from-teal-500 to-cyan-600"
  },
  {
    id: 8,
    titre: "Votre système personnalisé",
    description: "Créez votre propre système de travail adapté à votre TDAH",
    icon: "⚡",
    color: "from-orange-500 to-red-600"
  }
]

export default function ModuleNavigation({ onModuleSelect, completedModules }: ModuleNavigationProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-apple-gray-dark text-center letter-spacing-apple-tight">
        Vos 8 modules d&apos;apprentissage
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((module, index) => {
          const isCompleted = completedModules.includes(module.id)

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onModuleSelect(module.id)}
              className={`relative bg-white rounded-apple-sm p-6 shadow-apple-md cursor-pointer
                       transition-all duration-300 hover:shadow-apple-xl
                       ${isCompleted ? 'ring-2 ring-apple-green' : ''}`}
            >
              {/* Completion Badge */}
              {isCompleted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute -top-2 -right-2 bg-apple-green text-white 
                           w-8 h-8 rounded-full flex items-center justify-center
                           font-bold shadow-lg z-10"
                >
                  ✓
                </motion.div>
              )}

              {/* Icon */}
              <div className="text-6xl mb-4 text-center">
                {module.icon}
              </div>

              {/* Content */}
              <div className="space-y-2 mb-4">
                <h3 className="font-bold text-lg text-apple-gray-dark letter-spacing-apple line-clamp-2">
                  Module {module.id}: {module.titre}
                </h3>
                <p className="text-sm text-apple-gray line-clamp-2">
                  {module.description}
                </p>
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-xl font-semibold text-white
                         bg-gradient-to-r ${module.color}
                         transition-all duration-300`}
              >
                {isCompleted ? 'Revoir' : 'Commencer'}
              </button>

              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-apple-sm bg-gradient-to-br ${module.color} 
                            opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

