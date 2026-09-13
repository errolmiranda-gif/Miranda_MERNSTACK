function StudentDetails({Sex,Status,Religion,Address}){
 
 return(
<div>
<p><span>Sex: {Sex}</span></p>
<p><span>Status: {Status}</span></p>
<p><span>Religion: {Religion}</span></p>
<p><span>Address: {Address}</span></p>




</div>
  )
}

export default StudentDetails;

import { Link, useParams } from "react-router-dom";
import students from "../data/students.json";

export default function StudentDetails() {
  const { id } = useParams();

    const student = students.find(
        (student) => student.id === parseInt(id)
          );

            if (!student) {
                return (
                      <div>
                              <h1>Student Not Found</h1>

                                      <Link to="/students">
                                                Back to Students
                                                        </Link>
                                                              </div>
                                                                  );
                                                                    }

                                                                      return (
                                                                          <div>
                                                                                <h1>Student Details</h1>

                                                                                      <p>Name: {student.name}</p>
                                                                                            <p>Age: {student.age}</p>
                                                                                                  <p>Section: {student.section}</p>
                                                                                                        <p>Student No: {student.student_no}</p>
                                                                                                              <p>Course: {student.course}</p>
                                                                                                                    <p>Sex: {student.sex}</p>
                                                                                                                          <p>Status: {student.status}</p>
                                                                                                                                <p>Religion: {student.religion}</p>
                                                                                                                                      <p>Address: {student.address}</p>

                                                                                                                                            <br />

                                                                                                                                                  <Link to="/students">
                                                                                                                                                          Back to Students
                                                                                                                                                                </Link>
                                                                                                                                                                    </div>
                                                                                                                                                                      );
                                                                                                                                                                      }