const input = prompt("Enter your number:");
const number = parseInt(input);

function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;

    for (let i = 2; i*i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

if (!isNaN(number)) {
    const result = isPrime(number);
    alert(`${number} ${result ? "este un numar prim" : "nu este un numar prim"}.`);
} else {
    alert("Please, enter a valid number.");
}
