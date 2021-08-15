const inputEle = document.getElementById("input-add");

const buttonEle = document.getElementById("frequency-calculator");
buttonEle.onclick = (_) => {
    const inputString = inputEle.value;
    const splitArray = inputString.split(",");
    const inputArray = [];
    splitArray.forEach((el, idx) => {
        inputArray[idx] = +el;
    });
    if (!!inputArray) {    
        const out = frequent(inputArray);
        console.log(out);
    }
};

function frequent(input) {
    const mapObj = {};
    let output = '';
    let frequency = 0;
    for (let number of input) {
        mapObj[number] = (mapObj[number] !== undefined) ? mapObj[number] + 1 : 1;
        if (mapObj[number] > frequency) {
            frequency = mapObj[number];
            output = `${number} ( ${frequency} times )`;
        }
    }
    return output; 
}
