/**
 * Landing Page avec structure PAS (Pain, Agitate, Solution) - Sales Funnel Premium
 * Design drôle et engageant avec appui de Mme Pierrette Desrosiers, psychologue
 */

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface LandingPageProps {
  onGetStarted: () => void
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [email, setEmail] = useState('')

  const handleCTA = () => {
    onGetStarted()
  }

  // Section Interactive - Démo personnalisation IA
  const [selectedSector, setSelectedSector] = useState<string | null>(null)

  // Animation des coûts qui s'additionnent
  const [costAnimationStarted, setCostAnimationStarted] = useState(false)
  const [currentCost, setCurrentCost] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const costSectionRef = useRef<HTMLDivElement>(null)

  const costMessages = [
    { emoji: '📱', message: 'Client perdu: Rendez-vous oublié → Contrat annulé', detail: 'Projet estimé à 2,350$', cost: 2350, delay: 0 },
    { emoji: '⏰', message: 'Procrastination: 3h perdues aujourd\'hui', detail: '18h ce mois x 95$/h de productivité', cost: 1685, delay: 2000 },
    { emoji: '💸', message: 'Pénalités: Facture fournisseur en retard', detail: 'Frais + intérêts + relation détériorée', cost: 1175, delay: 4000 },
    { emoji: '😰', message: 'Burnout: 4 jours d\'arrêt ce mois', detail: 'Perte revenus + médecin + rattrapage', cost: 890, delay: 6000 },
    { emoji: '🚪', message: 'Employé démissionne: "C\'est trop chaotique"', detail: 'Recrutement + formation nouveau = 1,240$', cost: 1240, delay: 8000 },
    { emoji: '📉', message: 'Opportunité ratée: Trop débordé pour soumissionner', detail: 'Contrat à 10K perdu faute de temps', cost: 2960, delay: 10000 }
  ]

  useEffect(() => {
    if (!costAnimationStarted) return

    let accumulatedCost = 0
    const timeouts: NodeJS.Timeout[] = []
    const intervals: NodeJS.Timeout[] = []

    // Afficher les messages progressivement
    costMessages.forEach((msg, index) => {
      const timeout = setTimeout(() => {
        setVisibleMessages(prev => [...prev, index])
        
        // Animer le compteur progressivement
        const targetCost = accumulatedCost + msg.cost
        const increment = msg.cost / 20 // 20 frames pour animation fluide
        let frame = 0
        
        const interval = setInterval(() => {
          frame++
          accumulatedCost += increment
          setCurrentCost(Math.round(accumulatedCost))
          
          if (frame >= 20) {
            clearInterval(interval)
          }
        }, 20)
        
        intervals.push(interval)
      }, msg.delay)
      
      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach(t => clearTimeout(t))
      intervals.forEach(i => clearInterval(i))
      setVisibleMessages([])
      setCurrentCost(0)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [costAnimationStarted])

  const sectors = [
    {
      id: 'agricole',
      emoji: '🌾',
      title: 'PME Agricole',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'construction',
      emoji: '🏗️',
      title: 'Construction',
      color: 'from-orange-500 to-amber-600'
    },
    {
      id: 'tech',
      emoji: '💻',
      title: 'Tech & Startup',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'commerce',
      emoji: '🛍️',
      title: 'Commerce & Retail',
      color: 'from-pink-500 to-rose-600'
    }
  ]

  const contentExamples = {
    generic: {
      title: "Texte générique (sans IA)",
      text: "La gestion du temps est importante pour les entrepreneurs. Vous devez apprendre à prioriser vos tâches et à organiser votre journée de travail pour être plus productif."
    },
    agricole: {
      title: "Personnalisé pour PME Agricole",
      text: "5h du matin, vous êtes déjà debout. Pendant que vos vaches attendent leur traite, votre tête explose avec 47 idées pour optimiser votre ferme. Mais impossible de vous concentrer sur cette maudite déclaration gouvernementale qui traîne depuis 3 semaines. Votre TDAH fait de vous un visionnaire qui peut imaginer 10 ans d'avance... mais vous oubliez de facturer vos clients. On va transformer cette énergie débordante en système béton qui marche même à 5h du matin quand votre cerveau part dans tous les sens."
    },
    construction: {
      title: "Personnalisé pour Construction",
      text: "Trois chantiers simultanés. Cinq sous-traitants qui vous appellent. Un client qui change d'avis pour la énième fois. Et vous ? Vous êtes partout et nulle part à la fois. Votre TDAH fait de vous le MacGyver des chantiers - vous résolvez des crises en 2 secondes que d'autres mettraient des heures à analyser. Mais ce soir ? Encore oublié de mettre à jour le planning. On va canaliser ce génie de l'improvisation et créer des systèmes visuels qui collent à votre façon de penser, pas celle des autres."
    },
    tech: {
      title: "Personnalisé pour Tech & Startup",
      text: "Minuit. Vous codez en hyperfocus depuis 6 heures. Vous venez de résoudre un bug que personne ne comprenait. Vous êtes un génie. Lendemain matin : vous avez raté 3 meetings, oublié de répondre à 15 emails, et votre co-fondateur est au bord de la crise de nerfs. Votre TDAH fait de vous un innovateur de feu... mais un gestionnaire catastrophique. Bonne nouvelle : vous n'avez pas besoin de devenir quelqu'un d'autre. On va structurer votre chaos créatif pour que votre startup explose (dans le bon sens)."
    },
    commerce: {
      title: "Personnalisé pour Commerce & Retail",
      text: "Vous avez 15 idées de campagnes marketing géniales par jour. Votre feed Instagram est parfait. Vos clients vous adorent. Mais votre inventaire ? Un mystère complet. Cette commande urgente ? Vous l'avez commandée... ou pas ? Avec le TDAH dans le commerce, vous êtes brillant(e) dans l'humain, nul(le) dans le système. Résultat : vous courez partout, vous êtes épuisé(e), et vous laissez de l'argent sur la table. On va faire de votre sensibilité émotionnelle votre force de vente ET créer des systèmes tellement simples que même en rush, ça roule."
    }
  }

  // Section PAIN - Les défis vécus
  const painPoints = [
    {
      emoji: '😰',
      title: 'Vous êtes submergé(e)',
      description: 'Trop de projets en même temps, vous ne savez plus où donner de la tête. Votre to-do list ressemble à un roman de Tolstoï.',
      impact: '→ Vous perdez des opportunités importantes'
    },
    {
      emoji: '⏰',
      title: 'Le temps vous file entre les doigts',
      description: 'Vous pensiez finir ça en 30 minutes ? Voilà 3 heures qui sont passées sans que vous compreniez où. C\'est comme si le temps avait décidé de faire sa propre vie.',
      impact: '→ Vous êtes toujours en retard sur vos échéances'
    },
    {
      emoji: '🔥',
      title: 'Vous alternez entre hyperfocus et burnout',
      description: 'Un jour vous êtes un génie qui peut tout accomplir, le lendemain vous êtes vidé(e) comme une batterie de téléphone en 2025.',
      impact: '→ Votre productivité est en dents de scie'
    },
    {
      emoji: '🤯',
      title: 'Paralysie décisionnelle',
      description: 'Choisir entre 2 options ? Impossible. Vous avez besoin de 47 variables, 3 avis d\'experts et une consultation astrologique.',
      impact: '→ Vous reportez constamment les décisions importantes'
    },
    {
      emoji: '😔',
      title: 'Le syndrome de l\'imposteur',
      description: 'Vous vous dites "Je ne suis pas fait(e) pour l\'entrepreneuriat". Mais en réalité, votre cerveau TDAH EST fait pour l\'entrepreneuriat - vous ne le savez juste pas encore.',
      impact: '→ Vous doutez de vos capacités'
    },
    {
      emoji: '📉',
      title: 'Vous procrastinez même les trucs que vous AIMEZ',
      description: 'Oui, vous procrastinez même les projets passionnants. Parce que votre cerveau TDAH a ses propres règles. Et vous ne les connaissez pas encore.',
      impact: '→ Vous n\'arrivez pas à finir ce qui vous passionne'
    }
  ]

  // Section AGITATE - Les conséquences dramatiques
  const consequences = [
    {
      stat: '68%',
      text: 'des entrepreneurs TDAH abandonnent leur projet dans les 2 premières années',
      emoji: '📊'
    },
    {
      stat: '3x',
      text: 'plus de stress que les entrepreneurs neurotypiques',
      emoji: '😰'
    },
    {
      stat: '42%',
      text: 'd\'entre eux ont déjà pensé abandonner par manque de stratégies adaptées',
      emoji: '💔'
    }
  ]

  // Section SOLUTION - Les bénéfices
  const benefits = [
    {
      icon: '🎯',
      title: 'Personnalisé à 200%',
      description: 'Pas de "one size fits all". Votre programme est adapté à VOTRE profil, VOS défis, VOTRE secteur d\'activité. Parce que vous êtes unique.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: '🧠',
      title: 'Contenu scientifique rigoureux',
      description: 'Chaque module est ancré dans des années de recherche et d\'expérience terrain de Mme Pierrette Desrosiers. Ce ne sont pas des trucs qu\'on a inventés hier matin. C\'est de la vraie science, testée avec de vrais entrepreneurs TDAH.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '⚡',
      title: 'Résultats en semaines, pas en années',
      description: 'Des stratégies concrètes et actionnables dès le premier module. Pas de théorie poussiéreuse, que du pratique.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: '🤖',
      title: 'Accompagnement IA intelligent',
      description: 'Notre IA personnalise votre contenu en temps réel. Comme un coach personnel, mais disponible 24/7 et qui ne juge jamais.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '💪',
      title: 'Transformez vos "défauts" en super-pouvoirs',
      description: 'Votre impulsivité devient de l\'audace. Votre distraction devient de la curiosité. Votre hyperfocus devient votre arme secrète.',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: '🚀',
      title: 'Commencez gratuitement',
      description: 'Testez les 2 premiers modules sans sortir votre carte de crédit. Découvrez si le programme vous convient avant de vous engager. Zéro risque, zéro pression.',
      color: 'from-pink-500 to-rose-600'
    }
  ]

  const pricingPlans = [
    {
      name: 'Freemium',
      price: 'Gratuit',
      period: 'toujours',
      description: 'Découvrez si le programme est fait pour vous',
      features: [
        'Accès aux modules 1-2',
        'Contenu de base personnalisé',
        'Exercices pratiques',
        'Communauté en ligne'
      ],
      cta: 'Commencer gratuitement',
      highlight: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Premium',
      price: '97',
      period: '/mois',
      description: 'Le programme complet pour entrepreneurs autonomes',
      features: [
        'Tous les 8 modules complets',
        'IA personnalisée ultra-précise',
        'Exercices avancés + templates',
        'Mises à jour mensuelles',
        'Support prioritaire',
        'Accès à vie aux contenus'
      ],
      cta: 'Débloquer tout maintenant',
      highlight: true,
      color: 'from-apple-blue to-apple-purple'
    },
    {
      name: 'Elite Pro',
      price: '997',
      period: 'one-time',
      description: 'Accompagnement individuel avec Mme Desrosiers',
      features: [
        'Tout de Premium',
        '3 séances 1-on-1 (90 min)',
        'Plan d\'action personnalisé',
        'Suivi sur 3 mois',
        'Accès direct par email'
      ],
      cta: 'Contactez-nous',
      highlight: false,
      color: 'from-purple-500 to-pink-600',
      contactOnly: true
    },
    {
      name: 'Elite VIP',
      price: '1,997',
      period: 'one-time',
      description: 'Transformation complète avec accompagnement intensif',
      features: [
        'Tout de Elite Pro',
        '8 séances 1-on-1 (90 min)',
        'Coaching hebdomadaire (6 mois)',
        'Révision de vos systèmes',
        'Support illimité',
        'Garantie résultats'
      ],
      cta: 'Contactez-nous',
      highlight: false,
      color: 'from-orange-500 to-red-600',
      contactOnly: true
    }
  ]

  const testimonials = [
    {
      name: 'Sarah L.',
      role: 'Fondatrice, Tech Startup',
      text: 'J\'ai arrêté de me battre contre mon TDAH. Maintenant je travaille AVEC lui. Résultat ? J\'ai doublé ma productivité en 3 semaines. Et je dors mieux.',
      avatar: '👩‍💼',
      result: 'Productivité +100%'
    },
    {
      name: 'Marc T.',
      role: 'Consultant Indépendant',
      text: 'Enfin un programme qui comprend vraiment comment fonctionne mon cerveau. Les stratégies sont concrètes et faciles à implémenter. Mon business a changé.',
      avatar: '👨‍💻',
      result: 'Revenus +65%'
    },
    {
      name: 'Julie D.',
      role: 'E-commerce',
      text: 'Je pensais que mon TDAH était mon plus grand handicap. J\'ai découvert que c\'était mon plus grand atout. Merci pour cette révélation.',
      avatar: '👩‍🚀',
      result: 'Burnout → 0'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-apple-bg to-white">
      {/* HERO SECTION - Hook initial */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/10 via-transparent to-apple-purple/10" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-apple-blue/10 to-apple-purple/10 rounded-full border border-apple-blue/20"
            >
              <span className="text-apple-blue font-semibold text-sm md:text-base">
                🎯 Programme révolutionnaire pour entrepreneurs TDAH
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-7xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight leading-tight"
            >
              Arrêtez de vous battre contre votre TDAH.
              <br />
              <span className="block bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink bg-clip-text text-transparent mt-4">
                Commencez à l'exploiter.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-apple-gray mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Le premier programme d'apprentissage personnalisé par IA, conçu pour les entrepreneurs TDAH qui en ont marre des conseils qui ne marchent pas.
            </motion.p>

            {/* Section Pierrette Desrosiers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-apple-sm border-2 border-purple-200"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <img
                  src="/pierrette-desrosiers-psycoaching-conferenciere.jpg"
                  alt="Mme Pierrette Desrosiers, psychologue spécialisée en TDAH"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-apple-lg"
                />
              </motion.div>
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold text-purple-600 mb-1">
                  Programme appuyé par
                </p>
                <p className="text-xl font-bold text-apple-gray-dark mb-1">
                  Mme Pierrette Desrosiers
                </p>
                <p className="text-sm text-apple-gray">
                  Psychologue spécialisée en TDAH entrepreneurial
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={handleCTA}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-xl px-12 py-5 shadow-apple-xl mb-2"
              >
                🚀 Je veux transformer mon TDAH maintenant
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-apple-gray mt-6"
            >
              ✓ 100% Gratuit · ✓ Sans engagement · ✓ Accès immédiat · ✓ Pas de bullshit
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-apple-blue/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-apple-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </section>

      {/* SECTION 1: PAIN - Les problèmes vécus */}
      <section className="py-20 bg-gradient-to-b from-white via-red-50/30 to-apple-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Vous reconnaissez-vous dans ces situations ?
            </h2>
            <p className="text-xl text-apple-gray max-w-3xl mx-auto leading-relaxed">
              Si vous êtes entrepreneur(e) avec TDAH, ces scénarios vous parlent sûrement. 
              <span className="font-semibold text-apple-gray-dark"> Vous n'êtes pas seul(e).</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-apple-sm p-8 shadow-apple-lg hover:shadow-apple-xl transition-all duration-300 border-l-4 border-red-500"
              >
                <div className="text-5xl mb-4">{point.emoji}</div>
                <h3 className="text-2xl font-bold text-apple-gray-dark mb-3 letter-spacing-apple">
                  {point.title}
                </h3>
                <p className="text-apple-gray mb-4 leading-relaxed text-lg">
                  {point.description}
                </p>
                <p className="text-red-600 font-semibold text-sm flex items-center gap-2">
                  <span>💥</span> {point.impact}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <motion.button
              onClick={handleCTA}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-4 shadow-apple-lg"
            >
              😰 Oui, c'est exactement moi ! Je veux la solution →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: AGITATE - Les conséquences dramatiques */}
      <section className="py-20 bg-gradient-to-b from-apple-bg via-orange-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Et si vous ne faites rien ?
            </h2>
            <p className="text-xl text-apple-gray max-w-3xl mx-auto leading-relaxed">
              Les statistiques sont claires. Sans stratégies adaptées à votre TDAH entrepreneurial, 
              les conséquences sont réelles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {consequences.map((consequence, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-apple p-8 shadow-apple-lg text-center border-2 border-red-200"
              >
                <div className="text-6xl mb-4">{consequence.emoji}</div>
                <div className="text-5xl md:text-6xl font-bold text-red-600 mb-4 letter-spacing-apple-tight">
                  {consequence.stat}
                </div>
                <p className="text-lg text-apple-gray-dark font-medium leading-relaxed">
                  {consequence.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-500 to-orange-500 rounded-apple p-8 md:p-12 text-white text-center shadow-apple-xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 letter-spacing-apple-tight">
              💔 Vous méritez mieux que ça.
            </h3>
            <p className="text-xl md:text-2xl opacity-95 mb-6 leading-relaxed">
              Vous n'êtes pas un échec. Vous avez juste besoin d'outils adaptés à votre cerveau unique.
            </p>
            <motion.button
              onClick={handleCTA}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-apple-blue font-bold text-lg px-10 py-4 rounded-xl shadow-lg"
            >
              🛑 STOP ! Je veux la solution maintenant →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION INTERACTIVE - Démo personnalisation IA */}
      <section className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-apple-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 px-6 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-600 font-bold text-sm md:text-base">✨ DÉMONSTRATION INTERACTIVE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              L'intersection parfaite : IA + Expertise scientifique
            </h2>
            <p className="text-xl text-apple-gray-dark max-w-4xl mx-auto leading-relaxed mb-6">
              Notre programme n'est pas juste du contenu généré par IA. C'est l'expertise terrain de <span className="font-bold text-purple-600">Mme Pierrette Desrosiers</span>, psychologue spécialisée en TDAH entrepreneurial, combinée à une <span className="font-bold text-purple-600">personnalisation intelligente</span> qui s'adapte à VOTRE réalité.
            </p>
            <p className="text-lg text-apple-gray max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-apple-gray-dark">Voyez la différence :</span> Cliquez sur votre secteur d'activité et découvrez comment des stratégies scientifiquement prouvées se transforment pour parler directement à VOUS.
            </p>
          </motion.div>

          {/* Secteurs sélectionnables */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {sectors.map((sector, index) => (
              <motion.button
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedSector(sector.id)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-apple-sm shadow-apple-md transition-all duration-300 ${
                  selectedSector === sector.id
                    ? `bg-gradient-to-br ${sector.color} text-white shadow-apple-xl scale-105`
                    : 'bg-white text-apple-gray-dark hover:shadow-apple-lg'
                }`}
              >
                <div className="text-5xl mb-3">{sector.emoji}</div>
                <div className="font-bold text-sm md:text-base">{sector.title}</div>
              </motion.button>
            ))}
          </div>

          {/* Widget de comparaison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Texte générique */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-apple-sm p-8 border-2 border-gray-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">😐</span>
                <h3 className="text-xl font-bold text-gray-600">{contentExamples.generic.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed opacity-70">
                {contentExamples.generic.text}
              </p>
              <div className="mt-4 text-sm text-gray-500 italic">
                → Ennuyeux, générique, ne vous parle pas
              </div>
            </motion.div>

            {/* Texte personnalisé */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {!selectedSector ? (
                <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-apple-sm p-8 border-2 border-dashed border-purple-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👆</div>
                    <p className="text-lg text-apple-gray font-medium">
                      Cliquez sur un secteur ci-dessus pour voir la magie opérer !
                    </p>
                  </div>
                </div>
              ) : (
                <motion.div
                  key={selectedSector}
                  initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-apple-sm p-8 border-2 border-purple-400 shadow-apple-xl"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">✨</span>
                    <h3 className="text-xl font-bold text-purple-600">
                      {contentExamples[selectedSector as keyof typeof contentExamples].title}
                    </h3>
                  </div>
                  <p className="text-apple-gray-dark leading-relaxed font-medium">
                    {contentExamples[selectedSector as keyof typeof contentExamples].text}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-600">
                    <span>🎯</span>
                    <span>Ça vous parle, n'est-ce pas ? C'est ça la puissance de l'IA !</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* CTA après la démo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-apple p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-apple-gray-dark mb-4">
              Imaginez 8 modules entiers personnalisés comme ça ! 🤯
            </h3>
            <p className="text-lg text-apple-gray-dark mb-4 leading-relaxed">
              <span className="font-bold">Du vrai contenu scientifique</span> basé sur des années de recherche et d'expertise terrain de Mme Desrosiers, adapté en temps réel à VOTRE secteur, VOS défis, VOTRE profil TDAH unique.
            </p>
            <p className="text-base text-apple-gray mb-6 max-w-2xl mx-auto">
              Ce n'est pas de l'IA qui invente. C'est de la science rigoureuse qui devient personnelle.
            </p>
            <motion.button
              onClick={handleCTA}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xl px-12 py-5 shadow-apple-xl"
            >
              🚀 Je veux mon programme personnalisé maintenant !
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: SOLUTION - La réponse */}
      <section className="py-20 bg-gradient-to-b from-apple-bg via-green-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Voici comment transformer votre TDAH en super-pouvoir
            </h2>
            <p className="text-xl text-apple-gray max-w-3xl mx-auto leading-relaxed mb-8">
              Un programme révolutionnaire en 8 modules, conçu spécifiquement pour les entrepreneurs TDAH.
            </p>
            
            {/* Mention Pierrette Desrosiers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-purple-50 to-pink-50 rounded-apple-sm p-6 border-2 border-purple-200 shadow-apple-md"
            >
              <p className="text-lg text-apple-gray-dark leading-relaxed">
                <span className="font-bold text-purple-600">🎓 Basé sur le travail de Mme Pierrette Desrosiers</span>
                <br />
                <span className="text-apple-gray">Psychologue spécialisée en TDAH entrepreneurial</span>
              </p>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-apple-sm p-8 shadow-apple-md hover:shadow-apple-lg transition-shadow duration-200 border border-gray-200"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-apple-gray-dark mb-3 letter-spacing-apple">
                  {benefit.title}
                </h3>
                <p className="text-base text-apple-gray-dark leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={handleCTA}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xl px-12 py-5 shadow-apple-xl"
            >
              ✨ Je veux accéder au programme maintenant →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION PRICING */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-apple-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Choisissez votre parcours
            </h2>
            <p className="text-xl text-apple-gray max-w-3xl mx-auto leading-relaxed">
              Du freemium pour tester, au coaching VIP personnalisé avec Mme Desrosiers. 
              Trouvez la formule qui correspond à vos besoins.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-apple-sm p-6 shadow-apple-md transition-all duration-200 border-2 ${
                  plan.highlight 
                    ? 'border-apple-blue lg:scale-105 shadow-apple-xl' 
                    : 'border-gray-200 hover:shadow-apple-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-apple-blue to-apple-purple text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      ⭐ POPULAIRE
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-apple-gray-dark mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-apple-gray mb-4 min-h-[40px]">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    {plan.price === 'Gratuit' ? (
                      <div className="text-4xl font-bold text-apple-gray-dark">
                        Gratuit
                      </div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-apple-gray-dark">
                          {plan.price}$
                        </div>
                        <div className="text-sm text-apple-gray">
                          {plan.period === '/mois' ? 'par mois' : 'paiement unique'}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="text-apple-gray-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={handleCTA}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-apple-blue to-apple-purple text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-apple-gray-dark hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </motion.button>

                {plan.contactOnly && (
                  <p className="text-xs text-apple-gray text-center mt-3">
                    Places limitées - Sur candidature
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-apple-gray">
              💳 Paiement sécurisé · 🔒 Garantie 30 jours satisfait ou remboursé (Premium)
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION COÛT DE L'INACTION - VERSION ANIMÉE */}
      <section ref={costSectionRef} className="py-20 bg-gradient-to-b from-apple-bg via-red-50/20 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-dark mb-6 letter-spacing-apple-tight">
              Parlons du VRAI coût
            </h2>
            <p className="text-xl text-apple-gray max-w-3xl mx-auto leading-relaxed mb-8">
              97$ par mois vous semble cher ? Voyons combien vous coûte votre TDAH non géré <span className="font-bold text-red-600">CHAQUE MOIS</span>.
            </p>
            {!costAnimationStarted && (
              <motion.button
                onClick={() => setCostAnimationStarted(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg"
              >
                ▶️ Voir une journée typique d'entrepreneur TDAH
              </motion.button>
            )}
          </motion.div>

          {/* Zone d'animation des messages et compteur */}
          {costAnimationStarted && (
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Colonne gauche: Messages qui apparaissent comme des notifications */}
              <div className="space-y-4 min-h-[500px]">
                <AnimatePresence>
                  {costMessages.map((msg, index) => (
                    visibleMessages.includes(index) && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="bg-white rounded-2xl p-4 shadow-lg border-l-4 border-red-500 flex items-start gap-3"
                      >
                        <div className="text-3xl flex-shrink-0">{msg.emoji}</div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-apple-gray-dark mb-1">
                            {msg.message}
                          </p>
                          <p className="text-xs text-apple-gray mb-2">
                            {msg.detail}
                          </p>
                          <p className="text-xl font-bold text-red-600">
                            -{msg.cost.toLocaleString()}$
                          </p>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>

              {/* Colonne droite: Compteur géant qui monte */}
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-apple p-8 md:p-12 text-center border-4 border-red-200 shadow-apple-xl w-full">
                  <p className="text-lg text-apple-gray mb-4">Coûts accumulés ce mois:</p>
                  <motion.div
                    key={currentCost}
                    initial={{ scale: 1.2, color: '#ef4444' }}
                    animate={{ scale: 1, color: '#991b1b' }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl md:text-7xl font-bold mb-4"
                  >
                    {currentCost.toLocaleString()}$
                  </motion.div>
                  <p className="text-sm text-apple-gray">
                    {currentCost >= 10300 ? (
                      <span className="text-red-600 font-bold">
                        💥 Plus de 123,000$ par année en pertes !
                      </span>
                    ) : (
                      'En cours de calcul...'
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Total dramatique - s'affiche après l'animation */}
          {costAnimationStarted && currentCost >= 10300 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, type: "spring" }}
              className="bg-gradient-to-r from-red-500 to-orange-500 rounded-apple p-8 md:p-12 text-white text-center shadow-apple-xl"
            >
              <p className="text-lg mb-2 opacity-90">Coût total de l'inaction</p>
              <div className="text-5xl md:text-7xl font-bold mb-4 letter-spacing-apple-tight">
                ~10,300$ / mois
              </div>
              <p className="text-xl mb-6 opacity-95">
                Soit plus de <span className="font-bold">123,000$ par année</span> que votre TDAH non géré vous coûte en opportunités perdues.
              </p>
              <div className="border-t-2 border-white/30 my-6"></div>
              <p className="text-2xl font-bold mb-4">
                Notre programme Premium à 97$/mois ?
              </p>
              <p className="text-xl opacity-95">
                C'est <span className="font-bold underline">0,8% du problème</span> pour débloquer 100% de votre potentiel.
                <br />
                <span className="text-sm mt-2 block">
                  (Et si vous êtes en Freemium, vous commencez à 0$ 🤯)
                </span>
              </p>
            </motion.div>
          )}

          {costAnimationStarted && currentCost >= 10300 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="mt-12 text-center"
            >
              <p className="text-apple-gray mb-6 text-lg">
                La vraie question n'est pas "Puis-je me permettre ce programme ?"
                <br />
                <span className="font-bold text-apple-gray-dark">
                  C'est "Puis-je me permettre de NE PAS le suivre ?"
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={handleCTA}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-xl px-12 py-5 shadow-apple-xl"
                >
                  💰 Je veux arrêter de perdre cet argent maintenant
                </motion.button>
                <motion.button
                  onClick={() => {
                    setCostAnimationStarted(false)
                    setCurrentCost(0)
                    setVisibleMessages([])
                    // Scroll vers le haut de la section - center pour bien voir
                    costSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    // Redémarrer l'animation
                    setTimeout(() => setCostAnimationStarted(true), 500)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-apple-gray-dark border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  🔄 Rejouer l'animation
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* TÉMOIGNAGES */}
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
            <p className="text-xl text-apple-gray">
              Des entrepreneurs comme vous qui ont décidé de changer leur approche
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-apple-sm p-8 shadow-apple-lg hover:shadow-apple-xl transition-all"
              >
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <p className="text-lg text-apple-gray-dark mb-6 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-apple-gray-dark">{testimonial.name}</p>
                  <p className="text-sm text-apple-gray mb-2">{testimonial.role}</p>
                  <div className="inline-block px-4 py-2 bg-green-100 rounded-full">
                    <span className="text-green-600 font-semibold text-sm">{testimonial.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
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
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Rejoignez des centaines d'entrepreneurs TDAH qui ont déjà transformé leurs défis en forces.
            <br />
            <span className="font-semibold">Programme basé sur le travail de Mme Pierrette Desrosiers, psychologue spécialisée.</span>
          </p>
          <motion.button
            onClick={handleCTA}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-apple-blue font-bold text-xl px-16 py-6 rounded-xl shadow-2xl mb-4"
          >
            🚀 Oui, je veux transformer mon TDAH maintenant !
          </motion.button>
          <p className="text-white/80 text-sm">
            ✓ Gratuit · ✓ Sans engagement · ✓ Accès immédiat · ✓ Basé sur la science
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-apple-gray-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/60 mb-2">
            © 2025 TDAH chez l'Entrepreneur. Tous droits réservés.
          </p>
          <p className="text-white/40 text-sm">
            Programme appuyé par le travail de Mme Pierrette Desrosiers, psychologue spécialisée en TDAH entrepreneurial.
          </p>
        </div>
      </footer>
    </div>
  )
}
