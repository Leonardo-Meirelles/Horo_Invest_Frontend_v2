import { RouteComponentProps } from "@reach/router"
import { useState } from "react"
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import styled from "styled-components"
import { AddAssetToDataBase } from "../../components/private/admin/AddAssetToDataBase"
import { UsersTableList } from "../../components/private/admin/usersTableList"
import classnames from 'classnames'
import { ModalChangeUserConfig } from "../../components/private/admin/modalChangeUserConfig"

export function Admin(props: RouteComponentProps) {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    

    return (
        <Container>
            <Nav tabs>
                <NavItem>
                    <SNavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Show Users List
                    </SNavLink>
                </NavItem>
                <NavItem>
                    <SNavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Add Asset to DataBase
                    </SNavLink>
                </NavItem>
            </Nav>

            <STabContent activeTab={activeTab}>

                <TabPane tabId="1">
                    <UsersTableList />
                </TabPane>

                <TabPane tabId="2">
                    <AddAssetToDataBase />
                </TabPane>
            </STabContent>
            <ModalChangeUserConfig />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

const STabContent = styled(TabContent)`
    width: 100vw;
`

const SNavLink = styled(NavLink)`
    cursor: pointer;
    color: var(--black);
    &:hover {
    color: var(--yellow)
  }
`