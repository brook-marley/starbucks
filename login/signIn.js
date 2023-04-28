const user1 = document.getElementById("userName");
const password = document.getElementById("password")
console.log(user1.value);
console.log(password.value)
function printTheValue()
{
    console.log(user1.value);
    console.log(password.value)
}


db = []   // database


    const emaiAddress = document.getElementById ("userName").value;
    const password_1 = document.getElementById ("password").value;

function signIn(){

    
// Check if the email and password exist in the database
fetch("/check-user", {
    method: "POST",
    body: JSON.stringify({ email: emaiAddress, password: password_1 }),
    headers: { "Content-Type": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
    if (data.exists) {
      console.log("User exists in the database!");
    } else {
      console.log("User does not exist in the database.");
    }
  })
  .catch(error => console.error(error));


  /*   let tempObject = 
    {
        email : emaiAddress,
        pass : password 
    }

    db.push(tempObject);
    
    
    for(let k in db)
    {
        console.log(db[k]);
    } */
}