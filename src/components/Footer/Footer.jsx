import {Link} from 'react-router-dom'
import Logo from '../../images/WorldImage.png'
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur eaque quisquam, rerum saepe quas dolore dolorem. Enim ipsa modi, quos consequatur at adipisci iure! Aut dolorum atque placeat itaque!
                </p>
                <div className='footer__socials'>
                    <a href='https://facebook.com/' target="_blank" rel='noreferrer noopener'><AiFillFacebook/></a>
                    <a href='https://linkedin.com/' target="_blank" rel='noreferrer noopener'><AiOutlineLinkedin/></a>
                    <a href='https://instagram.com/' target="_blank" rel='noreferrer noopener'><BsInstagram/></a>
                    <a href='https://twitter.com/' target="_blank" rel='noreferrer noopener'><AiFillTwitterCircle/></a>
                </div>

            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/create">Plan An Activity</Link>

            </article>

        </div>
        <div className='footer__copyright'>
            <small>2023 JUAN ARENAS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer