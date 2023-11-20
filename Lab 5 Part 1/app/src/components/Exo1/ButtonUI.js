import { useState } from "react";

function ButtonUI() {
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
            <button onClick={handleClick}>ClickMe</button>
            {clicked !== null && (clicked ? <p>Clicked</p> : <p>Not Clicked</p>)}

        </div>
    )
}

export default ButtonUI;