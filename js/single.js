const urlParams = new URLSearchParams(window.location.search);
const byNavn = urlParams.get("by");

const url = "json/byer.json";
async function hentData() {
  fetch(url)
    .then((ressponse) => ressponse.json())
    .then(visBy);
}
const main = document.querySelector("#forside_beskrivendetekst");
const template = document.querySelector(".template1").content;

function visBy(by) {
  by.forEach((by) => {
    console.log("function");
    if (by.Byer == byNavn) {
      const klon = template.cloneNode(true);
      klon.querySelector("#forside_h1").textContent = by.Byer;
      klon.querySelector(".single_kortforklaring").textContent = by.Generelt;
      main.appendChild(klon);
    }
  });
}

hentData();

// seværdigheder

async function hentOplevelse() {
  fetch("../json/oplevelser.json")
    .then((ressponse) => ressponse.json())
    .then(visOplevelse);
}
const main2 = document.querySelector(".single_popular_tekst");
const template2 = document.querySelector(".template2").content;

function visOplevelse(oplevelse) {
  oplevelse.forEach((oplevelse) => {
    console.log("function");
    if (oplevelse.By == byNavn) {
      const klonOplevelse = template2.cloneNode(true);
      klonOplevelse.querySelector(".single_stortbillede").src =
        "images/../seværdigheder" + oplevelse.Images;
      klonOplevelse.querySelector("p").textContent = oplevelse.Beskrivelse;
      klonOplevelse.querySelector("h2").textContent = oplevelse.Navn;
      main2.appendChild(klonOplevelse);
    }
  });
}

hentOplevelse();
