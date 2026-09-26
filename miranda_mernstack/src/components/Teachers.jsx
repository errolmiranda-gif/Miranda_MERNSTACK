import { Link } from "react-router-dom";

export default function Teachers({
 
    id,
    name,
    specialization
}) {
  return (
    <article className="Teachers-card">
      <h2>{name}</h2>
        <p>Specialization: {specialization}</p>

      <Link to={`/teachers/${id}`}>
        View Details
      </Link>

      <hr />
    </article>
  );
}