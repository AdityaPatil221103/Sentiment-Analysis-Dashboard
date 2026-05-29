import profilePic from './assets/image.png'

function Card(){


    return(
        <div className="card">
            <img  className = "card-image" src={profilePic} alt="profile pic"></img>
            <h2 className = "card-title"> Aditya</h2>
            <p className = "card-text">i play video game</p>
        </div>
    );

}

export default Card;