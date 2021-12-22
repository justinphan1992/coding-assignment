import React from 'react';
import './App.css';
import { Container } from 'src/common/components';
import { ListUser } from 'src/features/user';

function App() {
  return (
    <Container>
      <ListUser />
    </Container>
  );
}

export default App;
