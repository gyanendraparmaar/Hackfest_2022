



document.getElementById("loginform").addEventListener("submit",(event)=>{
    event.preventDefault();

})




function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email , password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })

}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log("idk how it is happening")
        location.replace('home.html')
     }
    else{
        console.log("i am stupid")
    }
})

function signup(){
    

    document.getElementById("signupform").addEventListener("submit",(event)=>{
       event.preventDefault();
    })
    // const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    // const phoneno = document.getElementById("phonenumber").value
    const password = document.getElementById("password").value
    console.log(email , password);
    firebase.auth.createUserWithEmailAndPassword(email,password)
    .catch((error) => {
        document.getElementById("error2").innerHTML = error.message
    })
}