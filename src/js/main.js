let arr =[[3.2, 1.05],  //00,,01
		  [3.0, 1.12],  //10,,11
		  [2.8, 1.20]   //20,,21
		 ];

let Ai,Bi=0,
SIZE = 0,
PM,
EAF;


//PM = EAF*Ai*Math.pow((SIZE),Bi);




function calculate(){
	    if(document.getElementById('LOC').value == 0){
			document.getElementById('nullLOC').innerHTML = "Enter the data!";
		}else{
			document.getElementById('nullLOC').innerHTML = " ";
			SIZE = parseFloat(document.getElementById('LOC').value);
			handleProjectType();
			EAF = calcEAF();
			PM = EAF * Ai * Math.pow(SIZE,Bi);
			document.getElementById('formula').innerHTML = " = " + PM;
		}
}


function handleProjectType(){
	var selectedAns;
	var values = document.getElementsByName('type');
	for (var i =0; i < values.length; i++) {
		if ((values[i].checked)) {
			selectedAns = parseInt(values[i].value);
		}
	}


	for(var i = 0; i < 3; i++){
		if(i == selectedAns){
			Ai = arr[i][0];
			Bi = arr[i][1];
		}
	}

}




function calcEAF(){
	var result;
	result  = parseFloat(handleRadioBtn('11'));
	result *= parseFloat(handleRadioBtn('12'));
	result *= parseFloat(handleRadioBtn('13'));

	result *= parseFloat(handleRadioBtn('21'));
	result *= parseFloat(handleRadioBtn('22'));
	result *= parseFloat(handleRadioBtn('23'));
	result *= parseFloat(handleRadioBtn('24'));

	result *= parseFloat(handleRadioBtn('31'));
	result *= parseFloat(handleRadioBtn('32'));
	result *= parseFloat(handleRadioBtn('33'));
	result *= parseFloat(handleRadioBtn('34'));
	result *= parseFloat(handleRadioBtn('35'));

	result *= parseFloat(handleRadioBtn('41'));
	result *= parseFloat(handleRadioBtn('42'));
	result *= parseFloat(handleRadioBtn('43'));

	result *= parseFloat(handleRadioBtn('51'));
	result *= parseFloat(handleRadioBtn('52'));
	result *= parseFloat(handleRadioBtn('53'));
	result *= parseFloat(handleRadioBtn('54'));
	return result;
}

function handleRadioBtn(name){
   
   var selectedAns;
   var values = document.getElementsByName(name);
    for (var i = 0; i < values.length; i++) {
        if (values[i].checked) {
        	selectedAns = values[i].value;
        }
    }
    return selectedAns;
}

