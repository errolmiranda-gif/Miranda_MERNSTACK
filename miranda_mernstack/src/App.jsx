import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";
import initialStudents from "./data/Students.json";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [students, setStudents] = useState(initialStudents);

  const handleAddStudent = (studentDetails) => {
    const newStudent = {
      ...studentDetails,
      id: Math.max(...students.map((student) => student.id), 0) + 1,
    };

    setStudents((currentStudents) => [
      ...currentStudents,
      newStudent,
    ]);

    return newStudent;
  };

  const handleUpdateStudent = (studentId, studentDetails) => {
    setStudents((currentStudents) => currentStudents.map((student) => (
      student.id === studentId ? { ...student, ...studentDetails } : student
    )));
  };

  const handleDeleteStudent = (studentId) => {
    setStudents((currentStudents) => currentStudents.filter((student) => student.id !== studentId));
  };


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home counter={counter} onIncrement={() => setCounter(counter + 1)} />}
        />

        <Route
          path="/students"
          element={<Students students={students} onAddStudent={handleAddStudent} />}
        />

        <Route
          path="/students/:id"
          element={
            <StudentDetails
              students={students}
              onUpdateStudent={handleUpdateStudent}
              onDeleteStudent={handleDeleteStudent}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


