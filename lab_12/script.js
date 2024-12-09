let container = document.getElementById("data-container");
let info_container = document.getElementById("info-container");

async function show_data(id, loc) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/");
    let json = await response.json();

    let div = document.createElement("div");
    let img = document.createElement("img");
    let header = document.createElement("h1");
    let txt = document.createElement("p");

    div.classList = "card-box";
    div.onclick = function () {
        show_info(json);
    };
    img.src = json["sprites"]["front_default"];
    header.innerText = json["forms"][0]["name"];
    if (loc == info_container) {
        txt.innerText = "abilities: " + json["abilities"].length + "\n" +
            "weight: " + json["weight"];
    }

    div.append(img);
    div.append(header);
    div.append(txt);
    loc.append(div);
}

function show_info(json) {
    document.body.innerHTML = '';  
    let infoDiv = document.createElement("div");
    infoDiv.classList = "centered-info";

    let infoCard = document.createElement("div");
    infoCard.classList = "info-card";

    let img = document.createElement("img");
    let header = document.createElement("h1");
    let txt = document.createElement("p");

    img.src = json["sprites"]["front_default"];
    header.innerText = json["forms"][0]["name"];
    txt.innerText = "abilities: " + json["abilities"].length + "\n" +
            "weight: " + json["weight"];

    infoCard.append(img);
    infoCard.append(header);
    infoCard.append(txt);
    infoDiv.append(infoCard);
    document.body.append(infoDiv);
}

if (container) {
    let row;
    for (let i = 1; i <= 20; i++) {
        if (i % 5 === 1) {
            row = document.createElement("div");
            row.classList = "row";
            container.append(row);
        }
        show_data(i, row);
    }
}

if (info_container) {
    let id = window.location.href.split("id=")[1];
    show_data(id, info_container);
}
