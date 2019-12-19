import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import SideNav from './SideNav';

const ContentWrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const SidebarWrapper = styled.section`
  flex: 0;
  max-width: 400px;
  margin: 20px;
`;
const ChildrenWrapper = styled.section`
  flex: 1;
  margin: 20px;
`;

function DashboardLayout(props: PropsWithChildren<{}>) {
  return (
    <React.Fragment>
      <Banner />
      <ContentWrapper>
        <SidebarWrapper>
          <SideNav />
        </SidebarWrapper>
        <ChildrenWrapper>
          {props.children}
        </ChildrenWrapper>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default DashboardLayout;