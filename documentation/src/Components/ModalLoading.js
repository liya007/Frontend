import React from 'react';
import Modal from 'react-modal';
import { Grid, Button, Label, Input} from 'semantic-ui-react'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
export default class ModalLoading extends React.Component{

    constructor(){
        super();

        this.state={
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }

      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#222222';
      }

      closeModal() {
        this.setState({modalIsOpen: false});
      }
    

    render(){
        return(
        <div>
            <Button onClick={this.openModal}>Перейти к добавлению</Button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
        
                <h2 ref={subtitle => this.subtitle = subtitle}>Добавление документа</h2>
                <div>
                    <Grid columns = "two" devided>
                        <Grid.Row>
                            <Grid.Column className="positionOfLeftButton">
                                <label>Название</label>
                            </Grid.Column>
                            <Grid.Column>
                            <Input />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column className="positionOfLeftButton">
                            <label>Загрузить документ</label>
                            </Grid.Column>
                            <Grid.Column>
                                <input type = "file" name ="file" size = "50"/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column className="positionOfLeftButton"> <Button onClick = {this.closeModal}>Загрузить</Button></Grid.Column>
                            <Grid.Column> <Button onClick = {this.closeModal}>Отмена</Button></Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                
                
            </Modal>
        </div>
        );
    }
}

