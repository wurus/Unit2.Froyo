var clg = console.log;
let flavorCounts = (inputArray) => {
  let ob1 = {};
  for (i = 0; i < inputArray.length; i++) {
    let flavor = inputArray[i];
    if (ob1[flavor]) {
      ob1[flavor]++ ;
    } else {
      ob1[flavor] = 1;
    }
  }

  for (let flavor in ob1) {
    clg(`${flavor}: ${ob1[flavor]}`);
  }
};

var inputText = prompt('Flavors?')
var flvrArray = inputText.split(',');

clg(flavorCounts(flvrArray));

