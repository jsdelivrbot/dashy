import React from 'react';
import {SimpleGrid} from '@dashy/simplecell';
import { Menu, Header, Divider, Icon} from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #555577;
    padding: 60px 20px 20px 20px;
`;

export default ({children}) => (
<div>
    <Menu fixed='top' inverted>
        <Menu.Item as='a' to='/'>
            Home
        </Menu.Item>
    </Menu>
    <Container>
        <Header as='h2' icon inverted textAlign='center'>
            <Icon name='grid layout' />
            Dashy
            <Header.Subheader>
                A convinient dashboard for your life.
            </Header.Subheader>
        </Header>
        <Divider />
        <SimpleGrid rows={4} cols={4} />
        {children}
    </Container>
</div>);