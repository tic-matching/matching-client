import React, {Component} from 'react';
import styled from "styled-components";

//複数テキストの入力コンポーネント
export class Registration extends React.Component {
    constructor (props) {
        super(props)
        //状態を初期化
        this.state = {
            name:  '',
            age:   '',
            gender: '',
            department: '',
            password: ''
        }
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
    }
    //画面の描画
    render () {
        //イベントをメソッドにバインド
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)
        return (
            <Container>
                <form onSubmit={doSubmit}>
                    <div><label>
                        名前: <br />
                        <input name='name'
                            type='text'
                            value={this.state.name}
                            onChange={doChange} />
                    </label></div>
                    <div><label>
                        年齢: <br />
                        <input name='age'
                            type='text'
                            value={this.state.age}
                            onChange={doChange} />
                    </label></div>
                    <div><label>
                        性別: <br />
                        <input name='gender'
                            type='text'
                            value={this.state.gender}
                            onChange={doChange} />
                    </label></div>
                    <div><label>
                        学部: <br />
                        <input name='department'
                            type='text'
                            value={this.state.department}
                            onChange={doChange} />
                    </label></div>
                    <div><label>
                        パスワード: <br />
                        <input name='password'
                            type='text'
                            value={this.state.password}
                            onChange={doChange} />
                    </label></div>
                    <input type='submit' value='送信' />
                </form>
            </Container>
        )
    }
}

export default Registration

const Container = styled.div`
	font-family: ProximaNova, sans-serif;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Button = styled.div`
	position: absolute;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	right: 50px;
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
