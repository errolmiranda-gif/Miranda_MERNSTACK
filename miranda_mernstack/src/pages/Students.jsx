import Student from "../components/Student.jsx";
import { useState } from "react";

export default function Students({ students, onAddStudent }) {
  const [form, setForm] = useState({ name: "", age: "", section: "", student_no: "", course: "" });
  const [recentStudent, setRecentStudent] = useState(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = onAddStudent({ ...form, age: Number(form.age) });
    setRecentStudent(newStudent);
    setForm({ name: "", age: "", section: "", student_no: "", course: "" });
  };

  return (
    <main className="page-shell">
      <h1>Students</h1>
      <div className="student-top-section">
        <form className="student-form" onSubmit={handleSubmit}>
          <h2>Add student</h2>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Name" />
          <input required min="1" type="number" name="age" value={form.age} onChange={handleChange} placeholder="Age" />
          <input required name="section" value={form.section} onChange={handleChange} placeholder="Section" />
          <input required name="student_no" value={form.student_no} onChange={handleChange} placeholder="Student number" />
          <input required name="course" value={form.course} onChange={handleChange} placeholder="Course" />
          <button className="primary-button" type="submit">Add Student</button>
        </form>

        <aside className="recent-panel">
          <h2>Recently added</h2>
          {recentStudent ? (
            <Student {...recentStudent} />
          ) : (
            <p className="recent-empty">Your newest student will appear here.</p>
          )}
        </aside>
      </div>

      <section className="student-list">
        <h2>Student list ({students.length})</h2>
        {students.map((student) => <Student key={student.id} {...student} />)}
      </section>
    </main>
  );
}