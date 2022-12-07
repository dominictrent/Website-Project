document.getElementById("SubmitTest").addEventListener("click", SubmitTest);

function SubmitTest() {
  // Check Question 1
  let Q1ST = document.getElementById("Visor").value;
  if (Q1ST === "Protect the eyes" || Q1ST === "Protect the eys and face") {
    document.getElementById("q1-response").innerHTML = "Correct";
  } else {
    document.getElementById("q1-response").innerHTML = "Incorrect";
  }

  // Check Question 2
  let Q2ST = document.getElementById("Helmet").value;
  if (Q2ST === "chinstrap" || Q2ST === "The chinstrap") {
    document.getElementById("q2-response").innerHTML = "Correct";
  } else {
    document.getElementById("q2-response").innerHTML = "Incorrect";
  }

  // check Question 3
  let Q3ST = document.getElementById("Mouth").value;
  if (Q3ST === "protect the jaw and face" || Q3ST === "protect the jaw") {
    document.getElementById("q3-response").innerHTML = "Correct";
  } else {
    document.getElementById("q3-response").innerHTML = "Incorrect";
  }

  // check qeustion 4
  let Q4ST = document.getElementById("Safe").value;
  if (Q4ST === "Padding and aired up foam" || Q4ST === "Padding") {
    document.getElementById("Q4-response").innerHTML = "Correct";
  } else {
    document.getElementById("Q4-response").innerHTML = "Incorrect";
  }

  document.getElementById("total").innerHTML = `Final Grade: ${Average}%.`;
  document.getElementById("total").addEventListener("click", SubmitTest);
}
