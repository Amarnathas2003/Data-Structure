
function getQuicksort(array, low, high) {

    //Base Case For Recursion Call
    if (low >= high) {
        return;
    }

    let s = low;
    let e = high;

    let mid = Math.floor((s + e) / 2);
    let pivot = array[mid];

    while (s <= e) {

        //Move s if its not violating.
        while (array[s] < pivot) {
            s++;
        }

       //Move e if it's not vilolating. 
        while (array[e] > pivot) {
            e--;
        }

        //Check that if start is less than or equal to end.
        
        if (s <= e) {
            let temp = array[s];
            array[s] = array[e];
            array[e] = temp;
            s++; //Dont Forget To DO This.
            e--; //This Also.
        }
    }

    //If You Have any Doubt in this check the Kunals Video Section How to put pivot at correct Position.
    getQuicksort(array, low, e);
    getQuicksort(array, s, high);
}


const array = [7, 8, 3, 2, 1]
getQuicksort(array, 0, array.length - 1)
console.log(array);