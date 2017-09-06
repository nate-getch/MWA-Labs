'use strict';

class BMICalculator{
	constructor( height, weight){
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
	
	// calculate using meter and kg
	calculateByMetric() {
		this.height = this.height/100; // convert cm to meter
        const result = (this.weight) / Math.pow(this.height, 2);
        return Math.round(result* 100) / 100;
    }
	
	// calculate using feet and ibs
    calculateByEnglish() {
        const result = ((this.weight) / Math.pow((this.height * 12), 2)) * 703.0704;
        return Math.round(result* 100) / 100;
    }
    getSatus(value) {
        if (value < 18.5) {
            return "Under weight";
        }
        else if (value >= 18.5 && value < 24.9) {
            return "Normal / Healthy";
        }
        else if (value = 25 && value < 29.9) {
            return "Over weight";
        } else {
            return "Obese";
        }
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
	
	let calcObj = new BMICalculator(height,weight);
	if(calcObj.validate()){
		let res;
		if(unit == "metric"){
			res = calcObj.calculateByMetric();
		}
		else{
			res = calcObj.calculateByEnglish();
		}
		
		output.innerHTML = `Your BMI: ${res} & Status: ${calcObj.getSatus(res)} `;
		output.style.color = '#000';
	}
	else{
		output.innerHTML = `Error: Please insert valid Number for Weight and Height`;
		output.style.color = 'red';
	}
};
document.getElementById("calculate").onclick = calc;

