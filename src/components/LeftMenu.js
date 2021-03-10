import React from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";

import {Button} from "./Button";

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
	display: flex;
	flex-direction: column;
	width: 100%;
`;
