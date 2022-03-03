let getTodos = (resource)=>{

    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

/*__ Async Js code __*/
request.addEventListener("readystatechange",()=> {
    if(request.readyState == 4 && request.status == 200){
        let datas = JSON.parse(request.responseText);
        resolve(datas);
    }
    else if(request.status == 404)
        reject("something is going wrong");
    // console.log("ur link is not ")

})
// Async code End #https://jsonplaceholder.typicode.com/todos
request.open("GET",resource);
request.send();  // really work cause of this
    })
    

        } 
    getTodos("https://jsonplaceholder.typicode.com/todos")
    .then((data)=>{
        console.log(data);
       return getTodos("todos/mgmg.json")
      
       
      
    })
    .then((data)=>{
        console.log(data);
        return getTodos("todos/ttl.json")
        
    })
    .then((data)=>{
        console.log(data);
       
    })
    
    .catch((err) => {
        console.log(err)} );
