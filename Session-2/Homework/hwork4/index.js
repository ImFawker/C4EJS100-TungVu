{
    let m = Number(prompt('Enter a number'));
    let factorial = 1;
    for (let i = m; i > 0; i--) {
        factorial = factorial*i;
    }
    alert(factorial);
}

