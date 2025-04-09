const input = prompt("Introdu temperatura: ")
const celsius = parseFloat(input);

function convertCelsiusToFR(celsius) {
    return (celsius * 9 / 5) + 32;
}

if(!isNaN(celsius)) {
    const fahrenheit = convertCelsiusToFR(celsius);
    alert("Temperatura in Fahreinheit este: " + fahrenheit);
}else {
    alert("Invalid value");
}