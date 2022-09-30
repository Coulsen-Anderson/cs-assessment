const addToZero = (arr) => {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++)
        
        if(arr[i] + arr[j] === 0)
        return true
    }
    return false
}

console.log(addToZero([1,1,2,2,3,3,4,4,5,5,6]))