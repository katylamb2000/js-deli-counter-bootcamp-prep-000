var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push (name)
  return ("Welcome, " + name + ". You are number " + (katzDeli.length) + " in line")
}

var deliLine =[]
function nowServing (katzDeli, deliLine) {
  
 if (katzDeli.length > 1 ){
  katzDeli.shift ();
 return ("Currently serving " + katzDeli[0] + ".")


 }
 else {
   return ("There is nobody waiting to be served!")
}
}

function currentLine (line) {
  
  if ( line.length === 0) {
  return ("The line is currently empty.")
  }
  
  var i = 0
  i++;
 
   do {
    line.push ("The line is currently: " + [i] +". " + line[i] + ",") 
   }
   while (i < line.length +1 )
   return line
}