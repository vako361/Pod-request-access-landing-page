const request = document.getElementById('request');
const mail = document.getElementById("mail")
const message = document.getElementById("input")
const errorMessage = document.getElementById("p")
function validation (){
    if(!mail.value){
      
        errorMessage.textContent =  "Email input is empty "
        p.appendChild(errorMessage)

    }
    else{
        errorMessage.textContent = ""
    }
}
request.addEventListener("click", validation )
console.log(request)
