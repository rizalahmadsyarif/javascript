//Pola bintang ke1
//  var s = '';
//  for (var i = 0; i < 10; i++){
//     for (var j = 0; j <= i; j++){
//         s += '#';
//     }
//     s +='\n';
// }
// console.log(s);
  
//Pola Bintang ke2

// var s = '';
// for (var i = 10; i > 0; i--){
//     for ( var j = 0; j < i; j++){
//         s +='#';
//     }
//     s +='\n';
// }
// console.log(s);

//pola bintang ke3

var s = '';
for (var i = 10; i > 0; i--){
    for (var j = 0; j <= 10; j++){
        if(j >= i){
            s +='#';
        } else {
            s +=' ';
        }
    }
    s +='\n';
}
console.log(s);

