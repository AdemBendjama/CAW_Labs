import DivSectionForm from "./DivSectionForm";
import NewDivs from "./NewDivs";
import { useState } from 'react'

function DivSection(props) {

    const [newDivs, setNewDivs] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const height = event.target.height.value;
        const width = event.target.width.value;
        const color = event.target.color.value;

        const newDivParam = { id: Math.random().toString(), height: height, width: width, color }

        setNewDivs((prevState) => [...prevState, newDivParam])

    }

    return (
        <div>
            <DivSectionForm onSubmit={handleFormSubmit} />
            <NewDivs newDivs={newDivs} />
        </div>
    )
}

export default DivSection;