const emojis = ["😊", "😊", "👈", "👈", "😂", "😂", "🤣", "🤣", "❤️", "❤️", "😍", "😍", "😒", "😒", "👌", "👌", "😘", "😘", "💕", "💕", "😁","😁", "😎", "😎", "😢", "😢"];

// Function to shuffle the emojis
const shuffleEmojis = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

// Function to initialize the game
const initializeGame = () => {
    const gameContainer = document.querySelector('.game');
    gameContainer.innerHTML = ''; // Clear the game board
    const shuff_emojis = shuffleEmojis([...emojis]);
    attempts = 0;
    updateCounter();

    for (let i = 0; i < emojis.length; i++) {
        let box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = shuff_emojis[i];
        box.onclick = function () {
            this.classList.add('boxs');
            setTimeout(() => {
                let selectedBoxes = document.querySelectorAll('.boxs');
                if (selectedBoxes.length > 1) {
                    attempts++;
                    updateCounter();
                    if (selectedBoxes[0].innerHTML === selectedBoxes[1].innerHTML) {
                        selectedBoxes[0].classList.add('boxmatch');
                        selectedBoxes[1].classList.add('boxmatch');
                        selectedBoxes[0].classList.remove('boxs');
                        selectedBoxes[1].classList.remove('boxs');
                        if (document.querySelectorAll('.boxmatch').length === emojis.length) {
                            alert('Winner!');
                        }
                    } else {
                        setTimeout(() => {
                            selectedBoxes[0].classList.remove('boxs');
                            selectedBoxes[1].classList.remove('boxs');
                        }, 500); // Delay before flipping back
                    }
                }
            }, 500); // Adjusted timeout for better user experience
        };
        gameContainer.appendChild(box);
    }
};

// Function to update the attempt counter
const updateCounter = () => {
    document.querySelector('.counter').textContent = `Attempts: ${attempts}`;
};

// Initialize variables
let attempts = 0;

// Add event listener for the reset button
document.querySelector('.reset').addEventListener('click', initializeGame);

// Initialize the game on page load
initializeGame();
