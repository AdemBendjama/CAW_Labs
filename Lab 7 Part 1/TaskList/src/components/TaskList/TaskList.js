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

    const handleNewSubTask = (index) => {
        let newTasks = [...tasks]
        let currentTask = tasks[index]
        let subTasks = currentTask.subTasks
        currentTask = { ...currentTask, subTasks: [...subTasks, { id: uuidv4(), description: 'New SubTask !' }] }
        newTasks[index] = currentTask
        setTasks(newTasks)
    }



    const list = tasks.map((task, index) => {
        return (
            <Task key={task.id} task={task.description} index={index} subTasks={task.subTasks} onAddSubTask={handleNewSubTask}></Task>
        )
    })
    return (
        <>
            <NewTaskForm onAddTask={handleNewTask}></NewTaskForm>
            {list}
        </>
    )
}

export default TaskList;
