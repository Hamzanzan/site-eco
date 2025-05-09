function calcEcoImpact() {
  const streaming = parseFloat(document.getElementById('streaming').value) || 0;
  const emails = parseInt(document.getElementById('emails').value) || 0;
  const visio = parseFloat(document.getElementById('visio').value) || 0;
  const co2 = streaming * 55 + emails * 4 * 7 + visio * 150;
  let msg = `<strong>Votre impact hebdomadaire estimé :</strong><br><span style='font-size:1.5em;'>${co2} g CO₂</span>`;
  if (co2 < 1000) msg += '<br>Bravo, votre impact est faible !';
  else if (co2 < 3000) msg += '<br>Vous pouvez encore réduire votre impact.';
  else msg += '<br>Pensez à limiter vos usages pour l\'environnement !';
  document.getElementById('eco-calc-result').innerHTML = msg;
} 