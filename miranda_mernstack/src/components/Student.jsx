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