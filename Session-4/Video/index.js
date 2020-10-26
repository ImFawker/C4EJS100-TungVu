//let person = ['Nam', 19, 'Hanoi', 25, false];
//console.log(person);
//-no items are homogenous but there are nothing to explain their meaning (no lablel)
//-> Bad for code reading => bad for teamwork
//- Array works in previous session since the items were homogenous
//=> Array is not suitable, solution: Objects

//Objects basic operation
//Init
//let person = {};
//console.log(person);

//let person = {
  //  name: 'Nam',
    //age: 19,
//};
//console.log(person)

//Property value pair

//object read
//let person = {
    //name: 'Nam',
    //age: 19,
//};
//console.log(person);
//console.log(person.age);

//let prop = 'age';
//console.log(person.prop);
//console.log(person['name']);

//When dot '.' does not work, use 
//console.log(person['age'])

//Create
//Same as upadate, except that the property has not already existed
//let person = {
    //name: 'Nam',
    //age: 18,
//};

//person.location = 'hanoi';

//let personArr = [];
//personArr.push(person); 

//console.log(personArr[0]);
//let p = personArr[0];
//console.log(p);
//console.log(p.name);

//Update
//let person = {
    //name: 'Nam',
    //age: 18,
//};

//console.log(person['age']);
//person['age'] = 19;
//console.log(person['age']);

//console.log[person];

//person.age++;
//person['age']++;
//console.log(person);

let personArr = [
    {name: 'Nam', age: 18, favs: ['netflix', 'code'],},
    
]