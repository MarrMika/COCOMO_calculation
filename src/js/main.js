let arr = [  [3.2, 1.05],  
		     [3.0, 1.12],  
		     [2.8, 1.20]   
		  ];

let Ai,
Bi,
SIZE,
PM,
EAF;

//cocomo2
let typeEstimation;


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
	for (var i = 0; i < values.length; i++) {
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


//cocomo2

function handleTypeEstimation() {
	    typeEstimation = handleRadioBtn("typeEst");

         if (typeEstimation==0) {
             document.getElementById("early_design").style.display = "block";
             document.getElementById("post_architecture").style.display = "none";
        
         } else {
             document.getElementById("post_architecture").style.display = "block";
             document.getElementById("early_design").style.display = "none";
         }
}

function calculateCocomoTwo(){
	var A_prev = 2.94,B = 0.91, A_detail = 2.45;
	 handleTypeEstimation();

	    if(document.getElementById('LOC').value == 0){
			document.getElementById('nullLOC').innerHTML = "Enter the data!";
		}else{
			document.getElementById('nullLOC').innerHTML = " ";
			SIZE = parseFloat(document.getElementById('LOC').value);
			EAF = calcEAFCocomoTwo(0);
			E = calcECocomoTwo() + B;
				if (typeEstimation==0){
					PM = EAF * A_prev * Math.pow(SIZE,E);
				}else {
					PM = EAF * A_detail * Math.pow(SIZE,E);
				}

			document.getElementById('formula').innerHTML = " = " + PM;
		
		}
}

function calcECocomoTwo(){
	var result;
	
		result  = parseFloat(handleRadioBtn('11'));
		result += parseFloat(handleRadioBtn('12'));
		result += parseFloat(handleRadioBtn('13'));
		result += parseFloat(handleRadioBtn('14'));
		result += parseFloat(handleRadioBtn('15'));

		result *= 0.01;
		return result;

}

function calcEAFCocomoTwo(){
	var result;
	if (typeEstimation==0){
		result  = parseFloat(handleRadioBtn('21'));
		result *= parseFloat(handleRadioBtn('22'));
		result *= parseFloat(handleRadioBtn('23'));
		result *= parseFloat(handleRadioBtn('24'));
		result *= parseFloat(handleRadioBtn('25'));
		result *= parseFloat(handleRadioBtn('26'));
		result *= parseFloat(handleRadioBtn('27'));
	}else{

		result  = parseFloat(handleRadioBtn('31'));
		result *= parseFloat(handleRadioBtn('32'));
		result *= parseFloat(handleRadioBtn('33'));
		result *= parseFloat(handleRadioBtn('34'));
		result *= parseFloat(handleRadioBtn('35'));
		result *= parseFloat(handleRadioBtn('36'));

		result  = parseFloat(handleRadioBtn('41'));
		result *= parseFloat(handleRadioBtn('42'));
		result *= parseFloat(handleRadioBtn('43'));
		result *= parseFloat(handleRadioBtn('44'));
		result *= parseFloat(handleRadioBtn('45'));

		result  = parseFloat(handleRadioBtn('51'));
		result *= parseFloat(handleRadioBtn('52'));
		result *= parseFloat(handleRadioBtn('53'));

		result *= parseFloat(handleRadioBtn('61'));
		result *= parseFloat(handleRadioBtn('62'));
		result *= parseFloat(handleRadioBtn('63'));
	}

		return result;
	}
