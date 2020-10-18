{
    let n = Number(prompt('x is lower/higher half of n. n='));
    let x = Number(prompt('x is lower/higher half of n. x='));
    if (x < (n/2)) {
        alert(`${x} is lower half of ${n}`);
    } else {
        alert(`${x} is higher half of ${n}`);
    }
}