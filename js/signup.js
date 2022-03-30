document.getElementById("signUpForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

function signUp(){
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                location.replace("login.html")
            }
        })
    )
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}