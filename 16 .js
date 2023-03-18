//string

let string = "this is a string"
typeof string              //  o/p string
let numberstring='123'
Number(numberstring);       // type cast to string to number
numberstring.toString()     // type cast to number into string back 

const str = "life,the universe and evweything"
console.log(str.length)       //lenght of the str 42

//spliting of string
const str11='The quick brown fox'
const words=str.split('');
console.log(words[3]);        //o/p fox

//concatenation of string
const str1= 'Hello'
const str2= 'world'
console.log(str1.concat(' ',str2));             //  o/p Hello World 

//character of string 
const sentence = 'This quick brown fox'
const index=4
console.console.log((sentence.charAt(index)));         //o/p 4
