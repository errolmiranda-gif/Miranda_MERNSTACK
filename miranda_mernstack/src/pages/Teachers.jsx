import { useState } from "react";

export default function Teachers({ onAddTeacher }) {
  const [form, setForm] = useState({ name: "", specialization: "" });
  const [savedMessage, setSavedMessage] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSavedMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTeacher({ ...form });
    setSavedMessage(`${form.name} was added.`);
    setForm({ name: "", specialization: "" });
  };

  return (
    <main className="teachers-page-shell">
      <h1>Add Teacher</h1>
      <form className="teacher-form" onSubmit={handleSubmit}>
        <input required name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input required name="specialization" value={form.specialization} onChange={handleChange} placeholder="Specialization" />
        <button className="primary-button" type="submit">Add Teacher</button>
      </form>
      {savedMessage && <p role="status">{savedMessage}</p>}
    </main>
  );
}
