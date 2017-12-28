import React from 'react';
import Modal from 'react-modal';

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
            <button onClick={this.openModal}>Перейти к добавлению</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
        
                <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                <div>
                   Содержание окна для загрузки документа
                </div>
                <button onClick={this.closeModal}>Отмена</button>
                <button onClick={this.closeModal}>Загрузить</button>
            </Modal>
        </div>
        );
    }
}