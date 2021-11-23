/*

NAME: Mohmmadazhar Khalifa
File Description: This is the Javascript file which performs the calculation
that is displayed in the table based on input. It also checks for valid inputs
and displays appropriate message to help the user.

*/
var buttons = [];
var deleteBtns = [];
var tables = 0;
var allTables = [];
function validateForm(e,error,slider) {
    let x = document.getElementById(e);
    let errorP = document.getElementById(error);
    let sliderDiv = document.getElementById(slider);
    let val = x.value;
   //invalid if
   if(val.length < 1 || val.indexOf(" ") > -1){
       x.classList.remove("is-valid");
       x.classList.add("is-invalid");
       errorP.style.display = "block";
       return false;
   }

  //invalid if
  if (isNaN(val) || val > 50 || val < -50) {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
      errorP.style.display = "block";
      return false;
  } else if (val !== " ") {
    //valid if
    console.log(val);
    x.classList.add("is-valid");
    x.classList.remove("is-invalid");
    errorP.style.display = "none";
    sliderDiv.value = val;
    return true;
    }
}


function checkValidation() {
    /*
    This function checks for validation. If it is not a valid input it will display
    an error message stating that and it will also display in the form a little "x"
    */
    validateForm("hr1","hre1","hrs1");
    validateForm("hr2","hre2","hrs2");
    validateForm("vr1","vre1","vrs1");
    validateForm("vr2","vre2","vrs2");

    if (validateForm("hr1","hre1","hrs1") && validateForm("hr2","hre2","hrs2") && validateForm("vr1","vre1","vrs1") && validateForm("vr2","vre2","vrs2")) {
        document.getElementById("submitValidation").innerText = "";
        SaveTable();
        displaySavedTable(document.getElementById('hr1').value,document.getElementById('hr2').value,document.getElementById('vr1').value,document.getElementById('vr2').value);
        return displayTable();
    } else {
        document.getElementById("submitValidation").innerText = "enter a valid number";
    }
}

(function() {
  "use strict";
  window.addEventListener(
      "load",
      function() {
          let forms = document.getElementsByClassName("needs-validation");
          let validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener(
                  "submit",
                  function(event) {
                      if (form.checkValidity() === false) {
                          event.preventDefault();
                          event.stopPropagation();
                      }
                      form.classList.add("was-validated");
                  },
                  false
              );
          });
      },
      false
  );
})();

