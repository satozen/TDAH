/**
 * Landing Page avec sales funnel - Design premium et épuré
 * Page de vente pour présenter le programme avant d'accéder au formulaire
 */

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface LandingPageProps {
  onGetStarted: () => void
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [email, setEmail] = useState('')

  const handleCTA = () => {
    onGetStarted()
  }

  const benefits = [
    {
      icon: '🎯',
      title: 'Personnalisé à 100%',
      description: 'Programme adapté à votre profil, vos défis et vos objectifs entrepreneuriaux'
    },
    {
      icon: '🧠',
      title: '8 Modules Complets',
      description: 'De la compréhension du TDAH à la création de votre système personnalisé'
    },
    {
      icon: '⚡',
      title: 'Résultats Rapides',
      description: 'Des exercices pratiques et des stratégies actionnables dès le premier module'
    },
    {
      icon: '🤖',
      title: 'Accompagnement IA',
      description: 'Recommandations personnalisées par intelligence artificielle'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah L.',
      role: 'Fondatrice, Tech Startup',
      text: 'Enfin un programme qui comprend vraiment comment fonctionne mon cerveau TDAH. J\'ai doublé ma productivité en 3 semaines.',
      avatar: '👩‍💼'
    },
    {
      name: 'Marc T.',
      role: 'Consultant Indépendant',
      text: 'Les stratégies sont concrètes et faciles à implémenter. Mon business et ma vie ont changé.',
      avatar: '👨‍💻'
    },
    {
      name: 'Julie D.',
      role: 'E-commerce',
      text: 'Je pensais que mon TDAH était un handicap. J\'ai découvert que c\'était mon plus grand atout.',
      avatar: '👩‍🚀'
    }
  ]

  const features = [
    'Accès immédiat à tous les modules',
    'Exercices pratiques téléchargeables',
    'Suivi de progression personnalisé',
    'Contenu basé sur les dernières recherches',
    'Compatible mobile, tablette et desktop'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-apple-bg to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/5 via-transparent to-apple-purple/5" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 bg-apple-blue/10 rounded-full"
            >
              <span className="text-apple-blue font-semibold">Programme révolutionnaire pour entrepreneurs TDAH</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight leading-tight">
              Transformez votre TDAH en
              <span className="block bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink bg-clip-text text-transparent">
                Superpouvoir Entrepreneurial
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-apple-gray mb-12 leading-relaxed max-w-3xl mx-auto">
              Le premier programme d'apprentissage personnalisé par IA, conçu spécifiquement pour 
              les entrepreneurs avec TDAH qui veulent exceller sans se battre contre leur nature.
            </p>

            <motion.button
              onClick={handleCTA}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xl px-12 py-5 shadow-apple-xl mb-4"
            >
              Commencer mon parcours maintenant 🚀
            </motion.button>

            <p className="text-sm text-apple-gray">
              ✓ Gratuit · ✓ Sans engagement · ✓ Accès immédiat
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-apple-blue/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-apple-purple/10 rounded-full blur-3xl" />
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-white to-apple-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Vous reconnaissez-vous ?
            </h2>
            <p className="text-xl text-apple-gray max-w-3xl mx-auto">
              La plupart des conseils entrepreneuriaux sont créés pour des cerveaux neurotypiques. 
              Pas étonnant que vous vous sentiez dépassé.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '😰', title: 'Submergé', desc: 'Trop de projets en même temps, incapable de prioriser' },
              { emoji: '⏰', title: 'Toujours en retard', desc: 'Le temps file sans que vous compreniez pourquoi' },
              { emoji: '🔥', title: 'Burnout récurrent', desc: 'Alternance entre hyperfocus intense et épuisement total' },
              { emoji: '📉', title: 'Productivité en dents de scie', desc: 'Certains jours vous êtes un génie, d\'autres vous n\'arrivez à rien' },
              { emoji: '🤯', title: 'Paralysie décisionnelle', desc: 'Trop d\'options, impossible de choisir' },
              { emoji: '😔', title: 'Sentiment d\'imposture', desc: 'Vous pensez que vous n\'êtes pas fait pour l\'entrepreneuriat' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-apple-sm p-6 shadow-apple-md hover:shadow-apple-lg transition-all"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-apple-gray-dark mb-2">{item.title}</h3>
                <p className="text-apple-gray">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-apple-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Et si votre TDAH était votre plus grand atout ?
            </h2>
            <p className="text-xl text-apple-gray max-w-3xl mx-auto">
              Notre programme ne cherche pas à "corriger" votre TDAH. Il vous apprend à l'exploiter 
              pour devenir l'entrepreneur que vous êtes destiné à être.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-apple-sm p-8 shadow-apple-lg hover:shadow-apple-xl transition-all"
              >
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-apple-gray-dark mb-3">{benefit.title}</h3>
                <p className="text-lg text-apple-gray">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-white to-apple-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Comment ça fonctionne ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink" />

            {[
              { 
                step: '1',
                title: 'Profil personnalisé',
                desc: 'Répondez à un questionnaire sur vos défis et objectifs uniques'
              },
              { 
                step: '2',
                title: '8 modules adaptés',
                desc: 'L\'IA personnalise le contenu en fonction de votre profil'
              },
              { 
                step: '3',
                title: 'Résultats concrets',
                desc: 'Appliquez les stratégies et voyez votre business transformer'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white rounded-apple-sm p-8 shadow-apple-lg text-center z-10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-apple-blue to-apple-purple rounded-full 
                              flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-apple-gray-dark mb-3">{item.title}</h3>
                <p className="text-apple-gray text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-apple-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Ils ont transformé leur TDAH
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-apple-sm p-8 shadow-apple-lg"
              >
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <p className="text-lg text-apple-gray-dark mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-apple-gray-dark">{testimonial.name}</p>
                  <p className="text-sm text-apple-gray">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Ce que vous obtenez
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-apple-bg rounded-xl"
                >
                  <div className="w-8 h-8 bg-apple-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-lg text-apple-gray-dark">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-apple-blue to-apple-purple rounded-apple p-12 text-white text-center shadow-apple-xl"
            >
              <h3 className="text-3xl font-bold mb-4">Gratuit</h3>
              <p className="text-6xl font-bold mb-6">0€</p>
              <p className="text-xl opacity-90 mb-8">Accès complet à tous les modules</p>
              <motion.button
                onClick={handleCTA}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-apple-blue font-bold text-lg py-4 rounded-xl shadow-lg"
              >
                Commencer maintenant
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-apple-blue via-apple-purple to-apple-pink relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 letter-spacing-apple-tight">
            Prêt à libérer votre potentiel ?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Rejoignez des centaines d'entrepreneurs TDAH qui ont déjà transformé leurs défis en forces.
          </p>
          <motion.button
            onClick={handleCTA}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-apple-blue font-bold text-xl px-16 py-6 rounded-xl shadow-2xl"
          >
            Oui, je veux transformer mon TDAH 🚀
          </motion.button>
          <p className="text-white/80 mt-6">Démarrage immédiat · Sans carte de crédit</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-apple-gray-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/60">© 2025 TDAH chez l'Entrepreneur. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

