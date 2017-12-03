var faker = require("faker");

for (i = 0; i < 5; i++) {
    console.log(faker.commerce.productName() + " " + "$" + faker.commerce.price());
}
//console.log(randomProduct);