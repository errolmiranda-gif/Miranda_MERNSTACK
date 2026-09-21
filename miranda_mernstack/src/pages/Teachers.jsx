import TeacherCard from "../components/Teachers.jsx";
import { useState } from "react";

export default function Teachers({ teachers, onAddTeacher }) {
  const [form, setForm] = useState({ name: "", specialization: "" });
  const [recentTeacher, setRecentTeacher] = useState(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTeacher = onAddTeacher({ ...form });
    setRecentTeacher(newTeacher);
    setForm({ name: "", specialization: "" });
  };

  return (
    <main className="teachers-page-shell">
      <h1>Teachers</h1>
      <div className="Teacher-top-section">
        <form className="Teacher-form" onSubmit={handleSubmit}>
          <h2>Add Teacher</h2>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Name" />
          <input required name="specialization" value={form.specialization} onChange={handleChange} placeholder="Specialization" />
          <button className="primary-button" type="submit">Add Teacher</button>
        </form>

        <aside className="teachers-recent-panel">
          <h2>Recently added</h2>
          {recentTeacher ? (
            <TeacherCard {...recentTeacher} />
          ) : (
            <p className="teachers-recent-empty">Your newest teacher will appear here.</p>
          )}
        </aside>
      </div>

      <section className="Teacher-list">
        <h2>Teacher list ({teachers.length})</h2>
        {teachers.map((teacher) => <TeacherCard key={teacher.id} {...teacher} />)}
      </section>
    </main>
  );
}