const publications = [
  {
    year: 2026,
    type: "preprint",
    text: `<a href="https://eprint.iacr.org/2026/1633" target="_blank" rel="noopener noreferrer"><b>Rotational-Quasidifferential Framework -- A Geometric Approach to Rotational-XOR Cryptanalysis</b></a>, <b>Myungkyu Lee</b>, Byoungjin Seok, Dongjae Lee, Deukjo Hong, Jaechul Sung, Seokhie Hong. <i>Cryptology ePrint Archive</i>, Paper 2026/1633.`
  },
  {
    year: 2025,
    type: "domestic-conference",
    text: `<b>Integral Cryptanalysis on SKINNY-64-64 using PCA</b>, Yunjae Hwang, <b>Myungkyu Lee</b>, Insung Kim, Hanbeom Shin, Sunyeop Kim, Byoungjin Seok, Seokhie Hong, Sangjin Lee. <i>Proceedings of the Conference on Information Security and Cryptography Winter 2025 (CISC-W '25)</i>.`
  },
  {
    year: 2025,
    type: "domestic-conference",
    text: `<b>Security Analysis of Alzette in the Fixed-Key Model</b>, <b>Myungkyu Lee</b>, Yunjae Hwang, Hanbeom Shin, Insung Kim, Sunyeop Kim, Byoungjin Seok, Dongjae Lee, Deukjo Hong, Jaechul Sung, Seokhie Hong. <i>Proceedings of the Conference on Information Security and Cryptography Winter 2025 (CISC-W '25)</i>.`
  },
  {
    year: 2025,
    type: "journal",
    text: `<b>Hash Table Method for Data Search in Differential Cryptanalysis</b>, <b>Myungkyu Lee</b>, Hanbeom Shin, Insung Kim, Sunyeop Kim, Donggeun Kwon, Deukjo Hong, Jaechul Sung, Seokhie Hong. <i>Journal of The Korea Institute of Information Security and Cryptology (JKIISC)</i>.`
  },
  {
    year: 2025,
    type: "domestic-conference",
    text: `<b>Efficient Pair Search Techniques for Zero Difference-Based AES Cryptanalysis</b>, <b>Myungkyu Lee</b>, Hanbeom Shin, Insung Kim, Sunyeop Kim, Donggeun Kwon, Deukjo Hong, Jaechul Sung, Seokhie Hong. <i>Proceedings of the Conference on Information Security and Cryptography Summer 2025 (CISC-S '25)</i>.`
  },
  {
    year: 2024,
    type: "domestic-conference",
    text: `<b>Randomness Testing on Block Cipher GIFT-128</b>, <b>Myungkyu Lee</b>, Jaechul Sung, Seokhie Hong. <i>Proceedings of the Conference on Information Security and Cryptography Winter 2024 (CISC-W '24)</i>.`
  }
];

const lists = {
  preprint: document.getElementById("preprint-list"),
  journal: document.getElementById("journal-list"),
  "domestic-conference": document.getElementById("domestic-conference-list")
};

publications
  .sort((a, b) => b.year - a.year)
  .forEach((publication) => {
    const list = lists[publication.type];
    if (!list) return;

    const item = document.createElement("li");
    item.innerHTML = `${publication.text} (${publication.year})`;
    list.appendChild(item);
  });
