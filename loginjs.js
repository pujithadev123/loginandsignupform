let loginbtn=document.getElementById("btn2")
loginbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let storageusername=localStorage.getItem("name")
    let storageuserpswd=localStorage.getItem("password")
    let inputusername=document.getElementById("userName").value
    let inputuserpassword=document.getElementById("userPaswd").value
    if(storageusername == inputusername && storageuserpswd == inputuserpassword){
        alert("login done successfully..........")
        
        setTimeout(()=>{
            window.location.href="homepage.html"
           },5000)
    }
    else{
        alert("oops invalid creditials")
    }
})