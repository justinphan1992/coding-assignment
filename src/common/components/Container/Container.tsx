import React from 'react';
import { Col, Row } from 'antd';

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <Row style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <Col xs={{ span: 22, offset: 1 }} xxl={{ span: 16, offset: 4 }}>
        {children}
      </Col>
    </Row>
  );
}

export default Container;
