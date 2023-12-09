import { useState } from "react";



function SubTask(props) {

    const [done, setDone] = useState(false)
    const [editing, setEditing] = useState(false)
    const [description, setDescription] = useState(props.subtask)

    const handleClick = () => {
        setDone(true)

    }

    const handleEditing = () => {
        if (editing) {
            setEditing(false)

        } else {
            setEditing(true)

        }

    }

    const handleSubTaskChange = (event) => {
        setDescription(event.target.value)
    }

    return (
        <>
            <li>

                sub-task {props.index + 1}:
                {editing
                    ? <input type="text" id="subtask-description" value={description} onChange={handleSubTaskChange} />
                    : props.subtask}
                <button className="doneButton" onClick={handleClick}>{done ? '✔' : 'NOT DONE'}</button>
                <button className="editButton" onClick={handleEditing}>Edit</button>
            </li>
        </>
    )
}

export default SubTask;
