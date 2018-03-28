
var arr = [];

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai21.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var mang = [];
            
    var chan = -1;
    console.log("------Xuat So Chan Cuoi Cung Trong Mang------");
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 0){
            chan = arr[i];
        }
    }
    console.log(chan);
    mang.push(chan);

    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   
