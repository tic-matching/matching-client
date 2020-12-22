import React, {useState, useEffect} from "react";
import styled from "styled-components";

export default function Modal({
	children,
	visible,
	width,
	height,
	backgroundColor,
	style = {},
}){
	const [visibleModal, setVisibleModal] = useState(visible | false);

	useEffect(() =>{
		setVisibleModal(visible)
	}, [visible])

	if(!visibleModal)
		return null

	return (
		<Background backgroundColor={backgroundColor} style={style}>
			<Container width={width} height={height}>
				{children}
			</Container>
		</Background>
	)
}

const Background = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: ${({backgroundColor}) => backgroundColor || `#000000AA`};
`;

const Container = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: ${({width}) => width | 400}px;
	height: ${({height}) => height | 250}px;
	margin: auto;
	background-color: #FFFFFF;

`;