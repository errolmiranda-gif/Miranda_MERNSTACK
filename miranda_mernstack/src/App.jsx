import Student from "./components/StudentComponent.jsx"
import Subject from "./components/SubjectComponent.jsx"
function App (){


  return(
<div>

<Student name= "Errol" age={20} section={3-1} student_no={202400153} course="BSIT"/><hr></hr>
<Student name= "Ranehart" age={20} section={3-1} student_no={202404078} course="BSIT"/><hr></hr>
<Student name= "Buboy" age={20} section={3-1} student_no={202400152} course="BSIT"/><hr></hr>
<Student name= "Keybin" age={20} section={3-1} student_no={202404070} course="BSIT"/><hr></hr>
<Student name= "Jerawrr" age={20} section={3-1} student_no={202404080} course="BSIT"/><hr></hr>

<Subject Schedulecode={202612827} Subjectcode="ITEC 80" Description="INTRODUCTION TO HUMAN COMPUTER INTERACTION" Type="ENGR" Units={3} Status="NOT GRADED"/><hr></hr>


</div>
  )
}

export default App;
