import DinnerForm from './DinnerForm';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const DinnerEdit = ({ id, ingredients, recipe, difficulty, cook_time, image, servings }) => {
  const [editing, setEdit] = useState(false);
  
  return (
    <>
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>
      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <DinnerForm
            id={id}
            ingredients={ingredients}
            recipe={recipe}
            difficulty={difficulty}
            cook_time={cook_time}
            image={image}
            servings={servings}
            setEdit={setEdit}
            />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DinnerEdit;