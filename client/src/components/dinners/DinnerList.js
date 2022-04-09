import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DinnerConsumer } from "../../providers/DinnerProvider";
import { Row, Col, Modal, Button } from 'react-bootstrap';
import DinnerEdit from './DinnerEdit';

const DinnerList = ({ dinners, getAllDinners, deleteDinner }) => {
  const { foodId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllDinners(foodId)
  }, [])

  return (
    <>
      { dinners.map( d => 
        <Row>
          <Col>
            {d.ingredients}
          </Col>
          <Col>
            {d.recipe}
          </Col>
          <Col>
            <p onClick={() => setShow(true)}>WUT</p>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>Close</Modal.Header>
              <Modal.Body>
                <h1>Dinner Show</h1>
                <p>
                  Ingredients: {d.ingredients}
                </p>
                <p>
                  Recipe: {d.recipe}
                </p>
                <p>
                  Difficulty: {d.difficulty}
                </p>
                <p>
                  Cook Time: {d.cook_time}
                </p>
                <p>
                  Servings: {d.servings}
                </p>
                <p>
                  Pictures: {d.image}
                </p>
                <DinnerEdit {...d} />
                <Button onClick={() => {
                  deleteDinner(foodId, d.id)
                  setShow(false)
                }}>
                  Delete
                </Button>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>  
      )}
    </>
  )
}

const ConnectedDinnerList = (props) => (
  <DinnerConsumer>
    { value => <DinnerList {...props} {...value} />}
  </DinnerConsumer>
)

export default ConnectedDinnerList;