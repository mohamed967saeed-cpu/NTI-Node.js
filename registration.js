// import data from another  file can share data 
import cus_data from "./customer_data.js"

///import format Booking , Status if Complet or Waiting

import { formatBooking ,statusCompleted ,statusWaiting} from "./customer_data.js";



//for try
console.log("JavaScript Loaded");
console.log(cus_data)
//get elment  and  data

const form=document.getElementById('Fo')

const name=document.getElementById('Name')
const email=document.getElementById('Email')

const tel=document.getElementById('tel')
const DrA=document.getElementById('DR.A')
const DrM=document.getElementById('DR.M')
const Treatment=document.getElementById('Sel')
const mes=document.getElementById('mess')
const previw=document.getElementById('pre')
let doctor;
let prview;



//create a new obect
function createNewBooking()
{
    return {
        Name:name.value.trim(),
        Email:email.value.trim().toLowerCase(),
        Phone:tel.value,
        Treatment:Treatment.value,
        DR:doctor,
        


    }
}
const fl=cus_data.filter(function(statu){return cus_data.Phone="01067480967"})

console.log(fl)





//for checked is Valid or not
function isFormValid(){
    return form.checkValidity();
}

//callback


///HAndel
function handleRegistrationSubmit(event){
    event.preventDefault();


    

    //Number of current 

    const currentNumberDrA=cus_data.filter(counter =>
        counter.DR ==="DR.A").length;
        
    
    const currentNumberDrM=cus_data.filter(counter=>
        counter.DR==="DR.M").length

    //check for choose dr
    doctor=""
    if (DrA.checked){
        doctor=DrA.value;
        
    }
    else if(DrM.checked){
        doctor=DrM.value
       

        
    }
    

    if(!isFormValid()){
        mes.textContent="Please complete every field with valid data";
       
        return

    }

    else{console.log(name.value)
        console.log(email.value)
        console.log(tel.value)
        console.log(doctor)
        console.log(Treatment.value)
        //filter for get number of customer



        console.log(currentNumberDrA)
        console.log(currentNumberDrM)

      mes.textContent="Registration is suc";
      const newBooking=createNewBooking();
      

      cus_data.push(newBooking)


      previw.textContent=JSON.stringify(newBooking,null,2);

      console.log(cus_data      )
      

        
    }

    
    


}

console.log(createNewBooking())

form.addEventListener('submit', handleRegistrationSubmit)

