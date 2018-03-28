var arr = [];

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai26.out';


fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var dem_am = 0;
    var dem_duong = 0;
    console.log("------Dem Cac Phan Tu Am Duong Trong Mang------");
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] < 0)
            dem_am ++;
        else
            dem_duong++;
    }
    var kq = "Co " + dem_am + " phan tu am va " + dem_duong + " phan tu duong trong mang";
    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   
