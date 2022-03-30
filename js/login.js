document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password).then(
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                location.replace("home.html")
            }
        })
    )
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    });
}

// function signUp(){
//     const username = document.getElementById("username").value
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch((error) => {
//         document.getElementById("error").innerHTML = error.message
//     });
// }

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}