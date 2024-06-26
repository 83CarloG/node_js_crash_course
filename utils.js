function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit (celsius) {
    return (celsius * 9) / 2 + 32
}

module.exports = {
    celciusToFahrenheit,
    generateRandomNumber
};