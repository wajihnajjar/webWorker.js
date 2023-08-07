
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
    return result    
    
    }

self.addEventListener("message",(e)=>{
    self.postMessage(fib(e.data))
},false)
