import React from "react";
import styled from "styled-components";

export default function Welcome(props){
	return (
		<Screen>
			<Header>
				<Title>Hello, world</Title>
			</Header>
			<CatchPhrase>すれ違う人と出会おう</CatchPhrase>
			<Button>今すぐ始める =></Button>
		</Screen>
	)
}

const Screen = styled.div`
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
	font-size: 20px;
	font-weight: 700;
	padding: 10px 0 10px 30px;
`;

const CatchPhrase = styled.div`
	color: #FFFFFF;
	font-size: 40px;
	font-weight: 700;
	padding: 100px;
`;

const Button = styled.div`
	position: absolute;
	box-sizing: border-box;
	right: 50px;
	bottom: 50px;
	background-color: #83ccd2;
	width: 200px;
	height: 50px;
	padding: 15px 30px;
	border-radius: 100px;
	cursor: pointer;
`;