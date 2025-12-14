let countPL = document.getElementById("countPL");

console.log(countPL);

let count = 0;


function increment() {
    count = count + 1;
    countPL.innerText = count;
    console.log(count);
}

function save() {
    console.log("Passengers entered " + count);
}