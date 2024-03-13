function firstNonRepeatedChar(input) {
//   // Write your code here
  
let frequency = {};

for(let i = 0; i < input.length; i++) {
    let element = input[i];
    if(frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }

}
for(let key in frequency) {
	if(frequency[key] == 1) {
		var final = key;
		
		break;
	}

	
}
return final;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));

