import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class Gost extends Component{

    constructor(props){
        super(props);

    }

    render()
    {
        return(
            <div>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ГОСТ</Table.HeaderCell>
        <Table.HeaderCell>Описание</Table.HeaderCell>
        <Table.HeaderCell>Выбор</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>
            <input type = "radio" name = "gost" onClick={this.newState}/>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>            
            <input type = "radio" name = "gost" onClick={this.newState}/>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>            
            <input type = "radio" name = "gost" onClick={this.newState}/>
        </Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='left chevron' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='right chevron' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
            </div>
        );
    }
}
export default Gost;