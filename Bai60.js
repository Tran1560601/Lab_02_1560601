var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai60.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
        
    var k = 0;
    for(let i = 0; i < arr.length - 3; i+=1){
        var a = parseInt(arr[i]) + parseInt(arr[i+1]);
        var b = parseInt(arr[i+2]) + parseInt(arr[i+3]);

        if(a == b){
            var kq = "Bo 4 so la:  " + arr[i] + " + " + arr[i+1] + " = " + arr[i+2] + " + " + arr[i+3];
            k = 1;
        }
    }
    if(k == 0)
        var kq = "Khong co bo 4 lien tiep";
    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

