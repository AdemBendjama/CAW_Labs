import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewTaskForm from './NewTaskForm';
import Task from './Task';

function TaskList() {

    const [tasks, setTasks] = useState([])

    const handleNewTask = (task) => {
        let newTask = {
            id: uuidv4(),
            ...task
        }
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    const handleNewSubTask = (taskID) => {
        setTasks((prevTasks) => prevTasks.map((task) =>
            task.id === taskID ? {
                ...task,
                subTasks: [...task.subTasks, { id: uuidv4(), description: 'New SubTask !' }]
            }
                : task
        ))
    }

    const handleSubTaskEdit = (taskID, subtaskID, description) => {
        setTasks((prevTasks) => prevTasks.map((task) =>
            task.id === taskID ? {
                ...task,
                subTasks: task.subTasks.map((subtask) =>
                    subtask.id === subtaskID ? {
                        ...subtask,
                        description: description
                    } : (
                        subtask
                    )
                )

            } : (
                task
            )
        ))
    }



    const taskComponents = tasks.map((task, index) => {
        return (
            <Task
                key={task.id}
                task={task}
                index={index}
                onAddSubTask={handleNewSubTask}
                onSubTaskEdit={handleSubTaskEdit}
            />
        )
    })

    return (
        <>
            <NewTaskForm onAddTask={handleNewTask}></NewTaskForm>
            {taskComponents}
        </>
    )
}

export default TaskList;
