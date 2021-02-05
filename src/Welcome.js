import React from "react";
import styled from "styled-components";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'

export default function Welcome(props){
	return (
			<Screen>
				<Header>
				</Header>
				<CatchPhrase>
					<Title>~Hello, world~</Title>
					ここにキャッチフレーズを入力
				</CatchPhrase>
				<Button><Link to="/Registration">今すぐ始める</Link></Button>
			</Screen>
	)
}

const Screen = styled.div`
	font-family: ProximaNova, sans-serif;
	position: relative;
	background-color: blue;
	display: block;
	width: 100%;
	height: 100%;
	background: linear-gradient(90deg, rgba(0, 0, 0, 1) 40%, rgba(0, 255, 0, 0.4)) 50%,url(https://www.iwate-pu.ac.jp/images/iwate-pu.png) no-repeat center right;
	background-size: contain;
`;

const background = styled.div``;

const Header = styled.div`
	background-color: #000000;
	width: 100%;
	height: 50px;
`;

const Title = styled.div`
	color: #FFFFFF;
	font-size: 40px;
	font-weight: 700;
	border-bottom-color: #FFFFFF;
	border-bottom-width: 1px;
`;

const CatchPhrase = styled.div`
	color: #FFFFFF;
	font-size: 20px;
	font-weight: 700;
	padding: 100px;
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