let sheepSizes = [5, 7, 300, 90, 24, 50, 75];

console.log('Hello, my name is Tung Vu and here is my sheep sizes:');
console.log(...sheepSizes);

for (let i = 0; i<4; i++) {
    console.log(`MONTH ${i+1}`);
    console.log(`${i+1} month(s) have passed, my sheep have grown, here are their sizes`);
    for (let k = 0; k<sheepSizes.length; k++) {
        sheepSizes[k] = sheepSizes[k]+50;
    }
    console.log(...sheepSizes);
    max = 0;
    for (let h = 0; h<sheepSizes.length; h++) {
        if (max < Number(sheepSizes[h])) {
            max = Number(sheepSizes[h]);
        }
    }
    console.log(`Now my biggest sheep has size ${max}, let's shave it`);
    l = sheepSizes.indexOf(max);
    sheepSizes[l] = 8;
    console.log('After shearing, here is my flock');
    console.log(...sheepSizes);
}

let s=0;
for (i=0; i<sheepSizes.length; i++) {
    s = s + sheepSizes[i];
}
console.log(`My flock has size in total: ${s}`);
console.log(`I would get ${s*25}`);
