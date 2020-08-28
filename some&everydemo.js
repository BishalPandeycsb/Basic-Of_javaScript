const items =[
    {name:'bike',price:100000},
    {name:'cycle',price:3000},
    {name:'book' ,price:1000},
    {name:'album' ,price:300},
    {name:'gaming console' ,price:400},
    {name:'Tv' ,price:10},
    {name:'Laptop' ,price:10000}
]
 

const Inexpensive =items.some((a)=>{
    return a.price<=100;
})

console.log(Inexpensive); //returns true if only one condition is also satisfied

const Demo =items.every((a)=>{
    return a.price>1000000;
})

console.log("value is"+Demo);