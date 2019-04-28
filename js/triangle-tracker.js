function myTriangleTracker(){
  var length1= parseInt(document.getElementById("number1").value);
  var length2= parseInt(document.getElementById("number2").value);
  var length3= parseInt(document.getElementById("number3").value);
  if (((length1 + length2) > length3) && ((length1 + length3) > length2) &&((length2 + length3) > length1)) {
    if ((length1 === length2 && length1 !== length3) || (length1 === length3 && length1 !== length2) || (length2 === length3 && length2 !== length1)) {
        document.getElementById('display').innerHTML = "This is an Isosceles Triangle";
     }
    else if ((length1 === length2) && (length2 === length3)) {
        document.getElementById('display').innerHTML = "That is an Equilateral Triangle";
     }
    else {
        document.getElementById('display').innerHTML = "That is a Scalene Triangle";
     }
   }
   else {
     document.getElementById('display').innerHTML = "Those values cannot form a triangle";
   }

 }

function myTriangle() {
  var triangle = ["Equilateral", "Isosceles", "Scalene"];
  alert(triangle.join()) ;
}
