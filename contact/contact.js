// get value using id
const getText = id =>{
    const element = document.getElementById(id);
    const text = element.value;
    return text;
}
// get value from input field and set it to local storage
const setValueToLocalStorage =(btnId,inputId,key)=>{
    document.getElementById(btnId).addEventListener('click',function(){
        const value = getText(inputId);
        // set to the local Storage
        localStorage.setItem(key,value);
    });
}
//getting the value from input field and set the value to local Storage
setValueToLocalStorage('send-name','name-field','name');
setValueToLocalStorage('send-email','email-field','email');
setValueToLocalStorage('send-message','message-field','message');

// get value from local storage
const getValueFromLocalStorage =(key)=>{
    return localStorage.getItem(key);
    // console.log(name);
}
// set value from local storage
const displayValueFromLocalStorage = (key,id) =>{
    const fieldValue = getValueFromLocalStorage(key);

    const element = document.getElementById(id);
    element.value = fieldValue;
}
displayValueFromLocalStorage('name','name-field');
displayValueFromLocalStorage('email','email-field');
displayValueFromLocalStorage('message','message-field');

// delete the value from local Storage
const deleteItemToLocalStorage = (btnId,key,inputField) =>{
    document.getElementById(btnId).addEventListener('click',function(){
        localStorage.removeItem(key);
        displayValueFromLocalStorage(key,inputField);
    });
}
// delete item for localStorage
deleteItemToLocalStorage('delete-name','name','name-field');
deleteItemToLocalStorage('delete-email','email','email-field');
deleteItemToLocalStorage('delete-message','message','message-field');

// reset button
const reset = () =>{
    localStorage.clear();
    displayValueFromLocalStorage('name','name-field');
    displayValueFromLocalStorage('email','email-field');
    displayValueFromLocalStorage('message','message-field');
}