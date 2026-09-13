import Student from "../components/Student.jsx";
import students from "../data/students.json";

export default function Students() {
  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          section={student.section}
          student_no={student.student_no}
          course={student.course}
        />
      ))}
    </div>
  );
}