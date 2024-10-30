document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
  
    character.addEventListener('mouseover', moveCharacter);
  
    function moveCharacter() {
      const x = Math.floor(Math.random() * (window.innerWidth - character.clientWidth));
      const y = Math.floor(Math.random() * (window.innerHeight - character.clientHeight));
  
      character.style.left = `${x}px`;
      character.style.top = `${y}px`;
    }
}
);
