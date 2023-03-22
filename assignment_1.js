// Function with multiplicationTable name
function multiplicationTable(num) {
    // for loop that run 1 - 10 times
    for (let i = 0; i <= 10; i++) {
        // multiplly iteration with number
        let product = num * i;
        // Log the production in this format "num * iteration = product"
        console.log(`${num} * ${i} = ${product}`)
    }
}

// run code 
multiplicationTable(10)