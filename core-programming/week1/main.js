let arr = [1, 2, 3, 4];    //array literal
let arr1 = Array.of(1, 2, 3, 4, 5)

let arr2 = Array.from('123456', function (el) {
    return +el;
})
const arr3 = Array.from({ length: 10 });

const arr4 = [1, 2, 3, 4, 5];
arr4['school'] = `Telerik Academy`;
arr4[100] = 'New';          // arrays are created to work with real positive numbers and the length after this expression will be from 0 to 100  0,1,2.... 100

// for (const i of arr4) {
//     console.log(i);
// }

// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4.length);
// console.log(arr4);
//----------------------------------------------------------------------------------------------------
const people = ['Ivan', 'Maria', 'Stoyan1', 'Stoyan2', 'Petar', 'Iva'];

// console.log(people.length);
const el = people.pop();
// console.log(people.length);
// console.log(el);
// console.log(people);   // its better to save original array in this example original array is modified

people.push('Georgi');
// console.log(people);  

people.shift();
// console.log(people);  

//---------------------------------------------------------------------------------------------------------
// console.log(people);
const result = people.find(function (person) {
    // console.log(`${person} ${index} ${arr}`);
    return person.startsWith('S');
});

// console.log(result);

//----------------------------------------------------------------------------------------------------------
let matrix = [];

const rows = 4;
const cols = 4;
console.log(matrix);

//cols       0  1  2

//row 0      1, 2, 3
//row 1      4, 5, 6
//row 2      7, 8, 9

for (let row = 0; row < rows; row++) {
    matrix[row] = [];

    for (let col = 0; col < cols; col++) {
        matrix[row][col] = row*rows + col + 1;
    }
}

console.log(matrix);

