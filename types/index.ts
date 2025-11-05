/**
 * Types TypeScript pour l'application TDAH Entrepreneur
 * Définit les interfaces pour les profils utilisateurs, modules, et données
 */

export interface UserProfile {
  prenom: string
  secteurActivite: string
  experience: 'debutant' | 'intermediaire' | 'avance' | 'expert' | ''
  principauxDefis: string[]
  objectifs: string
  diagnosticTDAH: 'confirme' | 'enCours' | 'autoDiagnostic' | 'nonDiagnostique' | ''
}

export interface ModuleSection {
  titre: string
  contenu: string[]
  exercices?: string[]
  astuces?: string[]
}

export interface Module {
  id: number
  titre: string
  description: string
  icon: string
  color: string
  sections: ModuleSection[]
}

export interface ModuleCardProps {
  module: Module
  isCompleted: boolean
  onSelect: (id: number) => void
}

export interface ProgressTrackerProps {
  completedModules: number
  totalModules: number
}

export interface ModuleContentProps {
  moduleId: number
  userProfile: UserProfile
  onComplete: (moduleId: number) => void
  onBack: () => void
}

export interface WelcomeFormProps {
  onSubmit: (profile: UserProfile) => void
}

export interface ModuleNavigationProps {
  onModuleSelect: (moduleId: number) => void
  completedModules: number[]
  userProfile: UserProfile
}

