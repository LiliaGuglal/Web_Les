const characterList = [
    {"id": 1, "name": '7TP', "img": "7_TP_tank.PNG"},
    {"id": 2, "name": 'А-20', "img": "A-20-Tank.jpg"},
    {"id": 3, "name": 'ХТ-26', "img": "OT-26,_front.jpeg"},
];

const characters = {
    "7TP": {
        name: '7TP',
        health: '8500',
        protection: '60',
        damage: '350',
    },
    "А-20": {
        name: 'А-20',
        health: '5000',
        protection: '45',
        damage: '150',
    },
    "ХТ-26": {
        name: 'ХТ-26',
        health: '6200',
        protection: '50',
        damage: '220',
    }
};

function selectCharacter(characterId) {
    const character = characters[characterId];
    if (!character) return;
    document.getElementById('character-name').innerText = character.name;
    document.getElementById('character-health').innerText = character.health;
    document.getElementById('character-protection').innerText = character.protection;
    document.getElementById('character-damage').innerText = character.damage;
    document.getElementById('character-info').style.display = 'block';
    document.getElementById('character-grid').style.display = 'none';
}

function showAllCharacters() {
    document.getElementById('character-grid').style.display = 'grid';
    document.getElementById('character-info').style.display = 'none';
}
