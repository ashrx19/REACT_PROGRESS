import proptypes from 'prop-types'

function UserGreeting(Props){

    const loged=<h2 className="loged">Welcome {Props.username}</h2>
    const notloged=<h2 className="notloged">Please login !</h2>

    return(
        Props.isLogged? loged : notloged 
    );

}

UserGreeting.typess={
  isLogged: proptypes.bool,
  username: proptypes.string
}

UserGreeting.dummy={
  isLogged: false,
  username: "Bot"
}



export default UserGreeting