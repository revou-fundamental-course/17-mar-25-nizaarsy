function calculateArea() {
    const length = parseFloat(document.getElementById('lengthArea').value);
    const width = parseFloat(document.getElementById('widthArea').value);
    
    if (!isNaN(length) && !isNaN(width)) {
        const area = length * width;
        document.getElementById('areaCalculation').innerText = `L = ${length} x ${width}`;
        document.getElementById('areaResult').innerText = `L = ${area}`;
    } else {
        document.getElementById('areaCalculation').innerText = 'Masukkan panjang dan lebar yang valid';
        document.getElementById('areaResult').innerText = '';
    }
}

function calculatePerimeter() {
    const length = parseFloat(document.getElementById('lengthPerimeter').value);
    const width = parseFloat(document.getElementById('widthPerimeter').value);
    
    if (!isNaN(length) && !isNaN(width)) {
        const perimeter = 2 * (length + width);
        document.getElementById('perimeterCalculation').innerText = `K = 2 x (${length} + ${width})`;
        document.getElementById('perimeterResult').innerText = `K = ${perimeter}`;
    } else {
        document.getElementById('perimeterCalculation').innerText = 'Masukkan panjang dan lebar yang valid';
        document.getElementById('perimeterResult').innerText = '';
    }
}

function resetArea() {
    document.getElementById('lengthArea').value = '';
    document.getElementById('widthArea').value = '';
    document.getElementById('areaCalculation').innerText = '';
    document.getElementById('areaResult').innerText = '';
}

function resetPerimeter() {
    document.getElementById('lengthPerimeter').value = '';
    document.getElementById('widthPerimeter').value = '';
    document.getElementById('perimeterCalculation').innerText = '';
    document.getElementById('perimeterResult').innerText = '';
}
