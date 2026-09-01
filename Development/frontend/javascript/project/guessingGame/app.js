// =======================
// 1. THEORY: Use floor + correct comparison for guessing game
// =======================

let max = Number(prompt("Enter max value"));
let val = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter the guess");


// =======================
// 2. Game Loop
// =======================

while (true) {

    if (guess === "quit") {
        console.log("Game Over");
        break;
    }

    if (Number(guess) === val) {
        console.log("🎉 Congratulations! You guessed right:", val);
        break;
    } 
    else {
        console.log("❌ Wrong guess");

        if (Number(guess) > val) {
            console.log("📉 your guess is high!");
        } 
        else {
            console.log("📈 your guess is  low!");
        }

        guess = prompt("Enter the guess again...");
    }
}


// =======================
// 3. Example Output
// =======================

// Enter max value → 10
// Random number → 6

// Enter guess → 8
// ❌ Wrong guess
// 📉 Too high!

// Enter guess → 3
// ❌ Wrong guess
// 📈 Too low!

// Enter guess → 6
// 🎉 Congratulations! You guessed right: 6