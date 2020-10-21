import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import NewTask from "./NewTask";
import {deleteTask, finishTask, getTasks, addTask} from "./api/tasks";

import Tasks from "./Tasks";

function App() {

    const [tasks, setTasks] = useState([])
    useEffect(() => {
        getTasks(data => setTasks(data));
    }, [])

    const onNewTask = (e) => {
        addTask(e , (data) => setTasks(prev => [...prev, data.data]))
    }

    const onDelete = (e) => {
        deleteTask(e, (id) => setTasks(prev => prev.filter(task => task.id !== id)));
    }

    const onFinish = (e) => {
        console.log("otototot")

        finishTask(e, (id) => {
            setTasks(prev => {
                    prev.forEach(task => task.id === id ? task.status = "closed"  : null);
                    return prev;
                }
            )
        })

        console.log(tasks);
        setTasks(tasks);

    }

    return (
        <>
            <NewTask
                handleOnNewTask={onNewTask}
            />
            <Tasks tasksList={tasks}
                   handleOnDelete={onDelete}
                   handleOnFinish={onFinish}/>


        </>

    )
}

ReactDOM.render(<App/>, document.querySelector("#app"));