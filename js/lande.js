const url = "https://opleveuropa-c5da.restdb.io/rest/lande";

const options = {
  headers: {
    "x-apikey": "63ef7557478852088da683e0",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
  json.forEach(vis);
}

const main = document.querySelector(".lande-main");
const template = document.querySelector("template").content;

function vis(land) {
  console.log("function");
  const klon = template.cloneNode(true);
  klon.querySelector("#billede-land").src = "images/" + land.images;
  klon.querySelector(".land").textContent = land.Lande;
  main.appendChild(klon);
}

hentData();
