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
    "3-4 exemples détaillés de comment le TDAH se manifeste spécifiquement dans leur business/secteur (2-3 phrases chacun)"
  ],
  "relevantExamples": [
    "2-3 scenarios concrets et détaillés tirés de leur réalité entrepreneuriale (3-4 phrases chacun, avec contexte)"
  ],
  "customizedStrengths": [
    "3-4 forces TDAH adaptées à leur profil avec explications détaillées (2-3 phrases chacune, avec exemples concrets de leur secteur)"
  ],
  "actionPlan": [
    "3-5 premières actions concrètes à prendre cette semaine (chaque action doit être détaillée avec pourquoi et comment)"
  ],
  "detailedExplanations": {
    "whyThisMatters": "Explication détaillée (4-5 phrases) de pourquoi comprendre leur profil TDAH est crucial pour leur succès entrepreneurial",
    "commonPatterns": "Description (3-4 phrases) des patterns TDAH qu'ils vivent probablement dans leur secteur",
    "hopeMessage": "Message d'espoir personnalisé (3-4 phrases) basé sur leur profil et leurs défis"
  }
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
    welcomeMessage: `Bienvenue ${profile.name || ''} dans ce module ! Nous allons explorer ensemble comment votre cerveau TDAH fonctionne et comment en tirer parti dans votre entrepreneuriat.`,
    tdahManifestations: [
      "Vous commencez plein de projets passionnants mais avez du mal à les terminer. Chaque nouveau projet vous excite plus que celui en cours, créant un cycle de projets inachevés qui s'accumulent.",
      "Les tâches administratives vous donnent envie de fuir (et vous le faites souvent). Factures, déclarations, paperasse - tout ce qui est répétitif et ennuyeux devient une montagne insurmontable.",
      "Vous êtes génial en situation d'urgence mais procrastinez sur tout le reste. Les deadlines de dernière minute vous motivent, mais les tâches sans urgence traînent indéfiniment.",
      "Votre bureau et votre to-do list ressemblent à un champ de bataille. Vous savez qu'il faut organiser, mais vous ne savez pas par où commencer, alors vous ne faites rien."
    ],
    relevantExamples: [
      "Vous êtes hyper-productif de 22h à 2h du matin, mais incapable de vous concentrer à 14h. C'est votre rythme naturel TDAH : votre cerveau s'active mieux quand tout est calme et qu'il n'y a plus de distractions.",
      "Vous avez 47 idées brillantes par jour, mais vous ne savez plus laquelle poursuivre. Votre créativité TDAH est un super-pouvoir, mais sans système pour capturer et prioriser, elle devient un handicap.",
      "Vous oubliez régulièrement des rendez-vous clients malgré vos bonnes intentions. Ce n'est pas un manque de respect, c'est votre mémoire de travail TDAH qui ne retient pas les informations sans support externe."
    ],
    customizedStrengths: [
      "💡 **Créativité explosive**: Votre cerveau fait des connexions que les autres ne voient pas. Cette pensée divergente est un atout majeur en entrepreneuriat où l'innovation est clé.",
      "⚡ **Hyperfocus stratégique**: Quand c'est intéressant, vous pouvez travailler 8h d'affilée avec une productivité exceptionnelle. L'art est d'apprendre à déclencher cet état intentionnellement.",
      "🎯 **Audace calculée**: Votre impulsivité bien canalisée devient du courage entrepreneurial. Vous prenez des risques que d'autres n'osent pas, créant des opportunités uniques.",
      "🔥 **Résilience au chaos**: Vous prospérez dans l'incertitude que d'autres fuient. Le chaos entrepreneurial ne vous paralyse pas, il vous stimule."
    ],
    actionPlan: [
      "Compléter l'auto-évaluation ASRS pour quantifier vos symptômes. Cette base vous permettra de mesurer vos progrès au fil du temps.",
      "Identifier vos 3 plus grands obstacles TDAH dans votre business. Soyez spécifique : quelles situations vous font le plus souffrir ?",
      "Créer un système de capture simple (une seule app pour tout noter). Choisissez une app et utilisez-la pendant 7 jours sans exception.",
      "Programmer 15 min demain matin pour vider votre tête de toutes vos idées. Écrivez tout ce qui vous passe par la tête, sans jugement."
    ],
    detailedExplanations: {
      whyThisMatters: "Comprendre votre profil TDAH n'est pas juste une curiosité intellectuelle - c'est la base de tout votre succès entrepreneurial. Sans cette compréhension, vous continuerez à vous battre contre votre cerveau au lieu de travailler avec lui. Chaque stratégie qu'on va développer dans ce programme est basée sur cette compréhension profonde de comment vous fonctionnez.",
      commonPatterns: "Dans votre secteur, les entrepreneurs TDAH vivent souvent des patterns similaires : cycles d'hyperfocus suivis de périodes d'épuisement, difficultés avec les tâches administratives répétitives, mais excellente performance dans l'innovation et la résolution de problèmes complexes. Vous n'êtes pas seul(e) dans ces défis.",
      hopeMessage: "Votre TDAH n'est pas un handicap dans l'entrepreneuriat - c'est souvent un avantage compétitif. Les entrepreneurs TDAH représentent 29% de tous les entrepreneurs, bien au-dessus de la moyenne de la population. Vous êtes en bonne compagnie, et ce programme va vous montrer comment transformer vos défis en forces."
    }
  }
}

