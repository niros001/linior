import React from 'react';
import styled from 'styled-components';
import {Spinner} from 'react-bootstrap';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loader = () => (
    <Container>
      {Array.from(Array(4).keys()).map((key) => (
          <Spinner key={key} animation="grow" variant="light" style={{margin: 5}} />
      ))}
    </Container>
);

export default Loader;
