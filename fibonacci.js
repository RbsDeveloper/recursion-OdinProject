
// function with loop
const fibs = (fibLenght) => {
    const fibArray = [0,1];

    if(fibLenght === 1){
        fibArray.splice(1);
        return fibArray
    }

    if(fibLenght === 2){
        return fibArray
    }

    for(let i = 1 ; i <=fibLenght-2; i++){
        fibArray.push(fibArray[i-1] + fibArray[i])
    }

    return fibArray
}

//console.log(fibs(3));


//function with recursion
const fibsRec = (fibLength) => {
    console.log('this was printed recursively')
    
    let smallerArray
    if(fibLength === 1){
        smallerArray = [0]
    }
    
    if(fibLength === 2){
        return [0,1];
    }

    if(fibLength>2){
        
        smallerArray = fibsRec(fibLength-1);
        
        smallerArray.push(smallerArray[smallerArray.length-2] + smallerArray[smallerArray.length-1])

        console.log(smallerArray)
        return smallerArray
    }

    return smallerArray
}

console.log(fibsRec(8))