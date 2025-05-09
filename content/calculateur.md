---
title: "Calculez votre empreinte numérique"
date: 2024-06-01
---

# Calculez votre empreinte numérique

Estimez l'impact de vos usages numériques quotidiens !

<form id="eco-calc-form" class="eco-calc-form">
  <label>Heures de streaming vidéo par semaine :<br>
    <input type="number" id="streaming" min="0" value="0"> (1h ≈ 55g CO2)
  </label><br><br>
  <label>Nombre d'emails envoyés par jour :<br>
    <input type="number" id="emails" min="0" value="0"> (1 email ≈ 4g CO2)
  </label><br><br>
  <label>Heures de visioconférence par semaine :<br>
    <input type="number" id="visio" min="0" value="0"> (1h ≈ 150g CO2)
  </label><br><br>
  <button type="button" onclick="calcEcoImpact()">Calculer</button>
</form>

<div id="eco-calc-result" class="eco-calc-result"></div>

<script src="/js/calculateur.js"></script>

<style>
.eco-calc-form { max-width: 400px; margin: 2rem auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 16px #0001; padding: 2rem; }
.eco-calc-form label { display: block; margin-bottom: 1.2rem; font-weight: 500; }
.eco-calc-form input { width: 80px; margin-left: 1rem; }
.eco-calc-form button { background: #2ecc71; color: #fff; border: none; border-radius: 6px; padding: 0.7rem 1.5rem; font-weight: 600; cursor: pointer; transition: background 0.2s; }
.eco-calc-form button:hover { background: #27ae60; }
.eco-calc-result { text-align: center; margin-top: 2rem; font-size: 1.1em; }
</style> 