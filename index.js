// 1) Якщо значення змінної number позитивне або 0 - виводимо ''positive", інакше - "negative"

const number = -0;
const right= 0;

if (number >= right) {
  console.log("positve");
} else {
  console.log("negative");
}

// 2) Є дві змінні - num1 і num2. Якщо num1>num2 - вивести результат віднімання, інакше - вивести результат множення
const number1 = 3;
const number2 = 3;

if (number1 >= number2) {
  console.log(number1 - number2);
} else {
  console.log(number1 * number2);
}

// 3) Якщо значення змінної кратно(тобто ділеться без остачі) на 7 і одночасно кратна 3 - виводимо "you win!", інакше - "you loose"
const number5 = 10;
if (Number(number5 % 7 === 0) && Number(number5 % 3 === 0)) {
  console.log("You win!");
} else {
  console.log("You lose");
}