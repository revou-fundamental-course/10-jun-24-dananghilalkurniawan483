function appendToDisplay(value) {
    var display = document.getElementById('hasil');
    if (value === '.' && display.textContent.includes('.')) {
        return; // memastikan hanya satu titik desimal
    }
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    document.getElementById('hasil').textContent = '0';
    document.getElementById('satuan').textContent = '';
}

function deleteLastCharacter() {
    var display = document.getElementById('hasil');
    var currentValue = display.textContent;
    display.textContent = currentValue.slice(0, -1);
}

function convert() {
    var nilaiSuhu = parseFloat(document.getElementById('hasil').textContent);
    var skalaAsal = document.getElementById('skala_asal').value;
    var skalaTujuan = document.getElementById('skala_tujuan').value;
    var hasil = 0;
    var satuan = '';

    switch (`${skalaAsal}${skalaTujuan}`) {
        case 'CF':
            hasil = (nilaiSuhu * 9/5) + 32;
            satuan = '°F';
            break;
        case 'CK':
            hasil = nilaiSuhu + 273.15;
            satuan = 'K';
            break;
        case 'FC':
            hasil = (nilaiSuhu - 32) * 5/9;
            satuan = '°C';
            break;
        case 'FK':
            hasil = (nilaiSuhu - 32) * 5/9 + 273.15;
            satuan = 'K';
            break;
        case 'KC':
            hasil = nilaiSuhu - 273.15;
            satuan = '°C';
            break;
        case 'KF':
            hasil = (nilaiSuhu - 273.15) * 9/5 + 32;
            satuan = '°F';
            break;
        default:
            hasil = nilaiSuhu;
            satuan = '';
    }

    document.getElementById('hasil').textContent = hasil.toFixed(2);
    document.getElementById('satuan').textContent = satuan;
}
