/**
 * Landing Page avec structure PAS (Pain, Agitate, Solution) - Sales Funnel Premium
 * Design drôle et engageant avec appui de Mme Pierrette Desrosiers, psychologue
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

  // Section Interactive - Démo personnalisation IA
  const [selectedSector, setSelectedSector] = useState<string | null>(null)

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
      text: "En tant qu'entrepreneur agricole avec TDAH, votre journée est rythmée par les saisons et les cycles de production. Vous jonglez entre la gestion des cultures, les commandes clients, et la paperasse administrative. Votre hyperfocus devient un atout lors des périodes de récolte, mais la procrastination sur les tâches comptables peut vous coûter cher. Apprenez à synchroniser votre énergie TDAH avec vos cycles agricoles pour maximiser votre productivité aux moments critiques."
    },
    construction: {
      title: "Personnalisé pour Construction",
      text: "Dans le secteur de la construction avec TDAH, vous gérez simultanément plusieurs chantiers, des équipes sur le terrain, et des clients exigeants. Votre impulsivité TDAH vous permet de prendre des décisions rapides sur les imprévus de chantier, mais peut vous faire oublier de suivre les délais administratifs. Transformez votre hyperactivité en super-pouvoir de coordination et créez des systèmes visuels pour ne jamais perdre le fil de vos projets en cours."
    },
    tech: {
      title: "Personnalisé pour Tech & Startup",
      text: "Entrepreneur tech avec TDAH ? Votre cerveau est fait pour l'innovation et le pivot rapide. Vous excellez dans le code en hyperfocus, mais la gestion de produit et les meetings vous épuisent. Votre distraction devient curiosité technologique, votre impulsivité devient agilité entrepreneuriale. Apprenez à canaliser votre énergie TDAH dans les sprints de développement et à déléguer ce qui draine votre dopamine."
    },
    commerce: {
      title: "Personnalisé pour Commerce & Retail",
      text: "Dans le commerce avec TDAH, vous êtes sur tous les fronts : gestion des stocks, service client, marketing, réseaux sociaux. Votre créativité TDAH vous donne des idées de promotions géniales, mais l'inventaire vous ennuie à mourir. Transformez votre sensibilité émotionnelle en connexion client authentique et créez des routines qui rendent la gestion de stock aussi stimulante qu'une nouvelle campagne marketing."
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
      title: 'Basé sur la recherche scientifique',
      description: 'Appuyé par le travail de Mme Pierrette Desrosiers, psychologue spécialisée en TDAH entrepreneurial. Parce que la science, ça compte.',
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
      title: 'Gratuit. Sans piège. Sans bullshit.',
      description: 'Vraiment gratuit. On vous demande rien en échange. Juste de transformer votre vie entrepreneuriale. C\'est notre mission.',
      color: 'from-pink-500 to-rose-600'
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
              Voyez la magie de la personnalisation IA
            </h2>
            <p className="text-xl text-apple-gray max-w-3xl mx-auto leading-relaxed">
              Cliquez sur votre secteur d'activité et voyez comment le même contenu se transforme 
              pour parler <span className="font-bold text-apple-purple">directement à VOUS</span>.
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
            className="mt-12 text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-apple p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-apple-gray-dark mb-4">
              Imaginez 8 modules entiers personnalisés comme ça ! 🤯
            </h3>
            <p className="text-lg text-apple-gray mb-6">
              Chaque section, chaque exercice, chaque astuce adaptée à VOTRE secteur, 
              VOS défis, VOTRE profil TDAH unique.
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
