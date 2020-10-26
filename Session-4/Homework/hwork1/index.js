const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiami',
    colour: 'White',
};

for (let x in product) {
    console.log(`${x}:${product[x]}`);
}

