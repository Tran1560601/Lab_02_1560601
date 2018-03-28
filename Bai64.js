var so = 153;

function SoKySo(x){
    for(let i = 1; ; i+=1){
        var tong = 0;
        var num = x;
        while(num > 0)
        {
            var donvi = num % 10;
            tong += Math.pow(donvi, i);
             // chuyen tu float sang int
            num = Math.floor(num / 10);
        }
        if(tong == x){
            return 1;
        }
        if(tong > x)
            break;
    }
    return 0;
}


var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai64.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    

    if(SoKySo(so) == 1)
        var kq = so + " La So Amstrong ";
    else
        var kq = so + " Khong La So Amstrong ";

    console.log(kq);    

    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

