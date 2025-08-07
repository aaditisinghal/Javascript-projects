function worldBlanks(mynoun,myAdjective,myVerb, myAdverb){
    var result=""
    result="the "+myAdjective+ " " +mynoun+ " " +myVerb+" being eaten "+myAdverb+"."
    return result
}
console.log(worldBlanks("icecream","tasty","is", "quickly"))
