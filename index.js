
function clearDisplay() {
  var input = document.getElementById("display");
  // console.log('the value of input:', input);

  input.value = "";

}
function calcValue() {
  var str = document.getElementById("display").value;
  var operators = ["+", "-", "*", "/"]

  for (i = 0; i < str.length; i++) {
    // console.log(str[i]);
  }
  var left;
  var right;
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (operators.includes(char)) {
  
    } else {
      left = left + char;
    }
  }
  left = undefined
  var right
  typeof left
  // console.log('value of typeof left:', typeof left);
  String(undefined)
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (operators.includes(char)) {

    } else {
      if (left !== "undefined") {
        left += char
      };
    }
  }
  left = undefined
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (operators.includes(char)) {

    } else {
      if (left === undefined) {
        left += char
      };
    }
  }
  left = undefined
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (operators.includes(char)) {

    } else {
      if (left === undefined) {
        left = char
      } else {
        left += char
      }
    }
  }
  left = undefined
  left + "1"
  left = "1"
  left += 1
  right = undefined
  var op
  op = operators;
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (operators.includes(char)) {
      op = char;
    } else {
      if (left === undefined) {
        left = char
      } else {
        left += char
      }
    }
  }
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (op !== undefined && left !== undefined) {
      if (right === undefined) {
        right = char;
      } else {
        right += char;
      }
    } else {
      if (operators.includes(char)) {
        op = char;
      } else {
        if (left === undefined) {
          left = char
        } else {
          left += char
        }
      }
    }
  }
  left = undefined
  right = undefined
  op = undefined
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (op !== undefined && left !== undefined) {
      if (right === undefined) {
        right = char;
      } else {
        right += char;
      }
    } else {
      if (operators.includes(char)) {
        op = char;
      } else {
        if (left === undefined) {
          left = char
        } else {
          left += char
        }
      }
    }
  }
  left = Number(left)
  right = Number(right)
  if (op === '+') {
    console.log(left + right);
    document.getElementById("display").value = left+right;
  }
  if (op === '-') {
    document.getElementById("display").value = left-right;
  }
  if (op === '*') {
    document.getElementById("display").value = left*right;
  }
  if (op === '/') {
    document.getElementById("display").value = left/right;
  }
var firstTime = true;
console.log('value of firstTime:',firstTime);
if(op === '+' || op === '-' || op === '*' || op === '/'){
if(firstTime){

}
}

}

function print(val) {
  document.getElementById("display").value = val;
}


function solve(ref) {
  var initialValue = document.getElementById("display").value;
  console.log('initialValue is:', initialValue);
  var sum = document.getElementById("display");
  sum.value = initialValue + ref;
  // console.log(sum);

}









