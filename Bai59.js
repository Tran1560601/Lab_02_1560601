var arr = [];
var arr1 = [];

const fs = require('fs');
var src_filename = 'data1.txt';
var src_filename1 = 'data.txt';
var des_filename = './Output/Bai59.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");     
    
    fs.readFile(src_filename1, function(err, data1){
        arr1 = data1.toString().split(" ");
        
    })
		
	var k;
	for(let i = 0; i < arr.length; i+=1){
		k = 0;
		for(let j = 0; j < arr1.length; j+=1){
			if(arr[i] == arr1[j]){
				k = 1;
				break;
			}
		}
		if(k == 0){
			var kq = "Mang A khong la con cua Mang B";
			break;
		}
	}
	if(k == 1)
		var kq = "Mang A la con cua Mang B";

	console.log(kq);
	
	fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

 

