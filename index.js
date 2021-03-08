// Add your code here
function init (){
    fetch('http://localhost:3000/dogs', {
        method: "POST",
        headers: {
//tells the server the type format we accept, typically implied
                "Content-Type" : "application/json", 
                "Accept": "application/json"
        },
        body:
//request needs to be a string, The object, converted to JSON 
//often send multiple pieces of information in one request. In our code, we often organize this information using objs.    
//Using JSON has enabled us to preserve the key/value pairs of our object w/in the string.    
            JSON.stringify({
            dogName: "Byron",
            dogBreed: "Poodle"
        })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


function submitData(name, email){

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
//tells the server the type format we accept, typically implied
                "Content-Type" : "application/json", 
                "Accept": "application/json"
        },
        body:
            JSON.stringify({
                name: "Getting Started",
                email: "catchmeoutside@outchyea.yee"
            })
        .then(resp => resp.json())
        .then(newUser => console.log(newUser))
        .catch(error => console.log(error))
}

    )}
console.log(init)
document.addEventListener("DOMContentLoaded", init);
