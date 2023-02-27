// get value using id
const getText = id =>{
    const element = document.getElementById(id);
    const text = element.value;
    element.value=``;
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

// send btn
const send =()=>{
    const name = getText('name-field');
    const email = getText('email-field');
    const message = getText('message-field');
    console.log(name,email, message);
    const data = {name,email,message};
    setToLocalStorage('contact',data)
}
// get value local storage as a JSON object and convert it to object
const getValuesFromLocalStorage = ()=>{
   const jsonContact = localStorage.getItem('contact');
   let contact = {};
   if(jsonContact){
    contact=JSON.parse(jsonContact);
   }
   return contact;
}
//set value to local Storage as a object
const setToLocalStorage = (key,value)=>{
    const contactObj =getValuesFromLocalStorage();
    contactObj [key]=value;
    const contactStringify=JSON.stringify(contactObj);
    localStorage.setItem('contact',contactStringify);
}

