var city =['mumbai','delhi','paris','venice','amsterdam','manchester','london','chicago','new york'];
 
var city1 =[];
var splicedArray=[];
city.forEach((abc)=>
{
    console.log(abc);
})

console.log("city after sorting the orignal array is :");

city1=city.sort();


city1.forEach((b)=>{
    console.log(b);
})


console.log(city.slice(2));

console.log(city.slice(2,5));




city.splice(2,1,'Pune');
console.log(city);

city.splice(2,0,"kathmandu","pokhara","butwal");
console.log(city);


splicedArray =city.reverse();

splicedArray.forEach((d)=>{
    console.log(d);
})

