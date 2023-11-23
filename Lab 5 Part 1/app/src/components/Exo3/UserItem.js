
function UserItem(props) {

    return (
        <li onClick={props.onClick}>
            {props.user.username}
        </li>
    )
}

export default UserItem;