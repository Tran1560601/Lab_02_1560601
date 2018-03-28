var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai73.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
     
    var phantu = 0;
    var tong = 0;
    for(let i = 0; i < arr.length-2; i+=1){
        var dem = 0;
        //var arr = new arr();
        for(let j = i+1; j < arr.length-1; j+=1){
            //arr.push(arr[i]);
            if(arr[i] < arr[j] && arr[j] < arr[j+1]){
                //arr.push(arr[j]);
                //console.log(arr[j]);
                dem++;
            }
            else
                break;
        }
        if(dem > 0){
            tong++;
        }
    }
    var kq = 'So mang con tang dan: ' + tong;
    console.log(kq);

    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   
