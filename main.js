var worker = new Worker("worker.js")

const addToCounter = ()=>{
const  divOfCounter = document.getElementsByClassName("counter")
divOfCounter[0].innerHTML= (parseInt(divOfCounter[0].innerHTML)+1).toString()
}

const helper= (n)=>{
if(n<=0){
return 0 ; 
}
if(n==1 || n==2)
return 1 
return helper(n-1)+helper(n-2)

}
const fib  =(n)=>{

const result = helper(n)
console.log(result)


}

worker.addEventListener("message",(e)=>{
console.log("worker Said" , e.data)
},false)

worker.postMessage('Hello World')
