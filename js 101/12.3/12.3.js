const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

// 1. A method called “findPerson” that takes two arguments,
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.

let findPerson = (type, id) => {
  let result = this[type].find((person) => {
    person.id === id;
  });
  return result;
};

// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject.
// Assign all of the students to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left”.

// school.assignStudent = (studentId, subject) => {
//   const teacher = school.teachers.find((teacher) => {
//     return teacher.subjects.includes(subject);
//   });
//   console.log(teacher);
//   if (teacher.capacityLeft > 0) {
//     teacher.students.push(studentId);
//     teacher.capacityLeft--;
//   } else {
//     console.log("Sorry, no available teachers left");
//   }
// };

let assignTeacherSubject = (teacherId, subject) => {
  
  const teachId = school.teachers.find((teacher) => {
    return teacher.id.toString().includes(teacherId);
  });
  // console.log(teachId);
  if (teachId.subjects.includes(subject)) {
    return teachId
  } else {
    teachId.subjects.push(subject)
  }
  return teachId;
};

console.log(assignTeacherSubject(1, "sports"));
console.log(assignTeacherSubject(2, "cooking"));
