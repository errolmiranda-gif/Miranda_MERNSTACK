import  { Link } from "react-router-dom";

export default function Navbar(){
return(
<nav>
   <Link to="/"> Home</Link>
<Link to="/Students"> Students</Link>
<Link to="/StudentDetails"> Student Details</Link>
</nav>
);
}