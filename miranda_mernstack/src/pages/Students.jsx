function Student({name,age,section,student_no,course}){
 
 return(
<div>
<p><span>Name: {name}</span></p>
<p><span>Age:  {age}</span></p>
<p><span>Section {section}</span></p>
<p><span>Student_no. {student_no}</span></p>
<p><span>Course {course}</span></p>





</div>
  )
}
export default Student;

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