function calculateArea() {
    const sideLength = parseFloat(document.getElementById('sideLength').value);
    if (!isNaN(sideLength)) {
        const area = sideLength * sideLength;
        document.getElementById('areaCalculation').innerText = `L = ${sideLength} x ${sideLength}`;
        document.getElementById('areaResult').innerText = `L = ${area}`;
    } else {
        document.getElementById('areaCalculation').innerText = 'Masukkan panjang sisi yang valid';
        document.getElementById('areaResult').innerText = '';
    }
}

function calculatePerimeter() {
    const sideLength = parseFloat(document.getElementById('sideLengthPerimeter').value);
    if (!isNaN(sideLength)) {
        const perimeter = 4 * sideLength;
        document.getElementById('perimeterCalculation').innerText = `K = 4 x ${sideLength}`;
        document.getElementById('perimeterResult').innerText = `K = ${perimeter}`;
    } else {
        document.getElementById('perimeterCalculation').innerText = 'Masukkan panjang sisi yang valid';
        document.getElementById('perimeterResult').innerText = '';
    }
}

// Fungsi reset khusus luas
function resetArea() {
    document.getElementById('sideLength').value = '';
    document.getElementById('areaCalculation').innerText = '';
    document.getElementById('areaResult').innerText = '';
}

// Fungsi reset khusus keliling
function resetPerimeter() {
    document.getElementById('sideLengthPerimeter').value = '';
    document.getElementById('perimeterCalculation').innerText = '';
    document.getElementById('perimeterResult').innerText = '';
}
