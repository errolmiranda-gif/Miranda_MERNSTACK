import TeacherCard from "../components/Teachers.jsx";

export default function TeachersList({ teachers }) {
  return (
    <main className="teachers-page-shell">
      <h1>Teachers List</h1>
      <section className="teacher-list">
        <h2>Teacher list ({teachers.length})</h2>
        {teachers.length ? teachers.map((teacher) => (
          <TeacherCard key={teacher.id} {...teacher} />
        )) : <p>No teachers have been added yet.</p>}
      </section>
    </main>
  );
}
