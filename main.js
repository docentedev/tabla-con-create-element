const tablaSelector = document.querySelector("#table");

const data = [
    {
      location: "Japan",
      confirmed: 6148049,
      deaths: 27251,
      recovered: 0,
      active: 0,
    },
    {
      location: "Colombia",
      confirmed: 6081933,
      deaths: 139489,
      recovered: 0,
      active: 0,
    },
    {
      location: "Indonesia",
      confirmed: 5974646,
      deaths: 154062,
      recovered: 0,
      active: 0,
    },
    {
      location: "Poland",
      confirmed: 5905463,
      deaths: 114355,
      recovered: 0,
      active: 0,
    },
    {
      location: "Mexico",
      confirmed: 5636054,
      deaths: 322119,
      recovered: 125888,
      active: 93265,
    },
    {
      location: "Ukraine",
      confirmed: 5040518,
      deaths: 112459,
      recovered: 0,
      active: 0,
    },
    {
      location: "Australia",
      confirmed: 4053987,
      deaths: 5786,
      recovered: 0,
      active: 0,
    },
    {
      location: "Malaysia",
      confirmed: 4032435,
      deaths: 34535,
      recovered: 0,
      active: 0,
    },
    {
      location: "Israel",
      confirmed: 3801627,
      deaths: 10449,
      recovered: 0,
      active: 0,
    },
    {
      location: "Czechia",
      confirmed: 3750636,
      deaths: 39418,
      recovered: 0,
      active: 0,
    },
    {
      location: "Belgium",
      confirmed: 3741614,
      deaths: 30605,
      recovered: 0,
      active: 0,
    },
    {
      location: "South Africa",
      confirmed: 3705696,
      deaths: 99893,
      recovered: 0,
      active: 0,
    },
    {
      location: "Philippines",
      confirmed: 3674983,
      deaths: 58281,
      recovered: 0,
      active: 0,
    },
    {
      location: "Peru",
      confirmed: 3542602,
      deaths: 211944,
      recovered: 0,
      active: 0,
    },
    {
      location: "Austria",
      confirmed: 3532415,
      deaths: 15487,
      recovered: 0,
      active: 0,
    },
    {
      location: "Portugal",
      confirmed: 3458727,
      deaths: 21408,
      recovered: 0,
      active: 0,
    },
    {
      location: "Thailand",
      confirmed: 3423956,
      deaths: 24497,
      recovered: 0,
      active: 0,
    },
    {
      location: "Canada",
      confirmed: 3422583,
      deaths: 37289,
      recovered: 0,
      active: 0,
    },
    {
      location: "Chile",
      confirmed: 3406540,
      deaths: 55976,
      recovered: 0,
      active: 0,
    },
    {
      location: "Switzerland",
      confirmed: 3353754,
      deaths: 13456,
      recovered: 148793,
      active: 122303,
    },
    {
      location: "Denmark",
      confirmed: 3064138,
      deaths: 5509,
      recovered: 0,
      active: 0,
    },
    {
      location: "Greece",
      confirmed: 2838891,
      deaths: 27029,
      recovered: 0,
      active: 0,
    },
    {
      location: "Romania",
      confirmed: 2823415,
      deaths: 64749,
      recovered: 0,
      active: 0,
    },
    {
      location: "Sweden",
      confirmed: 2475687,
      deaths: 18053,
      recovered: 0,
      active: 0,
    },
    {
      location: "Slovakia",
      confirmed: 2366902,
      deaths: 19161,
      recovered: 0,
      active: 0,
    },
    {
      location: "Iraq",
      confirmed: 2316493,
      deaths: 25132,
      recovered: 0,
      active: 0,
    },
    {
      location: "Serbia",
      confirmed: 1959699,
      deaths: 15706,
      recovered: 0,
      active: 0,
    },
    {
      location: "Bangladesh",
      confirmed: 1950846,
      deaths: 29117,
      recovered: 0,
      active: 0,
    },
    {
      location: "Hungary",
      confirmed: 1831423,
      deaths: 45143,
      recovered: 0,
      active: 0,
    },
    {
      location: "Jordan",
      confirmed: 1689314,
      deaths: 14003,
      recovered: 0,
      active: 0,
    },
    {
      location: "Georgia",
      confirmed: 1643295,
      deaths: 16678,
      recovered: 234111,
      active: 23584,
    },
    {
      location: "Pakistan",
      confirmed: 1522862,
      deaths: 30333,
      recovered: 0,
      active: 0,
    },
    {
      location: "Ireland",
      confirmed: 1397885,
      deaths: 6680,
      recovered: 0,
      active: 0,
    },
    {
      location: "Kazakhstan",
      confirmed: 1393492,
      deaths: 19005,
      recovered: 14777,
      active: 32985,
    },
    {
      location: "Norway",
      confirmed: 1387034,
      deaths: 2169,
      recovered: 0,
      active: 0,
    },
    {
      location: "China",
      confirmed: 1213223,
      deaths: 11002,
      recovered: 0,
      active: 0,
    },
    {
      location: "Morocco",
      confirmed: 1162626,
      deaths: 16053,
      recovered: 0,
      active: 0,
    },
    {
      location: "Bulgaria",
      confirmed: 1128089,
      deaths: 36350,
      recovered: 14444,
      active: 326585,
    },
    {
      location: "Lebanon",
      confirmed: 1089005,
      deaths: 10258,
      recovered: 0,
      active: 0,
    },
    {
      location: "Croatia",
      confirmed: 1085558,
      deaths: 15463,
      recovered: 0,
    },
  ];

const crearTd = (texto) => {
  const text = document.createTextNode(texto);
  const td = document.createElement("td");
  td.appendChild(text);
  return td;
};

const crearTr = () => {
  return document.createElement("tr");
};

const manejadorDeClick = (e) => {
  const indice = e.target.dataset.indice;
  const location = e.target.dataset.location;
  console.log(indice, location);
  console.log(data[indice]);
};

const creaTabla = (array) => {
  tablaSelector.innerHTML = `
    <tr>
        <th scope="col">LOCATION</th>
        <th scope="col">CONFIRMED</th>
        <th scope="col">DEATHS</th>
        <th scope="col">RECOVERED</th>
        <th scope="col">ACTIVE</th>
        <th scope="col">DETAILS</th>
    </tr>`;
  for (let i = 0; i < array.length; i++) {
    const tr = crearTr();
    tr.appendChild(crearTd(array[i].location));
    tr.appendChild(crearTd(array[i].confirmed));
    tr.appendChild(crearTd(array[i].deaths));
    tr.appendChild(crearTd(array[i].recovered));
    tr.appendChild(crearTd(array[i].active));

    const tdButton = crearTd("");
    const button = document.createElement("button");
    button.dataset.location = array[i].location;
    button.dataset.indice = i;
    button.addEventListener("click", manejadorDeClick);

    button.classList.add("btn", "btn-link", "boton-modal");
    const buttonText = document.createTextNode("Ver detalles");
    button.appendChild(buttonText);
    tdButton.appendChild(button);
    tr.appendChild(tdButton);

    tablaSelector.appendChild(tr);
  }
};


creaTabla(data);
