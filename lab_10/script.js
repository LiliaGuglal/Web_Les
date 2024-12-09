let container = document.getElementById("character-grid");
let data_arr = {
    "7TP": {
        "name": "7TP",
        "hp": "8500",
        "dmg": "350",
        "spd": "60",
        "vrng": "500"
    },
    "А-20": {
        "name": "А-20",
        "hp": "5000",
        "dmg": "150",
        "spd": "45",
        "vrng": "600"
    },
    "ХТ-26": {
        "name": "ХТ-26",
        "hp": "6200",
        "dmg": "220",
        "spd": "50",
        "vrng": "700"
    }
};

function selectCharacter(characterId) {
    const character = data_arr[characterId];
    if (!character) return;
    document.getElementById('character-name').innerText = character.name;
    document.getElementById('character-health').innerText = character.hp;
    document.getElementById('character-protection').innerText = character.spd;
    document.getElementById('character-damage').innerText = character.dmg;
    document.getElementById('character-info').style.display = 'block';
    document.getElementById('character-grid').style.display = 'none';
}

function showAllCharacters() {
    document.getElementById('character-grid').style.display = 'grid';
    document.getElementById('character-info').style.display = 'none';
}

function createCharacterCard(id, character, loc) {
    let elem = document.createElement("div");
    let img = document.createElement("img");
    let txt = document.createElement("h1");

    img.id = id;
    img.src = "./img/" + character.img;
    txt.innerHTML = character.name;

    elem.append(img);
    elem.append(txt);
    elem.classList.add("card_" + id);
    elem.onclick = () => {
        selectCharacter(character.name);
    };
    loc.append(elem);
}

document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("character-grid");

    if (container) {
        let row;
        for (let i = 0; i < characterList.length; i++) {
            if (i % 5 === 0) {
                row = document.createElement("div");
                row.classList = "row";
                container.append(row);
            }
            createCharacterCard(characterList[i].id, characterList[i], row);
        }
    }

    let info_container = document.getElementById("character-info");

    if (info_container) {
        let id = window.location.href.split("id=")[1];
        if (id) {
            selectCharacter(id);
        }
    }
});
