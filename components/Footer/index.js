import styles from './Footer.module.css';
import './Footer.module.css';
// import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <div className={styles.FooterSignature}>
            <div className={styles.Identity}>
                <img src='/Aslam.png' />
                <h4>Develop by Aslam Baba</h4>
            </div>
            {/* <div className='SocialMedia'>
                <a href='https://facebook.com/aslambabaofficial' target='_blank' rel="noopener noreferrer"><FaFacebookSquare className='aslambabaSocialicons' /></a>
                <a href='https://instagram.com/aslambaba91r' target='_blank' rel="noopener noreferrer"><FaInstagram className='aslambabaSocialicons' /></a>
                <a href='https://github.com/aslambaba' target='_blank' rel="noopener noreferrer"><FaGithub className='aslambabaSocialicons' /></a>
                <a href='https://linkedin.com/in/aslamsarfraz/' target='_blank' rel="noopener noreferrer"><FaLinkedin className='aslambabaSocialicons' /></a>
             </div> */}
        </div>
    )
}

export default Footer;