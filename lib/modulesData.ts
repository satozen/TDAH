/**
 * Données des 8 modules d'apprentissage sur le TDAH entrepreneurial
 * Contenu structuré en TypeScript avec toutes les sections
 */

import type { Module } from '@/types'

export const getModuleData = (moduleId: number): Module | null => {
  const modules: Record<number, Module> = {
    1: {
      id: 1,
      titre: "Comprendre votre TDAH",
      description: "Découvrez comment le TDAH influence votre style entrepreneurial",
      icon: "🧠",
      color: "from-blue-500 to-blue-600",
      sections: [
        {
          titre: "Qu'est-ce que le TDAH entrepreneurial ?",
          contenu: [
            "Le TDAH n'est pas un déficit, c'est une différence neurologique qui influence votre façon de penser, de travailler et de créer.",
            "En tant qu'entrepreneur, votre cerveau TDAH vous donne des super-pouvoirs : créativité débordante, capacité à voir des connexions uniques, passion intense pour vos projets, et résilience face aux défis.",
            "Cependant, il apporte aussi des défis : difficulté à maintenir le focus sur les tâches routinières, tendance à la procrastination, gestion du temps complexe, et sensibilité émotionnelle accrue.",
            "La clé n'est pas de 'guérir' votre TDAH, mais d'apprendre à travailler AVEC lui pour maximiser vos forces et gérer vos défis."
          ],
          exercices: [
            "Listez 5 situations où votre TDAH vous a permis d'exceller en tant qu'entrepreneur",
            "Identifiez 3 défis récurrents liés à votre TDAH dans votre quotidien professionnel",
            "Notez un moment où votre hyperfocus vous a permis d'accomplir quelque chose d'extraordinaire"
          ]
        },
        {
          titre: "Vos forces uniques",
          contenu: [
            "Les entrepreneurs avec TDAH ont des caractéristiques qui les rendent exceptionnels : pensée divergente, capacité d'innovation, tolérance au risque, et énergie contagieuse.",
            "Votre capacité à voir les opportunités là où d'autres ne voient que des problèmes est un atout majeur.",
            "L'hyperfocus, ce moment où vous êtes complètement absorbé par quelque chose qui vous passionne, est votre superpouvoir secret.",
            "Votre impulsivité, bien canalisée, devient de l'audace entrepreneuriale. Votre distraction devient de la curiosité productive."
          ],
          astuces: [
            "Travaillez sur des projets qui vous passionnent vraiment - c'est là que votre hyperfocus sera le plus puissant",
            "Entourez-vous de personnes qui complètent vos points faibles plutôt que d'essayer de tout faire vous-même",
            "Célébrez vos victoires, même les petites - votre cerveau TDAH a besoin de dopamine !"
          ]
        }
      ]
    },
    2: {
      id: 2,
      titre: "Gestion du temps et énergie",
      description: "Techniques adaptées pour optimiser votre productivité",
      icon: "⏰",
      color: "from-green-500 to-emerald-600",
      sections: [
        {
          titre: "Le temps avec un cerveau TDAH",
          contenu: [
            "Votre perception du temps est différente. Ce que les autres estiment prendre 30 minutes peut vous sembler prendre 10 ou 90 minutes.",
            "La gestion traditionnelle du temps (agendas rigides, planification à long terme) ne fonctionne souvent pas pour les cerveaux TDAH.",
            "Au lieu de gérer votre temps, apprenez à gérer votre ÉNERGIE. Identifiez vos moments de haute énergie et utilisez-les stratégiquement.",
            "La technique Pomodoro modifiée (travail intensif par blocs courts) est particulièrement efficace pour le TDAH."
          ],
          exercices: [
            "Suivez votre niveau d'énergie pendant une semaine : notez chaque heure si vous êtes 'haute énergie', 'moyenne' ou 'basse'",
            "Identifiez vos 3 'heures magiques' quotidiennes où vous êtes le plus productif",
            "Pratiquez la technique Pomodoro : 25 minutes de travail intensif + 5 minutes de pause, répété 4 fois"
          ],
          astuces: [
            "Planifiez vos tâches les plus importantes pendant vos heures de haute énergie",
            "Utilisez des minuteurs visuels pour concrétiser le temps qui passe",
            "Accordez-vous des 'journées thématiques' plutôt que de jongler entre multiples projets chaque jour"
          ]
        },
        {
          titre: "Combattre la procrastination",
          contenu: [
            "La procrastination avec TDAH n'est pas de la paresse - c'est souvent un problème de démarrage, d'anxiété ou de manque de stimulation.",
            "Votre cerveau TDAH cherche la nouveauté et la stimulation. Les tâches ennuyeuses ou trop grandes déclenchent l'évitement.",
            "La règle des 2 minutes : si une tâche prend moins de 2 minutes, faites-la immédiatement.",
            "Pour les grandes tâches, utilisez la technique du 'Swiss Cheese' : faites de petits trous dans la tâche plutôt que d'attendre d'avoir le temps parfait."
          ],
          exercices: [
            "Découpez votre plus gros projet en 10 micro-tâches de moins de 15 minutes chacune",
            "Essayez le 'body double' : travaillez en parallèle avec quelqu'un d'autre (même en vidéo) pour maintenir votre focus",
            "Créez un 'menu de procrastination productive' : des petites tâches utiles pour les moments où vous ne pouvez pas vous attaquer à la grande tâche"
          ]
        }
      ]
    },
    // Modules 3-8 suivent la même structure...
    3: {
      id: 3,
      titre: "Organisation",
      description: "Systèmes simples pour rester organisé",
      icon: "📋",
      color: "from-amber-500 to-orange-600",
      sections: [
        {
          titre: "Systèmes d'organisation TDAH-friendly",
          contenu: [
            "Les systèmes complexes ne fonctionnent pas avec le TDAH. Vous avez besoin de systèmes simples, visuels et qui ne demandent pas trop de maintenance.",
            "Le principe 'Out of sight, out of mind' est crucial : si c'est caché, ça n'existe plus pour vous. Rendez tout visible.",
            "Utilisez UN seul système de capture pour toutes vos idées, tâches et notes. Pas 5 applications différentes."
          ],
          exercices: [
            "Choisissez votre outil de capture unique et utilisez-le exclusivement pendant une semaine",
            "Créez un tableau visuel pour voir tous vos projets actifs en un coup d'œil"
          ]
        }
      ]
    }
  }

  return modules[moduleId] || null
}

