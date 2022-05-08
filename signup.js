
document.getElementById("signupform").addEventListener("submit",(event)=>{
    event.preventDefault();
})



function signup(){
    const name1 = document.getElementById("name").value
    const email1 = document.getElementById("email").value
    const phoneno1 = document.getElementById("phonenumber").value
    const password1 = document.getElementById("password").value
    console.log(email1 , password1);

    var x = email1.indexOf("@iitism.ac.in");
    console.log(x);
    if (x > -1){
        firebase.auth().createUserWithEmailAndPassword(email1,password1)
        .catch((error) => {
        document.getElementById("error2").innerHTML = error.message
        });
        firebase.database().ref(name1).set({info : {
            name: name1,
            email: email1,
            phoneno : phoneno1,

    }});
    }
    else{
        document.getElementById("error2").innerHTML = "Use Institute email id only";
    }

}

