import React, {Component} from "react";
import styled from "styled-components";

const sampleProps = {
	myId: "my",
	headerName: "県大　太郎",
	data: [{
		id: "",
		text: "abc",
	},{
		id: "my",
		text: "日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語",
	},{
		id: "",
		text: "ghi",
	},{
		id: "my",
		text: "jkl",
	}]
}

export default function(props){
	props = sampleProps;
	return(
		<Container>
			<Header>
				<HeaderName>{props.headerName}</HeaderName>
			</Header>
			<ChatContainer>
				{props.data.map(d =>(
					<>
						{d.id === props.myId && (
							<ChatItemRight>
								<Text>{d.text}</Text>
							</ChatItemRight>
						)}
						{d.id !== props.myId && (
							<ChatItemLeft>
								<Text>{d.text}</Text>
							</ChatItemLeft>
						)}
					</>
				))}
			</ChatContainer>
			<InputContainer>
				<Input />
			</InputContainer>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;
	min-height: 100%;
	margin: auto;

	border-style: solid;
	border-width: 0px 1px;
	border-color: #ccc;
`;

const Header = styled.div`
	border: solid;
	border-width: 0px 0px 1px 0px;
	border-bottom-color: #ccc;
`;

const HeaderName = styled.div`
	font-weight: 1000;
	font-size: 22px;
	height: 40px;
	padding: 15px 10px 5px 20px;
`;

const ChatContainer = styled.div`
	flex: 1;
	overflow-y: scroll;
`;

const ChatItem = styled.div`
	font-size: 15px;
	color: #fff;
	max-width: 60%;
	padding: 10px 20px;
	margin: 10px;
`;

const ChatItemLeft = styled(ChatItem)`
	background-color: #3d5466;
	margin-right: auto;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top-left-radius: 20px;
`;

const ChatItemRight = styled(ChatItem)`
	background-color: #1da1f2;
	margin-left: auto;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	border-top-left-radius: 20px;
`;

const Text = styled.span`
	font-family: "Segoe UI", Meiryo, system-ui;
	font-weight: 400;
	display: inline;
`;

const InputContainer = styled.div`
	border-top: solid 1px #ccc;
`;

const Input = styled.input`
	display: block;
	font-size: 15px;
	width: 90%;
	height: 30px;
	margin: 10px auto;
	padding-left: 10px;
	border: solid 1px #ccc;
	border-radius: 100px;
`;