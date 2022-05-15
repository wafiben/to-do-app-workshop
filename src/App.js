import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardTask from "./Components/CardTask";
import AddTask from "./Components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "coding", done: false },
    { id: 2, description: "doing my homework", done: false },
  ]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask=(id)=>{
     setTasks(tasks.filter((elt)=>elt.id!=id)) 
  }
  return (
    <div style={{ textAlign: "center" }}>
      <AddTask addTask={addTask} />
      <div style={{ marginLeft: "auto" }}>
        { tasks.length>0 ?  tasks.map((elt, index) => (
          <CardTask key={elt.id} task={elt} index={index} deleteTask={deleteTask}  />
        )):'no task to show'}
      </div>
    </div>
  );
}

export default App;
