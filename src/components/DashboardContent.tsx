import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.25);
`;
const Title = styled.div`
  display: flex;
  flex: 0;
  padding: 50px;
  background-color: #fce094;
  font-weight: bold;
`
const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 24px 50px;
`;

function DashboardContent(props: PropsWithChildren<{
  title: string
}>) {
  return (
    <Container>
      <Card>
        <Title>{props.title}</Title>
        <Content>{props.children}</Content>
      </Card>
    </Container>
  );
}

export default DashboardContent;
