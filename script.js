const generateArray = function(amount){
    let returnArray = [];
    /*
    let amountConverted = parseInt(amount);
    amount = amountConverted;
    */

    amount = parseInt(amount);
    //console.log(amount);
    //console.log(typeof amount);


    //Number.isNan(amount) !== true
    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
            //console.log(returnArray);
        }
    } else {
        returnArray.push("error");
    }

    
    //console.log(returnArray);
    return returnArray;
}

function loadEvent() {
    console.log("the page has loaded");
    
    /* console.log(generateArray("kiskutya"));
    console.log(generateArray("1 kiskutya"));
    console.log(generateArray(100));
    console.log(generateArray("100"));
    console.log(generateArray([100]));
    */
   
   const root = document.getElementById("root");
   const list = generateArray(100);
   const num = list.length;
   var digits = (num, count = 0) => {
       if (num) {
           return digits(Math.floor(num / 10), ++count);
        };
        return count;
    }
    var nulla = '0'
    
   console.log(digits(num));
   console.log(list);
   
   
   if (list[0]  !== "error") {
       for (const item of list) {
           root.insertAdjacentHTML("beforeend", `<div>${nulla.repeat(digits(num))+item}</div>`);
           // root.insertAdjacentHTML("beforeend", ('0' + item).slice(-digit)); mögé rakja nem bele
        }
    }
    
};







window.addEventListener("load", loadEvent);

