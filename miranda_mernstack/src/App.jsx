import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [section, setSection] = useState("");
  const [studentNo, setStudentNo] = useState("");
  const [course, setCourse] = useState("");
  const [information, setInformation] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent ={
      id: students.length + 1,
      name,
      age,
      section,
      student_no: studentNo,
      course
    }
    setStudents([...students, newStudent]);
    setid(null);
    setName("");
    setAge("");
    setSection("");
    setStudentNo("");
    setCourse("");
  };


  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/students" element={<Students />} />

        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />
         
  
      </Routes>
    </BrowserRouter>
    <div>
      <h1>My App</h1>
      <p>Counter: {counter}</p>

      <button classname= "bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => setCounter(counter + 1)}>+</button><br></br>

      <input className = "border border-gray-300 p-2 rounded" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>

      <input className = "border border-gray-300 p-2 rounded" type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />

      <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={handleSubmit}>Add Student</button>  
      
      {information.map((student) => (info,index) => (
        <div className = "border border-gray-300 p-2 rounded" key= { index }>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Section: {student.section}</p>
          <p>Student No: {student.student_no}</p>
          <p>Course: {student.course}</p>

      
     </div>
      ))}
    </div>
    </>
  );
}


