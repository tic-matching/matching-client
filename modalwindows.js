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
      modalIsOpen: false,
      title:  '',
      texts:   ''
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
  //値が変更されたとき
  doChange (e) {
      const userValue = e.target.value
      const key = e.target.name
      this.setState({[key]: userValue})
  }
  //送信ボタンが押されたとき
  doSubmit (e) {
      e.preventDefault()
      const j = JSON.stringify(this.state)
      window.alert(j)
      this.closeModal()
  }
  render() {
      //イベントをメソッドにバインド
      const doSubmit = (e) => this.doSubmit(e)
      const doChange = (e) => this.doChange(e)
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

          <button onClick={this.closeModal}>×</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>投稿作成</h2>
          <form onSubmit={doSubmit}>
              <div><label>
                  タイトル: <br />
                  <input name='title'
                      type='text'
                      value={this.state.name}
                      onChange={doChange} />
              </label></div>
              <div><label>
                  本文: <br />
                  <input name='texts'
                      type='text'
                      value={this.state.age}
                      onChange={doChange} />
              </label></div>
              <input type='submit' value='送信' />
          </form>



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
