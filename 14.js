function countVowels(text){
    let count=0;
    const vowels="aeiou";
    for(let i=0;i<text.length;i++){
        if( vowels.includes(text[i].toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels("javascript"));
console.log(countVowels("Hope"));
console.log(countVowels("America"));