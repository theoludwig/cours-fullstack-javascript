import ms from 'ms';
import Personne from './classes/Personne';

// Modules
console.log(ms('5s'));
const divlo = new Personne("Divlo", 17);
console.log(divlo.presentation());

// Modernes
const user = {
    name: "Divlo",
    age: 17
};
const usersArray = [user, { name: "Divlo2", age: 17 }];

// Destructuring (raccourci d'écriture)
const { name, age } = user;
const [user1, user2] = usersArray;

// Spread
const numbersArray = [5, 7, 9, 10, 12];
const numbersArray2 = [897, 124, 534];
const newArray = [...numbersArray, ...numbersArray2];
Math.max(...numbersArray);

// Callback
const doSomethingThen = (callback) => {
    // du code
    callback();
}
doSomethingThen(() => console.log("Hello world!"));

// Promise
const promise = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 3000); 
});
promise.then((foo) => console.log(foo));
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(response);
    })  
    .catch((error) => {
        console.error(error);
    });

// Async/Await et Self Invoking Functions
const awaitPromise = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    await awaitPromise(5000);
    console.log("Texte affiché après 5 secondes.");
})();