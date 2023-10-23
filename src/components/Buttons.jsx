import EmailIcon from '../assets/buttons/email.svg';
import LindinIcon from '../assets/buttons/linkdin.svg';

export default function Buttons(){
    return(
        <div className='Buttons'>
            <a className='email'><img src={EmailIcon} alt="Email Icon" /><p>Email</p></a>
            <a className='linkdin'><img src={LindinIcon} alt="linkdin Icon" /><p>LinkdIn</p></a>
        </div>
    )
}