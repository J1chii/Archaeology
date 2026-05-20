---
layout: home-infographic
title: Home
---

Exploring Philippine history and heritage.

<button id="quoteBtn" class="btn btn-warning">
  Historical Quote
</button>

<p id="quoteText"></p>

<script>
document.getElementById("quoteBtn").onclick = function () {
  document.getElementById("quoteText").innerHTML =
  '"Ang hindi marunong lumingon sa pinanggalingan..." – Jose Rizal';
};
</script>
