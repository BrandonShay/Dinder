import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { DinnerConsumer } from '../../providers/DinnerProvider';
import { useParams } from 'react-router-dom';

const DinnerForm = ({ setAdd, addDinner, id, ingredients, recipe, difficulty, cook_time, servings, image, setEdit, updateDinner }) => {
  const [dinner, setDinner] = useState({ ingredients: '', recipe: '', difficulty: '', cook_time: '', servings: '', image: '' })

  const { foodId } = useParams()

  useEffect( () => {
    if (id) {
      setDinner({ ingredients, recipe, difficulty, cook_time, servings, image })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateDinner(foodId, id, dinner)
      setEdit(false)
    } else {
      addDinner(foodId, dinner)
      setAdd(false)
    }
    setDinner({ ingredients: '', recipe: '', difficulty: '', cook_time: '', servings: '', image: '' })
  }

  return(
    <>
      <h1>{id ? 'Update' : 'Create'} Dinner</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control 
            type="textarea"
            rows={3}
            name='ingredients'
            value={dinner.ingredients}
            onChange={(e) => setDinner({...dinner, ingredients: e.target.value})}
            required
            placeholder='Ingredients...'
          >
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Recipe</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name='recipe'
            value={dinner.recipe}
            onChange={(e) => setDinner({...dinner, recipe: e.target.value})}
            required
            placeholder='Recipe...'
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control 
            type="text"
            name='difficulty'
            value={dinner.difficulty}
            onChange={(e) => setDinner({...dinner, difficulty: e.target.value})}
            required
            placeholder="Difficulty"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cook Time</Form.Label>
          <Form.Control 
            type="text"
            name='cook_time'
            value={dinner.cook_time}
            onChange={(e) => setDinner({...dinner, cook_time: e.target.value})}
            placeholder="Cook Time"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Servings</Form.Label>
          <Form.Control 
            type="text"
            name='servings'
            value={dinner.servings}
            onChange={(e) => setDinner({...dinner, servings: e.target.value})}
            placeholder="Servings"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type="text"
            name='image'
            value={dinner.image}
            onChange={(e) => setDinner({...dinner, image: e.target.value})}
            placeholder="Image"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedDinnerForm = (props) => (
  <DinnerConsumer>
    { value => <DinnerForm {...props} {...value} />}
  </DinnerConsumer>
)

export default ConnectedDinnerForm;