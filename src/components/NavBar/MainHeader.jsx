import {Link} from 'react-router-dom';
import Home from "../../views/home/home"
import familiaTurista from '../../images/familiaTurista.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">

        <div className="main__header-left">       
        <h4>#1000ActivitiesAroundTheWorld</h4>
        <h1>Let's Explore The World Together</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi non perferendis molestiae ad doloremque! Quasi atque sit soluta? Illo repellendus deleniti nulla commodi voluptatem sequi, in officia dolorum esse dicta.
        </p>
        <Link to="/create" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={familiaTurista} alt='Main Header Image'/>
          </div>
        </div>
        {/* <Home/> */}
      </div>
    </header>
  )
}

export default MainHeader