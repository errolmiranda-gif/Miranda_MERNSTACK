import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar.jsx"
import Home from "./pages/Home.jsx"
import Student from "./components/Student.jsx"
import StudentDetails from "./pages/StudentDetails.jsx"
function App (){


  return(
<div>
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/Students" element={<Student />} />
    <Route path="/StudentDetails" element={<StudentDetails />} />
  </Routes>
</BrowserRouter>

<Student name= "Errol" age={20} section={3-1} student_no={202400153} course="BSIT"/><hr></hr>
<StudentDetails Sex="Male" Status="Active" Religion="Catholic" Address="Indang,Etivac"/><hr></hr>
<Student name= "Ranehart" age={20} section={3-1} student_no={202404078} course="BSIT"/><hr></hr>
<StudentDetails Sex="Male" Status="Active" Religion="Catholic" Address="Indang,Etivac"/><hr></hr>
<Student name= "Buboy" age={20} section={3-1} student_no={202400152} course="BSIT"/><hr></hr>
<StudentDetails Sex="Male" Status="Active" Religion="Catholic" Address="Indang,Etivac"/><hr></hr>
<Student name= "Keybin" age={20} section={3-1} student_no={202404070} course="BSIT"/><hr></hr>
<StudentDetails Sex="Male" Status="Active" Religion="Catholic" Address="Indang,Etivac"/><hr></hr>
<Student name= "Jerawrr" age={20} section={3-1} student_no={202404080} course="BSIT"/><hr></hr>
<StudentDetails Sex="Male" Status="Active" Religion="Catholic" Address="Indang,Etivac"/><hr></hr>


</div>
  )
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";

function App() {
  return (
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
                                                                                  );
                                                                                  }

                                                                                  export default App;
