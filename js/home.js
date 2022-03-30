firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }else{
        // document.getElementById("user").innerHTML = "Hello, "+user.email
        location.replace("home.html");
    }
})


function logout(){
    firebase.auth().signOut()
}
