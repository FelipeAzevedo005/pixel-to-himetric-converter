function pixelsToHimetric(pixels) {
    
    return pixels * 26.4;
}

const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();

    const input = document.querySelector("input");
    const pixels = input.value;

    console.log(pixelsToHimetric(pixels));
});
