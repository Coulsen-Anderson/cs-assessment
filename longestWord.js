const findLongestWord = (arr) => {
    let longestLength = 0

    arr.forEach((word) => {
        if(word.length > longestLength){
            longestLength = word.length
        }
    })
    return longestLength
}

console.log(findLongestWord(["hi", "hello", 'Coulsen']))

//Time Complexity = O(n)

//Space Complexity = O(n)







