// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCs97n99UbVpM8z-FsTHZNgVmuRSheUyHk",
    authDomain: "exquisite-corpse-d1240.firebaseapp.com",
    databaseURL: "https://exquisite-corpse-d1240-default-rtdb.firebaseio.com",
    projectId: "exquisite-corpse-d1240",
    storageBucket: "exquisite-corpse-d1240.appspot.com",
    messagingSenderId: "773358548535",
    appId: "1:773358548535:web:613a04c5db2a59061531b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const submit = document.getElementById("add-line");
  const getLine = document.querySelectorAll("#add-line input");
  const poemList = document.querySelector("main ol");
  const inputs = document.querySelectorAll("#add-line input:not([type=submit])");

  let thisRecord;

  submit.addEventListener("submit", function(event){
    event.preventDefault();
    const db = firebase.database().ref('poem');
    const newLine = {};

    //get date
    var d = new Date();
    date = d.toDateString();

    for (let i=0; i<inputs.length; i++) {
        let key = inputs[i].getAttribute('name');
        let value= inputs[i].value;
        newLine[key] = value
    }
    console.log(newLine);
    const newLineRef = db.push();

    newLineRef.set({
        newLine,
        date: date
    });

    resetFormFields();
    // setTimeout(function(){
    //     window.location.reload(true);
    //     window.location.href = 'entry.html';
    // }, 1000);
});

function displayLines(){
  const dbRef = firebase.database().ref('poem');

  dbRef.on("child_added", function (snap){

      const line = snap.val();
      const ids = snap.key;

      //console.log(poem;
      //console.log(ids);
  });
};

displayLines();

function resetFormFields(){
  document.getElementById("line").value = "";
};


// for (let i=0; i<getLine.length; i++) {
//   getLine[i].addEventListener("click", function(event) {
//       const theListItem = document.createElement("li");

//       theListItem.setAttribute("id", `r-${this.name}`);
//       theListItem.innerHTML = `<div class="addLine">${this.name}</div>`;
//       poemList.append(theListItem);
      
//       console.log(getLine[i]);
//   });
// };

