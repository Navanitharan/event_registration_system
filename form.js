let users=[]
function register() {
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    
    let tempUsers={
        tempname:name,
        tempemail:email
    }
    let userCount=checkUserExist(email)
    console.log("userCount "+userCount.length)
    if(userCount.length==0){
        users.push(tempUsers)
        document.getElementById("msg").innerText="Thank you for registering! "+tempUsers.tempname
    }else{
        document.getElementById("msg").innerText="User already exist"
    }
    
    
    console.log(users)


}
function checkUserExist(email){
    let userCount=users.filter((user)=>{
        return user.tempemail==email
    })
    return userCount
}



////////////////////////////////////
function login(){
    let emailLogin = document.getElementById("email").value
    let password = document.getElementById("pass").value

    if(emailLogin.length<1){
        alert("Enter the mailId")
    }
    if(password.length<1){
        alert("enter the password")
    }
    if(emailLogin=="navani" && password=="navani505@"){
        alert("login Sucessful")
    }

    console.log("pass = " + emailLogin + password)
}