// get value from countDiv
const getValue = () =>{
  const countDiv =document.getElementById('countValue');
  const countValue = parseInt(countDiv.innerText);
  return countValue;
}
const setDisplayValue = (id,value) =>{
  const displayDiv =document.getElementById(id);
  displayDiv.innerText=`${value}`;
}
// displayValue();
// increment the value
const increment = () =>{
   let currentValue = getValue();
   currentValue= currentValue + 1;
   console.log(currentValue);
   setDisplayValue('countValue',currentValue);
}
// decrement the value
const decrement = () =>{
    let currentValue = getValue();
    if(currentValue >0){
        currentValue =currentValue-1;
    }
    else{
        alert("Negative number is not allowed")
    }
    console.log(currentValue);
    setDisplayValue('countValue',currentValue);
}