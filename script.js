
function calculateGPA() {
  const currentGPA = Number(document.getElementById("current-gpa").value);
  const passedCredits = Number(document.getElementById("passed-credits").value);
  const allCredits = Number(document.getElementById("all-credits").value);
  const expectedGPA = Number(document.getElementById("expected-gpa").value);

  const x = ((expectedGPA * allCredits) - (passedCredits * currentGPA)) / (allCredits - passedCredits);
  alert(x.toFixed(2));

}