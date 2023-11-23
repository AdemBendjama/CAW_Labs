import UserItem from "./UserItem";

function UserList(props) {

    const handleClick = (event) => {
        event.target.parentElement.remove()
    }

    return (
        <>
            <h3>User List :</h3>
            <ul>
                {props.users.map((user) => <UserItem user={user} key={user.id} onClick={handleClick} />)}
            </ul>
        </>
    )
}

export default UserList;