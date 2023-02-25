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
//    console.log(currentValue);
   setValueToLocalStorage("count",currentValue);
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
    // console.log(currentValue);
    setValueToLocalStorage("count",currentValue);
    setDisplayValue('countValue',currentValue);
}
// get value from local storage
const getValueFromLocalStorage =()=>{
    let savedValue= localStorage.getItem('count');
    let value = null;
    if (savedValue !==null && !isNaN(savedValue) ){
        value =parseInt(savedValue);
    }
    return value;
}
// set value to local storage
const setValueToLocalStorage = (key,value)=>{
    localStorage.setItem(key,value.toString());
}
// display Value from local storage
const displayValueFromLocalStorage = ()=>{
    const value= getValueFromLocalStorage();
    if(value !==null){
        setDisplayValue('countValue',value);
    }

    // setDisplayValue("countValue",value);
}
displayValueFromLocalStorage();

