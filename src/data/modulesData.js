/**
 * Données des 8 modules d'apprentissage sur le TDAH entrepreneurial
 * Contenu structuré pour chaque module avec sections, exercices et astuces
 */

export const getModuleData = (moduleId) => {
  const modules = {
    1: {
      id: 1,
      titre: "Comprendre votre TDAH",
      description: "Découvrez comment le TDAH influence votre style entrepreneurial",
      icon: "🧠",
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
    3: {
      id: 3,
      titre: "Organisation et planification",
      description: "Systèmes simples pour rester organisé sans vous surcharger",
      icon: "📋",
      sections: [
        {
          titre: "Systèmes d'organisation TDAH-friendly",
          contenu: [
            "Les systèmes complexes ne fonctionnent pas avec le TDAH. Vous avez besoin de systèmes simples, visuels et qui ne demandent pas trop de maintenance.",
            "Le principe 'Out of sight, out of mind' est crucial : si c'est caché, ça n'existe plus pour vous. Rendez tout visible.",
            "Utilisez UN seul système de capture pour toutes vos idées, tâches et notes. Pas 5 applications différentes.",
            "La méthode 'Inbox Zero' adaptée : capturez tout, traitez régulièrement, mais ne vous forcez pas à tout organiser parfaitement."
          ],
          exercices: [
            "Choisissez votre outil de capture unique (app de notes, carnet, ou enregistreur vocal) et utilisez-le exclusivement pendant une semaine",
            "Créez un tableau visuel (physique ou digital) pour voir tous vos projets actifs en un coup d'œil",
            "Mettez en place une routine de 'revue hebdomadaire' de 15 minutes chaque dimanche"
          ],
          astuces: [
            "Utilisez des couleurs, des icônes et des visuels partout - votre cerveau TDAH les traite plus vite que le texte",
            "Gardez vos espaces physiques minimalistes : moins d'objets = moins de distractions",
            "Ayez des 'stations' pour différentes activités plutôt qu'un seul bureau polyvalent"
          ]
        },
        {
          titre: "La planification flexible",
          contenu: [
            "Oubliez les plannings rigides à la minute près. Avec le TDAH, vous avez besoin de flexibilité.",
            "Utilisez la planification par 'blocs de temps' : matin créatif, après-midi admin, soirée stratégie - sans heures fixes.",
            "Prévoyez toujours des buffers : si vous pensez qu'une tâche prend 1 heure, bloquez 1h30.",
            "La règle du 'Top 3' : chaque jour, identifiez seulement 3 priorités absolues. Tout le reste est bonus."
          ],
          exercices: [
            "Planifiez votre semaine en blocs thématiques plutôt qu'en tâches individuelles",
            "Chaque matin, écrivez vos 'Top 3' du jour sur un post-it bien visible",
            "Analysez combien de temps vos tâches prennent VRAIMENT vs. vos estimations"
          ]
        }
      ]
    },
    4: {
      id: 4,
      titre: "Focus et concentration",
      description: "Stratégies pour maintenir votre attention sur l'essentiel",
      icon: "🎯",
      sections: [
        {
          titre: "Comprendre votre attention TDAH",
          contenu: [
            "Avec le TDAH, vous n'avez pas un déficit d'attention - vous avez une attention VARIABLE et NON RÉGULÉE.",
            "Votre attention fonctionne par intérêt et urgence, pas par importance. C'est pourquoi vous pouvez être hyperfocus sur un jeu vidéo mais pas sur votre comptabilité.",
            "Il existe deux types d'attention problématiques : l'attention trop dispersée (multitâche chaotique) et l'hyperfocus mal dirigé (focus intense sur la mauvaise chose).",
            "La solution n'est pas de 'forcer' votre concentration, mais de créer l'environnement et les conditions où elle émerge naturellement."
          ],
          exercices: [
            "Identifiez 5 activités où vous entrez naturellement en hyperfocus - qu'ont-elles en commun ?",
            "Testez différents types de 'bruit de fond' : silence, musique, bruits blancs, café ambiance - trouvez ce qui marche pour vous",
            "Pratiquez la 'méditation TDAH' de 3 minutes : focus sur la respiration, sans jugement quand votre esprit s'égare"
          ],
          astuces: [
            "Éliminez les distractions visuelles : fermez les onglets inutiles, rangez votre bureau, utilisez des bloqueurs de sites",
            "Utilisez le 'body doubling' : travaillez en présence d'autres personnes (même virtuellement) pour ancrer votre attention",
            "Créez des 'sessions de focus' avec un début et une fin claire - votre cerveau aime les structures définies"
          ]
        },
        {
          titre: "Gérer les distractions",
          contenu: [
            "Avec le TDAH, les distractions ne sont pas seulement externes (notifications, bruits) mais aussi internes (pensées, idées, inquiétudes).",
            "Vous ne pouvez pas éliminer toutes les distractions, mais vous pouvez créer un système pour les capturer sans perdre votre focus.",
            "La technique du 'Parking Lot' : gardez un carnet à côté de vous pour noter rapidement les pensées distrayantes, puis revenez à votre tâche.",
            "Les transitions sont dangereuses pour le TDAH - prévoyez des rituels pour entrer et sortir du mode focus."
          ],
          exercices: [
            "Créez votre 'rituel de focus' : 3-5 actions simples que vous faites toujours avant une session de travail profond",
            "Testez le mode 'avion' sur tous vos appareils pendant 1 heure de travail - observez la différence",
            "Utilisez la technique Pomodoro avec un 'Parking Lot' : notez chaque pensée distrayante et traitez-les pendant les pauses"
          ]
        }
      ]
    },
    5: {
      id: 5,
      titre: "Prise de décision",
      description: "Prenez des décisions efficaces sans paralysie analytique",
      icon: "💡",
      sections: [
        {
          titre: "Le TDAH et les décisions",
          contenu: [
            "Le TDAH crée deux extrêmes en prise de décision : l'impulsivité (décisions trop rapides sans analyse) et la paralysie (trop d'options, impossible de choisir).",
            "Votre cerveau TDAH est excellent pour les décisions intuitives et créatives, mais lutte avec les décisions qui nécessitent de comparer méthodiquement plusieurs options.",
            "Le problème n'est pas votre capacité à décider, c'est le PROCESSUS. Vous avez besoin d'un framework simple qui vous guide sans vous contraindre.",
            "Les décisions réversibles vs. irréversibles : avec le TDAH, apprenez à identifier lesquelles nécessitent vraiment de la réflexion."
          ],
          exercices: [
            "Pour votre prochaine décision, utilisez la règle '10-10-10' : comment vous sentirez-vous dans 10 minutes ? 10 mois ? 10 ans ?",
            "Créez une 'matrice de décision' simple : listez vos options et 3-5 critères importants, notez chaque option",
            "Pratiquez la 'décision par élimination' : au lieu de chercher la meilleure option, éliminez progressivement les mauvaises"
          ],
          astuces: [
            "Pour les petites décisions, utilisez la règle des '2 minutes' : si la décision a peu de conséquences, prenez-la immédiatement",
            "Limitez vos options à 3 maximum - trop de choix paralyse le cerveau TDAH",
            "Faites confiance à votre intuition pour les décisions créatives, utilisez un framework pour les décisions analytiques"
          ]
        },
        {
          titre: "Éviter la paralysie décisionnelle",
          contenu: [
            "La paralysie décisionnelle arrive quand vous surestimez l'importance de la décision ou quand vous avez trop d'options.",
            "Le perfectionnisme est l'ennemi de la décision. Avec le TDAH, visez 'assez bon' plutôt que 'parfait'.",
            "Utilisez des délais artificiels : 'Je décide avant vendredi à midi, point final.' Votre cerveau TDAH réagit bien à l'urgence.",
            "La technique du 'flip a coin' : pour les décisions où les options sont équivalentes, laissez le hasard décider - observez votre réaction émotionnelle pour comprendre votre vraie préférence."
          ],
          exercices: [
            "Identifiez une décision que vous procrastinez depuis des semaines - fixez-vous un délai de 48h pour décider",
            "Pratiquez la 'décision rapide' : prenez 5 minutes pour décider quelque chose que vous repoussez depuis longtemps",
            "Utilisez la méthode 'Pré-mortem' : imaginez que votre décision a échoué - pourquoi ? Cela révèle vos vraies inquiétudes"
          ]
        }
      ]
    },
    6: {
      id: 6,
      titre: "Relations et communication",
      description: "Améliorez vos interactions professionnelles",
      icon: "🤝",
      sections: [
        {
          titre: "Communication TDAH-aware",
          contenu: [
            "Le TDAH affecte votre communication : tendance à interrompre, à dévier du sujet, à oublier ce que les autres disent, ou à partager trop (ou trop peu) d'informations.",
            "Votre enthousiasme est contagieux, mais peut être perçu comme trop intense. Votre distraction peut sembler un manque d'intérêt.",
            "La clé est la conscience de soi et la communication proactive sur votre fonctionnement.",
            "Avec vos collaborateurs, clients et partenaires, expliquer brièvement votre TDAH peut transformer les malentendus en compréhension."
          ],
          exercices: [
            "Créez votre 'guide d'utilisation' personnel : un document d'une page expliquant comment mieux travailler avec vous",
            "Pratiquez l'écoute active : dans votre prochaine réunion, prenez des notes de ce que disent les autres (pas seulement vos idées)",
            "Développez 3 phrases pour gérer poliment les interruptions : ex. 'Je garde cette idée pour après, continuez...'"
          ],
          astuces: [
            "Utilisez des outils visuels dans vos présentations - votre audience et vous-même resterez plus engagés",
            "Préparez des bullet points avant les réunions importantes pour rester sur le sujet",
            "Après les conversations importantes, envoyez un email récapitulatif - cela compense les oublis potentiels"
          ]
        },
        {
          titre: "Gérer les relations professionnelles",
          contenu: [
            "Les entrepreneurs TDAH peuvent être perçus comme imprévisibles, trop intenses, ou désorganisés. Apprenez à gérer ces perceptions.",
            "Votre passion et votre énergie sont des atouts pour inspirer votre équipe - mais nécessitent d'être canalisées.",
            "Déléguez, déléguez, déléguez. Votre TDAH fait que vous êtes excellent pour initier, moins pour maintenir. Trouvez des collaborateurs complémentaires.",
            "Les réseautages et événements peuvent être épuisants pour un cerveau TDAH. Créez des stratégies de gestion de l'énergie sociale."
          ],
          exercices: [
            "Identifiez vos 3 compétences clés entrepreneuriales et 3 tâches à déléguer absolument",
            "Pratiquez le 'networking intentionnel' : à chaque événement, fixez-vous un objectif précis (rencontrer 3 personnes) plutôt que 'voir ce qui se passe'",
            "Créez des templates de communication pour les situations récurrentes (emails de suivi, réponses aux clients)"
          ]
        }
      ]
    },
    7: {
      id: 7,
      titre: "Gestion émotionnelle",
      description: "Maîtrisez vos émotions et votre impulsivité",
      icon: "❤️",
      sections: [
        {
          titre: "Les émotions avec le TDAH",
          contenu: [
            "Le TDAH vient souvent avec une dysrégulation émotionnelle : vos émotions sont plus intenses et changent plus rapidement que chez les neurotypiques.",
            "Vous pouvez passer de l'excitation à la frustration en quelques minutes. Cette intensité est une force (passion, empathie) et un défi (réactivité, impulsivité).",
            "La sensibilité au rejet (RSD - Rejection Sensitive Dysphoria) est particulièrement présente avec le TDAH. Une critique mineure peut sembler dévastatrice.",
            "Apprendre à réguler vos émotions ne signifie pas les supprimer, mais les comprendre et les canaliser productively."
          ],
          exercices: [
            "Tenez un 'journal émotionnel' simple : notez 3 moments de la journée et l'émotion ressentie + déclencheur",
            "Pratiquez la technique 'STOP' : Stop, Take a breath, Observe, Proceed - avant de réagir émotionnellement",
            "Identifiez vos 3 principaux déclencheurs émotionnels en affaires et créez un plan de réponse pour chacun"
          ],
          astuces: [
            "Créez un espace entre stimulus et réponse : quand vous ressentez une émotion forte, attendez 10 minutes avant d'agir",
            "Utilisez le mouvement physique pour réguler les émotions intenses : marchez, faites des squats, respirez profondément",
            "Développez votre vocabulaire émotionnel - être capable de nommer précisément ce que vous ressentez aide à le réguler"
          ]
        },
        {
          titre: "Gérer l'impulsivité entrepreneuriale",
          contenu: [
            "L'impulsivité entrepreneuriale peut être géniale (saisir rapidement des opportunités) ou désastreuse (décisions financières hâtives).",
            "Mettez en place des 'pare-feu' pour protéger contre les impulsions coûteuses : règle des 24 heures pour les achats > 500$, consultation d'un proche avant les grandes décisions.",
            "Canalisez votre impulsivité vers l'expérimentation rapide et l'innovation, pas vers les engagements à long terme.",
            "Reconnaissez la différence entre intuition (basée sur l'expérience) et impulsion (basée sur l'émotion du moment)."
          ],
          exercices: [
            "Créez votre 'liste de règles anti-impulsivité' : 3-5 règles personnelles pour les situations où vous êtes le plus impulsif",
            "Identifiez un 'conseiller d'impulsion' : une personne de confiance que vous pouvez appeler avant une décision impulsive importante",
            "Pratiquez le 'test des 72 heures' : pour toute nouvelle idée de projet, attendez 72 heures avant de vous engager"
          ]
        }
      ]
    },
    8: {
      id: 8,
      titre: "Votre système personnalisé",
      description: "Créez votre propre système de travail adapté à votre TDAH",
      icon: "⚡",
      sections: [
        {
          titre: "Construire votre système unique",
          contenu: [
            "Vous avez maintenant découvert 7 modules de stratégies. Il est temps de créer VOTRE système personnel qui combine ce qui fonctionne pour VOUS.",
            "Il n'y a pas de système parfait pour tous les TDAH. Certains ont besoin de structure, d'autres de flexibilité. Certains aiment la technologie, d'autres le papier.",
            "Votre système doit être : simple (moins de 5 composants principaux), flexible (s'adapte à votre énergie), visible (vous rappelle ce qui compte), et sustainable (ne demande pas trop d'efforts de maintenance).",
            "Pensez à votre système comme un jardin - il nécessite un entretien régulier mais minimal, et il évolue avec le temps."
          ],
          exercices: [
            "Faites l'inventaire : listez tous les outils, techniques et stratégies que vous utilisez actuellement - gardez seulement ce qui fonctionne vraiment",
            "Créez votre 'Stack TDAH' : choisissez 1 outil de capture, 1 méthode de planification, 1 technique de focus, et 1 routine quotidienne",
            "Écrivez votre 'Manifeste Entrepreneurial TDAH' : 5-10 principes personnels qui guident votre façon de travailler"
          ],
          astuces: [
            "Commencez minimal - ajoutez de la complexité seulement si vraiment nécessaire",
            "Revisitez votre système tous les 3 mois - ce qui fonctionne maintenant peut ne plus fonctionner plus tard",
            "Documentez votre système quelque part - quand vous aurez un moment difficile, vous pourrez y revenir"
          ]
        },
        {
          titre: "Votre feuille de route",
          contenu: [
            "Vous êtes un entrepreneur avec TDAH - une combinaison puissante mais qui nécessite de l'intention et de la stratégie.",
            "Les 7 modules précédents vous ont donné des outils. Maintenant, c'est à vous de les utiliser, les adapter, et les faire vôtres.",
            "Rappelez-vous : le but n'est pas de 'corriger' votre TDAH, mais de construire un business et une vie qui fonctionnent AVEC votre neurologie unique.",
            "Votre TDAH n'est pas un obstacle à votre succès entrepreneurial - c'est souvent la raison de votre succès. Continuez à apprendre, à vous adapter, et à célébrer votre unicité."
          ],
          exercices: [
            "Créez votre plan d'action des 30 prochains jours : quelles 3 stratégies allez-vous implémenter en premier ?",
            "Identifiez votre 'tribu TDAH' : trouvez au moins une communauté ou un groupe de soutien d'entrepreneurs avec TDAH",
            "Écrivez une lettre à vous-même dans 6 mois : où voulez-vous être ? Quelle version de vous voulez-vous devenir ?"
          ],
          astuces: [
            "Ne faites pas tout d'un coup - choisissez UNE chose à changer cette semaine",
            "Célébrez vos victoires, même minuscules - votre cerveau TDAH a besoin de renforcement positif",
            "Soyez patient avec vous-même - le changement prend du temps, et c'est OK"
          ]
        }
      ]
    }
  }

  return modules[moduleId] || null
}

