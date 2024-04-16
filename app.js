let num1 = +prompt(`write your first number`)
let num2 = +prompt(`write your second number`)
let option = +prompt(`Choose your option:
1.plus
2.minus
3.divide
4.multiply`
)
if (option == 1) {
console.log( num1 + num2)
} else if (option == 2) {
    console.log( num1 - num2)
} else if (option == 3) {
    console.log( num1 / num2)
} else if (option == 4) {
    console.log( num1 * num2)
}