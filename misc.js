// console.log('a')
// console.log('b')
// setTimeout(()=>
//     console.log('c'),1000)

// setTimeout(()=>
// console.log('e'),0)

console.log('a')
console.log('b')
new Promise((resolve,reject)=>{
    setTimeout(()=>
     resolve('c'),1000)
}).then((data)=>console.log(data),
new Promise((resolve,reject)=>{
    setTimeout(()=>
     resolve('e'),0)
})).then((data1)=>console.log(data1))
