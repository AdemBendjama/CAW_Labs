import { useState } from 'react'

function NewTaskForm(props) {

    const [userInput, setUserInput] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        let task = event.target[0].value

        if (task !== '') {
            props.onAddTask({
                description: task,
                subTasks: [],
            })
        }
    }

    const changeHandler = (event) => {
        setUserInput(event.target.value)
    }

    return (
        <>
            <form onSubmit={submitHandler} className="mb-4">
                <label htmlFor="task" className="block text-sm font-medium text-gray-700">
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={userInput}
                    onChange={changeHandler}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="mt-2 ml-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Add Task
                </button>
            </form>
        </>
    )
}

export default NewTaskForm;
