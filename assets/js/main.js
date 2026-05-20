function quote() {
  document.getElementById("quoteText").innerHTML =
    function quote() {

  const quotes = [

    '"Ang kasaysayan ay susi sa pagkilala sa ating pagkatao."',

    '"Ang bawat artifact ay may kwento ng sinaunang pamumuhay."',

    '"Sa pag-aaral ng nakaraan, mas nauunawaan ang kasalukuyan."',

    '"Ang kultura at kasaysayan ay kayamanang dapat ingatan."',

    '"Ang mga labi ng nakaraan ay gabay sa hinaharap."',

    '"Hindi mabubuo ang pagkakakilanlan kung walang kasaysayan."',

    '"Ang arkeolohiya ay paghahanap ng kwento sa ilalim ng lupa."',

    '"Bawat piraso ng palayok ay bahagi ng ating pinagmulan."',

    '"Ang pamana ng ating ninuno ay buhay sa kasaysayan."',

    '"Ang nakaraan ay hindi patay; ito ay bahagi ng kasalukuyan."',

    '"Sa bawat paghuhukay, mas lumalalim ang pag-unawa sa ating lahi."',

    '"Ang kasaysayan ng Pilipinas ay yaman ng bawat Pilipino."'

  ];

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("quoteText").innerHTML = randomQuote;
}
