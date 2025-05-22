export default {
  page: {
    title: 'Nouvelle page',
    layout: 'single',
    date: new Date().toISOString(),
    draft: false,
    body: '# Titre de la page\n\nContenu de la page...'
  },
  article: {
    title: 'Nouvel article',
    layout: 'single',
    date: new Date().toISOString(),
    draft: false,
    body: '# Titre de l\'article\n\nContenu de l\'article...'
  },
  home: {
    title: 'Accueil',
    layout: 'home',
    body: '# Bienvenue\n\nContenu de la page d\'accueil...'
  }
} 