import { Col, Row } from 'react-bootstrap';

import { findState, taskState } from '../../enums/enum';

import { Container } from './styles';

import { useTask } from '../../contexts/Task/taskContext';

export function Dashboard() {

  const states = Object.entries(taskState).map(
    (value: [string, taskState]) => value);

  const { tasks } = useTask();

  return (
    <Container>
      <Row>
        {
          states.map(state => 
            <Col className={state[0] + ' coluna'} key={state[0]} md="2" xs="2" lg="2">
              <h5>{state[1]}</h5>
              <hr />
              {
                tasks.filter(task => 
                  task.state === findState(state[0])
                )?.map(task =>
                  <div className='task' key={task.title}>
                    <h6>{task.title}</h6>
                    <span>{task.description}</span>
                  </div>
                )
              }
            </Col>
          )
        }
      </Row>
    </Container>
  );
}