const { performance } = require('perf_hooks'); //object destructuring

//Prine Hello World
console.log("Hello World of Javascript!");

function printName() {
    let name;
    name = "Jane Doe";
    console.log("my name is " + name);

}

printName();


const nemo = ['nemo']; //initialize nemo

//initialize and fill a random array1
const randomArray1 = new Array(450).fill('NOT-NEMO'); 

//initialize and fill a random array2
const randomArray2 = new Array(450).fill('DefinitelyNOTNemo');

//cretae a final by concatenation of three arrays
const finalArray = randomArray1.concat(nemo).concat(randomArray2);

function findNemo(array) {
    let t0 = performance.now();

    if (array && array.length > 0) {
        
        console.log("Total length of input array is " + array.length);
        
        for (let idx in array) {
            let item = array[idx]
            console.log("Item at index#" + idx + " is " + item);
            if (item === 'nemo') {
                console.log('We found nemo at index #' + idx);
                                break;
            }

        }

    } else {

        console.log('whooaa!!! empty array');
    }

    let t1 = performance.now();
    console.log('The function took ' + (t1 - t0) + ' milliseconds');

}

findNemo(finalArray);