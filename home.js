firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace('try.html')
    }
})
function logout(){
    firebase.auth().signOut()
}