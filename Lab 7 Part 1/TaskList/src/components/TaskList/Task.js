
import SubTask from './SubTask';


function Task(props) {

    const deleteTaskHandler = (event) => {
        event.target.parentElement.parentElement.remove()
    }

    const handleClick = (index) => {
        props.onAddSubTask(index)
    }


    return (
        <>
            <div className="task">
                <h4>Task {props.index + 1}: {props.task}<button onClick={deleteTaskHandler}>X</button></h4>
                <button className="subTaskButton" onClick={() => handleClick(props.index)} >Add Sub-Tasks</button>

                <div className="subTasks">
                    <ul>
                        {props.subTasks.map((subtask, index) =>
                            <SubTask key={subtask.id} subtask={subtask.description} index={index}></SubTask>
                        )}
                    </ul>
                </div>

            </div >
        </>
    )
}

export default Task;
