import React from 'react';
import Modal from 'react-modal';
import styled from "styled-components";
const customStyles = {
  content : {
    position: 'absolute',
      top: '100px',
      left: '450px',
      right: '450px',
      bottom: '400px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '50px',
      outline: 'none',
      padding: '20px'

 }
};

Modal.setAppElement('#root') //任意のアプリを設定する　create-react-appなら#root
class ModalWindow extends React.Component {
  constructor() {
    super();
    this.state = {
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
    this.subtitle.style.color = '#00DDC0';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <MakeButton onClick={this.openModal}>投稿</MakeButton>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>投稿作成</h2>
          <div>入力欄予定地1</div>


          
            <button onClick={this.closeModal}>×</button>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow;

const MakeButton = styled.div`
	position: absolute;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	right: 500px;
	bottom: 50px;
	background-color: #83ccd2;
	width: 200px;
	height: 50px;
	padding: 15px 30px;
	border-radius: 100px;
	cursor: pointer;
	&:hover{
		background-color: #005ead;
		color: #FFFFFF;
		transition: 200ms ease;
	}
`;
