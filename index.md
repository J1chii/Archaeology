---
layout: home-infographic
title: Home
---

<button id="quoteBtn" class="btn btn-warning">
  Historical Quote
</button>

<p id="quoteText"></p>

<script>
window.onload = function () {
  document.getElementById("quoteBtn").addEventListener("click", function () {
    document.getElementById("quoteText").innerHTML =
      '"Ang hindi marunong lumingon sa pinanggalingan..." – Jose Rizal';
  });
};
</script>
