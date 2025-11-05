/**
 * Formulaire d'accueil avec design Apple-style et animations Framer Motion
 * Collecte le profil de l'entrepreneur pour personnaliser l'expérience
 */

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { UserProfile, WelcomeFormProps } from '@/types'

const defisOptions = [
  'Gestion du temps',
  'Procrastination',
  'Organisation',
  'Concentration',
  'Gestion des priorités',
  'Prise de décision',
  'Gestion émotionnelle',
  'Relations professionnelles'
]

export default function WelcomeForm({ onSubmit }: WelcomeFormProps) {
  const [formData, setFormData] = useState<UserProfile>({
    prenom: '',
    secteurActivite: '',
    experience: '',
    principauxDefis: [],
    objectifs: '',
    diagnosticTDAH: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDefiToggle = (defi: string) => {
    setFormData(prev => ({
      ...prev,
      principauxDefis: prev.principauxDefis.includes(defi)
        ? prev.principauxDefis.filter(d => d !== defi)
        : [...prev.principauxDefis, defi]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.prenom && formData.secteurActivite && formData.principauxDefis.length > 0) {
      onSubmit(formData)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-apple-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-apple-purple/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-3xl relative z-10"
      >
        <div className="glass-effect rounded-apple shadow-apple-xl border border-white/50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-b from-apple-blue/95 to-apple-blue-dark text-white px-10 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-50" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-3 letter-spacing-apple-tight relative z-10"
            >
              🧠 TDAH chez l&apos;Entrepreneur
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl opacity-95 relative z-10"
            >
              Transformez votre TDAH en superpouvoir entrepreneurial
            </motion.p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-apple-blue letter-spacing-apple-tight">
                Faisons connaissance
              </h2>

              <div>
                <label htmlFor="prenom" className="block text-sm font-semibold mb-2 text-apple-gray-dark">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  required
                  className="input-apple"
                />
              </div>

              <div>
                <label htmlFor="secteurActivite" className="block text-sm font-semibold mb-2 text-apple-gray-dark">
                  Secteur d&apos;activité *
                </label>
                <input
                  type="text"
                  id="secteurActivite"
                  name="secteurActivite"
                  value={formData.secteurActivite}
                  onChange={handleChange}
                  placeholder="Ex: Technologie, Consulting, E-commerce..."
                  required
                  className="input-apple"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold mb-2 text-apple-gray-dark">
                  Expérience entrepreneuriale
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="input-apple"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="debutant">Débutant (moins d&apos;1 an)</option>
                  <option value="intermediaire">Intermédiaire (1-3 ans)</option>
                  <option value="avance">Avancé (3-5 ans)</option>
                  <option value="expert">Expert (plus de 5 ans)</option>
                </select>
              </div>

              <div>
                <label htmlFor="diagnosticTDAH" className="block text-sm font-semibold mb-2 text-apple-gray-dark">
                  Diagnostic TDAH
                </label>
                <select
                  id="diagnosticTDAH"
                  name="diagnosticTDAH"
                  value={formData.diagnosticTDAH}
                  onChange={handleChange}
                  className="input-apple"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="confirme">Diagnostic confirmé</option>
                  <option value="enCours">En cours d&apos;évaluation</option>
                  <option value="autoDiagnostic">Auto-identification</option>
                  <option value="nonDiagnostique">Traits TDAH sans diagnostic</option>
                </select>
              </div>
            </motion.div>

            {/* Section 2 - Défis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-apple-blue letter-spacing-apple-tight">
                Vos principaux défis *
              </h2>
              <p className="text-sm text-apple-gray">
                Sélectionnez tous les défis qui vous concernent
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {defisOptions.map((defi, index) => (
                  <motion.label
                    key={defi}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                      ${formData.principauxDefis.includes(defi)
                        ? 'border-apple-blue bg-apple-blue/5'
                        : 'border-gray-200 hover:border-apple-blue/50 hover:bg-gray-50'
                      }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.principauxDefis.includes(defi)}
                      onChange={() => handleDefiToggle(defi)}
                      className="w-5 h-5 text-apple-blue rounded-md border-gray-300 focus:ring-apple-blue focus:ring-offset-0 cursor-pointer"
                    />
                    <span className={`ml-3 font-medium ${formData.principauxDefis.includes(defi) ? 'text-apple-blue' : 'text-apple-gray-dark'}`}>
                      {defi}
                    </span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Section 3 - Objectifs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-apple-blue letter-spacing-apple-tight">
                Vos objectifs
              </h2>
              <div>
                <label htmlFor="objectifs" className="block text-sm font-semibold mb-2 text-apple-gray-dark">
                  Que souhaitez-vous accomplir avec ce programme ?
                </label>
                <textarea
                  id="objectifs"
                  name="objectifs"
                  value={formData.objectifs}
                  onChange={handleChange}
                  placeholder="Décrivez vos objectifs personnels et professionnels..."
                  rows={4}
                  className="input-apple resize-none"
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              type="submit"
              disabled={!formData.prenom || !formData.secteurActivite || formData.principauxDefis.length === 0}
              className="btn-primary w-full text-lg py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Commencer mon parcours 🚀
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

