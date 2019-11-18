var pounds = document.getElementById('pound-entered').value;
var kilograms = (pounds / 2.205).toFixed(2);
console.log(kilograms);

var calculateResult = document.getElementById('button');
calculateResult.addEventListener("click", function(){
    document.getElementById('converted-kilograms').value = kilograms;
}, false)