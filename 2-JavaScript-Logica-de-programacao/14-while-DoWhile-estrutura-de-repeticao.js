function random(min, max) {
    const r = Math.floor(Math.random() * (max - min) + min);
    return r;
};

const min = 1;
const max = 50;
let rand = 10

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('######');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);