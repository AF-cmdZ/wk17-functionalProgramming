// Fix the `greet` function so that it returns the correct values.
function createStudent(name, gradeYear) {
    let student = {
      name: name,
      gradeYear: gradeYear,
    };
  
    return {
      greet() {
       console.log(`My name is ${student.name} and I am in ${student.gradeYear} grade`);
      },
    };
  }
  
  const newStudent = createStudent('Dominique', '11th');
  newStudent.greet();

  