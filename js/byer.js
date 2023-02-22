const url = "https://opleveuropa-c5da.restdb.io/rest/byer";

const options = {
  headers: {
    "x-apikey": "63f67bf1478852088da6856e",
  },
};

async function hentData() {
  console.log("hentData");
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
  json.forEach(vis);
}

const main = document.querySelector("#by-main");
const template = document.querySelector("template").content;

function vis(byer) {
  console.log("function");
  const klon = template.cloneNode(true);
  klon.querySelector("#by-img1").src = "images/" + byer.Images;
  klon.querySelector(".overskrift").textContent = byer.Lande;
  klon.querySelector("#by1-h3").textContent = byer.Byer;
  klon.querySelector("#by1-generelt").textContent = byer.Byer;
  main.appendChild(klon);
}

hentData();
