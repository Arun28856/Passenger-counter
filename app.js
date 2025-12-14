let countPL = document.getElementById("countPL");

console.log(countPL);

let count = 0;


function increment() {
    count = count + 1;
    countPL.innerText = count;
    console.log(count);
}

let savePL = document.getElementById("savePL");

console.log(savePL);

function save() {
    console.log("Passengers entered " + count);
    let countStr = count + " - ";
    savePL.innerText += countStr;
    countPL.innerText = 0;
    count = 0;
} 