

function heightCheck(heights) {

    let newHeights = [];
    for (let i = 0; i < heights.length; i++) {
        newHeights.push(heights[i]);
    }

    newHeights.sort((a, b) => a - b);

    let indices = 0;
    for (let j = 0; j < heights.length; j++) {

        if (heights[j] != newHeights[j]) {
            indices += 1;
        }
    }

    console.log("Final Result", indices);
    return indices;
}


const heights = [5, 1, 2, 3, 4]
console.log(heightCheck(heights))
