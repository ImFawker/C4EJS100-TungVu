console.log('BMI - beo gay binh thuong');

let h = prompt('Enter your height');
let w = prompt('Enter your weight');
let BMI = w/(h*h);

if (BMI < 18.5) {
    console.log('Gay');
} else if (BMI < 25) {
    console.log('Binh thuong');
} else if (BMI < 30) {
    console.log('Hoi beo');
} else if (BMI < 35) {
    console.log('Beo phi cap do 1');
} else if (BMI < 40) {
    console.log('Beo phi cap do 2');
} else {
    console.log('beo phi cap do 3');
}

let age = prompt('Enter your age');
if (age < 10) {
    console.log('cutttttt');
} else if (age < 18) {
    console.log('di an kem');
} else {
    console.log('di xem phim');
}

let a = prompt('Enter the coefficient for x^2');
let b = prompt('Enter coefficient for x');
let c = prompt('Enter constant');
let delta = b*b - 4*a*c;
if (delta < 0) {
    console.log('no solution');
} else if (delta > 0) {
    console.log('2 roots');
} else {
    console.log('1 root');
}