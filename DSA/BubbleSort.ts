function  bubbleSort(arr: number[]) : number[] {
    let swapped: boolean;

    // Outer loop runs up to arr.length-1 times
    for (let i = 0; i < arr.length - 1; i++){
        swapped = false;

        // Inner loop compares adjacent elements
        // arr.length-i-1 avoids checking already sorted elements at the end
        for(let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr [j+1]){
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
                console.log(`Swapped ${temp} with ${arr[j]} `)
            }
        }

        // If no elements were swapped, the array is already sorted
        if(!swapped){
            console.log("Sorted");
            break;
        }
    }

    return arr;
}

let array = [6, 2, 3, 8 ,9, 1, 4, 7, 5]
let array2 = [26, 82, 33, 18, 99, 41, 64, 57, 75]
console.log(bubbleSort(array))
console.log(bubbleSort(array2))