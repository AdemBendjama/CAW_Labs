
function NewDivsItem(props) {

    let height = parseFloat(props.height)
    let width = parseFloat(props.width)
    let color = props.color
    let margin = '10px 0 10px 0'

    return (
        <>
            <div style={{ height, width, backgroundColor: color, margin }}>
            </div>
        </>
    )
}

export default NewDivsItem;