import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";
import Teachers from "./pages/Teachers.jsx";
import TeachersList from "./pages/TeachersList.jsx";
import TeacherDetails from "./pages/TeacherDetails.jsx";
import initialStudents from "./data/Students.json";
import initialTeachers from "./data/Teachers.json";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [students, setStudents] = useState(initialStudents);
  const [teachers, setTeachers] = useState(initialTeachers);

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((response) => {
        if (!response.ok) throw new Error("Message API request failed");
        return response.json();
      })
      .then((data) => console.log(data.message))
      .catch((error) => console.error("Backend connection:", error));

    fetch("http://localhost:5000/api/students")
      .then((response) => {
        if (!response.ok) throw new Error("Students API request failed");
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setStudents(data);
      })
      .catch((error) => {
        console.error("Could not load students from the backend; showing local data instead.", error);
      });
  }, []);

  const handleAddStudent = (studentDetails) => {
    const newStudent = {
      ...studentDetails,
      id: Math.max(...students.map((student) => Number(student.id) || 0), 0) + 1,
    };
    setStudents((currentStudents) => [...currentStudents, newStudent]);
    return newStudent;
  };

  const handleUpdateStudent = (studentId, studentDetails) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId ? { ...student, ...studentDetails } : student
      )
    );
  };

  const handleDeleteStudent = (studentId) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== studentId)
    );
  };

  const handleAddTeacher = (teacherDetails) => {
    const newTeacher = {
      ...teacherDetails,
      id: Math.max(...teachers.map((teacher) => Number(teacher.id) || 0), 0) + 1,
    };
    setTeachers((currentTeachers) => [...currentTeachers, newTeacher]);
    return newTeacher;
  };

  const handleUpdateTeacher = (teacherId, teacherDetails) => {
    setTeachers((currentTeachers) =>
      currentTeachers.map((teacher) =>
        teacher.id === teacherId ? { ...teacher, ...teacherDetails } : teacher
      )
    );
  };

  const handleDeleteTeacher = (teacherId) => {
    setTeachers((currentTeachers) =>
      currentTeachers.filter((teacher) => teacher.id !== teacherId)
    );
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
        <Route path="/teachers" element={<Teachers onAddTeacher={handleAddTeacher} />} />
        <Route
          path="/teachers/:id"
          element={
            <TeacherDetails
              teachers={teachers}
              onUpdateTeacher={handleUpdateTeacher}
              onDeleteTeacher={handleDeleteTeacher}
            />
          }
        />
        <Route path="/teacherslist" element={<TeachersList teachers={teachers} />} />
        <Route
          path="/teacherdetails/:id"
          element={
            <TeacherDetails
              teachers={teachers}
              onUpdateTeacher={handleUpdateTeacher}
              onDeleteTeacher={handleDeleteTeacher}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
