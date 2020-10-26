//let movie = {
//    title: 'The dark knight rises',
//    year: 2012,
//    rate: 8.4,
//}
//let x = prompt('what do you want to know?');
//alert(movie[x]);

//movie['rate'] = 9.0;
//console.log(movie);
//movie['rate'] += 0.5;
//console.log(movie);

//let a = prompt('what do you want to update?');
//let b = prompt('What is the update?');

//movie[a] = b;
//console.log(movie);

//let a = prompt('What do you want to update?');
//if (movie[a] == undefined) {
//    alert(`${a} does not exist in our data, we will add new.`);
//}
//let b = prompt('Enter the new data');
//movie[a] = b;
//console.log(movie);

//let movies = [
//    {title: 'The dark knight rises', year: 2012, rate: 8.4},
//    {title: 'Finding nemo', year: 2008, rate: 7},
//    {title: 'Tenet', year: 2020, rate: 7.5},
//];

//console.log(movies[0]);
//console.log(movies.length - 1);
//for (let i = 0; i<movies.length; i++) {
//    console.log(movies[i]);
//}

//movies[movies.length-1].rate += 0.7;

//let movie = {
//    title: 'You',
//    rate: 9,
//    characters: ['Joe', 'Dellilah', 'Love'],
//};

//movie['casts'] = 'abc';
//console.log(movie);

let movies = [
    {title: 'The dark knight rises', year: 2012, rate: 8.4, characters: 'adsa'},
    {title: 'Finding nemo', year: 2008, rate: 7},
    {title: 'Tenet', year: 2020, rate: 7.5}, 
];
console.log(...movies);

