import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import SideNav from './SideNav'

const ContentWrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;
`
const SidebarWrapper = styled.section`
  display: flex;
  flex: 0;
  max-width: 400px;
  padding-top: 64px;
`
const ChildrenWrapper = styled.section`
  display: flex;
  flex: 1;
  padding: 32px;
  padding-bottom: 0;
`

function DashboardLayout(props: PropsWithChildren<{}>) {
  return (
    <React.Fragment>
      <Banner />
      <ContentWrapper>
        <SidebarWrapper>
          <SideNav />
        </SidebarWrapper>
        <ChildrenWrapper>{props.children}</ChildrenWrapper>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default DashboardLayout
