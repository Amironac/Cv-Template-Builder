let textarea_input = document.getElementById('textarea-input');
textarea_input.addEventListener('keyup',writeBiography )

let username;
let previousName ;
let phoneNumber;
let address;
function writeBiography(e) {
    if(trenutni_cv == 'item-1'){
        p_output = document.getElementById('biography-output-1');
        p_output.innerText='';
        p_output.innerText += e.target.value
    }
    else if(trenutni_cv == 'item-2' ){
        p_output = document.getElementById('biography-output-2');
        p_output.innerText='';
        p_output.innerText += e.target.value
    }
    else if(trenutni_cv == 'item-3'){
        p_output = document.getElementById('biography-output-3');
        p_output.innerText='';
        p_output.innerText += e.target.value
    }
    
}

function writeName(e) {

    if(trenutni_cv == 'item-1'){
        username = document.getElementById('name-1');
        username.innerText = '';
        username.innerText += e.target.value;
        previousName = e.target.value;
    }
    else if(trenutni_cv == 'item-2' ){
        username = document.getElementById('name-2');
        username.innerText = '';
        username.innerText += e.target.value;
        previousName = e.target.value;
    }
    else if(trenutni_cv == 'item-3'){
        username = document.getElementById('name-3');
        username.innerText = '';
        username.innerText += e.target.value;
        previousName = e.target.value;
    }
    
  
}

function writeLastName(e){
    if(trenutni_cv == 'item-1'){
        username = document.getElementById('name-1');
    username.innerText = '';
    username.innerText += previousName + ' ' +e.target.value;
    }
    else if(trenutni_cv == 'item-2' ){
        username = document.getElementById('name-2');
    username.innerText = '';
    username.innerText += previousName + ' ' +e.target.value;
    }
    else if(trenutni_cv == 'item-3'){
        username = document.getElementById('name-3');
    username.innerText = '';
    username.innerText += previousName + ' ' +e.target.value;
    }
    
}

function writePhoneNumber(e) {

    if(trenutni_cv == 'item-1'){
        phoneNumber = document.getElementById('phone-number-1');
        phoneNumber.innerText = '';
        phoneNumber.innerText += e.target.value;
        console.log(e.target.value)
    }
    else if(trenutni_cv == 'item-2' ){
        phoneNumber = document.getElementById('phone-number-2');
        phoneNumber.innerText = '';
        phoneNumber.innerText += e.target.value;
        console.log(e.target.value)
    }
    else if(trenutni_cv == 'item-3'){
        phoneNumber = document.getElementById('phone-number-3');
        phoneNumber.innerText = '';
        phoneNumber.innerText += e.target.value;
        console.log(e.target.value)
    }
   
}

function writeAddress(e) {
    

    if(trenutni_cv == 'item-1'){
        address = document.getElementById('address-1');
        address.innerText = '';
        address.innerText += e.target.value;
    }
    else if(trenutni_cv == 'item-2' ){
        address = document.getElementById('address-2');
        address.innerText = '';
        address.innerText += e.target.value;
    }
    else if(trenutni_cv == 'item-3'){
        address = document.getElementById('address-3');
        address.innerText = '';
        address.innerText += e.target.value;
    }
       
}