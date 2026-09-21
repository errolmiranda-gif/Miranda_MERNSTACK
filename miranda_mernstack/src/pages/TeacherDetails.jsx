import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function TeacherDetails({ teachers, onUpdateTeacher, onDeleteTeacher }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const teacher = teachers.find(
        (teacher) => teacher.id === Number(id)
    );
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const isEditing = searchParams.get("edit") === "true";
    const [editForm, setEditForm] = useState(teacher ? {
        name: teacher.name,
        specialization: teacher.specialization,
    } : {});

    if (!teacher) {
        return (
            <main className="page-shell">
                <h1>Teacher Not Found</h1>
                <Link to="/teachers">Back to Teachers</Link>
            </main>
        );
    }

    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    const handleSave = () => {
        onUpdateTeacher(teacher.id, { ...editForm });
        navigate(`/teachers/${teacher.id}`);
    };

    const handleDelete = () => {
        onDeleteTeacher(teacher.id);
        navigate("/teachers");
    };

    return (
        <main className="page-shell details-page">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-avatar">{teacher.name.charAt(0)}</div>
                    <div>
                        <p className="profile-label">Teacher details</p>
                        {isEditing ? (
                            <input className="profile-name-input" required name="name" value={editForm.name} onChange={handleChange} />
                        ) : <h1>{teacher.name}</h1>}
                        <span className="profile-course">{teacher.specialization}</span>
                    </div>
                </div>
                <div className="profile-grid">
                    <div><span>Name</span>{isEditing ? <input required type="text" name="name" value={editForm.name} onChange={handleChange} /> : <strong>{teacher.name}</strong>}</div>
                    <div><span>Specialization</span>{isEditing ? <input required name="specialization" value={editForm.specialization} onChange={handleChange} /> : <strong>{teacher.specialization}</strong>}</div>
                </div>
                <div className="profile-actions">
                    {isEditing ? <><button className="primary-button" type="button" onClick={handleSave}>Save changes</button><Link className="secondary-button" to={`/teachers/${teacher.id}`}>Cancel</Link></> : <><Link className="primary-button" to={`/teachers/${teacher.id}?edit=true`}>Edit teacher</Link><button className="delete-button" type="button" onClick={() => setIsDeleteOpen(true)}>Delete</button></>}
                </div>
            </div>
            {isDeleteOpen && (
                <div className="delete-modal-backdrop" role="presentation" onClick={() => setIsDeleteOpen(false)}>
                    <div className="delete-modal" role="dialog" aria-modal="true" aria-labelledby="delete-title" onClick={(event) => event.stopPropagation()}>
                        <div className="delete-icon">!</div>
                        <h2 id="delete-title">Delete teacher?</h2>
                        <p>This will permanently remove <strong>{teacher.name}</strong> from the directory.</p>
                        <div className="modal-actions">
                            <button className="secondary-button" type="button" onClick={() => setIsDeleteOpen(false)}>Keep teacher</button>
                            <button className="delete-button" type="button" onClick={handleDelete}>Delete teacher</button>
                        </div>
                    </div>
                </div>
            )}
            <Link to="/teachers">Back to teachers</Link>
        </main>
    );
}