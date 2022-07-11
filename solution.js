// 1
let determiner = 90;
let x = determiner < 0 ? "Less than 0" : "Greater or equal to 0";
console.log(x);

// 2
let updater = determiner >= 0 ? "Greater or equal to 0" : "Less than 0";
if (updater == "Greater or equal to 0") {
  let message = "Positive Integer";
  console.log(message);
}
console.log(updater);
// If we tried to log the variable 'message' outside of the if statement, it would return as undefined, because of the scope in which it was declares (withing a block, inside the if statement). The variable declared within that scope can only be accessed there, not outside.

// 3
// They are both conditional operators, but the ternary operator is best used for more simple declarations, usually in one line of code. An if statement is best used for multiple conditions scenarios and written in multiple lines of code (If statement can be also a simple one line code).
