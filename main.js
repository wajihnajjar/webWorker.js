var worker = new Worker("worker.js")
worker.addEventListener("message",(e)=>{
console.log("worker Said" , e.data)
},false)

worker.postMessage('Hello World')
