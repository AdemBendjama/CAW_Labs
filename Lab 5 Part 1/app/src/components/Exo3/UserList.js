import UserItem from "./UserItem";

function UserList(props) {

    return (
        <>
            <h3>User List :</h3>
            <ul>
                {props.users.map((user) => <UserItem user={user} key={user.id} />)}
            </ul>
        </>
    )
}

export default UserList;