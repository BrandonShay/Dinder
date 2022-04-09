import { Link } from 'react-router-dom';
import FoodHead from '../../images/foodHead.jpg';
import Logo from '../../images/logo.png';
import { Row, Col, Container, Accordion } from 'react-bootstrap';

const Home = () => (
  <>
    <img src={FoodHead} width='100%' alt='food header' />
    <h3>Match Your Meals</h3>
    <p>Dinder is the new way to decide what's for dinner.</p>
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
    <Container>
      <Row>
        <Col l={6}>
          <img src={Logo} width='50%' alt='logo' />
        </Col>
        <Col l={6}>
          {/* <h3>Check out Pawsome Cats while enjoying some Kit-teas</h3>
          <p>Meow Meow Meow Meow Meow!</p> */}
        </Col>
      </Row>
    </Container>
    {/* <h3>FAQ</h3>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What kind of cats are there?</Accordion.Header>
        <Accordion.Body>
          There are all sorts of cats with different names, breeds and sizes.
          You can also bring in your cat as well and import them to our wide
          data selection.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is it legal to have this many cats?</Accordion.Header>
        <Accordion.Body>
          All the cats will have to have a registry to be added into our site. Then
          One everything with all of the fields filled out, that would be all the info
          we need to verify our furry friends.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Where did the mascot come from?</Accordion.Header>
        <Accordion.Body>
          Our mascot comes from a long line of strays that we now have put as a 
          heel into our marketing side. She is well groomed and mannered, and loves 
          all kinds of milk.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
  </>
)

export default Home;