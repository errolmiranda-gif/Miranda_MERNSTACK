import { Link } from "react-router-dom";

export default function Teachers({
 
    id,
    Name,
    Specialization
}) {
  return (
    <article className="Teachers-card">
      <h2>{Name}</h2>
        <p>Specialization: {Specialization}</p>

      <Link to={`/Teachers/${id}`}>
        View Details
      </Link>

      <hr />
    </article>
  );
}