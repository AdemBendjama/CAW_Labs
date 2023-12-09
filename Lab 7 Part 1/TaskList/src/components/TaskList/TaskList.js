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
            <li key={task.id} className="list-none">
                <Task
                    task={task}
                    index={index}
                    onAddSubTask={handleNewSubTask}
                    onSubTaskEdit={handleSubTaskEdit}
                />
            </li>
        )
    })

    return (
        <>
            <div className="task-list-container p-4 flex flex-col items-start">
                <NewTaskForm onAddTask={handleNewTask} />

                {/* Content aligned to the left */}
                <ul className="w-70vw pl-0">
                    {taskComponents}
                </ul>
            </div>
        </>
    )
}

export default TaskList;
