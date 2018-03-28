var arr = [];
var x = 2;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai52.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
        
    console.log("------Chen " + x + " vao vi tri dau tien------");
    arr.length++;
    for(var i = arr.length - 1; i >= 0; i-=1){
        arr[i] = arr[i-1];
    }
    arr[0] = x;
    for(let i = 0; i < arr.length; i+=1){
        console.log(arr[i]);
    }

    fs.writeFile(des_filename, arr, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   


