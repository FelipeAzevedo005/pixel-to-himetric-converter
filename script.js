var input = document.querySelector('.input-container input');

function pixelsToHimetric(pixels) {
    
    return pixels * 26.45833;
}

function himetricToPixel(himetrics) {
    
    return himetrics / 26.45833;
}

function convertUnit(unit, value) {
    switch(unit) {
        case 'Pixels':
            return pixelsToHimetric(value);
            case 'Himetrics':
            return himetricToPixel(value);
        }
    }
    
function swapUnits() {
    var label = document.querySelector('.input-container label');
    
    var label2 = document.querySelector('.output-container label');
    var input2 = document.querySelector('.output-container input');
    
    const newUnitLabel = label2.innerHTML;
    const newUnitInputValue = input2.value;
    
    label2.innerHTML = label.innerHTML;
    input2.value = input.value;
    
    label.innerHTML = newUnitLabel;
    input.value = newUnitInputValue;
}

function buttonListener() {
    const button = document.querySelector('button');
    
    button.addEventListener('click', swapUnits);
}

function inputListener() {
    input.addEventListener('input', () => {
        const value = input.value;
        const label = document.querySelector('.input-container label').innerHTML; 
        const output = document.querySelector('.output-container input');
        
        if (value !== '') {
            
            output.value = convertUnit(label, value).toFixed(5);
        } else output.value = '';
    });
}

inputListener();
buttonListener();
