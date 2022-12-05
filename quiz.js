document.getElementById("Submit").addEventListener("click", grade);

function grade() {
  let Q1V = Q1;
  let Q2I = Q2;
  let Q3M = Q3;
  let Q4H = Q4;
  let VIMH = (Q1V + Q2I + Q3M + Q4H) / 5;

  if (Q1V === "Visors help portect the face and protect the eyes") {
    AsnwerID = "correct";
  }

  if (Q1V)
    document.getElementById("Submit").innerHTML = `Submit test ${VIMH}%.`;
}
