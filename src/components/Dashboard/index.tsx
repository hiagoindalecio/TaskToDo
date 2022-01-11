import { capitalize } from 'lodash';
import { Col, Container, Row } from 'react-bootstrap';

import { taskState } from '../../enums/enum';

export function Dashboard() {

  const states = Object.values(taskState).map(
    (value: string) => capitalize(value));

  return (
    <Container>
      <Row>
        {
          states.map(state => 
            <Col>
              <h5>{state}</h5>
              
            </Col>
          )
        }
      </Row>
    </Container>
  );
}