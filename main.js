function optionalPow(a, b){
	var id = event.target.id;
	
	if(id === "confirm"){
		document.getElementById('optionalPowerResult').innerHTML = Math.pow(a, b);
	}
	if(id === "cancel") {
		document.getElementById('optionalPowerResult').innerHTML = Math.pow(b, a);
	}
}

function fixAge(ageArray) {
	age18To60 = "";
	
	for(let i = 0; i < ageArray.length; i++){
		if(ageArray[i] >= 18 && ageArray[i] <= 60){
			age18To60 += ageArray[i];
			age18To60 += ",";
		}
	}
	if(age18To60.length > 0){
		age18To60 = age18To60.substring(0, age18To60.length-2);
		alert(age18To60);
	}
	else{
		alert("NA");
	}
}
