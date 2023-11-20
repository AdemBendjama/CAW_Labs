import { useState } from "react";

function ButtonUI(props) {
    const [clicked, setClicked] = useState(null)

    const handleClick = () => {
        if (clicked === null) setClicked(true)

        if (clicked) {
            setClicked(false)
        }
        else {
            setClicked(true)
        }

    }

    return (
        <div>
            <button onClick={handleClick}>Button #{props.id} ClickMe</button>
            {clicked !== null && (clicked ? <p>Button #{props.id} was clicked</p> : <p>Button #{props.id} was not clicked</p>)}

        </div>
    )
}

export default ButtonUI;