// mergeSortedArrays([0,3,4,31], [4,6,30])
// = [0, 3, 4, 4, 6, 30, 31]

const mergeSortedArrays = (arr1, arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        console.log("Both input must be an array");
        return;
    }

    const mergedArray = [...arr1, ...arr2];

    const sortedArray = [];
    for(let i = 0; i <= mergedArray.length -1; i++){
        if(sortedArray.length === 0){
            sortedArray.push(mergedArray[i]);
        }else{
            if(sortedArray[sortedArray.length -1] <= mergedArray[i]){
                sortedArray.push(mergedArray[i]);
            }else{
                const currentLast = sortedArray[sortedArray.length -1];
                
                // remove the last one
                sortedArray.pop();

                // add this one
                sortedArray.push(mergedArray[i]);

                // add the removed one
                sortedArray.push(currentLast);
            }
        }

    }
    console.log(sortedArray);

}


mergeSortedArrays([0,3,4,31], [4,6,30])