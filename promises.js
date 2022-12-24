const posts=[{title:'post1',body:'this is post1',updatedAt:new Date().getTime()},{title:'post2',body:'this is post2',updatedAt:new Date().getTime()}];

let intervalId=0;
function getposts(){
clearInterval(intervalId);
return new Promise(()=>{
intervalId = setInterval(()=>{
        let output='';
        for(let i=0;i<posts.length;i++){
            output+=`<li> ${posts[i].title} created at  ${(new Date().getTime()-posts[i].updatedAt)/1000} </li>`
        }
        document.body.innerHTML=output;
    },1000)
})
}



function createPosts(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       
posts.push(post);
resolve('success')
reject('not success')
    },2000)
})
    //getposts()
}

function deletePost(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        
         if(posts.length>0){
            resolve(posts.pop())
         }
         else{
            reject(console.log('array is empty'));
         }

       },1000)
    }) 

}

function updateLastUserActivityTime() {
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{   
        lastActivity=new Date().getTime() 
        console.log(`last activity at ${lastActivity}`)
      resolve(`last activity at ${lastActivity}`)
       reject('not updated')
    },1000)

})
}

function updatePost(){
Promise.all([createPosts,updateLastUserActivityTime]).then((result)=>{
    console.log(result)
}).then(()=>{
    console.log(posts)
    updateLastUserActivityTime()
}).then(()=>{
    deletePost()
    console.log(posts)
}).catch((err)=>{console.log(err)})
}

updatePost()