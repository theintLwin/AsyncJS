let getTodos = (resource, callback)=>{
    let request = new XMLHttpRequest();

/*__ Async Js code __*/
request.addEventListener("readystatechange",()=> {
    if(request.readyState == 4 && request.status == 200){
        let data = JSON.parse(request.responseText)
       callback(data, undefined);
    }
    else if(request.status == 404)
    callback(undefined,"something 's going wrong");
    // console.log("ur link is not ")

})
// Async code End #https://jsonplaceholder.typicode.com/todos

request.open("GET",resource);
request.send();  // really work cause of this

        } 

        getTodos("https://jsonplaceholder.typicode.com/todos", (data,err)=>{
    if(data){
        console.log(data);
        getTodos("https://jsonplaceholder.typicode.com/todos/1", (d,e)=>{
            if(d) console.log(d);
        })
    }
    else{
        console.log(err)
    }
})





