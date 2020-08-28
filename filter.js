const items = [ 
    {name:'bike' ,price:100},
    {name:'book' ,price:1000},
    {name:'album' ,price:300},
    {name:'gaming console' ,price:400},
    {name:'Tv' ,price:10},
    {name:'Laptop' ,price:10000}

]


const q = items.filter((abc)=>{
    return abc.price<=1000;
})

console.log(q);