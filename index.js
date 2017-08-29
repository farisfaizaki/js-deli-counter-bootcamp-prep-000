var katzDeliLine = [];

function takeANumber(line,name){
  line.push(name);
  var number = line.length;
  var string = `Welcome, ${name}, You are number ${number} in line`;
  return string;
}
