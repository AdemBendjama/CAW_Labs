import { useState } from 'react'

function NewTaskForm(props) {

    const [userInput, setUserInput] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        let task = event.target[0].value
        props.onAddTask({
            description: task,
            subTasks: [],
        })

    }

    const changeHandler = (event) => {
        setUserInput(event.target.value)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="task"></label>
                <input type="text" name="task" id="task" value={userInput}
                    onChange={changeHandler} />

                <button type="submit">Add Task</button>
            </form>
        </>
    )
}

export default NewTaskForm;
