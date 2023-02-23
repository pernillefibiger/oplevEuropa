// const url = "https://opleveuropa-c5da.restdb.io/rest/lande";

// const options = {
//   headers: {
//     "x-apikey": "63f67bf1478852088da6856e",
//   },
// };

async function hentData() {
  fetch("json/lande.json")
    .then((ressponse) => ressponse.json())
    .then(visLand);
}

const main = document.querySelector(".lande-main");
const template = document.querySelector("template").content;

function visLand(land) {
  land.forEach((land) => {
    console.log("function");
    const klon = template.cloneNode(true);
    klon.querySelector("#billede-land").src = "images/" + land.images;
    klon.querySelector(".land").textContent = land.Lande;
    main.appendChild(klon);
  });
}

hentData();
