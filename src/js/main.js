let arr = [  [3.2, 1.05],  
		     [3.0, 1.12],  
		     [2.8, 1.20]   
		  ];

let Ai,
Bi,
SIZE,
PM,
EAF;




//cocomo1
let typeEstimation;


function calculate(){
	    if(document.getElementById('LOC').value == 0){
			document.getElementById('nullLOC').innerHTML = "Enter the data!";
		}else{
			document.getElementById('nullLOC').innerHTML = " ";
			SIZE = parseFloat(document.getElementById('LOC').value);
			handleProjectType(arr);
			EAF = calcEAF();
			PM = EAF * Ai * Math.pow(SIZE,Bi);
			document.getElementById('formula').innerHTML = " = " + PM;
		}
}


function handleProjectType(arr){
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



//functional points
let arrayA_B = [  [2.4, 1.05],  
		          [3.0, 1.12],  
		          [3.6, 1.20]   
		       ];
let CAF,N,V,AFP,UFP=1/*no*/,LOC,T,P;		  


function calculateFunctionalPoints(){
	LOC = parseFloat(document.getElementById('LOC').value);
	hanleEviromentractors();
	getCAF();
	getAFP();
	getV();
	getP()
	handleProjectType(arrayA_B);
	getT();
	//parse tables
	UFP = sumaOfFuncPoints();
    
   // document.getElementById('formula1').innerHTML = " = " + N;
	document.getElementById('formula2').innerHTML = " = " + UFP;
	document.getElementById('formula3').innerHTML = " = " + N;
	document.getElementById('formula4').innerHTML = " = " + CAF;
	document.getElementById('formula5').innerHTML = " = " + AFP;
	document.getElementById('formula6').innerHTML = " = " + V;
	document.getElementById('formula7').innerHTML = " = " + T;


}

function getP(){
	P = V/1000;

}

function getT(){
	T = Ai*Math.pow(P,Bi);

}

function getV(){
	V = AFP*LOC;
}

function getAFP(){
	AFP = UFP * CAF;
}

function getCAF(){
	CAF = 0.65+(0.1+N);
}

function hanleEviromentractors(){
	var result = 0;
	    result  = parseFloat(handleRadioBtn('11'));
		result += parseFloat(handleRadioBtn('12'));
		result += parseFloat(handleRadioBtn('13'));
		result += parseFloat(handleRadioBtn('14'));
		result += parseFloat(handleRadioBtn('15'));
		result += parseFloat(handleRadioBtn('16'));
		result += parseFloat(handleRadioBtn('17'));
		result += parseFloat(handleRadioBtn('18'));
		result += parseFloat(handleRadioBtn('19'));
		result += parseFloat(handleRadioBtn('20'));
		result += parseFloat(handleRadioBtn('21'));
		result += parseFloat(handleRadioBtn('22'));
		result += parseFloat(handleRadioBtn('23'));
		result += parseFloat(handleRadioBtn('24'));

	N = result;
}  
 
 function sumaOfFuncPoints(){
	var result;
		result  = parseFloat(handleRadioBtn('111'));
		

		result += parseFloat(handleRadioBtn('211'));
	
		result += parseFloat(handleRadioBtn('311'));
		
		result += parseFloat(handleRadioBtn('411'));
	

		result += parseFloat(handleRadioBtn('511'));
	


		return result;
	

 }
