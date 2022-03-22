//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();


function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push()({
       name:user_name,
       like:0,
       message:msg
 });
 document.getElementById("msg").value=" ";
 
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="Letschat.html";
}