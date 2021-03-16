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
  const subBtn = document.getElementById("subBtn");
  const getLine = document.querySelectorAll("#add-line input");
  const inputs = document.querySelectorAll("#add-line input:not([type=submit])");
  const button = document.getElementById('button');

  let thisRecord;

  submit.addEventListener("submit", function(event){
    event.preventDefault();
    const db = firebase.database().ref('poem');
    const line = {};

    //get date
    var d = new Date();
    date = d.toDateString();

    for (let i=0; i<inputs.length; i++) {
        let key = inputs[i].getAttribute('name');
        let value= inputs[i].value;
        line[key] = value
        console.log
    }

    var data = {
      line,
      date: date
    }
  
    const lineRef = db.push(data);

    resetFormFields();
    //setTimeout(function(){
    //     window.location.reload(true);
    //     window.location.href = 'entry.html';
    //}, 1000);
});

subBtn.addEventListener("click", function(event){
  createLine();
})

function resetFormFields(){
  document.getElementById("line").value = "";
};


function addItemsToList(poemLine){
  var ul = document.getElementById('list');
  var _line = document.createElement('li');
  _line.innerHTML = poemLine;
  //console.log(poemLine);
  ul.append(_line);
}


function fetchAllData(){
  firebase.database().ref('poem').once('value', function(snapshot){
    snapshot.forEach(
      function(snap){
        let poemLine = snap.val().line.line;
        addItemsToList(poemLine);
      }
    )
  })
}

window.onload = (event) => {
  fetchAllData();
  // subBtn.addEventListener("click", function(event){
  //   event.preventDefault();
  //   createLine();
  // })
}

function createLine(){
  var newPostKey = firebase.database().ref().child('poem').push().key;
  var addedLine = firebase.database().ref('poem');
  addedLine.off();
  addedLine.limitToLast(1).on('child_added', function(snapshot) {
    var newLineAdded = snapshot.val().line.line;
    var ul = document.getElementById('list');
    var makeNewLine = document.createElement('li');
    makeNewLine.innerHTML = newLineAdded;
    ul.appendChild(makeNewLine);

    //console.log(newLineAdded);
    console.log(newLineAdded);
  });
  // var newLine = firebase.database().ref('poem/'+ newPostKey)
  // newLine.once('value', function(snapshot){
  //       console.log(snapshot.val().line.line);
  // });
  
  
  //console.log('function called');
}

//createLine();