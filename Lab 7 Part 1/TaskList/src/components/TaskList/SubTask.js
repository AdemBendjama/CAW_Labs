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
            <li className="mb-2">
                <span className="font-semibold">Sub-task {props.index + 1} : &nbsp;</span>

                {isEditing ? (
                    <input
                        type="text"
                        id="subtask-description"
                        value={description}
                        onChange={handleSubTaskChange}
                        className="ml-2 p-2 border border-gray-300 rounded-md"
                    />
                ) : (
                    <span className={isDone ? 'line-through' : ''}>{description}</span>
                )}


                {!isDone && (
                    <button
                        className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-700 focus:outline-none"
                        onClick={handleEditing}
                    >
                        {isEditing ? 'Finish Edit' : 'Edit'}
                    </button>
                )}

                {!isEditing && (
                    <button
                        className={`${isDone ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                            } p-2 rounded-md ml-2 focus:outline-none`}
                        onClick={handleClick}
                    >
                        {isDone ? '✔' : 'Complete'}
                    </button>
                )}
            </li>
        </>
    )
}

export default SubTask;
