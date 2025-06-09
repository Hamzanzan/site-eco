document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      
      // Validation basique de l'email
      if (!isValidEmail(email)) {
        showMessage('Veuillez entrer une adresse email valide.', 'error');
        return;
      }
      
      // Simulation d'envoi à un service d'email marketing
      // Dans un cas réel, vous devriez utiliser un service comme Mailchimp, SendGrid, etc.
      simulateNewsletterSignup(email)
        .then(() => {
          showMessage('Merci pour votre inscription ! Vous recevrez bientôt nos actualités.', 'success');
          this.reset();
        })
        .catch(error => {
          showMessage('Une erreur est survenue. Veuillez réessayer plus tard.', 'error');
          console.error('Erreur d\'inscription:', error);
        });
    });
  }
});

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showMessage(message, type) {
  // Supprimer les messages précédents
  const existingMessage = document.querySelector('.newsletter-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Créer le nouveau message
  const messageElement = document.createElement('div');
  messageElement.className = `newsletter-message ${type}`;
  messageElement.textContent = message;
  
  // Ajouter le message après le formulaire
  const form = document.querySelector('.newsletter-form');
  form.parentNode.insertBefore(messageElement, form.nextSibling);
  
  // Supprimer le message après 5 secondes
  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

function simulateNewsletterSignup(email) {
  return new Promise((resolve, reject) => {
    // Simuler un délai réseau
    setTimeout(() => {
      // Simuler un taux de succès de 90%
      if (Math.random() < 0.9) {
        resolve();
      } else {
        reject(new Error('Erreur de connexion'));
      }
    }, 1000);
  });
}

// Styles pour les messages
const style = document.createElement('style');
style.textContent = `
  .newsletter-message {
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 4px;
    text-align: center;
  }
  
  .newsletter-message.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  .newsletter-message.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;
document.head.appendChild(style); 