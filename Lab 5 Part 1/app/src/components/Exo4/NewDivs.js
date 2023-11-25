import NewDivsItem from "./NewDivsItem"
function NewDivs(props) {

    const divs = props.newDivs.map((div => {
        return <NewDivsItem key={div.id} height={div.height} width={div.width} color={div.color} />
    }))

    return (
        <>
            {divs}
        </>
    )
}

export default NewDivs;