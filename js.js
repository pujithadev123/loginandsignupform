let signupBtn=document.getElementById("btn1")
let name=document.getElementById("userName")
let email=document.getElementById("userEmail")
let password=document.getElementById("userPaswd")

signupBtn.addEventListener("click",(e)=>{
    e.preventDefault()
   const nameValue= name.value
   const emailValue= email.value
   const passwordValue= password.value
   console.log(nameValue)
   localStorage.setItem("name",nameValue)
   localStorage.setItem("email",emailValue)
   localStorage.setItem("password",passwordValue)
   alert("signup done successfully!....")
   setTimeout(()=>{
    window.location.href="loginform.html"
   },3000)
})



