function calculateGrade() {
  const marksInput = document.getElementById("marks");
  const result = document.getElementById("result");
  const marks = Number(marksInput.value);

  if (marksInput.value === "" || Number.isNaN(marks)) {
    result.innerHTML = "Please enter marks.";
    return;
  }

  if (marks < 0 || marks > 100) {
    result.innerHTML = "Please enter marks between 0 and 100.";
    return;
  }

  let grade;

  if (marks >= 90) {
    grade = "A+";
  } else if (marks >= 80) {
    grade = "A";
  } else if (marks >= 70) {
    grade = "B";
  } else if (marks >= 60) {
    grade = "C";
  } else if (marks >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  result.innerHTML = "Marks: " + marks + "<br>" + "Grade: " + grade;
}
