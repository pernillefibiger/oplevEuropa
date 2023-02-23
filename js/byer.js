// const url = "https://opleveuropa-c5da.restdb.io/rest/lande";
const urlParams = new URLSearchParams(window.location.search);
const land = urlParams.get("land");

const url = "json/byer.json";
// const options = {
//   headers: {
//     "x-apikey": "63f67bf1478852088da6856e",
//   },
// };

async function hentData() {
  fetch(url)
    .then((ressponse) => ressponse.json())
    .then(visBy);
}

const main = document.querySelector("#grid_1-1");
const template = document.querySelector("template").content;

function visBy(by) {
  by.forEach((by) => {
    console.log("function");
    if (by.Lande == land) {
      const klon = template.cloneNode(true);
      klon.querySelector("#by-img1").src = "images/" + by.Images;
      klon.querySelector(".overskrift").textContent = by.Lande;
      klon.querySelector("#by1-h3").textContent = by.Byer;
      klon.querySelector("#by1-generelt").textContent = by.Generelt;
      klon.querySelector("a").href = "single1.html?by=" + by.Byer;
      klon.querySelector(".læs-mere").href = "single1.html?by=" + by.Byer;
      main.appendChild(klon);
    }
  });
}

hentData();
