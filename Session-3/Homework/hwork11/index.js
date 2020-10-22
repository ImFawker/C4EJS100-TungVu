const number = prompt('Enter a sequence of number');
let arr = []; arr1 = [];
arr = number.split(',');
for (let i=0; i<arr.length; i++) {
    if (Number(arr[i])%2==1) {
        arr1.push(arr[i]);
    }
}
console.log(`${number} => ${arr1}`);

