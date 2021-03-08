// Add your code here

const submitData = () => {

  return  fetch(`http://localhost:3000/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com"
  })
})
 .then(response => response.json())
 .then(json => renderToDom(json))
 .catch(function(error) {

    document.body.innerHTML = error
  })

//   .catch( function ( error ) {
//     // display error message in the body instead of id
//   } )
}
submitData()

function renderToDom(json) {
    document.body.innerHTML = json["id"]
}


// function renderToDom(json) {
//     document.body.innerHTML = json.id
//   // or document.body.innerHTML = json["id"]
// }


//     fetch('http://localhost:3000/dogs', {
//         method: "POST",
//         headers: {
// //tells the server the type format we accept, typically implied
//                 "Content-Type" : "application/json", 
//                 "Accept": "application/json"
//         },
//         body:
// //request needs to be a string, The object, converted to JSON 
// //often send multiple pieces of information in one request. In our code, we often organize this information using objs.    
// //Using JSON has enabled us to preserve the key/value pairs of our object w/in the string.    
//             JSON.stringify({
//             dogName: "Byron",
//             dogBreed: "Poodle"
//         })
//     })
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

