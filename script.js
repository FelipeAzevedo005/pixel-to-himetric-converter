function pixelsToHimetric(pixels) {
    
    return pixels * 26.45833;
}

const himetricInput = document.querySelector("input[name=himetric");
const pixelInput = document.querySelector("input[name=pixel]");

pixelInput.addEventListener("change", event => {
    const pixels = pixelInput.value;
    himetricInput.value = pixelsToHimetric(pixels);
});
