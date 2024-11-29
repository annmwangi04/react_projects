import React, { useReducer, useRef } from 'react';
import './App.css';

// Initial state for the student list
const initialState = {
  students: [],
  studentDetails: {
    name: '',
    email: '',
    course: '',
    grade: '',
    profilePicture: '',
    isActive: true
  },
  editingStudent: null,
};

// Reducer function (as shown above)
function studentReducer(state, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      if (state.editingStudent !== null) {
        return {
          ...state,
          students: state.students.map((student) =>
            student.id === state.editingStudent
              ? { ...student, ...state.studentDetails }
              : student
          ),
          studentDetails: { name: '', email: '', course: '', grade: '', profilePicture: '', isActive: true },
          editingStudent: null,
        };
      } else {
        return {
          ...state,
          students: [
            ...state.students,
            {
              id: Date.now(),
              ...state.studentDetails,
            },
          ],
          studentDetails: { name: '', email: '', course: '', grade: '', profilePicture: '', isActive: true },
        };
      }
    case 'SET_STUDENT_FIELD':
      return {
        ...state,
        studentDetails: { ...state.studentDetails, [action.payload.field]: action.payload.value },
      };
    case 'SET_PROFILE_PICTURE':
      return {
        ...state,
        studentDetails: { ...state.studentDetails, profilePicture: action.payload },
      };
    case 'TOGGLE_STUDENT':
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload ? { ...student, isActive: !student.isActive } : student
        ),
      };
    case 'SET_EDITING_STUDENT':
      const studentToEdit = state.students.find((student) => student.id === action.payload);
      return {
        ...state,
        studentDetails: { ...studentToEdit },
        editingStudent: action.payload,
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(studentReducer, initialState);
  const profilePictureRef = useRef();

  const handleInputChange = (event, field) => {
    dispatch({ type: 'SET_STUDENT_FIELD', payload: { field, value: event.target.value } });
  };

  const handleProfilePictureChange = (event) => {
    const file = profilePictureRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({ type: 'SET_PROFILE_PICTURE', payload: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddOrUpdateStudent = (event) => {
    event.preventDefault();
    if (state.studentDetails.name.trim() && state.studentDetails.email.trim()) {
      dispatch({ type: 'ADD_STUDENT' });
    }
  };

  const handleEditStudent = (id) => {
    dispatch({ type: 'SET_EDITING_STUDENT', payload: id });
  };

  const handleToggleStudent = (id) => {
    dispatch({ type: 'TOGGLE_STUDENT', payload: id });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Student Management System</h1>
      </header>
      <div className="container">
        <form onSubmit={handleAddOrUpdateStudent} className="input-container">
          <input
            type="text"
            placeholder="Name"
            value={state.studentDetails.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
          <input
            type="email"
            placeholder="Email"
            value={state.studentDetails.email}
            onChange={(e) => handleInputChange(e, 'email')}
          />
          <input
            type="text"
            placeholder="Course"
            value={state.studentDetails.course}
            onChange={(e) => handleInputChange(e, 'course')}
          />
          <input
            type="text"
            placeholder="Grade"
            value={state.studentDetails.grade}
            onChange={(e) => handleInputChange(e, 'grade')}
          />
          <input
            type="file"
            accept="image/*"
            ref={profilePictureRef}
            onChange={handleProfilePictureChange}
          />
          {state.studentDetails.profilePicture && (
            <img
              src={state.studentDetails.profilePicture}
              alt="Profile Preview"
              className="profile-preview"
            />
          )}
          <button type="submit">
            {state.editingStudent ? 'Update' : 'Add'}
          </button>
        </form>

        <div className="student-list">
          {state.students.map((student) => (
            <div key={student.id} className={`student-item ${student.isActive ? 'active' : 'inactive'}`}>
              {student.profilePicture && (
                <img src={student.profilePicture} alt={`${student.name}'s profile`} className="student-pic" />
              )}
              <div>
                <h3>{student.name}</h3>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Grade:</strong> {student.grade}</p>
                <button onClick={() => handleToggleStudent(student.id)}>
                  {student.isActive ? 'Mark Inactive' : 'Mark Active'}
                </button>
                <button onClick={() => handleEditStudent(student.id)}>
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="App-footer">
        <p>© 2024 Student Management System</p>
      </footer>
    </div>
  );
}

export default App;
