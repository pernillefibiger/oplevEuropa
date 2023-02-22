const url = "https://opleveuropa-c5da.restdb.io/rest/_swagger.json";

const options = {
  headers: {
    "x-apikey": "63ef7557478852088da683e0",
  },
};

async function hentData() {
  const repons = await fetch(url, options);
  const json = await repons.json();
  vis(json);
}

const main = document.querySelector(".lande-main");
const template = document.querySelector("template").content;
