import { Form, Button, Row, Col } from 'react-bootstrap';
import { FoodConsumer } from '../../providers/FoodProvider';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const FoodForm = ({ addFood, updateFood, setAdd }) => {
  const [food, setFood] = useState({ food_name: '', food_type: '',  image: '' })

  const { foodId } = useParams()
  const location = useLocation()
  

  useEffect( () => {
    if (foodId) {
      const { food_name, food_type,  image } = location.state
      setFood({ food_name, food_type, image })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (foodId) {
      updateFood(foodId, food)
    } else {
      addFood(food)
      
    }
    setFood({ food_name: '', food_type: '', image: '' })
  }

  return (
    <>
      <h1>{ foodId ? 'Update' : 'Create' } Food</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                name='name'
                value={food.food_name}
                onChange={(e) => setFood({...food, food_name: e.target.value })}
                type="text" 
                placeholder="Name" 
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Type of Food</Form.Label>
              <Form.Control 
                name='food_type'
                value={food.food_type}
                onChange={(e) => setFood({...food, food_type: e.target.value })}
                type="text" 
                placeholder="Type of Food" 
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Food Image</Form.Label>
              <Form.Control 
                name='image'
                value={food.image}
                onChange={(e) => setFood({...food, image: e.target.value })}
                type="text" 
                placeholder="image" 
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedFoodForm = (props) => (
  <FoodConsumer>
    { value => <FoodForm {...value} {...props} /> }
  </FoodConsumer>
)

export default ConnectedFoodForm;