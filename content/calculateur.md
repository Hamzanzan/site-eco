---
title: "Calculez votre empreinte numérique"
date: 2024-06-01
---

# Calculez votre empreinte numérique

Estimez l'impact de vos usages numériques quotidiens et découvrez comment le réduire !

<div class="calculator-container">
  <form id="eco-calc-form" class="eco-calc-form">
    <div class="form-section">
      <h3>📺 Streaming & Vidéo</h3>
      <div class="input-group">
        <label>Heures de streaming vidéo par semaine :
          <input type="number" id="streaming" min="0" value="0">
          <span class="info">(1h ≈ 55g CO2)</span>
        </label>
      </div>
      <div class="input-group">
        <label>Heures de visioconférence par semaine :
          <input type="number" id="visio" min="0" value="0">
          <span class="info">(1h ≈ 150g CO2)</span>
        </label>
      </div>
    </div>

    <div class="form-section">
      <h3>📧 Communication</h3>
      <div class="input-group">
        <label>Nombre d'emails envoyés par jour :
          <input type="number" id="emails" min="0" value="0">
          <span class="info">(1 email ≈ 4g CO2)</span>
        </label>
      </div>
      <div class="input-group">
        <label>Nombre de pièces jointes envoyées par jour :
          <input type="number" id="attachments" min="0" value="0">
          <span class="info">(1 pièce jointe ≈ 20g CO2)</span>
        </label>
      </div>
    </div>

    <div class="form-section">
      <h3>💾 Stockage</h3>
      <div class="input-group">
        <label>Espace de stockage cloud utilisé (GB) :
          <input type="number" id="cloud" min="0" value="0">
          <span class="info">(1 GB ≈ 0.2g CO2/an)</span>
        </label>
      </div>
    </div>

    <div class="form-section">
      <h3>🔍 Navigation Web</h3>
      <div class="input-group">
        <label>Nombre de recherches web par jour :
          <input type="number" id="searches" min="0" value="0">
          <span class="info">(1 recherche ≈ 0.2g CO2)</span>
        </label>
      </div>
    </div>

    <button type="button" onclick="calcEcoImpact()" class="calc-button">Calculer mon impact</button>
  </form>

  <div id="eco-calc-result" class="eco-calc-result">
    <div id="result-content" style="display: none;">
      <h2>Votre empreinte numérique</h2>
      <div class="result-grid">
        <div class="result-card">
          <h3>Impact Hebdomadaire</h3>
          <div id="weekly-impact" class="impact-value">0 kg CO2</div>
        </div>
        <div class="result-card">
          <h3>Impact Annuel</h3>
          <div id="yearly-impact" class="impact-value">0 kg CO2</div>
        </div>
        <div class="result-card">
          <h3>Équivalent en km en voiture</h3>
          <div id="car-equivalent" class="impact-value">0 km</div>
        </div>
      </div>

      <div class="recommendations">
        <h3>Recommandations pour réduire votre impact</h3>
        <div id="recommendations-list"></div>
      </div>
    </div>
  </div>
</div>

<style>
.calculator-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.eco-calc-form {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  padding: 2rem;
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.form-section h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #34495e;
}

.input-group input {
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-left: 1rem;
}

.info {
  font-size: 0.9em;
  color: #7f8c8d;
  margin-left: 0.5rem;
}

.calc-button {
  background: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 1rem 2rem;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  margin-top: 1rem;
}

.calc-button:hover {
  background: #27ae60;
}

.eco-calc-result {
  margin-top: 2rem;
  text-align: center;
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.result-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.impact-value {
  font-size: 1.5em;
  font-weight: bold;
  color: #2ecc71;
  margin-top: 0.5rem;
}

.recommendations {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
  text-align: left;
}

.recommendations h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

#recommendations-list {
  display: grid;
  gap: 1rem;
}

.recommendation-item {
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.recommendation-item i {
  color: #2ecc71;
  font-size: 1.2em;
}
</style>

<script>
function calcEcoImpact() {
  // Récupération des valeurs
  const streaming = parseFloat(document.getElementById('streaming').value) || 0;
  const visio = parseFloat(document.getElementById('visio').value) || 0;
  const emails = parseFloat(document.getElementById('emails').value) || 0;
  const attachments = parseFloat(document.getElementById('attachments').value) || 0;
  const cloud = parseFloat(document.getElementById('cloud').value) || 0;
  const searches = parseFloat(document.getElementById('searches').value) || 0;

  // Calculs
  const weeklyImpact = (
    (streaming * 55) + // streaming
    (visio * 150) + // visioconférence
    (emails * 7 * 4) + // emails (par jour * 7 jours)
    (attachments * 7 * 20) + // pièces jointes
    (cloud * 0.2 / 52) + // stockage cloud (annuel / 52 semaines)
    (searches * 7 * 0.2) // recherches web
  ) / 1000; // Conversion en kg

  const yearlyImpact = weeklyImpact * 52;
  const carEquivalent = yearlyImpact * 100; // 1kg CO2 ≈ 100km en voiture

  // Affichage des résultats
  document.getElementById('weekly-impact').textContent = weeklyImpact.toFixed(2) + ' kg CO2';
  document.getElementById('yearly-impact').textContent = yearlyImpact.toFixed(2) + ' kg CO2';
  document.getElementById('car-equivalent').textContent = carEquivalent.toFixed(0) + ' km';

  // Génération des recommandations
  const recommendations = [];
  
  if (streaming > 10) {
    recommendations.push({
      icon: '📺',
      text: 'Réduisez votre temps de streaming en privilégiant la qualité 720p au lieu de 1080p'
    });
  }
  
  if (emails > 20) {
    recommendations.push({
      icon: '📧',
      text: 'Nettoyez régulièrement votre boîte mail et désabonnez-vous des newsletters inutiles'
    });
  }
  
  if (attachments > 5) {
    recommendations.push({
      icon: '📎',
      text: 'Compressez vos pièces jointes avant de les envoyer'
    });
  }
  
  if (cloud > 50) {
    recommendations.push({
      icon: '💾',
      text: 'Nettoyez votre stockage cloud en supprimant les fichiers inutiles'
    });
  }
  
  if (searches > 30) {
    recommendations.push({
      icon: '🔍',
      text: 'Utilisez des mots-clés précis dans vos recherches pour réduire le nombre de requêtes'
    });
  }

  // Affichage des recommandations
  const recommendationsList = document.getElementById('recommendations-list');
  recommendationsList.innerHTML = recommendations.map(rec => `
    <div class="recommendation-item">
      <span>${rec.icon}</span>
      <span>${rec.text}</span>
    </div>
  `).join('');

  // Afficher les résultats
  document.getElementById('result-content').style.display = 'block';
}
</script> 