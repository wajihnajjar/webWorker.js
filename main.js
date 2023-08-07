var worker = new Worker("worker.js")

const addToCounter = ()=>{
const  divOfCounter = document.getElementsByClassName("counter")
divOfCounter[0].innerHTML= (parseInt(divOfCounter[0].innerHTML)+1).toString()
}



worker.addEventListener("message",(e)=>{
console.log("worker Said" , e.data)
},false)


const  fibx = (n)=>{
worker.postMessage(n)
}