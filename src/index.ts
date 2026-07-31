////let age :number =20 ;
////
////if (age <50){
////    age+10;
////}
////console.log(age);
////age.toString()
//
//const array: number[]=[1,2,3,4,5];
//
//array.forEach((num)=>
//    {
//    console.log(num.toString())
//    })
//
////tuples
//
//let user: [string,number]=['mohamed Saeed',30];
//
////Enum
//enum size{
//    small="S",
//    medium="M",
//    large="L"
//}
//
//const selectSize:size=size.small;
//console.log(`Selected size ${selectSize}`)
//
////Function 
//function greet(name:string):void{
//    console.log(`Hello, ${name}`);
//}
//
//
/////optional ? 
//
//
//function sum(x:number,y:number ,c?:number):number {
//    if(c===undefined){
//        return x+y
//    }
//    else{
//        return x+y+c;
//    }
//}
//
//const r1:number=sum(5,2,1);
//const r2:number=sum(5,2);
//
//
//
/////Object it's importent tarm 
//
//const employee: {
//    name:string;
//    age:number;
//
//
//
//    retire:(date:Date)=>void;
//
//
//} = {
//    name:"Mohamed",age:20,
//    retire:(date:Date)=>{
//        console.log(`${employee.name} will retire on ${date.toDateString()}`)
//    }
//
//};
//
//employee.retire(new Date("2026-12-30"));
//
//
////type 
//
//type employee= {
//    name:string;
//    age:number;
//
//
//
//    retire:(date:Date)=>void;
//
//
//}
//employee.name="hello";
//
//
////typeof km==='string'?km=pareseFloat(Km):Km;
//
//function KmToMiles(Km:number ): number {
//    if(typeof Km==="string")
//        {
//            Km=parseFloat(Km)
//        }
//        return Km*0.621371;
//
//
//
//};
//function KmTo(Kmm:number ): number {
//    if(typeof Kmm==="string")
//        {
//            Kmm=parseFloat(Kmm)
//        }
//        return Kmm*0.621371;
//
//
//};
//
//
////inter section type
// //
//type Draggble={
//    drag:()=>void
//}
//
//type Resizeble={
//    resize:()=> void;
////}
////
////
////type customer={
////    birthDay :Date;
////
////
////}
////
///**
// * @
// */
//
//type OrderStatus='pending' |'paid' |'cancelled';
//type orderItem={
//    id :number;
//    name: string;
//    price:number;
//    quantity:number;
//};
//
//type Order={
//    readonly id:number;
//    items:orderItem[];
//    status:OrderStatus;
//    customer?:{
//        name:string;
//    };
//};
//
///**
// * @param
// */
//
//function CalOrderTotal(order: Order):number
//{
//    return order.items.reduce(
//        (total ,item)=> total+item.price *item.quantity,0);
//    
//}
//
//function formatorderId(id:number |string):string{
//    return typeof id==="number"?`ORD-${id}`:id.trim().toUpperCase();
//}
//
//const order: Order={
//    id:42,
//    status:"paid",items:[
//        {id:1,name:"Keybord",price:60,quantity:1}
//        ,{id:1,name:"Mouse" ,price:25,quantity:2}
//    ],
//    customer:{name:"Ahmed"}
//
//};
//
//
//console.log(order.id);
//console.log(order.customer?.name.toUpperCase()??"Guest");
//console.log(CalOrderTotal(order));


