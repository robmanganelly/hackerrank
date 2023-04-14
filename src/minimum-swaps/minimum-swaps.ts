export function minimumSwaps(arr: number[]) {

    //copy the array
    // loop through the array
    // if the current element is not in the correct position
    // swap the current element with the element in the correct position{
    //  get the index of the right element
    //  copy the current element at this index
    //  bring the element from the index to the current index
    //  continue       
    //  increment the swap counter
    // }
    // return the swap counter

    let _arr = [...arr];
    let swaps = 0;
    let i = 0;
    for (let i = 0; i < _arr.length; i++) {
        if (_arr[i] !== i + 1){
            let index = _arr.indexOf(i + 1);
            let temp = _arr[i];
            _arr[i] = i+1;
            _arr[index] = temp;
            swaps++;
        }
    }
    return swaps;
}

// [1, 3, 5, 2, 4, 6, 7]
// [1, 2, 5, 3, 4, 6, 7]
// [1, 2, 3, 5, 4, 6, 7]
// [1, 2, 3, 4, 5, 6, 7]
// [1, 2, 3, 4, 5, 6, 7]