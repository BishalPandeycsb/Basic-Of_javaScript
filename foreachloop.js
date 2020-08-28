const items =[
    {name:'bike',price:100000},
    {name:'cycle',price:3000},
    {name:'book' ,price:1000},
    {name:'album' ,price:300},
    {name:'gaming console' ,price:400},
    {name:'Tv' ,price:10},
    {name:'Laptop' ,price:10000}
]
 
console.log("for all element in array");
items.forEach((abc)=>{
    console.log(abc)

})

console.log("to show only name from data of array");
items.forEach((abc)=>{
    console.log(abc.name);
})

console.log("to show only name from data of array");
items.forEach((abc)=>{
    console.log(abc.price);
})


