{
    {for (let i = 0; i<3; i++) {
        console.log('L');
    }}
    {for (let i=0; i<3; i++) {
        console.log('H');
    }}
}

{
    let n = Number(prompt('Enter a number, I will print the number of numbers in the low half and high half of it'));
    if (n%2==0) {
        for (let i = 0; i < (n/2); i++) {
            console.log('L');
        }
        for (let i = 0; i < (n/2); i++) {
            console.log('H');
        }
    } else {
        for(let i = 0; i < (n+1)/2; i++) {
            console.log('L');
        }
        for (let i = 0; i < (n-1)/2; i++) {
            console.log('H');
        }
    }
}



{
    let n = Number(prompt('Enter a number, I will print that number of 1 and 0 consecutively'));
    if (n%2==0) {
        for (let i = 0; i<(n-1)/2; i++) {
            console.log('0');
            console.log('1');
        }
    } else if (n%2==1) {
        for (let i = 0; i < (n-1)/2; i++) {
            console.log('0');
            console.log('1');
        }
        console.log('0');
    }
    
}