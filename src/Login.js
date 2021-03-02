import React, {Component} from 'react';
import styled from "styled-components";

import {login} from "./lib/server";
import Header from "./components/header";

//複数テキストの入力コンポーネント
export class Login extends React.Component {
    constructor (props) {
        super(props)
        //状態を初期化
        this.state = {
            name:  '',
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
        login({
            name:  this.state.name,
            password: this.state.password
        }).then((res) => res.json()
        ).then(json => console.log(json));
    }
    //画面の描画
    render () {
        //イベントをメソッドにバインド
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)
        return (
            <div>
                <Header signin={true}/>    
                <Container>
                    <Title>Login</Title>
                    <StyledForm onSubmit={doSubmit}>
                        <Group>
                            <label>
                                <ColumnName>名前</ColumnName>
                                <StyledInput 
                                    name='name'
                                    type='text'
                                    value={this.state.name}
                                    onChange={doChange}
                                />
                            </label>
                        </Group>
                        <Group>
                            <label>
                                <ColumnName>パスワード</ColumnName>
                                <StyledInput 
                                    name='password'
                                    type='text'
                                    value={this.state.password}
                                    onChange={doChange}
                                />
                            </label>
                        </Group>
                        <StyledButton type='submit' value='送信' />
                    </StyledForm>
                </Container>
            </div>
        )
    }
}

export default Login;

const Container = styled.div`
	font-family: ProximaNova, sans-serif;
    display: block;
    width: 350px;
    margin: 50px auto 20px auto;
`;

const StyledForm = styled.form`
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 30px;
    margin: 0 auto;

    border: solid #e5e5e5 1px;
    border-radius: 4px;
`;

const Title = styled.h1`
    text-align: center;
    color: #333;
    margin: 0 0 50px 0;
`;

const Group = styled.div`
    width: 100%;
    margin: 10px 0px 20px 0px;
`;

const ColumnName = styled.div`
    font-size: 14px;
`;

const StyledInput = styled.input`
    background-color: #fafbfc;
    box-sizing: border-box;
    width: 100%;
    padding: 7px;
    border: solid #dadce0 1px;
    border-radius: 4px;
`;

const StyledButton = styled.input`
    color: white;
    background-color: #2ea44f;
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #2c974b;
    }
`;
