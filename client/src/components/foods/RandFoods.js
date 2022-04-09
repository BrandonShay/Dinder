import { useEffect } from 'react';
import { CatConsumer } from '../../providers/CatProvider';
import { Card, Button } from 'react-bootstrap';

const RandFoods = ({ randFood, randomFoods }) => {

  useEffect( () => {
    randomFoods()
  }, [])

  return (
    <>
      <h1>Random Foods</h1>
      { randCat ?
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={randFood.image} />
          <Card.Body>
            <Card.Title>{randFood.food_name}</Card.Title>
            <Button variant="primary" onClick={() => randomFoods()}> next </Button>
          </Card.Body>
        </Card>
      : 'No Cat'}
    </>
  )
}

const ConnectedRandFoods = (props) => (
  <FoodConsumer>
    { value => <RandFoods {...value} {...props} />}
  </FoodConsumer>
)

export default ConnectedRandFoods;