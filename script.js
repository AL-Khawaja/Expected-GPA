
function calculateGPA() {
  const currentGPA = Number(document.getElementById("current-gpa").value);
  const passedCredits = Number(document.getElementById("passed-credits").value);
  const allCredits = Number(document.getElementById("all-credits").value);
  const expectedGPA = Number(document.getElementById("expected-gpa").value);

  const x = ((expectedGPA * allCredits) - (passedCredits * currentGPA)) / (allCredits - passedCredits);
  
  if(x.toFixed(2)>100) alert("بتحلم قاعد يحبيبي؟ منتا قاطع ساعات كثير بزبطش معك");
  else alert("You should get ("+x.toFixed(2) +") in every course to let your GPA = "+expectedGPA);

}