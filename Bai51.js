var arr = [];
var x = 6;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai51.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    console.log("------Xoa cac phan tu co gia tri gan " + x + " nhat------");
    var min = Math.abs(x - arr[0]);
    var vitri = 0;
    for(var i = 1; i < arr.length; i+=1){
        var min_new = Math.abs(x - arr[i]);
        if(min_new < min){
            min = min_new;
            vitri = i;
        }
    }

    for(let i = vitri; i < arr.length; i++)
    {
        arr[i] = arr[i+1];
    }
    arr.length--;		
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
