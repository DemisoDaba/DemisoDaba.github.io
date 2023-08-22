// Get the header element
const header = document.querySelector('header');

// Add a click event listener to the header
header.addEventListener('click', function() {
    // Generate a random color
    const randomColor = getRandomColor();

    // Set the header background color to the random color
    header.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
