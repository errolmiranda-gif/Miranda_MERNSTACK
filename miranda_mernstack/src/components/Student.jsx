import {Link} from "react-router-dom";

export default function Student({name,age,section,student_no,course}){ 
return (
<div>
  <p>{name}</p>
<p>Age: {age}</p>
<p>Section: {section}</p>
<p>Student No: {student_no}</p>
<p>Course: {course}</p>
<Link to="/StudentDetails"> View Details</Link>
</div>
  )
}