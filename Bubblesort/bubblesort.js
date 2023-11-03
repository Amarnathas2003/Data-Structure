
function getBubblesort(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = 1; j < array.length - i; j++) {

            if (array[j] < array[j - 1]) {

                let temp = array[j]
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}

const array = [-1, 0, -3, 5, 4]
console.log(getBubblesort(array));



// function bubleSort(array) {

//     for (let i = 0; i < array.length; i++) {

//         for (let j = 1; j < array.length - i; j++) {

//             if (array[j] < array[j - 1]) {
//                 let temp = array[j];
//                 array[j] = array[j - 1];
//                 array[j - 1] = temp;
//             }
            
//         }
//     }
//     return array;
// }

// const array = [1, 2, 6, 4, 5]
// console.log(bubleSort(array));


//Steps of Bubble Sort

// Step 1 -> Outer Loop That Goes for array.length - 1 time

//Step 2 -> In j Loop check if the array[j] < array[j - 1] do Perform the Swapping



