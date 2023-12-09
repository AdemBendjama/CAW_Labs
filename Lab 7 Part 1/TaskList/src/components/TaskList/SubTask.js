import { useState } from "react";



function SubTask(props) {

    const [isDone, setIsDone] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(props.subtask);

    const handleClick = () => {
        setIsDone(true);
    };

    const handleEditing = () => {
        if (isEditing) {
            props.onSubTaskEdit(props.taskID, props.subtask.id, description)
        }
        setIsEditing(!isEditing);
    };

    const handleSubTaskChange = (event) => {
        setDescription(event.target.value);
    };

    return (
        <>
            <li>
                Sub-task {props.index + 1}:

                {isEditing ? (
                    <input
                        type="text"
                        id="subtask-description"
                        value={description}
                        onChange={handleSubTaskChange}
                    />
                ) : (
                    description
                )}

                {!isEditing &&
                    <button className="doneButton" onClick={handleClick}>
                        {isDone ? '✔' : 'NOT DONE'}
                    </button>
                }

                {!isDone && (
                    <button className="editButton" onClick={handleEditing}>
                        {isEditing ? 'Finish Edit' : 'Edit'}
                    </button>
                )}
            </li>
        </>
    )
}

export default SubTask;
