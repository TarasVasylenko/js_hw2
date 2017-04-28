var x = prompt('Введите первое число','');
var y = prompt('Введите второе число','');
for (var i= +x; i <= +y; i++){
	for(var j= +x; j <= i; j++){
		if (i%j == 0) break;
	}
	console.log(i);  
}