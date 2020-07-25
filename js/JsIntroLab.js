

function max(num1,num2){
    if (num1 > num2) {
        return num1;
    }else
    return num2;

}

function maxOfThree(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    }
 else if (num2 > num1 && num2 > num3){
     return num2;
 }

 else{
     return num3;
 }
}
function isVowel(charcter){
    if(charcter ==='a'|| charcter ==='e'|| charcter ==='i'|| charcter ==='o'||charcter==='u'){
return "isvowel";
    }else{
        return "not vowel"
    }

}
function sum(numArr = []){
    let sum = 0;
    for(let i = 0; i < numArr.length; i++){
        sum += numArr[i];
    }
return sum;

}
function multiply(numArr = []){
    let product = 1;
    for(let i = 0; i < numArr.length; i++){
        product *= numArr[i];
    }
return product;
}
function reverse(string){
    reversed = '';
    for(let i = string.length -1; i >= 0;i--){
   reversed += string.charAt(i);
    }
    return reversed;
}
function findLongestWord(string = []){
    let longest = 0;
for(let i=0; i < string.length; i++){
if (string[i].length > string[longest].length){
    string[longest] = string[i];
}
}
return string[longest];
}
function filterLongWords(words=[], j){
    let word = "";
    for(let i=0; i < words.length;i++){
        if(words[i].length > j){
       word += words[i];
        }
    }
return word;
}





/*     test                                         */
function test(expected, actual){
    if(expected === actual){
        return "test passed";
    }else{
        return "test failed";
    }
}

console.log("1 - test result of max function= "+test(20,max(20,10)));
console.log("2 - test result of max of 3-function= "+test(20,maxOfThree(20,10,5)));
console.log("3 - test result of isVowel function= "+test("isvowel",isVowel('a')));
console.log("4 - test result of sum function= "+test(15,sum([1,2,3,4,5])));
console.log("5 - test result of multiply function= "+test(24,multiply([1,2,3,4])));
console.log("6 - test result of reverse function= "+test('leumas',reverse('samuel')));
console.log("7 - test result of findLongestWord function= "
+test("robel",findLongestWord(["sam","meda","miki","robel"])));
console.log("8 - test result of filterLongWords function= "
+test("medamikirobel",filterLongWords(["sam","meda","miki","robel"],3)));