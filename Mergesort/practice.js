function mergeSort(arr) {
    
    if(arr.length <= 1) {
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    
    return mergedArray(left, right);
    
    function mergedArray(first, last) {
        
        let newArray = [];
        
        let i = 0;
        let j = 0;
        
        while(i < first.length && j < last.length) {
            if(first[i] < last[j]) {
                newArray.push(first[i]);
                i++;
            } else {
                newArray.push(last[j]);
                j++;
            }
        }
        
         while(i < first.length) {
                newArray.push(first[i]);
                i++;
            }
            
            while(j < last.length) {
                newArray.push(last[j]);
                j++;
            }
    return newArray;
    }
}

const arr = [23, 34, 13,-1, 89, 27];
console.log(mergeSort(arr));