import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

function Loading() {
  return (
    <LoadingContainer aria-label="loading-indicator">
      <Spin size="large" />
    </LoadingContainer>
  );
}

export default Loading;
