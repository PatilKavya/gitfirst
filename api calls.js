//Get Request
function getTodo(){
    axios({method:'get',url:'url adresss',params:{_limit:5}})
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
}

//Post Request
function addTodos(){
    axios({method:'post',url:"url adress",data:{title:'new todo',completed:false}})
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))

}

//Put/Patch Request
function updateTodo(){
    axios.put("url adress/Id",{title:'updated Todo',completed:true})
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))

}

//Delete Request
function removeTodo(){
    axios.delete('url adress/Id')
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
}

//Simultaneous Data Request
function getData(){
    axios.all([axios.get('url adress'),axios.get('url adress')])
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
}

//Intercepting Requests & Responses

axios.interceptors.request.use(
    config=>{console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`)
    return config;
},error=>{
    return Promises.reject(error)
}
   
)

//Custom Headers
function customHeaders(){
const config = {
    headers:{
       contentType:'application/json',
       Autorisation:'someToken'
    }
}
}

axios.post('url adress',{title:'new Todo',completed:false},config)
.then(res=>console.log(res.data))
    .catch(err=>console.log(err))

    //TransformResponce
    function transformResponse(){
        const options = {
            method:'post',
            url:'url adress',
            data:{
                title:'Hello',

            }
        
        }
    }

   