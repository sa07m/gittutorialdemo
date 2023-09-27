// console.log('Hello');
// function signup(event)
//         {
//             event.preventDefault();
//             console.log(event.target.name.value);
//             console.log(event.target.email.value);
//             console.log(event.target.phone.value);
//             console.log('Hello');

//         }

// async await

// console.log("person 1 shows ticket");
// console.log("person 2 shows ticket");

// const preMovie = async ()=>{
    

//     const wifebringingticket = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("ticket");
//         },3000);
//     });

//     const getPopcorn = new Promise((resolve,reject)=>{
//         resolve("popcorn");
//     });

//     const getButter = new Promise((resolve,reject)=>{
//         resolve("butter");
//     });

//     const getColdDrinks =  new Promise((resolve,reject)=>{
//         resolve("cold drinks");
//     });

//     let ticket = await wifebringingticket;
//     console.log("lets go in");
//     console.log("i want popcorn");

//     let popcorn = await getPopcorn;
//     console.log("lets go in i got some popcorn");
//     console.log("i want butter on my popcorn");

//     let butter = await getButter;
//     console.log("lets go in i have popcorn with butter");
//     console.log("i want cold drinks");

//     let coldDrinks = await getColdDrinks;

//     return ticket;
// }

// preMovie().then((m)=>console.log(m));

// console.log("person 4 shows tickets");
// console.log("person 5 shows tickets");

//promise.all

console.log("person 1 shows ticket");
console.log("person 2 shows ticket");

const preMovie = async ()=>{
    

    const wifebringingticket = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("ticket");
        },3000);
    });


    const getPopcorn = new Promise((resolve,reject)=>{
        resolve("popcorn");
    });

    const getCandy = new Promise((resolve,reject)=>{
        resolve("candy");
    });

    const getColdDrinks =  new Promise((resolve,reject)=>{
        resolve("cold drinks");
    });
    let ticket = await wifebringingticket; 
    // try{
    //     ticket = await wifebringingticket;
 
    
    let [popcorn,candy,coldDrinks] = await Promise.all([getPopcorn,getCandy,getColdDrinks])

    console.log(`${popcorn}, ${candy}, ${coldDrinks}`)

    return ticket;
}

preMovie().then((m)=>console.log(`person 3: shows ${m}`));

console.log("person 4 shows tickets");
console.log("person 5 shows tickets");