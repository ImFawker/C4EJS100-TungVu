
    let numberSequence = prompt('Enter a sequence of number, seperated by a comma');
    let list = [];
    list = numberSequence.split(',');
{
    let s=0;
    console.log(list);
    for (let i=0; i<list.length; i++) {
        list[i]=Number(list[i]);
        s = s + list[i];
    }
    console.log(s); 
}
    
{
    let min = 0;
    min = Number(list[0]);
    for (let i=0; i<list.length; i++) {
        if (min>Number(list[i])) {
            min = Number(list[i]);
        }
    }
    alert(`The smallest number is ${min}`);
}

