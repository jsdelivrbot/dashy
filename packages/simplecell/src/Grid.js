import React from 'react';
import { Icon, Grid, Segment, Label, Image } from 'semantic-ui-react';
import pathParagraph from './paragraph.png';
import _ from 'lodash';
import styled from 'styled-components';

const ROWS = 2;
const COLS = 3;

const StyledImage = styled(Image)`
    position: relative;
    top: 13px;
`;

const GridCell = ({row, col}) => (<Grid.Column>
    <Segment padded>
        <Label attached='top left'>{row}.{col}</Label>
        <Label attached='top right'>
            <Icon name='cog' />
        </Label>
        <StyledImage src={pathParagraph} />
    </Segment>
</Grid.Column>
);

const GridRow = ({row, cols}) => (
    <Grid.Row>
        { _.range(cols).map( (i) => (<GridCell key={i} row={row} col={i+1} />) ) }
    </Grid.Row>
);

export const SimpleGrid = ({cols, rows}) => (
    <Grid columns={cols}>
        { _.range(rows).map( (i) => (<GridRow key={i} row={i+1} cols={cols} />) ) }
    </Grid>

);
