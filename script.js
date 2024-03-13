function firstNonRepeatedChar(input) {
  // Write your code here
  
let frequency = {};

for(let i = 0; i < input.length; i++) {
    let element = input[i];
    if(frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }

}
for(let i = 0; i < input.length; i++) {
		if(frequency[input[i]] === 1) {
		  return input[i];
		}
	  }
	
	  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));



