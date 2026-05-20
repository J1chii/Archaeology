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

    '"Ang kasaysayan ng Pilipinas ay yaman ng bawat Pilipino."',

    '"Bakit mahilig sa hukay ang archaeologist? Kasi gusto nilang ibaon ang sarili nila sa trabaho."',

    '"Bakit hindi natatakot si Professor Adrian sa lumang artifacts? Mas nakakatakot daw yung walang submission."',

    '"Hindi na kailangan ng excavation para sa author ng website. Visible na agad yung buto—museum ready."'

  ];

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("quoteText").innerHTML = randomQuote;
}
