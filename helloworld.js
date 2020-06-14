const { performance } = require('perf_hooks'); //object destructuring


console.log("Hello Javascript!");

function printName() {
    let name;
    name = "Jane Doe";
    console.log("my name is " + name);

}

printName();


const nemo = ['nemo'];
const sub1 = new Array(450).fill('NOT-NEMO');
const sub2 = new Array(450).fill('DefinitelyNOTNemo');

const finalsear = sub1.concat(nemo).concat(sub2);
//const nemo = [];
function findNemo(array) {
    let t0 = performance.now();

    if (array && array.length > 0) {
        console.log("Total length of input array is " + array.length);
        for (let idx in array) {
            let item = array[idx]
            console.log("item at index #" + idx + " is " + item);
            if (item === 'nemo') {
                console.log('i found nemo at index #' + idx);
                                break;
            }

        }

    } else {

        console.log('whooaa empty array');
    }

    let t1 = performance.now();
    console.log('The function took ' + (t1 - t0) + ' milliseconds');

}

findNemo(finalsear);