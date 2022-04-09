import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FoodConsumer } from '../../providers/FoodProvider';

const FoodShow = ({ id, food_name, food_type, image, deleteFood }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{food_name}</Card.Title>
          <Button 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row md={2}>
              <Col>
                <h1>{food_name}</h1>
                <h4>Food Type: {food_type}</h4>
                
                <Link 
                  to={`/foods/${id}/edit`}
                  state={{ id: id, food_name: food_name, food_type: food_type, image: image }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteFood(id)}
                >
                  Delete
                </Button>
                {/* <Link to={`/foods/${id}/notes`}>
                  Notes */}
                {/* </Link> */}
              </Col>
              <Col>
                <img src={image} alt='image' width='100%' />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

const ConnectedFoodShow = (props) => (
  <FoodConsumer>
    { value => <FoodShow {...value} {...props} />}
  </FoodConsumer>
)

export default ConnectedFoodShow;