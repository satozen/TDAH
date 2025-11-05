/**
 * Service d'intégration IA pour personnaliser les modules d'apprentissage
 * Utilise OpenAI pour générer des recommandations adaptées au profil de l'entrepreneur
 */

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY

/**
 * Génère du contenu personnalisé basé sur le profil de l'utilisateur
 */
export const generatePersonalizedContent = async (moduleId, userProfile) => {
  // Si pas de clé API, retourner un message par défaut
  if (!API_KEY || API_KEY === 'your_openai_api_key_here') {
    return generateFallbackContent(moduleId, userProfile)
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `Tu es un coach spécialisé dans le TDAH entrepreneurial. Tu aides les entrepreneurs avec TDAH à développer leurs compétences. Réponds en français de manière empathique et pratique.`
          },
          {
            role: 'user',
            content: `Génère 3-4 recommandations personnalisées pour ${userProfile.prenom}, entrepreneur dans le secteur ${userProfile.secteurActivite}. 
            Ses défis principaux sont: ${userProfile.principauxDefis.join(', ')}.
            ${userProfile.objectifs ? `Ses objectifs: ${userProfile.objectifs}` : ''}
            
            C'est pour le module ${moduleId}. Sois concret, encourageant et donne des conseils actionnables adaptés à son profil TDAH.`
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      throw new Error('Erreur API OpenAI')
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('Erreur lors de la génération de contenu IA:', error)
    return generateFallbackContent(moduleId, userProfile)
  }
}

/**
 * Génère un contenu de secours personnalisé sans IA
 */
const generateFallbackContent = (moduleId, userProfile) => {
  const defisText = userProfile.principauxDefis.length > 0 
    ? userProfile.principauxDefis.slice(0, 2).join(' et ')
    : 'votre développement entrepreneurial'

  const messages = {
    1: `${userProfile.prenom}, en tant qu'entrepreneur dans ${userProfile.secteurActivite}, comprendre votre TDAH est la première étape vers le succès. Vos défis en ${defisText} sont en fait des signaux précieux sur votre fonctionnement unique. Ce module vous aidera à transformer ces défis en atouts.`,
    
    2: `Bonjour ${userProfile.prenom} ! Pour quelqu'un dans ${userProfile.secteurActivite} avec des enjeux de ${defisText}, la gestion du temps doit être adaptée à votre cerveau TDAH. Oubliez les méthodes traditionnelles - nous allons créer un système qui fonctionne AVEC votre TDAH, pas contre.`,
    
    3: `${userProfile.prenom}, l'organisation pour un entrepreneur TDAH dans ${userProfile.secteurActivite} ne ressemble pas à celle des autres. Étant donné vos défis en ${defisText}, nous allons mettre en place des systèmes simples, visuels et flexibles qui correspondent à votre style.`,
    
    4: `Pour améliorer votre concentration en ${userProfile.secteurActivite}, ${userProfile.prenom}, nous allons explorer des techniques spécifiques au TDAH. Vos défis en ${defisText} nécessitent des stratégies adaptées - et vous allez les découvrir dans ce module.`,
    
    5: `${userProfile.prenom}, la prise de décision avec TDAH dans ${userProfile.secteurActivite} peut être un défi, surtout avec ${defisText}. Ce module vous donnera des outils pour décider rapidement sans tomber dans la paralysie ou l'impulsivité.`,
    
    6: `Les relations professionnelles sont cruciales dans ${userProfile.secteurActivite}, ${userProfile.prenom}. Avec vos défis en ${defisText}, ce module vous aidera à communiquer efficacement tout en honorant votre fonctionnement TDAH unique.`,
    
    7: `${userProfile.prenom}, la gestion émotionnelle est particulièrement importante pour un entrepreneur TDAH dans ${userProfile.secteurActivite}. Vos défis en ${defisText} sont souvent liés aux émotions - apprenons à les comprendre et les gérer.`,
    
    8: `Félicitations ${userProfile.prenom} ! Vous êtes prêt à créer VOTRE système personnalisé. En combinant ce que vous avez appris avec votre expérience dans ${userProfile.secteurActivite} et vos défis spécifiques en ${defisText}, vous allez construire un système qui vous ressemble.`
  }

  return messages[moduleId] || `Bienvenue ${userProfile.prenom} dans ce module adapté à votre profil entrepreneurial !`
}

