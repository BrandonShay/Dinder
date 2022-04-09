import { Container, Row, Col } from 'react-bootstrap';
import FoodShow from './FoodShow';
import { FoodConsumer } from '../../providers/FoodProvider';
import { useEffect } from 'react';

const FoodList = ({ foods, getAllFoods }) => {
  
  useEffect( () => {
    getAllFoods()
  }, [])

  return ( 
    <>
      <h1>My Foods</h1>
      <Container>
        <Row md={4}>
          { foods.map( f => 
            <Col>
              <FoodShow 
                key={f.id}
                {...f}
              />  
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

const ConnectedFoodList = (props) => (
  <FoodConsumer>
    { value => <FoodList {...value} {...props} /> }
  </FoodConsumer>
)

export default ConnectedFoodList;