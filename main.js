//Question 1:
function sum(x, y) {
  return x + y;
};

//Question 2:
function isEqual(x, y) {
  if (x === y) {
    return true;
  }
  else {
    return false;
  }
};

//Question 3:
function discountPercentage(original, percent) {
  var totalDiscount = original * (percent/100);
  if (totalDiscount > 100 || totalDiscount < 0) {
    alert("Warning! That isn't an acurate discount amount.");
  }
  else {
    return totalDiscount +"%";
  };
};

/*Define a function called stringCapitalize that takes a string as an argument
and returns the same string with the first letter of each word capitalized.
Assume that each individual work is separated by only one space.*/

//call method on string to convert to array, then do a for loop

function stringCapitalize(str) {
  var array = str.split(" ")
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array.join(" ");
}
console.log(stringCapitalize("hello world!"));

};
stringCapitalize("hello world");


//Question 5:
function evenNumber() {
  var randomInteger = Math.floor(Math.random() * 100);
  for (var i = 0; i <= randomInteger; i++) {
    if (i % 2 === 0) {
      console.log(i);
    };
  };
};

evenNumber();

//Question 6:
function isDivisible(x, y) {
  if (x % y === 0) {
    return true;
  };
  else {
    return false;
  };
};

/*Bonus: Write a function called oddNumbers that takes a random integer, from 0 to 100.
If the number is greater than 40 then output all the odd integers from 40 to the random number.
If the number is less than 40, output all the odd integers from 0 to 40.*/
function oddNumbers() {
  var randomInteger = Math.floor(Math.random() * 100);

  if (randomInteger > 40)  {
    for (var i = 0; i <= randomInteger; i++) {
      if (i % 2 != 0) {
      console.log(i);
      };
    };
  }

  if (randomInteger < 40) {
    for (var i = 0; i >= randomInteger; i++) {
      if (i % 2 != 0) {
        console.log(i);
      };
    };
  };
};
