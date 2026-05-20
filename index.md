---
layout: home-infographic
title: Home
---

<div style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; background: white; padding: 10px; border-radius: 10px;">
  <audio controls>
    <source src="https://j1chii.github.io/Archaeology/assets/history.mp3" type="audio/mpeg">
  </audio>
</div>

<button onclick="quote()" class="btn btn-warning">
  Historical Quote
</button>

<p id="quoteText"></p>

<script>
function quote() {
  document.getElementById("quoteText").innerHTML =
  '"Ang hindi marunong lumingon sa pinanggalingan..." – Jose Rizal';
}
</script>
