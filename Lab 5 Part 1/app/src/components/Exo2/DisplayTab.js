

function DisplayTab(props) {

    const handleClickRemove = (event) => {
        event.target.remove()
    }

    return (
        <div>
            <ul>
                {props.tab.map((item, index) => <li key={index} onClick={handleClickRemove}>Element {index + 1} is : {item}</li>)}
            </ul>
        </div>
    )
}

export default DisplayTab; 