const items = [ 
    {name:'bike' ,price:100},
    {name:'book' ,price:1000},
    {name:'album' ,price:300},
    {name:'gaming console' ,price:400},
    {name:'Tv' ,price:10},
    {name:'Laptop' ,price:10000}

]

const q = items.map((abc)=>{
    return abc.name;
})

console.log(q);