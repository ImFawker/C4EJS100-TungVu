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