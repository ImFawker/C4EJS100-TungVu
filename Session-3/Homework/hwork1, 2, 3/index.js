//variables swap method 1
{
    let a = 5, b = 6;
    [a, b] = [b, a];
    console.log(`${a}, ${b}`);
}

//variables swap method 2
{
    let a = 5, b = 6;
    let c;
    c = a;
    a = b;
    b = c;
    console.log(a, b);
}

//Split String to Array
{
    const s = 'Hello beaty there';
    let ar = s.split(' ');
    console.log(ar);
}

{
    const a = [4, 5, 7, -8];
    console.log(...a);
}