import React, { Component } from 'react';
import {Table, Grid} from 'semantic-ui-react';
import GridRow from 'semantic-ui-react/dist/commonjs/collections/Grid/GridRow';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';


export default class AllDocuments extends React.Component{
    render(){
        return(
            <div>
            <Grid columns = "three" devided>
                <GridRow>
                    <GridColumn>
                    <Table>
                    <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Титульные листы</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>
                    <p>doc1</p>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                    <p>doc1</p>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                    <p>doc1</p>
                    </Table.Cell>
                </Table.Row>
             
                </Table.Body>
                </Table>
                
                    </GridColumn>

                    <GridColumn>
                    <Table>
                    <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Отчеты</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>
                    <p>doc1</p>
                    </Table.Cell>
                </Table.Row>
             
                </Table.Body>
                </Table>               
                    </GridColumn>

                    <GridColumn>
                    <Table >
                    <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>ГОСТы</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>
                    <p>doc1</p>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                    <p>doc2</p>
                    </Table.Cell>
                </Table.Row>

             
                </Table.Body>
                </Table>                
                    </GridColumn>
                </GridRow>
            </Grid>
           
        </div>
        );
    }
}
