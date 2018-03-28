var arr = new arr();

function kiemtra(arr, k){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == k) 
			return 1;
	}
	return 0;
}

var scanf = require('scanf');

console.log('Please amount: ');
var n = scanf('%d');


for(let i = 0;i < n; i++){
	console.log('Please ' + i + ' : ');
	var b = scanf('%d');
	if(kiemtra(arr, b) == 1){
		console.log("Phan tu da co trong mang. Nhap lai: ");
		i--;
	}
	else
		arr[i] = b;
}

