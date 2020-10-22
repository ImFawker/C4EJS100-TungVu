let itemList = ['Jeans', 'Shirt', 'Socks'];
while (true) {
    let a = prompt('Hi there, welcome to shop admin panel, what do you want to do (C, R, U, D)?');
    a = a.toUpperCase();
    if ((a!='R') && (a!='C') && (a!='U') && (a!='D')) {
    alert('This command is not supported');
    } else {
        if (a=='R') {
        console.log('The curent items are:');
        for (let i=0; i < itemList.length; i++) {
            console.log(`${i+1}. ${itemList[i]}`);
        }
    } else if (a=='C') {
        let newItem = prompt('Enter the name of the new item');
        itemList.push(newItem);
        alert('Done');
    } else if (a=='U') {
        let position = Number(prompt('Enter the position you want to update'));
        let newName = prompt('Enter the new name');
        itemList[position-1] = newName;
        alert('done');
    } else if (a=='D') {
        let position = Number(prompt('Enter the position you want to delete'));
        itemList.splice(position-1, 1);
        alert('done');
    }
    }
}
