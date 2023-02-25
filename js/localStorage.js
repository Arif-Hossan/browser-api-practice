const getInputValue = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    // console.log(inputValue);
    inputField.value=``;
    return inputValue;
}

const addProduct = () =>{
    const name = getInputValue('name-field');
    const value = getInputValue('value-field');
    // console.log(name,value);
    // normally set to local storage
    // localStorage.setItem(name,value);
    saveInfoToLocalStorage(name,value);
    //display the product UI
    addToDisplay(name,value);
}

const addToDisplay = (name,value) =>{
    const contentContainer = document.getElementById('content-container');
    const li = document.createElement('li')
    li.innerText=`${name} : ${value}`;
    contentContainer.appendChild(li);
}
// get info object from local storage
const getSavedInfoFromLocalStorage =()=>{
    let savedInfo = localStorage.getItem('info');
    let info = {};
    if(savedInfo){
        info = JSON.parse(savedInfo);
    }
    return info;
}
// save info to local storage
const saveInfoToLocalStorage = (name,value) =>{
    const info = getSavedInfoFromLocalStorage();
    // set the name and value
    info[name]=value;
    const infoStringify = JSON.stringify(info);
    // save info to local storage
    localStorage.setItem("info",infoStringify);
}
// display from local Storage
const displayFromLocalStorage = ()=>{
   const info = getSavedInfoFromLocalStorage();
//    console.log(info);
   for (namePortion in info){
    const value = info[namePortion];
    addToDisplay(namePortion,value);
   }
}
displayFromLocalStorage();