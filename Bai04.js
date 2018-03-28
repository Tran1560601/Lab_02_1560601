function getRandom() {
    // chuyen tu float sang int
    var intvalue = Math.floor( Math.random() * 100 );
    return intvalue;
}

var array = new Array();
var n = 5;
for(var i = 0; i < n; i+=1){
    array.push(getRandom());
}
console.log(array.sort(function(array,b){
    return array - b
    })
);  