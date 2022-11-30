function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("Введите число");

        if (value === "" || value === null) break;

        numbers.push(+value);
    }

    alert(numbers.sort((a, b) => a - b));

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert(sumInput());