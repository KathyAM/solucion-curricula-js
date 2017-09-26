var printChars = function(text){
	for (var i = 0; i < text.length; ++i){ // i = i + 1
var charFromText = text.charAt(i);
console.log(charFromText.toUpperCase());
	}
}

var countChat = function(text){
	var count = 0;
	while(true){
		var charFromText = text.charAt(count);
		if (charFromText == ''){
			break;
		}
		count = count + 1;
	}
	return count;
}