var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai42.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    console.log(arr.length);
       
    console.log("------Sap xep Mang Theo Thu Tu Giam Dan------");
    for(let i = 0; i < arr.length; i+=1){
        for(let j = i+1; j < arr.length; j+=1){
            //console.log("i: " + i + "j: " + j);
            if(arr[i] <= arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for(let i=0; i< arr.length; i++)
    {
        console.log(arr[i]);
    }

    fs.writeFile(des_filename, arr, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   