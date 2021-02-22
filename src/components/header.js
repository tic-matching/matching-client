import React from "react";
import {
	Link
}from "react-router-dom";
import styled from "styled-components";

export default function Header(props){
	const {
		login = false,
		signin = false,
		logout = false
	} = props;
	return (
		<Container>
			{login && <Link to="Login"><RightButton>Login</RightButton></Link>}
			{signin && <Link to="Registration"><RightButton>Sign in</RightButton></Link>}
			{logout && <Link to=""><RightButton>Log out</RightButton></Link>}
		</Container>
	)
}

const Container = styled.div`
    background-color: #000000;
    width: 100%;
    height: 50px;
`;

const RightButton = styled.div`
    float: right;
    text-decoration: underline;
		color: white;
		width: 60px;
		margin: 15px;
		cursor: pointer;
		&:hover{
			color: #83ccd2;
		}
`;
