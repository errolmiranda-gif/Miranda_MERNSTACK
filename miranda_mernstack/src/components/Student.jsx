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
    <article className="student-card">
      <h2>{name}</h2>

      <p>Age: {age}</p>
      <p>Section: {section}</p>
      <p>Student No: {student_no}</p>
      <p>Course: {course}</p>

      <Link to={`/students/${id}`}>
        View Details
      </Link>

      <hr />
    </article>
  );
}