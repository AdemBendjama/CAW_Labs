
import SubTask from './SubTask';


function Task(props) {

    const deleteTaskHandler = (event) => {
        event.target.parentElement.parentElement.remove()
    }

    const handleAddSubTask = (taskID) => {
        props.onAddSubTask(taskID)
    }


    return (
        <>
            <div className="task bg-blue-100 border border-blue-300 p-4 mb-4 rounded-md" style={{ width: '700px' }}>
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold overflow-hidden overflow-wrap break-all">
                        Task {props.index + 1}: {props.task.description}
                    </h4>
                    <button
                        onClick={deleteTaskHandler}
                        className="text-red-700 hover:text-red-900 focus:outline-none text-4xl font-bold ml-16"
                    >
                        X
                    </button>
                </div>
                <button
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => handleAddSubTask(props.task.id)}
                >
                    Add Sub-Task
                </button>

                <div className="subTasks mt-4">
                    <ul className="list-none">
                        {props.task.subTasks.map((subtask, index) => (
                            <li key={subtask.id}>
                                <SubTask
                                    subtask={subtask.description}
                                    index={index}
                                    taskID={props.task.id}
                                    onSubTaskEdit={props.onSubTaskEdit}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Task;
