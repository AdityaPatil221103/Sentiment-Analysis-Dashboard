function UserGreeting(props){

    return(props.isloggedIn ? <h2 className = "welcome-message">welcome {props.username}</h2> : 
                              <h2 className = "login-prompt">please log in</h2>);
}
export default UserGreeting