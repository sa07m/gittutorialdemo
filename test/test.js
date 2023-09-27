
// // // Do not touch this function at all
// // function create3rdPost(callback) {
// //     setTimeout( () => {
// //         console.log('Post Three')
// //         //If callback function is passed call it
// //         if(callback){
// //             callback();
// //         }
// //     }, 3000)
// // }

// // //Please modify this function too to reach the desired output
// // function create4thPost(callback) {
// //     setTimeout( () => {
// //         console.log('Post Four')
// //         callback();
// //     }, 2000);
// // }

// // // Do not touch this function at all
// // function create5thPost() {
// //     setTimeout( () => {
// //         console.log('Post Five')
// //     }, 1000);
// // }

// // //You have to  modify the syntax below to reach the desired output
// // create3rdPost(()=>{
// //     create4thPost(create5thPost)}
// //         )
// // ************************************************************************************
// //CallBack , promises, Async function

// // function buyacar(cb){
// //   setTimeout(()=>{
// //     console.log("buy a car");
// //     cb();
// //   },3000);
  
// // }

// // function planatrip(cb){
// //   setTimeout(()=>{
// //     console.log("lets plan a trip");
// //     cb();
// //   },2000);
// // }

// // function enjoy(){
// //   setTimeout(()=>{
// //     console.log("its time to enjoy");
// //   },1000);
// // }

// // buyacar(()=>planatrip(enjoy));


// //****************************************************************************************** */

// function buyacar(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("buy a car");
    
//         },3000);
//     })
  
  
// }

// function planatrip(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          reject("cannot plan a trip");
    
//         },2000);
// })
// }

// function enjoy(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("time to enjoy");
//         },1000);
// })
// }

// // buyacar().then((msg)=>{
// //     console.log(msg)
// //     planatrip()).then(enjoy)

// async function fun(){
//     try{
//         const msg = await buyacar()
//         console.log(msg)
//         const msg1 = await planatrip()
//         console.log(msg1)
//         const msg2 = await enjoy()
//         console.log(msg2)

//     }
//     catch(err){
//         console.log(err);
//     }
    
// }

// fun();

// const posts = [{title: 'POST1'}];
// //Do not touch this function
// function create2ndPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST2'});
//             resolve()
//         }, 3000)
//     }) 
// }
// //Do not touch this function
// function create3rPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             resolve();
//         }, 2000)
//     }) 
// }

// //Do not touch this function
// function deletePost(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }

//Modify the lines below and use .then and .catch smartly to get the correct output.
// create2ndPost().then((msg)=>{
//     console.log(msg);
//     deletePost().then((msg2)=>{
//         console.log(msg2);
//         create3rPost().then((msg3)=>{
//         console.log(msg3);
//         deletePost().then((msg4)=>{
//         console.log(msg4);
//         deletePost().then((msg5)=>{
//         console.log(msg5);
//         deletePost().catch(err=>console.log(err))
//         })
//     })
// })

//     })
// })
// deletePost).then(create3rPost).then(deletePost).
// then(deletePost).then(deletePost).catch(err=>console.log(err))
// task 10
// create2ndPost().then(()=>deletePost().then((msg2)=>{
//         console.log(msg2.title);
//         create3rPost().then(deletePost).then((msg4)=>{
//         console.log(msg4.title);
//         deletePost().then((msg5)=>{
//         console.log(msg5.title);
//         deletePost().catch(err=>console.log(err))
//         })
//     })
// })
// )
    
//task 11

// create1stBlog().
// then(create2ndBlog).
// then(deleteBlog).
// then(msg=>console.log(msg.title)).
// then(deleteBlog).
// then(msg1=>console.log(msg1.title)).
// then(deleteBlog).
// catch(err=>console.log(err))


//task 12

const posts = [{title:"post 1"},{title:"post2"}]

function createPost(){
    return new Promise((resolve,reject)=>{
        posts.push({title:"post 3"});
        resolve("hi");
    })
}

const user = {
    username :"Samiya",
    time : 'a'
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.time=new Date().getTime();
            resolve(user.time);
        },1000);
    })
}

function display(){
    return new Promise((resolve,reject)=>{
        let disp = '';
        posts.forEach((post)=>{
            disp+= `<li>${post.title}</li>`;
            //document.body.innerHTML = disp;
            console.log(disp)
        })
        resolve();
    })
}

// function deletepost(){
//     return new Promise((resolve,reject)=>{
//         posts.pop();
//         resolve();
//     })   
// }

// createPost().then(updateLastUserActivityTime).then(msg=>console.log(msg)).
// then(display).then(deletepost).then(display)

//function userupdatesapost(){
    // Promise.all([createPost, updateLastUserActivityTime]).then(([createpostresolve,updatetimeresolve])=>{
    //     console.log(updatetimeresolve)
    // })
    // .catch(err=>console.log(err))

//userupdatesapost()
Promise.all([createPost, updateLastUserActivityTime,display]).then(console.log(updatetimeresolve))
// .then(([createpostresolve,updatetimeresolve])=>{
    

.catch(err=>console.log(err))


console.log('hi')