var arr = [];
var x = 0;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai69.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
      
	console.log("------Chen  phan tu co gia tri " + x + " vao mang tang dan------");
	for(i = arr.length - 1; i >= 0; i--)
	{
		if(arr[i] < x)
		{
			arr.length++;
			for(j = arr.length - 1; j > i; j--)
			{
				arr[j] = arr[j-1];
			}
			arr[j+1] = x; 
			break;
		}
	}

    
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
