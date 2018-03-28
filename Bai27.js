var arr = [];

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai27.out';


fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var dem_chan = 0;
    var dem_le = 0;
    console.log("------Dem Cac Phan Tu Chan Le Trong Mang------");
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 0)
            dem_chan ++;
        else
            dem_le++;
    }
    var kq = "Co " + dem_chan + " phan tu chan va " + dem_le + " phan tu le trong mang";
    
    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

