import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Grid, Segment, Label, Image } from 'semantic-ui-react';
import _ from 'lodash';
import styled from 'styled-components';
import pathParagraph from './paragraph.png';

const ROWS = 2;
const COLS = 3;

const StyledImage = styled(Image)`
    position: relative;
    top: 13px;
`;

const GridCell = ({ row, col }) => (
    <Grid.Column>
        <Segment padded>
            <Label attached="top left">
                {row}.{col}
            </Label>
            <Label attached="top right">
                <Icon name="cog" />
            </Label>
            <StyledImage src={pathParagraph} />
        </Segment>
    </Grid.Column>
);
GridCell.propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
};

const GridRow = ({ row, cols }) => (
    <Grid.Row>
        {_.range(cols).map(i => (
            <GridCell key={i} row={row} col={i + 1} />
        ))}
    </Grid.Row>
);
GridRow.propTypes = {
    row: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
};

const SimpleGrid = ({ cols = COLS, rows = ROWS }) => (
    <Grid columns={cols}>
        {_.range(rows).map(i => (
            <GridRow key={i} row={i + 1} cols={cols} />
        ))}
    </Grid>
);
SimpleGrid.propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
};
SimpleGrid.defaultProps = {
    cols: COLS,
    rows: ROWS,
};

export default SimpleGrid;
