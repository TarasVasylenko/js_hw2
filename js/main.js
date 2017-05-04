function number(){
var x = prompt('Введите первое число');
var y = prompt('Введите второе число');
as:
for (i= +x; i <= +y; i++){
	for(j= +2; j < i; j++){
		if (i % j == 0) continue as;
	}
	console.log(i);  
}
}
number();
