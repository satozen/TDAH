/**
 * Formulaire d'accueil pour collecter les informations de l'entrepreneur
 * Permet de personnaliser l'expérience d'apprentissage selon le profil TDAH
 */

import { useState } from 'react'
import './WelcomeForm.css'

const WelcomeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    prenom: '',
    secteurActivite: '',
    experience: '',
    principauxDefis: [],
    objectifs: '',
    diagnosticTDAH: ''
  })

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDefiToggle = (defi) => {
    setFormData(prev => ({
      ...prev,
      principauxDefis: prev.principauxDefis.includes(defi)
        ? prev.principauxDefis.filter(d => d !== defi)
        : [...prev.principauxDefis, defi]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.prenom && formData.secteurActivite && formData.principauxDefis.length > 0) {
      onSubmit(formData)
    }
  }

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="welcome-header">
          <h1>🧠 TDAH chez l'Entrepreneur</h1>
          <p className="tagline">
            Transformez votre TDAH en superpouvoir entrepreneurial
          </p>
        </div>

        <form onSubmit={handleSubmit} className="welcome-form">
          <div className="form-section">
            <h2>Faisons connaissance</h2>
            
            <div className="form-group">
              <label htmlFor="prenom">Prénom *</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Votre prénom"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="secteurActivite">Secteur d'activité *</label>
              <input
                type="text"
                id="secteurActivite"
                name="secteurActivite"
                value={formData.secteurActivite}
                onChange={handleChange}
                placeholder="Ex: Technologie, Consulting, E-commerce..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Expérience entrepreneuriale</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Sélectionnez...</option>
                <option value="debutant">Débutant (moins d'1 an)</option>
                <option value="intermediaire">Intermédiaire (1-3 ans)</option>
                <option value="avance">Avancé (3-5 ans)</option>
                <option value="expert">Expert (plus de 5 ans)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="diagnosticTDAH">Diagnostic TDAH</label>
              <select
                id="diagnosticTDAH"
                name="diagnosticTDAH"
                value={formData.diagnosticTDAH}
                onChange={handleChange}
              >
                <option value="">Sélectionnez...</option>
                <option value="confirme">Diagnostic confirmé</option>
                <option value="enCours">En cours d'évaluation</option>
                <option value="autoDiagnostic">Auto-identification</option>
                <option value="nonDiagnostique">Traits TDAH sans diagnostic</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2>Vos principaux défis *</h2>
            <p className="section-description">Sélectionnez tous les défis qui vous concernent</p>
            
            <div className="checkbox-grid">
              {defisOptions.map(defi => (
                <label key={defi} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={formData.principauxDefis.includes(defi)}
                    onChange={() => handleDefiToggle(defi)}
                  />
                  <span>{defi}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h2>Vos objectifs</h2>
            <div className="form-group">
              <label htmlFor="objectifs">
                Que souhaitez-vous accomplir avec ce programme ?
              </label>
              <textarea
                id="objectifs"
                name="objectifs"
                value={formData.objectifs}
                onChange={handleChange}
                placeholder="Décrivez vos objectifs personnels et professionnels..."
                rows="4"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={!formData.prenom || !formData.secteurActivite || formData.principauxDefis.length === 0}
          >
            Commencer mon parcours 🚀
          </button>
        </form>
      </div>
    </div>
  )
}

export default WelcomeForm

