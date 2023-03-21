// Get input fields

const marksInput = document.querySelector('.marks');
const gradeInput = document.querySelector('.grade');

// Add event listener to marks input

marksInput.addEventListener('input', () => {
  // Get marks value
  const marks = parseInt(marksInput.value);

  // creating conditionals

  let grade = '';
  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 50) {
    grade = 'C';
  } else if (marks >= 40) {
    grade = 'D';
  } else  {
    grade = 'E';
  }

  gradeInput.value = grade;



});
