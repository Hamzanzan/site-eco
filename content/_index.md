---
title: "Éco-Numérique"
---

<!-- Sensibilisation Bandeau -->
<div class="bandeau-sensibilisation">
  <span>🌱 Sensibilisation Numérique</span>
</div>

<!-- Accueil Section -->
<div class="accueil-flex">
  <div class="accueil-gauche">
    <h1>Comprendre l'Impact du Numérique</h1>
    <p class="sous-titre">
      Découvrez comment nos habitudes numériques affectent l'environnement et apprenez à adopter des pratiques plus durables pour un avenir plus vert.
    </p>
    <div class="boutons-accueil">
      <a href="/impacts/" class="btn-principal">Explorer les impacts</a>
      <a href="/quiz/" class="btn-secondaire">Tester vos connaissances</a>
    </div>
  </div>
  <div class="accueil-droite">
    <img src="/images/foret.jpg" alt="Paysage vert" class="img-accueil"/>
    <div class="encadre-saviez-vous">
      <strong>Le saviez-vous ?</strong><br>
      Une recherche internet émet en moyenne 7g de CO2.<br>
      Multipliez ce chiffre par des milliards de recherches quotidiennes.
    </div>
  </div>
</div>

<!-- Ressources Bandeau -->
<div class="bandeau-ressources">
  <span>📚 Nos ressources</span>
</div>

<h2>Explorez nos fonctionnalités</h2>
<p>
  Nous proposons un ensemble d'outils et de ressources pour comprendre et réduire votre empreinte.
</p>

<!-- Statistiques -->
<div class="stats-container fade-in-up">
  <div class="stat-card">
    <h3>4%</h3>
    <p>des émissions mondiales de CO2 sont liées au numérique</p>
  </div>
  <div class="stat-card">
    <h3>2.5%</h3>
    <p>de la consommation mondiale d'électricité est utilisée par les data centers</p>
  </div>
  <div class="stat-card">
    <h3>50M</h3>
    <p>de tonnes de déchets électroniques générés chaque année</p>
  </div>
</div>

<!-- Thèmes principaux -->
<div class="themes-principaux fade-in-up">
  <h2>Thèmes Principaux</h2>
  <div class="themes-grid">
    <div class="theme-card fade-in-up">
      <h3><span class="theme-icon">💻</span> Équipements</h3>
      <p>L'impact environnemental de la production et de l'utilisation de nos appareils numériques.</p>
      <a href="/articles/equipements" class="lien-theme">En savoir plus →</a>
    </div>
    <div class="theme-card fade-in-up">
      <h3><span class="theme-icon">☁️</span> Cloud & Data</h3>
      <p>L'empreinte carbone du stockage et du traitement des données.</p>
      <a href="/articles/cloud" class="lien-theme">En savoir plus →</a>
    </div>
    <div class="theme-card fade-in-up">
      <h3><span class="theme-icon">📱</span> Usage Quotidien</h3>
      <p>Les bonnes pratiques pour réduire son impact numérique au quotidien.</p>
      <a href="/articles/usage" class="lien-theme">En savoir plus →</a>
    </div>
  </div>
</div>

<!-- Ressources complémentaires -->
<div class="ressources-principales fade-in-up">
  <h2>Ressources à découvrir</h2>
  <div class="themes-grid">
    <div class="theme-card fade-in-up">
      <h3><span class="theme-icon">🌱</span> Eco-conception web</h3>
      <p>Concevoir un site éco-responsable et réduire son impact dès la création.</p>
      <a href="/articles/ecoconception" class="lien-theme">Découvrir →</a>
    </div>
    <div class="theme-card fade-in-up">
      <h3><span class="theme-icon">♻️</span> Recycler ses équipements</h3>
      <p>Pourquoi et comment recycler ses appareils numériques ?</p>
      <a href="/articles/recyclage" class="lien-theme">Découvrir →</a>
    </div>
    <div class="theme-card fade-in-up">
      <h3><span class="theme-icon">🌍</span> Hébergeurs verts</h3>
      <p>Choisir un hébergement web écologique et responsable.</p>
      <a href="/articles/hebergeurs-verts" class="lien-theme">Découvrir →</a>
    </div>
    <div class="theme-card fade-in-up">
      <h3><span class="theme-icon">🧮</span> Calculez votre impact</h3>
      <p>Estimez votre empreinte carbone numérique en quelques clics.</p>
      <a href="/calculateur" class="lien-theme">Essayer →</a>
    </div>
  </div>
</div>

<!-- Call to Action -->
<div class="cta-section fade-in-up">
  <h2>Passez à l'action !</h2>
  <p>Rejoignez notre communauté et commencez votre voyage vers un numérique plus responsable.</p>
  <div class="cta-buttons">
    <a href="/quiz/" class="btn-cta">Évaluez votre impact</a>
    <a href="/articles/ecoindex/" class="btn-cta-secondary">Découvrir nos guides</a>
  </div>
</div>

<!-- Newsletter -->
<div class="newsletter-section fade-in-up">
  <h2>Restez informé</h2>
  <p>Recevez nos conseils et actualités sur l'éco-numérique directement dans votre boîte mail.</p>
  <form class="newsletter-form">
    <input type="email" placeholder="Votre adresse email" required>
    <button type="submit">S'inscrire</button>
  </form>
</div>

<!-- Footer -->
<footer class="site-footer">
  <div>
    <strong>🌱 Le numérique responsable</strong> — Pour un web plus vert.<br>
    <a href="/">Accueil</a> | <a href="/articles/">Guides</a> | <a href="/quiz/">Quiz</a> | <a href="/calculateur">Calculateur</a>
  </div>
  <div style="margin-top:1em;font-size:0.98em;opacity:0.8;">
    © 2024 Éco-Numérique. Fait avec ♻️ et passion.
  </div>
</footer>

<!-- Fade-in Animation Script -->
<script>
function onScrollFadeIn() {
  document.querySelectorAll('.fade-in-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', onScrollFadeIn);
window.addEventListener('DOMContentLoaded', onScrollFadeIn);
</script>