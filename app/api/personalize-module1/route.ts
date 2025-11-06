/**
 * API Route: Personnalisation Module 1 avec Claude (Anthropic)
 * Génère du contenu adapté au profil entrepreneurial TDAH de l'utilisateur
 */

import { NextRequest, NextResponse } from 'next/server'

interface UserProfile {
  name: string
  business: string
  sector: string
  mainChallenges: string[]
  tdahDiagnosed: string
  businessStage: string
  biggestPain: string
}

// Map des challenges pour le prompt
const challengeLabels: Record<string, string> = {
  time: 'Gestion du temps / Toujours en retard',
  focus: 'Difficulté à rester concentré',
  overwhelm: 'Submergé / Trop de projets',
  procrastination: 'Procrastination chronique',
  completion: 'Ne termine jamais rien',
  organization: 'Désorganisation / Chaos',
  decisions: 'Paralysie décisionnelle',
  burnout: 'Burnout / Épuisement',
  impulsivity: 'Décisions impulsives',
  delegation: 'Difficulté à déléguer'
}

export async function POST(request: NextRequest) {
  try {
    const userProfile: UserProfile = await request.json()

    // Construction du prompt système (expertise Barkley + contexte entrepreneurial)
    const systemPrompt = `Tu es un expert en TDAH entrepreneurial, formé sur les travaux du Dr. Russell Barkley.

CONTEXTE SCIENTIFIQUE (Modèle de Barkley):
- Le TDAH = déficit de l'inhibition comportementale et des fonctions exécutives
- 4 fonctions exécutives affectées:
  1. Mémoire de travail non-verbale
  2. Internalisation du discours (auto-dialogue)
  3. Autorégulation des émotions/motivation  
  4. Reconstitution (créativité/résolution de problèmes)
- Concept de "temps myope" : difficulté à se projeter dans le futur
- Nécessité d'externaliser le temps, les tâches et les objectifs

APPROCHE:
- Ton compatissant et encourageant (zéro culpabilisation)
- Exemples concrets liés au business de l'utilisateur
- Focus sur les forces TDAH (hyperfocus, créativité, résilience, énergie)
- Stratégies actionnables basées sur la science

FORMAT DE RÉPONSE:
Retourne UNIQUEMENT un objet JSON valide (pas de markdown, pas de texte autour) avec cette structure:
{
  "welcomeMessage": "Message personnalisé accueillant (2-3 phrases)",
  "tdahManifestations": [
    "3-4 exemples de comment le TDAH se manifeste spécifiquement dans leur business/secteur"
  ],
  "relevantExamples": [
    "2-3 scenarios concrets tirés de leur réalité entrepreneuriale"
  ],
  "customizedStrengths": [
    "3-4 forces TDAH adaptées à leur profil (avec exemples de leur secteur)"
  ],
  "actionPlan": [
    "3-5 premières actions concrètes à prendre cette semaine"
  ]
}`

    // Construction du prompt utilisateur
    const challengesText = userProfile.mainChallenges
      .map(c => challengeLabels[c])
      .join(', ')

    const userPrompt = `PROFIL UTILISATEUR:
- Prénom: ${userProfile.name}
- Business: ${userProfile.business}
- Secteur: ${userProfile.sector}
- Stade: ${userProfile.businessStage}
- Diagnostic TDAH: ${userProfile.tdahDiagnosed}
- Défis principaux: ${challengesText}
- Plus grande frustration: "${userProfile.biggestPain}"

Génère un contenu personnalisé pour ce profil. Sois spécifique à leur secteur et leurs défis.`

    // Appel à l'API Claude
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 2000,
        temperature: 0.7,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userPrompt
          }
        ]
      })
    })

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`)
    }

    const data = await response.json()
    const content = data.content[0].text

    // Parser le JSON retourné par Claude
    let parsedContent
    try {
      parsedContent = JSON.parse(content)
    } catch (e) {
      // Fallback si Claude ne retourne pas du JSON valide
      console.error('Failed to parse Claude response:', e)
      parsedContent = getFallbackContent(userProfile)
    }

    return NextResponse.json({ 
      success: true,
      content: parsedContent
    })

  } catch (error) {
    console.error('Error in personalize-module1:', error)
    
    // Fallback sur contenu générique en cas d'erreur
    return NextResponse.json({
      success: false,
      content: getFallbackContent({} as UserProfile),
      error: 'Erreur lors de la génération du contenu'
    }, { status: 500 })
  }
}

// Contenu de fallback (générique mais utile)
function getFallbackContent(profile: Partial<UserProfile>) {
  return {
    welcomeMessage: `Bienvenue ${profile.name || 'dans'} ce module ! Nous allons explorer ensemble comment votre cerveau TDAH fonctionne et comment en tirer parti dans votre entrepreneuriat.`,
    tdahManifestations: [
      "Vous commencez plein de projets passionnants mais avez du mal à les terminer",
      "Les tâches administratives vous donnent envie de fuir (et vous le faites souvent)",
      "Vous êtes génial en situation d'urgence mais procrastinez sur tout le reste",
      "Votre bureau et votre to-do list ressemblent à un champ de bataille"
    ],
    relevantExamples: [
      "Vous êtes hyper-productif de 22h à 2h du matin, mais incapable de vous concentrer à 14h",
      "Vous avez 47 idées brillantes par jour, mais vous ne savez plus laquelle poursuivre",
      "Vous oubliez régulièrement des rendez-vous clients malgré vos bonnes intentions"
    ],
    customizedStrengths: [
      "💡 **Créativité explosive**: Votre cerveau fait des connexions que les autres ne voient pas",
      "⚡ **Hyperfocus stratégique**: Quand c'est intéressant, vous pouvez travailler 8h d'affilée",
      "🎯 **Audace calculée**: Votre impulsivité bien canalisée devient du courage entrepreneurial",
      "🔥 **Résilience au chaos**: Vous prospérez dans l'incertitude que d'autres fuient"
    ],
    actionPlan: [
      "Compléter l'auto-évaluation ASRS pour quantifier vos symptômes",
      "Identifier vos 3 plus grands obstacles TDAH dans votre business",
      "Créer un système de capture simple (une seule app pour tout noter)",
      "Programmer 15 min demain matin pour vider votre tête de toutes vos idées"
    ]
  }
}

