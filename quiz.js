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
  let Q3ST = document.getElementById("Mouth").value;
  let Q4ST = document.getElementById("Safe").value;

  if (Q2ST === "Chinstrap" || Q2ST === "The Chinstrap") {
    console.log;
    Q2ST = 1;
  } else {
    Q2ST = 0;
  }
  if (Q3ST === "Protect the mouth" || Q3ST === "Protect the mouth and jaw") {
    console.log;
    Q3ST = 1;
  } else {
    Q3ST = 0;
  }
  if (
    Q4ST === "Padding" ||
    Q4ST === "The Padding and aired up foam inside the helemt"
  ) {
    Q4ST = 1;
  } else {
    Q4ST = 0;
  }
  let total = (Q1ST + Q2ST + Q3ST + Q4ST) / 4;
  let total1 = total;

  // document.getElementById("total").innerHTML = `Final Grade: ${Average}%.`;
}
document.getElementById("total").addEventListener("click", SubmitTest);
