var arr = [];
var x = 8;

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai24.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var mang = [];
            
        
    console.log("------Phan Tu Tu 1 Den " + x + "------");
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] > 0 &&  arr[i] < x){
            console.log(arr[i]);
            mang.push(arr[i]);
        }
    }

    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

