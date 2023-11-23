
function FormSubmit(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <label >Username :</label>
                <input type="text" id="username" />
                <br />
                <label >Password :</label>
                <input type="password" id='password' />
            </div>
            <button type="submit">Autenticate</button>
        </form>
    )
}


export default FormSubmit;