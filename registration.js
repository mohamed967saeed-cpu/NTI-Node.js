import cus_data from "./customer_data.js"

console.log("JavaScript Loaded");
console.log(cus_data)

const form=document.getElementById('Fo')

const name=document.getElementById('Name')
const email=document.getElementById('Email')

const tel=document.getElementById('tel')
const DrA=document.getElementById('DR.A')
const DrM=document.getElementById('DR.M')
const Treatment=document.getElementById('Sel')
const mes=document.getElementById('mess')

function isFormValid(){
    return form.checkValidity();
}

function handleRegistrationSubmit(event){
    event.preventDefault();
    if(!isFormValid()){
        mes.textContent="Please complete every field with valid data";
        form.reportValidity();
        return

    }
    else{console.log(name.value)
        console.log(email.value)
        console.log(tel.value)
        console.log(DrA.value)
        console.log(DrM.value)
        console.log(Treatment.value)
            
    }
    


}

form.addEventListener('submit', handleRegistrationSubmit)


console.log(name.value)
console.log(email.value)
console.log(tel.value)
console.log(DrA.value)
console.log(DrM.value)

import cus_data from "./customer_data.js"
console.log("JavaScript Loaded");
console.log(cus_data)

const form=document.getElementById('Fo')

const name=document.getElementById('Name')
const email=document.getElementById('Email')

const tel=document.getElementById('tel')
const DrA=document.getElementById('DR.A')
const DrM=document.getElementById('DR.M')
const Treatment=document.getElementById('Sel')
const mes=document.getElementById('mess')

function isFormValid(){
    return form.checkValidity();
}

function handleRegistrationSubmit(event){
    event.preventDefault();
    if(!isFormValid()){
        mes.textContent="Please complete every field with valid data";
        form.reportValidity();
        return

    }
    else{console.log(name.value)
        console.log(email.value)
        console.log(tel.value)
        console.log(DrA.value)
        console.log(DrM.value)
        console.log(Treatment.value)
            
    }
    


}

form.addEventListener('submit', handleRegistrationSubmit)


console.log(name.value)
console.log(email.value)
console.log(tel.value)
console.log(DrA.value)
console.log(DrM.value)
console.log(Treatment.value)