const arr = [3, 4, 6, -9, 10, -88, 2];
let x = Number(prompt('Enter a number'));
let found = false;
for (let i=0; i<arr.length; i++) {
    if (x==arr[i]) {
        found = true;
        break;
    }
}
if (found) {
    console.log(`${x} is found in my array.`);
} else {
    console.log(`${x} is NOT found in my array.`);
}
