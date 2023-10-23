import img1 from "../assets/errami.jpg";


export default function Image(){
    return(
        <header>
            <img src={img1} className="image" />
            <div className="infos">
                <p className="name">Fadel ellah ERRAMI</p>
                <p className="profession">Front-end developer</p>
                <a href="https://open.spotify.com/intl-fr">errami.website</a>
            </div>
        </header>
        
    )
    
}
 