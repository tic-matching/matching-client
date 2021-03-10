import React from "react";
import styled from "styled-components";

export const Button = styled.div`
	background-color: #83ccd2;
	text-align: center;
	font-weight: 700;
	line-height: 40px;
	width: 100%;
	height: 40px;
	margin: 10px 0;
	border-radius: 40px;
	cursor: pointer;
	&:hover{
		color: #fff;
		background-color: #70c5cc;
	}
`;

export const GoodButton = styled(Button)`
	background-color: #ffb6c1;
	&:hover{
		background-color: #dc143c;
		color: #FFFFFF;
    transition: 200ms ease;
	}
`;

export const BadButton = styled(Button)`
	background-color: #87cefa;
	&:hover{
		background-color: #0000cd;
		color: #FFFFFF;
    transition: 200ms ease;
	}
`;
