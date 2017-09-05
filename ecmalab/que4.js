/*
Calculation formula reference 
http://extoxnet.orst.edu/faqs/dietcancer/web2/twohowto.html
https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi-m.htm
*/

'use strict';

class BMICalculator{
	constructor(unit, height, weight){
		this.unit = unit;
		this.height = height;
		this.weight = weight;
	}
	validate(){
		//alert(this.unit);
		if( !this.height || !this.height || isNaN(this.height) || isNaN(this.weight) ){
			return false;
		}else{
			return true;
		}
	}
	// calculate using cm and lbs
	calcByStandard(){
		//step 1- Multiply the weight in pounds by 0.45 (the metric conversion factor)
		this.weight = this.weight * 0.45;
		//step 2- Multiply the height in inches by 0.025 (the metric conversion factor)
		this.height = this.height * 0.025;
		// step 3 Square the answer from step 2
		this.height = this.height * this.height;
		// step 4 - Divide the answer from step 1 by the answer from step 3
		let ans = this.weight / this.height;
		return Math.round(ans * 100) / 100;
	}
	
	calcByMetric(){
		
	}
}

const calc = function  (){
	let output = document.getElementById("output");
	let height = document.getElementsByName("height")[0].value;
	let weight = document.getElementsByName("weight")[0].value;
	let unit_check = document.getElementsByName("unit");
	let unit = "metric";
	for (let i = 0; i < unit_check.length; i++) {
        if (unit_check[i].checked) {
            unit = unit_check[i].value;
        }
    }
	
	//console.log(height);
	//console.log(weight);
	let calcObj = new BMICalculator(unit,height,weight);
	if(calcObj.validate()){
		output.innerHTML = calcObj.calcByStandard();
		output.style.color = '#000';
	}
	else{
		output.innerHTML = "Error: Please fill the Form properly";
		output.style.color = 'red';
	}
};
document.getElementById("calculate").onclick = calc;

