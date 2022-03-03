let getTodos = async () => {
    let response = await fetch("todos/ttl.json");
//    if(response.status == 404){
//        throw new Error("ur link is not available")
//    }
    let datas = await response.json();
    return datas;
}

getTodos().then((d)=>{
    
    console.log(d);
})
.catch(()=> console.log("Error"))