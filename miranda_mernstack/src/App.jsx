import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect,useState } from "react";
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
        .then((response) => response.json())
        .then(data => {
            console.log(data)
        });
    },[]);

    app.get("/api/students", async (req, res) => {
      const students = await Student.find();
      res.json(students);
    })

    const [students, setStudents] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/api/students")
       .then(response => response.json())
       .then(data => {
        setStudents(data);

       });
    }, []);

  const handleAddStudent = (studentDetails) => {
    const newStudent = {
      ...studentDetails,
      id: Math.max(...students.map((student) => student.id), 0) + 1,
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
      id: Math.max(...teachers.map((teacher) => teacher.id), 0) + 1,
    };

    setTeachers((currentTeachers) => [...currentTeachers, newTeacher]);
    return newTeacher;
  };

  const handleUpdateTeacher = (teachersId, teacherDetails) => {
    setTeachers((currentTeachers) =>
      currentTeachers.map((teacher) =>
        teacher.id === teachersId ? { ...teacher, ...teacherDetails } : teacher
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

        <Route
          path="/teachers"
          element={<Teachers onAddTeacher={handleAddTeacher} />}
        />

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

        <Route
          path="/teacherslist"
          element={<TeachersList teachers={teachers} />}
        />

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






