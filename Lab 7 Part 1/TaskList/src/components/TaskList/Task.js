
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
            <div className="task">
                <h4>Task {props.index + 1}: {props.task.description}<button onClick={deleteTaskHandler}>X</button></h4>
                <button className="subTaskButton" onClick={() => handleAddSubTask(props.task.id)} >Add Sub-Tasks</button>

                <div className="subTasks">
                    <ul>
                        {props.task.subTasks.map((subtask, index) =>
                            <SubTask
                                key={subtask.id}
                                subtask={subtask.description}
                                index={index}
                                taskID={props.task.id}
                                onSubTaskEdit={props.onSubTaskEdit}
                            />
                        )}
                    </ul>
                </div>

            </div >
        </>
    )
}

export default Task;
