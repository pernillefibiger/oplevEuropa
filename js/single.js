// const urlParams = new URLSearchParams(window.location.search);
// const by = urlParams.get("byer");

// const url = "json/oplevelser.json";
// const url2 = "json/restauranter.json";
// const url3 = "json/byer.json";

// console.log("hej");

// async function hentData() {
//   console.log("hentData");
//   fetch(url)
//     .then((ressponse) => ressponse.json())
//     .then(visByen);
//   fetch(url2)
//     .then((ressponse) => ressponse.json())
//     .then(visByen);
//   fetch(url3)
//     .then((ressponse) => ressponse.json())
//     .then(visByen);
// }

// function visByen(byen) {
//   console.log("function");
//   if (byen.Byer == by) {
//     document.querySelector("#forside_h1").textContent = byen.Byer;
//     document.querySelector(".single_kortforklaring").textContent =
//       byen.Generelt;
//   }
// }

// hentData();
