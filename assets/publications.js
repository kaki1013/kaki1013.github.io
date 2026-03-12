const publications = [

{
year: 2026,
type: "journal-submission",
text: `“Revisiting Differential Characteristics of SPECK and CHAM via Extended Quasidifferential Framework,”
<b>Myungkyu Lee</b>, Yunjae Hwang, Hanbeom Shin, Insung Kim, Sunyeop Kim,
Byoungjin Seok, Dongjae Lee, Deukjo Hong, Jaechul Sung, Seokhie Hong,
Under review in <i>IEEE Access</i>.`
},

{
year: 2025,
type: "conference",
text: `“Security Analysis of Alzette in the Fixed-Key Model,”
<b>Myungkyu Lee</b>, Yunjae Hwang, Hanbeom Shin, Insung Kim, Sunyeop Kim,
Byoungjin Seok, Dongjae Lee, Deukjo Hong, Jaechul Sung, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptography Winter 2025 (CISC-W ’25)</i>.`
},

{
year: 2025,
type: "journal",
text: `“Hash Table Method for Data Search in Differential Cryptanalysis,”
<b>Myungkyu Lee</b>, Hanbeom Shin, Insung Kim, Sunyeop Kim,
Donggeun Kwon, Deukjo Hong, Jaechul Sung, Seokhie Hong,
<i>Journal of The Korea Institute of Information Security and Cryptology (JKIISC)</i>.`
},

{
year: 2025,
type: "conference",
text: `“Efficient Pair Search Techniques for Zero Difference-Based AES Cryptanalysis,”
<b>Myungkyu Lee</b>, Hanbeom Shin, Insung Kim, Sunyeop Kim,
Donggeun Kwon, Deukjo Hong, Jaechul Sung, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptography Summer 2025 (CISC-S ’25)</i>.`
},

{
year: 2024,
type: "conference",
text: `“Randomness Testing on Block Cipher GIFT-128,”
<b>Myungkyu Lee</b>, Jaechul Sung, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptography Winter 2024 (CISC-W ’24)</i>.`
}

];

// 자동 정렬 코드
// publications.sort((a,b)=>b.year-a.year);

// const pubList = document.getElementById("pub-list");

// publications.forEach(p => {

// const li = document.createElement("li");

// li.innerHTML = p.text + " (" + p.year + ")";

// pubList.appendChild(li);

// });
publications.sort((a,b)=>b.year-a.year);

const journalList = document.getElementById("journal-list");
const confList = document.getElementById("conference-list");
const subList = document.getElementById("submission-list");

publications.forEach(p => {

const li = document.createElement("li");
li.innerHTML = p.text + " (" + p.year + ")";

if(p.type === "journal"){
journalList.appendChild(li);
}

else if(p.type === "conference"){
confList.appendChild(li);
}

else if(p.type === "journal-submission"){
subList.appendChild(li);
}

});