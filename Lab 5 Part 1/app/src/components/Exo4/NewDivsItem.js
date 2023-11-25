
function NewDivsItem(props) {

    let height = parseFloat(props.height)
    let width = parseFloat(props.width)
    let color = props.color

    return (
        <>
            <div style={{ height: height, width: width, backgroundColor: color, margin: '10px 0 10px 0' }}>
            </div>
        </>
    )
}

export default NewDivsItem;