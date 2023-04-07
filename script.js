
function calculateGPA() {
  const currentGPA = Number(document.getElementById("current-gpa").value);
  const passedCredits = Number(document.getElementById("passed-credits").value);
  const allCredits = Number(document.getElementById("all-credits").value);
  const expectedGPA = Number(document.getElementById("expected-gpa").value);

  const x = ((expectedGPA * allCredits) - (passedCredits * currentGPA)) / (allCredits - passedCredits);
  
  if(x.toFixed(2)>100) showAlert("Are you dreaming? you can't unless you repeat some courses");
  else showAlert("You should get ("+x.toFixed(2) +") in every course to let your GPA = "+expectedGPA);

}

function myFunction1() {
  const input = document.getElementById("current-gpa");
  input.value = input.value.replace(/[^0-9.]/g, "");

  if(input.value >100 || input.value <60)
  showAlert("Wrong GPA!");

}
function myFunction2() {
  const input = document.getElementById("passed-credits");
  input.value = input.value.replace(/[^0-9.]/g, "");

  if(input.value <0 )
  showAlert("Wrong passed credit hours");
}

function myFunction3() {

  const input = document.getElementById("all-credits");
  input.value = input.value.replace(/[^0-9.]/g, "");
  if(input.value <0 )
  showAlert("Wrong credit hours");

}

function myFunction4() {
  const input = document.getElementById("expected-gpa");
  input.value = input.value.replace(/[^0-9.]/g, "");
  if(input.value >100 || input.value <60)
  showAlert("Wrong Expected GPA!");
}


function showAlert(message) {
  const alertBox = document.getElementById("myAlert");
  alertBox.querySelector(".alert-message").textContent = message;
  alertBox.style.display = "block";
}

function closeAlert() {
  const alertBox = document.getElementById("myAlert");
  alertBox.style.display = "none";
}
