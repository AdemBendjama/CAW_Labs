
function UserItem(props) {

    return (
        <li>
            {props.user.username}
            <button onClick={props.onClick}>Delete</button>
        </li>
    )
}

export default UserItem;