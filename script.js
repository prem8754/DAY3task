var person=[
    {
      name:"premkumar",
      age:"22",
      gender:"male",
      occupation:"student"  
    },
    {
        name:"chellamuthu",
        age:"52",
        gender:"male",
        occuption:"farmer"
    },
    {
        name:"kalaiselvi",
        age:"45",
        gender:"female",
        occupation:"house wife"
    }
]


//for loop
console.log('for loop') // this is used to prit loopnames in console and to show in difference 

for(let i=0;i<person.length;i++){
    console.log(person[i])
}


// for in
console.log('for in') // this is used to prit loopnames in console and to show in difference 

for (let key in person){
    console.log(person[key])
}


//  for of 
console.log('for of') // this is used to prit loopnames in console and to show in difference 

for(let key of person){
    console.log(key)
}


// for each 
console.log('for each') // this is used to prit loopnames in console and to show in difference



person.forEach((element, index) =>{
    console.log(element)
}
)









