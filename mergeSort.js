const mergeSort = (inputArr)=> {
    
    if(inputArr.length === 1){
        return inputArr;
    }else{
        let half = Math.floor(inputArr.length / 2)
        
        let leftSorted = mergeSort(inputArr.slice(0, half));
        let rightSorted = mergeSort(inputArr.slice(half));
        
        const merged = [];
        let leftI = 0;
        let rightI = 0;
        while(leftI < leftSorted.length && rightI < rightSorted.length){
            console.log(leftSorted);
            console.log(rightSorted)

            if(leftSorted[leftI] < rightSorted[rightI]){
                merged.push(leftSorted[leftI]);
                console.log(`between ${leftSorted[leftI]} and ${rightSorted[rightI]} i've pushed ${leftSorted[leftI]}`)
                leftI++;
                
            }else if(leftSorted[leftI]>rightSorted[rightI]){
                merged.push(rightSorted[rightI])
                console.log(`between ${leftSorted[leftI]} and ${rightSorted[rightI]} i've pushed ${rightSorted[rightI]}`)
                rightI++
                
            }else {
                merged.push(leftSorted[leftI]);
                leftI++
                rightI++
            }
        }

        if(leftI < leftSorted.length){
            merged.push(...leftSorted.slice(leftI))
        }

        if(rightI < rightSorted.length){
            merged.push(...rightSorted.slice(rightI))
        }

       return merged
    }
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1]

console.log(mergeSort(arr));


