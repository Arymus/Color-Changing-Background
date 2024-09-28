const background = document.getElementById("bgcolor")
const button = document.getElementById("colorchange")

function randomizeBgColor() {
    const colors = ["Red", "Yellow", "Blue", "Green", "Purple"]
    const backgroundColor = Math.floor(Math.random() * colors.length);
    selectedColor = colors[backgroundColor];
    document.body.style.backgroundColor = selectedColor;
    background.innerText = `Background Color: ${selectedColor}`;
}