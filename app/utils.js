const findAllIndexes = (list, value) => 
//    if the value is not in the list, return -1
// otherwise return an array with all indices that contain the value
list.map((item, index) => {
    if (item === value) {
        return index;
        }
        return '';
    })
    .filter((item) => item);

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

const test1 = findAllIndexes(beasts, 'bison');
findAllIndexes(beasts, 'zebras');

// Returns 
console.log(test1);