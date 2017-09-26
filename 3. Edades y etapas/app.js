var ageClass = function(age){
	age = Number(age);
	if(age % 1 !== 0 || age == NaN){
		alert ('Ingresa tu edad con un número entero');
		return '';

	}
	if (age >= 1 && age <=3){
		return 'Toodler';
	}else if (age <= 5){
		return 'Preschool';
	}else if (age <= 12){
		return 'Gradeshooler';
	}else if (age <= 18){
		return 'Teen';
	}else if (age <= 21){
		return 'Young adult';
	}else{
		return 'Adult';
	}
}

alert(ageClass(parseInt(prompt('Ingresa tu Edad'))));