function displayTable() {
    /*
    This function takes the input, prints the message for table being scrollable
    and most importantly does the claculation which is displayed in the table
    */



    let hr1 = document.getElementById("hr1").value;
    let hr2 = document.getElementById("hr2").value;

    let largest_hr = Math.max(hr1, hr2);
    let smallest_hr = Math.min(hr1, hr2);

    let vr1 = document.getElementById("vr1").value;
    let vr2 = document.getElementById("vr2").value;

    let largest_vr = Math.max(vr1, vr2);
    let smallest_vr = Math.min(vr1, vr2);

    if( largest_hr > 20 || largest_vr > 20){
        document.getElementById("tooMany").innerText = "If there are many items, table becomes scrollable"
  }

    let hr_array = [];
    let vr_array = [];
    let div = document.getElementById("tableRepeat");
    let clear = div.getElementsByTagName("tr");
     console.log(clear);
    for (let i = 0; i < clear.length; i++) {
        clear[i].innerHTML = "";
  }




  let tb_header = document.getElementById("topRow");
  let x = tb_header.insertCell();
  x.innerHTML = "x";


  for (let i = smallest_hr; i <= largest_hr; i++) {
      hr_array.push(i);
      x = tb_header.insertCell();
      x.innerHTML = i;
  }

  let row = document.getElementById("row");

  for (let i = smallest_vr; i <= largest_vr; i++) {
    vr_array.push(i);
  }

  for (let i = 0; i < vr_array.length; i++) {
      let row1 = row.insertRow();
      let el = row1.insertCell();
      el.innerHTML = vr_array[i];

for (let j = 0; j < hr_array.length; j++) {
    let value = vr_array[i] * hr_array[j];
    el = row1.insertCell();
    el.innerHTML = value;
    }
  }
}
function displaySavedTable(hr11,hr22,vr11,vr22) {
    /*
    This function takes the input, prints the message for table being scrollable
    and most importantly does the claculation which is displayed in the table
    */
    let hr1 = hr11;
    let hr2 = hr22;

    let largest_hr = Math.max(hr1, hr2);
    let smallest_hr = Math.min(hr1, hr2);

    let vr1 = vr11;
    let vr2 = vr22;

    let largest_vr = Math.max(vr1, vr2);
    let smallest_vr = Math.min(vr1, vr2);

    if( largest_hr > 20 || largest_vr > 20){
        document.getElementById("tooMany1").innerText = "If there are many items, table becomes scrollable"
  }

    let hr_array = [];
    let vr_array = [];

  let div = document.getElementById("TablesCreated");
    let clear = div.getElementsByTagName("tr");
     console.log(clear);
    for (let i = 0; i < clear.length; i++) {
        clear[i].innerHTML = "";
  }

  let tb_header = document.getElementById("topRow1");
  let x = tb_header.insertCell();
  x.innerHTML = "x";

  for (let i = smallest_hr; i <= largest_hr; i++) {
      hr_array.push(i);
      x = tb_header.insertCell();
      x.innerHTML = i;
  }

  let row = document.getElementById("row1");

  for (let i = smallest_vr; i <= largest_vr; i++) {
    vr_array.push(i);
  }

  for (let i = 0; i < vr_array.length; i++) {
      let row1 = row.insertRow();
      let el = row1.insertCell();
      el.innerHTML = vr_array[i];

for (let j = 0; j < hr_array.length; j++) {
    let value = vr_array[i] * hr_array[j];
    el = row1.insertCell();
    el.innerHTML = value;
    }
  }
}
function SaveTable(){
  // var savedTables = document.getElementById('savedTables');
  // savedTables.append('<button class="tablinks" ></button>');
  var savedTables = document.getElementById("tabDiv");
  var deleteAll = document.getElementById('deleteAll');
  deleteAll.style.display = "block";
  var button = document.createElement("BUTTON");
  var deletBtn = document.createElement("BUTTON");



  tables++;
  deletBtn.value = "del"+tables;
  deletBtn.innerHTML = "X";
  deletBtn.style.backgroundColor = "red";
  button.innerHTML = "Table "+tables;

  deletBtn.onclick = function() {
    DeleteSingleTable(this);
  }
  button.onclick = function() {
    CreateTable(this);
  }
  savedTables.appendChild(button);
  savedTables.appendChild(deletBtn);
  buttons.push(button);
  deleteBtns.push(deletBtn);

  let tableValue = {};
  tableValue.hr1= document.getElementById("hr1").value;
  tableValue.hr2= document.getElementById("hr2").value;
  tableValue.vr1= document.getElementById("vr1").value;
  tableValue.vr2= document.getElementById("vr2").value;
  allTables.push(tableValue);



}
function DeleteSingleTable(value){
    /*
    This function allows to delete the table tabs individually
    */

  let index = parseInt(value.value.replace("del",""))-1;
  buttons[index].style.display = "none";
  deleteBtns[index].style.display = "none";
  document.getElementById('TablesCreated').style.display = "none";

}
function DelteAll(){

  document.getElementById('tabDiv').innerHTML = "";
  document.getElementById('TablesCreated').style.display = "none";
}
function CreateTable(event){
  document.getElementById('TablesCreated').style.display = "block";
  console.log(event.innerHTML);
  let index = parseInt(event.innerHTML.replace("Table ",""))-1;

  displaySavedTable(allTables[index].hr1,allTables[index].hr2,allTables[index].vr1,allTables[index].vr2);

}
$('#hrs1').on('input', function(){
  document.getElementById('hr1').value = document.getElementById('hrs1').value;
  validateForm('hr1','hre1','hrs1');

  displayTable();

});
$('#hrs2').on('input', function(){
  document.getElementById('hr2').value = document.getElementById('hrs2').value;
  validateForm('hr2','hre2','hrs2');
  displayTable();

});
$('#vrs1').on('input', function(){
  document.getElementById('vr1').value = document.getElementById('vrs1').value;
  validateForm('vr1','vre1','vrs1');
  displayTable();

});
$('#vrs2').on('input', function(){
  document.getElementById('vr2').value = document.getElementById('vrs2').value;
  validateForm('vr2','vre2','vrs2');
  displayTable();

});
$("#form").validate();
