import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/studentlist";

const app = () => {
  const [ students, setStudents] = useState ([]);
  const addStudents = (student) => {
    setStudents([...students, student]);
  };
return (
  <div className="App">
    <h1>Student Id: 101335986</h1>
    <h1>Student name: Md Emad Ahmad</h1>
    <h1>Student Information System</h1>
    <h5>Powered By: moxDroid labs inc. || Devops</h5>
    <StudentForm addStudent={addStudent} />
    Developerd By: Md Emad Ahmad
    <Studentlist students= {} />
  </div>
);
};
export default App;
