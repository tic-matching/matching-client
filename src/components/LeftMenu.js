import React from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";

export default function LeftMenu(props){

	const history = useHistory();
	const handleClick = (link) => {
		history.push(link);
	}

	return (
		<Container>
			{props.data.map(d => (
				<Button onClick={() => handleClick(d.link)}>{d.text}</Button>
			))}
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const Button = styled.div`
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
