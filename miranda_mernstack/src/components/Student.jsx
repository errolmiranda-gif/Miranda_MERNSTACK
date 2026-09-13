import {Link} from "react-router-dom";

export default function Student({name,grade}){ 
return (
<div>
  <p>{name}</p>
<p>grade: {grade}</p>
<p>Student No: {studentno}</p>
<Link to="/StudentDetails"> View Details</Link>
</div>
  )
}

import { Link } from "react-router-dom";

export default function Student({
  id,
    name,
      age,
        section,
          student_no,
            course
            }) {
              return (
                  <div>
                        <h2>{name}</h2>

                              <p>Age: {age}</p>
                                    <p>Section: {section}</p>
                                          <p>Student No: {student_no}</p>
                                                <p>Course: {course}</p>

                                                      <Link to={`/students/${id}`}>
                                                              View Details
                                                                    </Link>

                                                                          <hr />
                                                                              </div>
                                                                                );
                                                                                }