import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function StudentDetails({ students, onUpdateStudent, onDeleteStudent }) {
      const { id } = useParams();
      const navigate = useNavigate();
      const [searchParams] = useSearchParams();

      const student = students.find(
            (student) => student.id === Number(id)
      );
      const [isDeleteOpen, setIsDeleteOpen] = useState(false);
      const isEditing = searchParams.get("edit") === "true";
      const [editForm, setEditForm] = useState(student ? {
            name: student.name,
            age: student.age,
            section: student.section,
            student_no: student.student_no,
            course: student.course,
      } : {});

      if (!student) {
            return (
                  <main className="page-shell">
                        <h1>Student Not Found</h1>

                        <Link to="/students">
                              Back to Students
                        </Link>
                  </main>
            );
      }

      const handleChange = (event) => {
            setEditForm({ ...editForm, [event.target.name]: event.target.value });
      };

      const handleSave = (event) => {
            onUpdateStudent(student.id, { ...editForm, age: Number(editForm.age) });
            navigate(`/students/${student.id}`);
      };

      const handleDelete = () => {
            onDeleteStudent(student.id);
            navigate("/students");
      };

      return (
            <main className="page-shell details-page">
                  <div className="profile-card">
                        <div className="profile-header">
                              <div className="profile-avatar">{student.name.charAt(0)}</div>
                              <div>
                                    <p className="profile-label">Student details</p>
                                    {isEditing ? (
                                          <input className="profile-name-input" required name="name" value={editForm.name} onChange={handleChange} />
                                    ) : <h1>{student.name}</h1>}
                                    <span className="profile-course">{student.course} · Section {student.section}</span>
                              </div>
                        </div>
                        <div className="profile-grid">
                              <div><span>Age</span>{isEditing ? <input required min="1" type="number" name="age" value={editForm.age} onChange={handleChange} /> : <strong>{student.age}</strong>}</div>
                              <div><span>Student number</span>{isEditing ? <input required name="student_no" value={editForm.student_no} onChange={handleChange} /> : <strong>{student.student_no}</strong>}</div>
                              <div><span>Section</span>{isEditing ? <input required name="section" value={editForm.section} onChange={handleChange} /> : <strong>{student.section}</strong>}</div>
                              <div><span>Course</span>{isEditing ? <input required name="course" value={editForm.course} onChange={handleChange} /> : <strong>{student.course}</strong>}</div>
                              {!isEditing && <><div><span>Sex</span><strong>{student.sex || "Not provided"}</strong></div><div><span>Status</span><strong className="status-text">{student.status || "Active"}</strong></div><div><span>Religion</span><strong>{student.religion || "Not provided"}</strong></div><div><span>Address</span><strong>{student.address || "Not provided"}</strong></div></>}
                        </div>
                        <div className="profile-actions">
                              {isEditing ? <><button className="primary-button" type="button" onClick={handleSave}>Save changes</button><Link className="secondary-button" to={`/students/${student.id}`}>Cancel</Link></> : <><Link className="primary-button" to={`/students/${student.id}?edit=true`}>Edit student</Link><button className="delete-button" type="button" onClick={() => setIsDeleteOpen(true)}>Delete</button></>}
                        </div>
                  </div>
                  {isDeleteOpen && (
                        <div className="delete-modal-backdrop" role="presentation" onClick={() => setIsDeleteOpen(false)}>
                              <div className="delete-modal" role="dialog" aria-modal="true" aria-labelledby="delete-title" onClick={(event) => event.stopPropagation()}>
                                    <div className="delete-icon">!</div>
                                    <h2 id="delete-title">Delete student?</h2>
                                    <p>This will permanently remove <strong>{student.name}</strong> from the directory.</p>
                                    <div className="modal-actions">
                                          <button className="secondary-button" type="button" onClick={() => setIsDeleteOpen(false)}>Keep student</button>
                                          <button className="delete-button" type="button" onClick={handleDelete}>Delete student</button>
                                    </div>
                              </div>
                              
                        </div>
                  )}
                  <Link to="/students">
                        Back to Students
                  </Link>
            </main>
      );
}
