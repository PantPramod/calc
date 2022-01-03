const inputkg = document.getElementById('inputkg');
inputkg.focus();
const inputgm = document.getElementById('inputgm');
const btnconvert = document.getElementById('btn-convert');
const result = document.getElementById('result');
const container = document.getElementById('container');
const container2 = document.getElementById('container2');
const rupeesgiven = document.getElementById('rupees');
const btnchange = document.getElementById('btn-change');
const result2 = document.getElementById('result2');

container2.style.display = "none";

let pese;

btnconvert.onclick = function () {

    let point;

    if (parseInt(inputgm.value) < 10) {

        point = inputgm.value / 10;
    } else if (inputgm.value < 100) {
        point = inputgm.value / 100
    }
    else if (inputgm.value < 1000) {
        point = inputgm.value / 1000
    }

    console.log(typeof (point), typeof parseInt(inputkg.value))

    let data = parseInt(inputkg.value) + point;

    console.log(data);
    pese = data * 3;
    result.textContent = "₹" + (data * 3).toFixed(2);

}

function showkgtorupee() {
    inputkg.focus();
    container.style.display = "flex";
    container2.style.display = "none";
    result.style.display = "block"
    btnconvert.style.display = "block";

}


function showbackrupees() {
    container.style.display = "none";
    btnconvert.style.display = "none";
    container2.style.display = "flex";
    result.style.display = "none"
    rupeesgiven.focus();



}

btnchange.onclick = function () {
    console.log(parseInt(pese));
    console.log(parseInt(rupeesgiven.value));
    console.log(parseFloat(rupeesgiven.value).toFixed(2) - parseInt(pese))
    result2.textContent = parseFloat(rupeesgiven.value).toFixed(2) - parseInt(pese)

}