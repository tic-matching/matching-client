import React, {Component} from 'react';
import styled from "styled-components";

import Database from "./lib/database";
import {resisterUser} from "./lib/server";
import Header from "./components/header";

//複数テキストの入力コンポーネント
export class Registration extends React.Component {
    constructor (props) {
        super(props)
        //状態を初期化
        this.state = {
            mail: '',
            name:  '',
            age:   '',
            gender: '',
            faculty: '',
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
        resisterUser({
            mail: this.state.mail,
            name:  this.state.name,
            age:   this.state.age,
            gender: this.state.gender,
            faculty: this.state.faculty,
            password: this.state.password
        }).then((res) => res.text()
        ).then(text => {
            Database.setData({userid: text})
            this.props.history.push("Timeline");
        });
    }
    //画面の描画
    render () {
        //イベントをメソッドにバインド
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)
        return (
            <div>
                <Header login={true}/>    
                <Container>
                    <Title>アカウントの作成</Title>
                    <form onSubmit={doSubmit}>
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
                                <ColumnName>メールアドレス</ColumnName>
                                <StyledInput
                                    name='mail'
                                    type='text'
                                    value={this.state.mail}
                                    onChange={doChange} />
                            </label>
                        </Group>
                        <Group>
                            <label>
                                <ColumnName>年齢</ColumnName>
                                <StyledInput
                                    name='age'
                                    type='text'
                                    value={this.state.age}
                                    onChange={doChange} />
                            </label>
                        </Group>
                        <Group>
                            <label>
                                <ColumnName>性別</ColumnName>
                                <StyledInput 
                                    name='gender'
                                    type='text'
                                    value={this.state.gender}
                                    onChange={doChange}
                                />
                            </label>
                        </Group>
                        <Group>
                            <label>
                                <ColumnName>学部</ColumnName>
                                <StyledInput 
                                    name='faculty'
                                    type='text'
                                    value={this.state.faculty}
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
                    </form>
                </Container>
            </div>
        )
    }
}

export default Registration

const Container = styled.div`
	font-family: ProximaNova, sans-serif;
    display: block;
    width: 600px;
    margin: 50px auto 20px auto;
`;

const StyledForm = styled.form`
    display: block;
    width: 600px;
    margin: 0 auto;
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
    padding: 10px;
    border: solid #dadce0 1px;
    border-radius: 4px;
`;

const StyledButton = styled.input`
    color: #FFFFFF;
    background-color: #1074e7;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #0366d6;
    }
`;
