let txt1 = "bcdbchdbdsGHYGFCJVhhVYIYdcidvvdvd";
//
console.log(txt1.toLowerCase());
//
console.log(txt1.toUpperCase());
// String Length
console.log(txt1.length);
//
console.log(txt1.charAt(5));
//
console.log(txt1.charCodeAt(5));
//
let text = "Apple, Banana, Kiwi";
//  String slice()  tart position, and end position
console.log(text.slice(7, 13));
console.log(text.slice(7));
console.log(text.slice(-18));
// String substring()  start and end values less than 0 are treated as 0
console.log(txt1.substring(-7, 5));
console.log(txt1.substring(5, 7));
// String substr() second parameter specifies the length of the extracted part
console.log(txt1.substr(5, 15));
console.log(txt1.substr(-7, 5));

//
console.log(text.charAt(6));
console.log(text.charAt(4));
//
console.log(txt1.concat(","), text);
//
//String Content
console.log(text.replace("Banana", "Grapes"));
//
console.log(txt1.replace("bcd", "abcde"));
//
console.log(
  txt1.replaceAll(
    "bcdbchdbdsGHYGFCJVhhVYIYdcidvvdvd",
    "vejvnejkvnejvervHJNJNJjvnfre"
  )
);
//
