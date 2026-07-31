let cus_data=[{Name:"Mohamed Saeed",Email:"mohamed@gmail.com",Phone:"01067480967",DR:"DR.A",Treatment:"Tooth Extraction",number:1,status:"Waiting"},
{Name:"Saeed Ahmed",Email:"saeed@gmail.com",Phone:"01020251105",DR:"DR.M",Treatment:"Root Canal Treatment",number:1,status:"Waiting"},
{Name:"Moumud Ahmed",Email:"muhmod@gmail.com",Phone:"01091411277",DR:"DR.A",Treatment:"Tooth Extraction",number:2,status:"Completed"}]
;


export default cus_data; 
 


//format  to customer and treatment

function formatBooking(cus_data){
    return `${cus_data.Name} -${cus_data.Treatment} - ${cus_data.status}`;
}

function FormatBooking(cus_data){
    return `${cus_data.Name} + ${cus_data.Phone}+${cus_data.Email}`
 }




//filter for customer complet
const statusCompleted=cus_data.filter((customer)=>{
    
        return customer.status==="Completed"
    
    
    
 })

 //filter wating status

const statusWaiting=cus_data.filter((customer)=>{
    return customer.status==="Waiting";

})
console.log(statusCompleted)


///checed for name 

cus_data.map(formatBooking)

cus_data.map(FormatBooking)
export {formatBooking, statusCompleted,statusWaiting    }

