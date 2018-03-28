var arr = [];
var x = 1;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai53.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var max = arr[0];
    var vitri_max = 0;
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] > max){
            max = arr[i];
            vitri_max = i;
        }
    }
    console.log("------Chen " + x + " vao phia sau phan tu lon nhat------");
    arr.length++;
    for(var i = arr.length - 1; i > vitri_max; i-=1){
        arr[i] = arr[i-1];
    }
    arr[vitri_max + 1] = x;
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

