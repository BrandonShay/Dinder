import { Link } from 'react-router-dom';
import FoodHead from '../../images/foodHead.jpg';
import Logo from '../../images/logo.png';

const Home = () => (
  <>
    <img src={FoodHead} width='100%' alt='Food Header' />
    <h3>Medium header</h3>
    <p>text here</p>
    <Link to='/register'>
      <button>
        Sign Up
      </button>
    </Link>
    <Link to='/login'>
      <button>
        Login
      </button>
    </Link>
    <img src={Logo} width='50%' alt='logo' />
    <h3>Medium header</h3>
    <p>text here</p>
    <h3>FAQ</h3>
    <p>Accordian</p>
  </>
)

export default Home;