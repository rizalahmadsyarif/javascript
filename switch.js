var item = prompt('Masukan nama makanan dan minuman : \n (cth: nasi, daging, susu hamburger, softdrink) :');

switch (item) {
    case 'nasi':
        alert('makanan / minuman SEHAT');
        break;
    case 'daging':
        alert('makanan / minuman SEHAT ');
        break;
    case 'susu':
        alert('makanan / minuman SEHAT ');
        break;
    case 'hamburger':
        alert('makanan / minuman tidak SEHAT ');
        break;
    case 'softdrink':
        alert('makanan / minuman tidak SEHAT ');
        break;
    default:
        alert('anda memasukan nama makanan yang salah')
        break;
}

