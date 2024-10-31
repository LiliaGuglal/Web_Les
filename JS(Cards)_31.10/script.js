document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cards');
    const colors = ['blue', 'red', 'green', 'orange', 'blue', 'red', 'green', 'orange'];
    const defaultBackgroundImage = 'url(/images/385218163958b5817ded6373dd9f01a6.jpg)';
    
    const messageElement = document.createElement('div');
    messageElement.id = 'winMessage';
    messageElement.style.textAlign = 'center';
    messageElement.style.marginTop = '20px';
    messageElement.style.fontSize = '24px';
    messageElement.style.color = 'black';
    messageElement.style.fontWeight = 'bold';
    document.body.appendChild(messageElement);

    const moveCounterElement = document.createElement('div');
    moveCounterElement.id = 'moveCounter';
    moveCounterElement.style.textAlign = 'center';
    moveCounterElement.style.marginTop = '10px';
    moveCounterElement.style.fontSize = '20px';
    moveCounterElement.textContent = 'Ходы: 0';
    document.body.appendChild(moveCounterElement);

    const resetButton = document.createElement('button');
    resetButton.id = 'resetButton';
    resetButton.textContent = 'Reset';
    resetButton.className = 'button';
    resetButton.style.display = 'block';
    resetButton.style.margin = '10px auto';
    document.body.appendChild(resetButton);

    let selectedCards = [];
    let moveCounter = 0; 


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function resetGame() {
        shuffle(colors);
        cards.forEach((card, index) => {
            card.style.backgroundColor = '';
            card.style.backgroundImage = defaultBackgroundImage;
            card.classList.remove('flipped');
            card.dataset.color = colors[index];
        });
        selectedCards = [];
        moveCounter = 0; 
        moveCounterElement.textContent = 'Ходы: 0';
        messageElement.textContent = '';
    }

    function flipBackCards() {
        selectedCards.forEach(card => {
            card.style.backgroundColor = '';
            card.style.backgroundImage = defaultBackgroundImage;
            card.classList.remove('flipped');
        });
        selectedCards = [];
    }

    function checkForMatch() {
        if (selectedCards.length === 2) {
            const [card1, card2] = selectedCards;
            if (card1.dataset.color === card2.dataset.color) {
                selectedCards = [];
                checkForWin();  
            } else {
                setTimeout(flipBackCards, 1000);
            }
            moveCounter++; 
            moveCounterElement.textContent = `Ходы: ${moveCounter}`; 
        }
    }

    function checkForWin() {
        const allFlipped = Array.from(cards).every(card => card.classList.contains('flipped'));
        if (allFlipped) {
            messageElement.textContent = 'You Win!';
        }
    }

    shuffle(colors);
    cards.forEach((card, index) => {
        card.dataset.color = colors[index];
        card.addEventListener('click', () => {
            if (selectedCards.length < 2 && !card.classList.contains('flipped')) {
                card.style.backgroundColor = card.dataset.color;
                card.style.backgroundImage = 'none';
                card.classList.add('flipped');
                selectedCards.push(card);
                checkForMatch();
            }
        });
    });

    resetButton.addEventListener('click', resetGame);
});
