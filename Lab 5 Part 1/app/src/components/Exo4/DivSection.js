import DivSectionForm from "./DivSectionForm";
import NewDivs from "./NewDivs";
import { useState } from 'react'

function DivSection(props) {

    const [newDivs, setNewDivs] = useState([])
    const [counter, setCounter] = useState(0)

    const handleFormSubmit = (event) => {

        event.preventDefault()

        const id = counter
        const height = event.target.height.value;
        const width = event.target.width.value;
        const color = event.target.color.value;

        const newDiv = { id, height, width, color }

        setCounter(counter + 1)
        setNewDivs((prevState) => [...prevState, newDiv])

    }

    return (
        <>
            <DivSectionForm onSubmit={handleFormSubmit} />
            <NewDivs newDivs={newDivs} />
        </>
    )
}

export default DivSection;