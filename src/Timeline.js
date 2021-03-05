import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ModalWindow from "./modalwindows";
import Post from "./post";
import Database from "./lib/database";
import { getPost, addPost } from "./lib/post";


import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

export default function Welcome(props){
	const [posts, setPosts] = useState([]);
	useEffect(async () =>{
		const data = await getPost(Database.data.userid);
		setPosts(data);
		console.log(body);
		// addPost(Database.data.userid, "テストテスト"); <= postの追加
	}, []);
	return (
			<Screen>
        <Blank></Blank>
        <BlankR></BlankR>
        <PostBack></PostBack>
        <PostIcon></PostIcon>
        <HomeButton><Link to="/Timeline">ホーム</Link></HomeButton>
        <UserButton><Link to="/Usermatch">マッチング</Link></UserButton>
        <Post/>
        <ModalWindow/>
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

const MakeButton = styled.div`
	position: absolute;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	right: 500px;
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

const HomeButton = styled.div`
	position: absolute;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	left: 100px;
	top: 50px;
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

const UserButton = styled.div`
	position: absolute;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	left: 100px;
	top: 150px;
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

const Blank = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #EEEEF4;
  width: 400px;
  height: 1000px;
`;

const BlankR = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #EEEEF4;
  right: 0px;
  width: 400px;
  height: 1000px;
`;

const PostIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  background_color: #000000;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  top: 100px;
  height: 50px;
  left: 500px;
  right: 500px;
`;

const PostText = styled.div`
	color: #000000;
	font-size: 20px;
	font-weight: 700;
	padding: 100px;
`;

const PostBack= styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #FFFFFF;
  right: 400px;
  left: 400px;
  height: 1000px;
`;

const ModalBack= styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: #00FFFF;
  right: 400px;
  left: 400px;
  height: 1000px;
  z-index: 2;
`;
