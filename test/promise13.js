//promise then code

// console.log("person 1 shows ticket");
// console.log("person 2 shows ticket");

// const wifebringingticket = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('ticket');
//   },3000);
  
// });

// const popcorn = wifebringingticket.then((t)=>{
//   console.log("lets go in");
//   console.log("i want popcorn");
//   return new Promise((resolve,reject)=>{
//     resolve(`${t} popcorn`);
//   });
// })

// const butter = popcorn.then((t)=>{
//   console.log("lets go in i got some popcorn");
//   console.log("i want butter on my popcorn");
//   return new Promise((resolve,reject)=>{
//     resolve(`${t} butter`);
//   });
// })

// const getColdDrinks = butter.then((t)=>{
//   console.log("lets go in i have popcorn with butter");
//   console.log("i want cold drinks");
//   return new Promise((resolve,reject)=>{
//     resolve(`${t} cold drinks`);
//   });
// })

// getColdDrinks.then((t)=>{
//   console.log(t);
// })

// console.log("person 4 shows tickets");
// console.log("person 5 shows tickets");


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


//Promise all

console.log("person 1 shows ticket");
console.log("person 2 shows ticket");

const preMovie = async ()=>{
    

    const wifebringingticket = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticket");
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
    
    let [popcorn,candy,coldDrinks] = await Promise.all([getPopcorn,getCandy,getColdDrinks])

    console.log(`${popcorn}, ${candy}, ${coldDrinks}`)

    return ticket;
}

preMovie().then((m)=>console.log(`person 3: shows ${m}`));

console.log("person 4 shows tickets");
console.log("person 5 shows tickets");