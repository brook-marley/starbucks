var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// --------------------------------------------------------------------------------

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
//---------------------------------------------------------------------------------------

function heart() {
  document.getElementById("heart").style.Color = red;

  console.log("heart")
}


   // db = [] //databasen
   function signIn() {
    const emailAddress = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const tempObject =
    {
        emailOrUsername: emailAddress,
        pass: password 
    }

    db.push(tempObject);

    for (let k in db) {
        console.log(db[k]);
    }

    if (tempObject.emailAddress == NewUser) {
        alert("welcome");
    }
    else{
        alert ("user already exists ")
    }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}