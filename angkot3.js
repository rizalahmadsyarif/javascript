var jmlAngkot = 10;
var angkotBeroprasi = 8;
var noAngkot = 1;

for( noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot<=angkotBeroprasi) {
        console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.'); 
    } else {
        console.log('Angkot No. '+ noAngkot + ' tidak beroprasi.');
    }
}