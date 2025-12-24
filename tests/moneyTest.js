import { formatCurrency } from "../Scripts/money.js";


console.log("test suite:formatCurrency")

console.log("basic numbers converstion");
if(formatCurrency(2095)==='20.95'){
  console.log("Passed")
}else{
  console.log("Failed")
}

console.log("works with zero")
if(formatCurrency(0)==='0.00'){
  console.log("pass")
}else{
  console.log("fail")
}

console.log("works with floating point")
if(formatCurrency(2000.5)==='20.01'){
  console.log("pass")
}else{
  console.log("fail")
}

if(formatCurrency(2000.4)==='20.00'){
  console.log("pass")
}else{
  console.log("fail")
}
