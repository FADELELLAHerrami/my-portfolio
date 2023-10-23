
import twitterIcon from '../assets/buttons/twitter.svg';
import facebookIcon from '../assets/buttons/facebook.svg';
import githubIcon from '../assets/buttons/github.svg';
import instagramIcon from '../assets/buttons/instagram.svg';

export default function Footer(){
    return(
        <footer>
            <a href="https://twitter.com/home?lang=fr"><img src={twitterIcon} alt="twitter Icon" /></a>
            <a href="https://web.facebook.com/profile.php?id=100092612467556"><img src={facebookIcon} alt="facebook Icon" /></a>
            <a href="https://github.com/FADELELLAHerrami"><img src={githubIcon} alt="github Icon" /></a>
            <a href="https://www.instagram.com/fadelellaherrami9/"><img src={instagramIcon} alt="instagram Icon" /></a>
        </footer>
    )
}