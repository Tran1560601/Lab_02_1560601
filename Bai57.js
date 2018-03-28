var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai57.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
		
	var mang = [];
	var tong = 0;
	var dem = 0;
	var dem_doan = 0;
	for(let i = 0; i < arr.length - 1; i+=1){
		if(arr[i] > arr[i+1]){
			tong += parseInt(arr[i]);
			dem ++;
		}
		else{
			if(dem > 0){
				tong += parseInt(arr[i]);
				dem_doan++;
				var kq = "Tong doan thu "+ dem_doan + " la: " + tong;
				console.log(kq);
				mang.push(kq);
			}
			dem=0;
			tong=0;	
		}
	}


    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

