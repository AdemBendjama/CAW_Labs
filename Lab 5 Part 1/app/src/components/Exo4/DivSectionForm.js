

function DivSectionForm(props) {
    return (
        <form onSubmit={props.onSubmit} >
            <div style={{ display: "flex", flexDirection: 'column' }}>
                <label >Height</label>
                <input type="number" min={1} max={1080} id="height" required />
                <label >Width</label>
                <input type="number" min={1} max={1920} id="width" required />
                <label >Color</label>
                <select id="color">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="magenta">Magenta</option>
                    <option value="cyan">Cyan</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>
            </div>
            <button type="submit">Add Div</button>
        </form>
    )
}

export default DivSectionForm;