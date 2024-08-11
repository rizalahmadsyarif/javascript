//Manupulasi Array

//Menambah isi array
// var array = [];
// array[0] = 'budi';
// array[1] = 'reno';
// array[2] = 'eko';
// array[3] = 'seno';

// console.log(array);

//Menghapus isi array
// var arr = ['rudi','eko','deni'];
// arr[2] = undefined;

//Menampilkan isi array
// var arr = ['rudi','eko','deni','windi'];

// for( var i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke-'+ (i+1) + ' : ' + arr[i]);    
// }

// method pada array
// join

// push & pop
// arr.push('redi');
// arr.pop();

// shift & unshift
// arr.unshift('reno');
// arr.shift('reno');

//slice & splice

// arr.splice(1, 2);

// var arr2 = arr.slice(1,4);
// console.log(arr2.join('  '));
// var arr = ['ero','eko','dodi','reno','yono'];

// foreach & map
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['ero','eko','dodi','reno','yono'];
// angka.forEach(function(e) {
    //     console.log(e);
    // });


 //map
//  var angka = [1,2,3,4,5,6,7,8];
//  angka.map(function(e){
//     return e * 2;
//  })

// Sort
// var angka = [1,2,3,4,5,6,7,8];
// angka.sort;
// console.log(angka.join(' - '));

// Filter dan Find

var angka = [1,2,3,4,5,6,7,8];
var angka2 = angka.filter(function (x) {
    return x == 5;
});
 console.log(angka2);
 
