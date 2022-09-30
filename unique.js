function unique(word) {
    for (let i = 0; i < word.length; i++) {
      for( let j = i + 1; j < word.length; j++){
        if(word[j] == word[i]){
            return false
            }
        }
    }
  return true
}


  console.log(unique('stove'))

//Time Complexity = O(n^2)

//Space Complexity = O(n)