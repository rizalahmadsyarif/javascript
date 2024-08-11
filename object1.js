//object literal
 var mhs = {
    nama : 'eriko',
    nim : '123456',
    email : 'erioko@gmail.com',
    jurusan : 'IT'
 }

 // Function Declaration
 function buatObjectMahasiswa(nama, nrp) {
    var mhs  = {}
    mhs.nama = nama;
    mhs.nrp = nrp;
    return mhs;
 }
 var mhs3 = buatObjectMahasiswa('Nofariza', '12345');


 // Constractor
 function Mahasiswa( nama, nrp) {
    this.nama = nama;
    this.nrp = nrp;   
 }
 var mhs5 = new Mahasiswa('erik','123456');